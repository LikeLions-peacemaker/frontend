// Chat.jsx
import { useState, useRef, useEffect } from "react";
import sendButton from "../assets/sendButton.svg";
import "./Chat.css";

const Chat = ({ sessionId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // 🔽 세션이 바뀔 때마다 서버에서 해당 대화 불러오기
  useEffect(() => {
    const fetchMessages = async () => {
      if (!sessionId) return;

      try {
        const res = await fetch("http://localhost:8000/chat/history/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify({ session_id: sessionId }),
        });

        if (!res.ok) {
          console.error("서버 응답 실패:", res.status);
          return;
        }

        const data = await res.json();
        if (Array.isArray(data.history)) {
          const formatted = data.history.map((msg) => ({
            text: msg.message,
            sender: msg.sender === "user" ? "user" : "ai",
          }));
          setMessages(formatted);
        } else {
          console.warn("history 형식이 잘못됨:", data);
        }
      } catch (err) {
        console.error("메시지 불러오기 실패:", err);
      }
    };

    fetchMessages();
  }, [sessionId]);

  // 메시지 전송
  const sendMessage = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/chat/response/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({
          user_input: trimmed,
          session_id: sessionId || Date.now().toString(), // fallback
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { text: trimmed, sender: "user" },
        { text: data.bot_message || data.answer || "응답 없음", sender: "ai" },
      ]);

      setInput("");
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { text: "서버와 통신에 실패했습니다.", sender: "ai" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${msg.sender === "user" ? "right" : "left"}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-input-row" onSubmit={sendMessage}>
        <input
          className="chat-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={loading ? "응답을 기다리는 중..." : "메시지를 입력하세요"}
          disabled={loading}
          autoFocus
        />
        <button
          className="chat-send-button"
          type="submit"
          disabled={loading || !input.trim()}
        >
          <img src={sendButton} alt="전송" />
        </button>
      </form>
    </div>
  );
};

export default Chat;

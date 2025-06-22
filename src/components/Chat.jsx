// Chat.jsx
import { useState, useRef, useEffect } from "react";
import sendButton from "../assets/sendButton.svg";
import "./Chat.css";

const Chat = () => {
  // 메시지 목록
  const [messages, setMessages] = useState([]);
  // 입력창 값
  const [input, setInput] = useState("");
  // 서버 응답 대기 상태
  const [loading, setLoading] = useState(false);
  // 스크롤 하단 이동용 ref
  const messagesEndRef = useRef(null);

  // 채팅 메시지 불러오기 (서버에서 전체 메시지 불러오는 방식이 chat.html에 있다면 추가)
  // useEffect(() => {
  //   fetch("http://localhost:8000/chat/messages/")
  //     .then(res => res.json())
  //     .then(data => setMessages(data.messages));
  // }, []);

  // 메시지 전송 함수
  const sendMessage = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("user_input", trimmed);

    const currentSessionId = Date.now().toString();
    formData.append("session_id", currentSessionId);

    try {
    const res = await fetch("http://localhost:8000/chat/response/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_input: trimmed,
        session_id: currentSessionId
      })
    });

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          { text: "서버 오류가 발생했습니다.", sender: "ai" },
        ]);
        setLoading(false);
        return;
      }

      // chat.html에서 서버가 반환하는 HTML을 그대로 innerHTML로 넣는 구조라면,
      // React에서는 JSON으로 받는 것이 일반적이지만, 필요시 text()로 받아서 파싱
      const data = await res.json();

      // chat.html의 응답 구조에 맞게 파싱
      // 예: { user_message: "...", bot_message: "..." }
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

  // 새 메시지 도착 시 스크롤 하단 이동
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="chat-container">
      {/*메시지 목록*/}
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${msg.sender === "user" ? "right" : "left"}`}          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* 입력창 및 전송 버튼 */}
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

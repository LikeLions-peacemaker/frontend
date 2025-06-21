import { useState } from "react";
import "./Chat.css";
import "./ChatInput.jsx";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "계약서에 사장님 서명이 없어도 유효한가요?", sender: "user" },
    { text: "중고나라에서 결제 후 판매자와 연락이 두절됐다면, 이는 사기죄에 해당할 수 있으며 법적 처벌이 가능합니다.", sender: "ai" },
  ]);
  const [input, setInput] = useState("");

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-bubble ${msg.sender === "user" ? "right" : "left"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Chat;

import { useState } from "react";
import './ChatInput.css';

const ChatInput = () => {
    const [messages, setMessages] = useState([
    { text: "계약서에 사장님 서명이 없어도 유효한가요?", sender: "user" },
    { text: "중고나라에서 결제 후 판매자와 연락이 두절됐다면, 이는 사기죄에 해당할 수 있으며 법적 처벌이 가능합니다.", sender: "ai" },
  ]);
  const [input, setInput] = useState("");
    
    const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    // 백엔드 연동: 메시지 전송 후 AI 응답 받아서 setMessages([...])
    };

    return (
        <div className="chat-input-row">
            <input
                className="chat-input"
                placeholder="무엇이든 물어보세요"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
        <img src="../assets/Vector.svg" className="chat-send-btn" onClick={sendMessage} />
      </div>
      );
}

export default ChatInput;
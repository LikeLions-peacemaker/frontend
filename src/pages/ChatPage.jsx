import { useNavigate, useParams } from "react-router-dom";
import ChatHeader from "../components/ChatHeader.jsx";
import Chat from "../components/Chat.jsx";

function ChatPage() {
  const { sessionId } = useParams(); // URL에서 sessionId 추출
  const navigate = useNavigate();

  const handleConversationSelect = (newSessionId) => {
    // 새 대화 or 기존 대화 선택 시 URL 갱신
    navigate(`/chat/${newSessionId}`);
  };

  return (
    <div className="chat-page">
      <ChatHeader onConversationSelect={handleConversationSelect} />
      <Chat sessionId={sessionId || null} />
    </div>
  );
}

export default ChatPage;

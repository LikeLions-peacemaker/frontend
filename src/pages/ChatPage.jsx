import { useState } from 'react';
import ChatHeader from '../components/ChatHeader.jsx';
import Chat from '../components/Chat.jsx';

function ChatPage() {
  const [selectedSessionId, setSelectedSessionId] = useState(null);

  const handleConversationSelect = (sessionId) => {
    console.log('선택된 세션 ID:', sessionId);
    setSelectedSessionId(sessionId);
  };

  return (
    <div className="chat-page">
      <ChatHeader onConversationSelect={handleConversationSelect} />
      <Chat sessionId={selectedSessionId} />
    </div>
  );
}

export default ChatPage;
import logo from '../assets/logo.svg';
import back from '../assets/back.svg';
import newChat from '../assets/newChat.svg';
import logs from '../assets/logs.svg';

function ChatHeader() {
  return (
    <header className="chat-header">
        <img src={back} className="back" />
        <img src={logs} className="logs" />
        <img src={logo} className="logo" />
        <img src={newChat} className="newChat" />
    </header>
  );
}

export default ChatHeader;
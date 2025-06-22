import React from 'react';
import './MessageListPage.css';
import { ReactComponent as LawIcon } from '../assets/law_icon.svg';
import { ReactComponent as CheckIcon } from '../assets/check-icon.svg';
import { useNavigate } from 'react-router-dom';

function MessageListPage() {
  const navigate = useNavigate();

  const messages = [
    {
      title: '전세계약',
      content: '전세 계약은 임대차 보호법에 따라 새로운 집주인에게도 효력이 유지됩니다...',
      date: '6.5 목 오후 2:00'
    },
    {
      title: '전세계약',
      content: '전세 계약은 임대차 보호법에 따라 새로운 집주인에게도 효력이 유지됩니다...',
      date: '6.5 목 오후 2:00'
    },
    {
      title: '전세계약',
      content: '전세 계약은 임대차 보호법에 따라 새로운 집주인에게도 효력이 유지됩니다...',
      date: '6.5 목 오후 2:00'
    }
  ];

  return (
    <div className="message-page">
      <header className="message-header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <span className="title">메시지함</span>
      </header>

      <div className="message-list">
        {messages.map((msg, index) => (
          <div className="message-card" key={index}>
            <div className="icon"><LawIcon /></div>
            <div className="message-content">
              <p className="bold">{msg.title}</p>
              <p className="gray">{msg.content}</p>
              <span className="date">{msg.date}</span>
            </div>
            <div className="check"><CheckIcon /></div>
          </div>
        ))}
      </div>

      <footer className="message-footer">
        <button className="send-btn">보내기</button>
      </footer>
    </div>
  );
}

export default MessageListPage;

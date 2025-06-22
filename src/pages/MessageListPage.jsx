import React from 'react';
import './MessageListPage.css';
import { ReactComponent as LawIcon } from '../assets/law_icon.svg';
import { ReactComponent as CheckIcon } from '../assets/check-icon.svg';

function MessageListPage() {
  const messages = Array(8).fill({
    title: '전세계약',
    desc: '전세 계약은 임대차 보호법에 따라 새로운 집주인에게도 효력이 유지됩니다...',
    time: '6.5 목 오후 2:00',
  });

  return (
    <div className="message-page">
      <header className="message-header">메시지함</header>
      <div className="message-list">
        {messages.map((msg, idx) => (
          <div className="message-card" key={idx}>
            <div className="icon"><LawIcon /></div>
            <div className="message-content">
              <p className="bold">{msg.title}</p>
              <p className="gray">{msg.desc}</p>
              <span className="date">{msg.time}</span>
            </div>
            <div className="check"><CheckIcon /></div>
          </div>
        ))}
      </div>
      <button className="send-btn">보내기</button>
    </div>
  );
}

export default MessageListPage;

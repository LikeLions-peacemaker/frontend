import React from 'react';
import './RecommendedQuestions.css';

function RecommendedQuestions() {
  const questions = [
    '온라인 쇼핑몰에서 환불을 안해줘요',
    '계약서에 사장님 서명이 없어도 유효한가요?',
    '계약서에 날짜가 빠졌어요',
  ];

  return (
    <section className="recommended-section">
      <h2 className="section-title">추천질문</h2>
      <div className="question-list">
        {questions.map((q, index) => (
          <button key={index} className="question-item">{q}</button>
        ))}
      </div>
      <input className="question-input" placeholder="로우헬퍼에게 무엇이든 물어보세요!" />
    </section>
  );
}

export default RecommendedQuestions;

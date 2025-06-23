import sendButton from "../assets/sendButton.svg";
import './RecommendedQuestions.css';

function RecommendedQuestions() {
  const questions = [
    '온라인 쇼핑몰에서 환불을 안해줘요',
    '계약서에 사장님 서명이 없어도 유효한가요?',
    '계약서에 날짜가 빠졌어요',
  ];

  return (
    <section className="recommended-section">
      <h2 className="section-title body-s">추천질문</h2>
      <div className="question-list caption1">
        {questions.map((q, index) => (
          <button key={index} className="question-item">{q}</button>
        ))}
      </div>
      <input className="question-input" placeholder="로우헬퍼에게 무엇이든 물어보세요!" />
      <button
        className="chat-send-button"
        type="submit"
      >
        <img src={sendButton} alt="전송" />
      </button>
    </section>
  );
}

export default RecommendedQuestions;

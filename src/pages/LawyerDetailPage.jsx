import React from 'react';
import './LawyerDetailPage.css';
import sampleProfile from '../assets/profile.png'; // 변호사 이미지
import { useNavigate } from 'react-router-dom';

function LawyerDetailPage() {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅 사용

  const handleReservationClick = () => {
    navigate('/lawyer/reservation'); // 예약 페이지로 이동
  };

  return (
    <div className="lawyer-detail-page">
      <div className="lawyer-header">
        <img src={sampleProfile} alt="홍길동 변호사" className="lawyer-photo" />
        <div className="lawyer-name-title">홍길동 변호사</div>
        <div className="lawfirm-name">바른길 법무법인</div>
      </div>

      <div className="lawyer-summary">
        <div className="lawyer-quote">
          당신의 입장에서 생각하고,<br />전문가의 시선으로 해결합니다.
        </div>
        <div className="lawyer-background">
          <p><strong>학력</strong> : 서울대학교 법학전문대학원 졸업</p>
        </div>
      </div>

      <div className="lawyer-specialties">
        <p className="section-title">주요분야</p>
        <div className="specialty-tags">
          <span className="tag">이혼</span>
          <span className="tag">건축/부동산 일반</span>
          <span className="tag">명예훼손/모욕 일반</span>
          <span className="tag">폭행/협박/상해 일반</span>
        </div>
      </div>

      <div className="consult-btns">
        <button className="btn-inquiry">문의하기</button>
        <button className="btn-consult" onClick={handleReservationClick}>
          상담 예약하기
        </button>
      </div>

      <div className="lawyer-cards-section">
        <div className="case-card">
          <div className="case-title">상속재산분할 소송</div>
          <div className="case-desc">
            자필 유언장 무효 주장 공공 형식조건<br />미비+증인 진술 확보로 지분 50%
          </div>
          <div className="case-verified">법적 상속분 인정</div>
        </div>
        <div className="case-card">
          <div className="case-title">상속재산분할 소송</div>
          <div className="case-desc">
            자필 유언장 무효 주장 공공 형식조건<br />미비+증인 진술 확보로 지분 50%
          </div>
          <div className="case-verified">법적 상속분 인정</div>
        </div>
        <div className="case-card">
          <div className="case-title">상속재산분할 소송</div>
          <div className="case-desc">
            자필 유언장 무효 주장 공공 형식조건<br />미비+증인 진술 확보로 지분 50%
          </div>
          <div className="case-verified">법적 상속분 인정</div>
        </div>
      </div>

      <div className="review-section">
        <p className="section-title">리뷰 (24)</p>
        <p className="rating">⭐ 4.3</p>
        <div className="review">변호사님이 너무 친절하게 모든 부분을 설명해주셨어요!</div>
        <div className="review">상황에 맞춰 조언을 주셔서 좋았어요. 감사합니다!</div>
      </div>
    </div>
  );
}

export default LawyerDetailPage;
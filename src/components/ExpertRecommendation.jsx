import React from 'react';
import './ExpertRecommendation.css';
import expertImg from '../assets/expert.svg'; // 전문가 이미지

function ExpertRecommendation() {
  const experts = [1, 2, 3];

  return (
    <section className="expert-section">
      <div className="card-title-wrap">
        <h2 className="expert-header">전문가 추천</h2>
        <span className="more-link">더보기</span>
      </div>
      <div className="expert-list">
        {experts.map((id) => (
          <div key={id} className="expert-card">
            <img src={expertImg} alt="전문가" className="expert-image" />
            <p className="expert-name">바른길 법무법인</p>
            <p>층간소음 분쟁 전문</p>
            <p className='expert-price'>100,000~</p>
            <p className='expert-rating'>⭐ 5.0(3)</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpertRecommendation;

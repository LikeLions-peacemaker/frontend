import React from 'react';
import './ExpertRecommendation.css';
import expertImg from '../assets/expert.svg'; // 전문가 이미지

function ExpertRecommendation() {
  const experts = [1, 2, 3];

  return (
    <section className="expert-section">
      <div className="card-title-wrap">
        <h2 className="expert-header body-m2">전문가 추천</h2>
        <span className="more-link caption1">최근 상담하신 분야와 관련된 전문가를 추천해드려요!</span>
      </div>
      <div className="expert-list">
        {experts.map((id) => (
          <div key={id} className="expert-card">
            <img src={expertImg} alt="전문가" className="expert-image" />
            <p className="expert-name caption1">바른길 법무법인</p>
            <p className="">층간소음 분쟁 전문</p>
            <p className='expert-price'>100,000~</p>
            <p className='expert-rating'>⭐ 5.0(3)</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpertRecommendation;

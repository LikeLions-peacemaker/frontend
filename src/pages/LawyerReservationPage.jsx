import React from 'react';
import './LawyerReservationPage.css';
import sampleProfile from '../assets/profile.png';
import { ReactComponent as LawIcon } from '../assets/law_icon.svg';
import { ReactComponent as CheckIcon } from '../assets/check-icon.svg';

function LawyerReservationPage() {
  return (
    <div className="reservation-page">
      <header className="reservation-header">상담 예약하기</header>

      <section className="expert-section">
        <img src={sampleProfile} alt="변호사" className="expert-img" />
        <div className="expert-info">
          <p className="name">홍길동 변호사</p>
          <p className="firm">바른길 법무법인</p>
          <p className="desc">노동법 전문 10년차, 직접변론</p>
        </div>
      </section>

      <section className="option-section">
        <p className="title">상담 선택</p>
        <div className="option-buttons">
          <button className="btn">15분 전화상담</button>
          <button className="btn selected">30분 전화상담</button>
        </div>
      </section>

      <section className="calendar-section">
        <p className="title">날짜 선택</p>
        <div className="calendar">
          <div className="calendar-header">
            <span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span><span>일</span>
          </div>
          <div className="calendar-days">
            <span className="day">23</span>
            <span className="day">24</span>
            <span className="day">25</span>
            <span className="day">26</span>
            <span className="day">27</span>
            <span className="day">28</span>
            <span className="day">29</span>
            <span className="day">30</span>
            <span className="day today">오늘</span>
          </div>
        </div>
      </section>

      <section className="time-section">
        <p className="title">시간 선택</p>
        <div className="time-options">
          <span>17:00</span>
          <span>17:30</span>
          <span>18:00</span>
          <span>18:30</span>
          <span>19:00</span>
        </div>
      </section>

      <section className="memo-section">
        <p className="title">의뢰 내용</p>
        <textarea placeholder="사건 내용을 간결하게 적어주세요." />
      </section>

      <section className="pay-section">
        <div className="pay-info">
          <span>총 결제금액</span>
          <br />
          <span className="amount">30,000원</span>
        </div>
        <button className="pay-btn">결제하기</button>
      </section>

      <section className="share-section">
  <div className="share-header">
    <div className="share-title-wrapper">
      <p className="title">상담내역 공유하기</p>
      <div className="share-action">
        <button className="go-btn">바로가기</button>
        {/* <span className="arrow">▶</span> */}
      </div>
    </div>
    <p className="desc">
      AI와 상담했던 대화기록을 전문가에게 보내보세요! <br />
      전문가가 상황을 빠르게 파악하고 정확한 상담을 도와드릴 수 있어요.
    </p>
  </div>
        <div className="share-list">
          {[1, 2, 3].map((item, index) => (
            <div className="share-card" key={index}>
              <div className="icon"><LawIcon /></div>
              <div className="share-content">
                <p className="bold">전세계약</p>
                <p className="gray">전세 계약은 임대차 보호법에 따라 새로운 집주인에게도 효력이...</p>
                <span className="date">6.5 목 오후 2:00</span>
              </div>
              <div className="check"><CheckIcon /></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LawyerReservationPage;

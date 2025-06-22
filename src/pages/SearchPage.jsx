// src/pages/SearchPage.jsx
import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import './SearchPage.css';
import sampleProfile from '../assets/profile.png';

const categoryTabs = ['성범죄', '재산범죄', '교통사고/범죄', '형사절차', '폭행/협박', '명예훼손/모욕'];

const categories = [
  {
    title: '성범죄',
    items: [
      { label: '성매매', detail: '조건만남, 랜덤채팅, 유흥업소, 유사성매매 등' },
      { label: '성폭력/강제추행 등', detail: '성폭행, 준강간, 데이트폭력, 성희롱, 성추행 등' },
      { label: '미성년 대상 성범죄', detail: '미성년 대상 성범죄' },
      { label: '디지털 성범죄', detail: '통신매체이용음란죄, 웹하드, 몰카, 음란물유포 등' },
    ],
  },
  {
    title: '재산범죄',
    items: [
      { label: '횡령/배임', detail: '업무상 횡령/배임, 신용카드 범죄, 점유이탈물횡령 등' },
      { label: '사기/공갈', detail: '보이스피싱, 명의 대여/도용, 유사수신, 중고사기 등' },
      { label: '기타 재산범죄', detail: '절도, 주거침입, 재물손괴, 장물 등' },
    ],
  },
  {
    title: '교통사고/범죄',
    items: [
      { label: '교통사고/도주', detail: '교통사고 합의, 손해사정, 뺑소니, 보복운전 등' },
      { label: '음주/무면허', detail: '음주운전, 음주사고, 무면허운전 등' },
    ],
  },
  {
    title: '형사절차',
    items: [
      { label: '고소/소송절차', detail: '합의, 무혐의, 공소시효, 고소대리, 약식명령, 즉결심판 등' },
      { label: '수사/체포/구속', detail: '체포/구속, 현행범, 영장, 압수수색, 포렌식 등' },
    ],
  },
  {
    title: '폭행/협박',
    items: [
      { label: '폭행/협박/상해 일반', detail: '폭행, 협박, 상해, 감금, 유기, 학대, 과실치사상, 공무집행방해 등' },
    ],
  },
  {
    title: '명예훼손/모욕',
    items: [
      { label: '명예훼손/모욕 일반', detail: '명예훼손죄, 모욕죄, 허위사실유포, 언어폭력 등' },
      { label: '사이버 명예훼손/모욕', detail: '정보통신망법, 악성댓글 등' },
    ],
  },
  {
    title: '기타 형사범죄',
    items: [
      { label: '마약/도박', detail: '향정신성의약품, 대마, 사설토토, 사행성게임, 원정도박 등' },
      { label: '소년범죄/학교폭력', detail: '아동학대, 학교폭력, 왕따, 소년사건 등' },
      { label: '형사일반/기타범죄', detail: '위증, 무고, 뇌물, 문서위조, 스토킹, 실화/방화 등' },
    ],
  },
  {
    title: '부동산/임대차',
    items: [
      { label: '건축/부동산 일반', detail: '건축법, 하자담보책임, 누수, 층간소음, 공사대금 등' },
      { label: '재개발/재건축', detail: '재개발, 재건축, 지역주택조합, 수용, 보상 등' },
      { label: '매매/소유권 등', detail: '부동산매매, 유치권, 지상권, 경매, 명도소송, 명의신탁 등' },
      { label: '임대차', detail: '주택/상가임대차, 계약금, 권리금, 보증금, 전세계약 등' },
    ],
  },
  {
    title: '금전/계약 문제',
    items: [
      { label: '손해배상', detail: '손해배상청구, 정신적피해보상, 위자료, 불법행위, 과실 등' },
      { label: '대여금/채권추심', detail: '대여금반환청구, 채권압류 및 추심, 연대보증 등' },
      { label: '계약일반/매매', detail: '계약해지, 계약서검토, 계약금, 중도금, 이중계약, 중고차매매 등' },
    ],
  },
  {
    title: '민사절차',
    items: [
      { label: '소송/집행절차', detail: '지급명령, 등기/등록, 조정/화해/중재, 재심, 공탁 등' },
      { label: '가압류/가처분', detail: '가처분/가압류 절차, 가등기, 이의신청, 취소 등' },
      { label: '회생/파산', detail: '개인회생, 법인회생, 파산, 도산, 면책 등' },
    ],
  },
];

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const showAIResults = searchTerm.trim() === '노동법';

  return (
    <div className="search-page">
      <header className="search-header">
        <input
          type="text"
          placeholder="법률 분야나 키워드를 검색해 보세요."
          className="search-input"
          value={searchTerm}
          onChange={handleChange}
        />
      </header>

      {!showAIResults && (
        <>
          <section className="recent-section">
            <p className="recent-title bold-text">최근 검색어</p>
            <p className="recent-empty">최근 검색어 내역이 없습니다.</p>
          </section>

          <section className="category-section">
            <p className="category-title bold-text">카테고리</p>
            <div className="category-tab-bar">
              {categoryTabs.map((tab, index) => (
                <span key={index} className="category-tab-item">{tab}</span>
              ))}
            </div>
            {categories.map((cat, idx) => (
              <div className="category-group" key={idx}>
                <p className="group-title">{cat.title}</p>
                {cat.items.map((item, iidx) => (
                  <React.Fragment key={iidx}>
                    <div className="category-item">
                      <p className="item-label">{item.label}</p>
                      <p className="item-detail">{item.detail}</p>
                    </div>
                    {iidx !== cat.items.length - 1 && <div className="item-divider" />}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </section>
        </>
      )}

      {showAIResults && (
        <section className="ai-recommend-section">
          <p className="ai-recommend-title">
            <span className="ai-icon">⚖️</span>
            <strong className="blue">AI추천</strong> 전문가<br />
            <span className="desc">상담하신 <strong className="blue">노동법</strong> 키워드를 기반으로 전문가를 추천해드려요.</span>
          </p>

          {[1, 2, 3].map((_, i) => (
            <div className="search-result-card" key={i}>
              <img src={sampleProfile} alt="lawyer" className="lawyer-img" />
              <div className="lawyer-info">
                <div className="lawyer-name">홍길동 변호사 <span className="lawfirm">바른길 법무법인</span></div>
                <div className="lawyer-desc">노동법 전문 10년차, 직접변론</div>
                <div className="lawyer-tags">
                  <span className="tag">노동법</span>
                  <span className="tag">이혼</span>
                  <span className="tag">소송</span>
                </div>
              </div>
              <div className="arrow">&gt;</div>
            </div>
          ))}

          <p className="search-title">검색결과</p>
          {[1, 2, 3].map((_, i) => (
            <div className="search-result-card" key={i}>
                <div className="ai-badge">AI 추천</div>
              <img src={sampleProfile} alt="lawyer" className="lawyer-img" />
              <div className="lawyer-info">
                <div className="lawyer-name">홍길동 변호사 <span className="lawfirm">바른길 법무법인</span></div>
                <div className="rating">⭐ 5.0 <span className="count">(3)</span></div>
                <div className="lawyer-desc">노동법 전문 10년차, 직접변론</div>
                <div className="lawyer-tags">
                  <span className="tag">노동법</span>
                  <span className="tag">이혼</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      <BottomNav />
    </div>
  );
}

export default SearchPage;
import './RecentConsultation.css';

function RecentConsultation() {
  return (
    <section className="recent-section">
      <div className="card-title-wrap">
        <h2 className="section-title body-m2">최근 상담</h2>
      </div>
      <div className="consult-card">
        <p className="consult-title body-l">[부동산] 전세 계약 중 집주인이 집을 팔았다고 합니다.</p>
        <p className="consult-time caption1">7시간 전</p>
        <p className="consult-desc caption1">
          전세 계약은 임대차 보호법에 따라 새로운 집주인에게도 효력이 유지됩니다.
          계약서를 잘 보관하시고, 확정일자와 전입 신고가 되어 있는지 확인하세요.
        </p>
      </div>
    </section>
  );
}

export default RecentConsultation;

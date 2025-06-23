import { useEffect, useState } from 'react';
import { fetchConversationSummariesFromAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import './RecentConsultation.css';

function RecentConsultation() {
  const navigate = useNavigate();
  const [recentSummaries, setRecentSummaries] = useState([]);

  useEffect(() => {
    const loadSummaries = async () => {
      try {
        const summaries = await fetchConversationSummariesFromAPI();
        const sorted = summaries
          .slice()
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
          .slice(0, 4); // 상위 4개만

        setRecentSummaries(sorted);
      } catch (err) {
        console.error('상담 내역 불러오기 실패:', err);
      }
    };

    loadSummaries();
  }, []);

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const then = new Date(timestamp);
    const diffMs = now - then;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    return diffHours <= 0 ? '방금 전' : `${diffHours}시간 전`;
  };

  return (
    
    <section className="recent-section">
      <div className="card-title-wrap">
        <h2 className="section-title body-m2">최근 상담</h2>
      </div>
      <div className="recent-list">
      {recentSummaries.map((item) => (
        <div key={item.session_id} className="consult-card"
        onClick={() => navigate(`/chat/${item.session_id}`)}
          style={{ cursor: "pointer" }}>
          <p className="consult-title body-l">{item.title}</p>
          <p className="consult-time caption1">{getTimeAgo(item.timestamp)}</p>
          <p className="consult-desc caption1">{item.summary}</p>
        </div>
      ))}
      </ div>
    </section>
  );
}

export default RecentConsultation;

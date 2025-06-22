import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import history from '../assets/logs.svg';
import newChat from '../assets/newChat.svg';
import back from '../assets/back.svg';
import onlyLogo from '../assets/onlyLogo.svg';
import './ChatHeader.css';

function ChatHeader({ onConversationSelect }) {
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [summaries, setSummaries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedSessionId, setSelectedSessionId] = useState(null);
    const handleConversationSelect = (sessionId) => {
        setSelectedSessionId(sessionId);
    };
    const handleNewChat = () => {
        const newSessionId = Date.now().toString();
        onConversationSelect(newSessionId); // ChatPage가 state를 갱신하도록 요청
    };

    const navigate = useNavigate();
    const sidebarRef = useRef(null);

    // 외부 클릭 감지 (사이드바 닫기)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsHistoryOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 대화 요약 데이터 불러오기
    const fetchConversationSummaries = async () => {
        setLoading(true);
        setError(null);
    
        try {
            const response = await fetch('http://localhost:8000/chat/summaries/', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
        });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('서버 응답:', data); // 응답 구조 확인용
      setSummaries(Array.isArray(data.summaries) ? data.summaries : []);
    } catch (err) {
      setError('대화 목록을 불러오는 중 오류가 발생했습니다.');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // 사이드바 토글 및 데이터 로드
  const toggleHistory = async () => {
    const newState = !isHistoryOpen;
    setIsHistoryOpen(newState);
    
    if (newState && summaries.length === 0) {
      await fetchConversationSummaries();
    }
  };

  // 대화 선택 핸들러
  const handleSelectConversation = (conversationId) => {
    onConversationSelect(conversationId);
    setIsHistoryOpen(false);
  };

  // 브라우저 뒤로가기 기능 (채팅 화면에서)
  const handleBackToPrevious = () => {
    if (window.history.length > 1) {
      navigate(-1); // React Router v6의 뒤로가기
    } else {
      // 히스토리가 없으면 홈으로
      navigate('/home');
    }
  };

  // 채팅 기록에서 채팅 화면으로 돌아가기
  const handleBackToChat = () => {
    setIsHistoryOpen(false);
  };

  return (
    <div className="chat-header">
      {/* 일반 채팅 화면 헤더 */}
      {!isHistoryOpen && (
        <>
          <div className="header-left">
            <button 
              onClick={handleBackToPrevious}
              className="back-btn"
            >
              <img src={back} alt="뒤로가기" />
            </button>
            <button 
              onClick={toggleHistory}
              className="history-btn"
              aria-label="대화 기록"
            >
              <img src={history} alt="기록" />
            </button>
          </div>
          
          <div className="header-center">
            <img src={logo} alt="법률" className="law-icon" />
          </div>
          
          <div className="header-right">
            <button 
                className="new-chat-btn"
                onClick={handleNewChat}
                aria-label="새 대화"
                >
                <img src={newChat} alt="새채팅" />
            </button>
          </div>
        </>
      )}

      {/* 전체 화면 오버레이 및 대화 기록 사이드바 */}
      {isHistoryOpen && (
        <div className="history-overlay">
            <div ref={sidebarRef} className="history-sidebar">
            {/* 채팅 기록 화면 헤더 */}
            <div className="sidebar-header">
              <button 
                onClick={handleBackToChat}
                className="back-btn"
                aria-label="채팅으로 돌아가기"
              >
                <img src={back} alt="뒤로가기" />
              </button>
              <h2 className="sidebar-title">메시지</h2>
            </div>
            
            <div className="conversation-list">
              {loading ? (
                <div className="loading-indicator">불러오는 중...</div>
              ) : error ? (
                <div className="error-message">{error}</div>
              ) : summaries.length === 0 ? (
                <div className="empty-state">대화 기록이 없습니다</div>
              ) : (
                summaries.map((conversation) => (
                  <div 
                    key={conversation.session_id}
                    className="conversation-item"
                    onClick={() => handleSelectConversation(conversation.session_id)}
                  >
                    <div className="conversation-icon">
                      <img src={onlyLogo} alt="로고" />
                    </div>
                    <div className="conversation-content">
                      <div className="conversation-title">{conversation.title}</div>
                      <div className="conversation-summary">{conversation.summary}</div>
                      <div className="conversation-meta">{conversation.timestamp}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatHeader;

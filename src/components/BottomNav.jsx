import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNav.css';

// 아이콘 import
import navHomeOn from '../assets/nav/navHomeOn.svg';
import navHomeOff from '../assets/nav/navHomeOff.svg';
import navChatOn from '../assets/nav/navChatOn.svg';
import navChatOff from '../assets/nav/navChatOff.svg';
import navSearchOn from '../assets/nav/navSearchOn.svg';
import navSearchOff from '../assets/nav/navSearchOff.svg';
import navMyPageOn from '../assets/nav/navMyPageOn.svg';
import navMyPageOff from '../assets/nav/navMyPageOff.svg';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 현재 경로에 따라 활성 탭 결정
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/' || path === '/home') return 'home';
    if (path === '/chat') return 'chat';
    if (path === '/search') return 'search';
    if (path === '/mypage') return 'mypage';
    return 'home';
  };

  const activeTab = getActiveTab();

  // 네비게이션 핸들러
  const handleNavigation = (path, tabName) => {
    navigate(path);
  };

  // 메뉴 설정
  const menuItems = [
    {
      id: 'home',
      label: '홈',
      path: '/home',
      iconOn: navHomeOn,
      iconOff: navHomeOff
    },
    {
      id: 'chat',
      label: 'AI 채팅',
      path: '/chat',
      iconOn: navChatOn,
      iconOff: navChatOff
    },
    {
      id: 'search',
      label: '검색',
      path: '/search',
      iconOn: navSearchOn,
      iconOff: navSearchOff
    },
    {
      id: 'mypage',
      label: '마이페이지',
      path: '/mypage',
      iconOn: navMyPageOn,
      iconOff: navMyPageOff
    }
  ];

  return (
    <nav className="bottom-nav">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => handleNavigation(item.path, item.id)}
        >
          <img
            src={activeTab === item.id ? item.iconOn : item.iconOff}
            alt={item.label}
            className="nav-icon"
          />
          
        </div>
      ))}
    </nav>
  );
}

export default BottomNav;

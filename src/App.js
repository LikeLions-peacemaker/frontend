// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import SearchPage from './pages/SearchPage';
import MyPage from './pages/MyPage';
import LawyerDetailPage from './pages/LawyerDetailPage'; // ✅ 추가
import './fonts/Font.css';
import LawyerReservationPage from './pages/LawyerReservationPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/lawyer" element={<LawyerDetailPage />} /> {/* ✅ 이 줄 추가 */}
          <Route path="/lawyer/reservation" element={<LawyerReservationPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

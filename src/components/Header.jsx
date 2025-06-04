import React from 'react';
import '../App.css';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="LawHelper Logo" className="logo" />
    </header>
  );
}

export default Header;

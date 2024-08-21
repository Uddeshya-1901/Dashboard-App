import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import '../Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="breadcrumb">
        <span>Home</span>
        <span className="breadcrumb-separator">{'>'}</span>
        <h4>Dashboard V2</h4>
      </nav>
      <div className="search-and-icons">
        <div className="search-bar">
          <input type="text" placeholder="Search anything..." />
        </div>
        <div className="icons">
          <div className="icon-item">
            {/* Icon 1: Profile or settings */}
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="icon-item">
            {/* Icon 2: Notifications */}
            <FontAwesomeIcon icon={faBell} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

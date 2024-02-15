import './header.css';
import MobMenu from './mobMenu/MobMenu';
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <span>U.CLOTHES</span>
          </div>
          <nav className="header__nav">
            <ul>
              <li className="header__link">
                <a href="#!">CATALOGUE</a>
              </li>
              <li className="header__link">
                <a href="#!">FASHION</a>
              </li>
              <li className="header__link">
                <a href="#!">FAVOURITE</a>
              </li>
              <li className="header__link">
                <a href="#!">LIFESTYLE</a>
              </li>
              <li>
                <a href="#!" className="header__nav-btn">
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
          <div
            className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}
            id="hamburger"
            onClick={toggleMenu}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          {isMenuOpen && <MobMenu onClose={closeMenu} />}
        </div>
      </div>
    </header>
  );
}

export default Header;

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
    <header className="header ">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            U<span>.</span>CLOTHES
          </div>
          <nav className="header__nav">
            <ul>
              <li className="header__link">
                <a href="/">HOME</a>
              </li>
              <li className="header__link">
                <a href="/catalogue">CATALOGUE</a>
              </li>

              <li className="header__link">
                <a href="/favourites">FAVOURITE</a>
              </li>
              <li className="header__link">
                <a href="#!">BAG: 100</a>
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

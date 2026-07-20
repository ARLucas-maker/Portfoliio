import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const whatsappNumber = "5511975115131";
  const whatsappMessage = encodeURIComponent("oi, vim através do site e queria saber mais sobre os serviços");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const linkedinUrl = "https://www.linkedin.com/in/lucasantignanirizzieri/";

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <NavLink to="/">LUCAS_A_R</NavLink>
        </div>

        {/* Desktop Nav */}
        <nav className="header-nav header-nav--desktop">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Serviços
          </NavLink>
          <NavLink to="/sobre" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Conheça o Lucas
          </NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="header-actions header-actions--desktop">
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="action-link linkedin-action">
            LinkedIn ↗
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="action-button">
            Fale Comigo
          </a>
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "mobile-menu__link active" : "mobile-menu__link"}
            onClick={() => setMenuOpen(false)}
          >
            Serviços
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) => isActive ? "mobile-menu__link active" : "mobile-menu__link"}
            onClick={() => setMenuOpen(false)}
          >
            Conheça o Lucas
          </NavLink>
        </nav>

        <div className="mobile-menu__actions">
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="mobile-menu__action-link">
            LinkedIn ↗
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="action-button mobile-menu__cta">
            Fale Comigo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

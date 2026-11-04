import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { navLinks, navCta, companyContactQuickInfo } from '../../data/navigation';
import Button from '../Button/Button';
import logoImage from '../../assets/logo/suraj-logo.jpg';
import MobileMenu from './MobileMenu';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  // Handle sticky navbar scroll shadow and height transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdown whenever route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMouseEnter = (itemId) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
        {/* Main Navbar */}
        <div className="main-navbar">
          <div className="container navbar-container">
            {/* Prominent Official Suraj Piping Logo */}
            <Link to="/" className="navbar-logo-link" aria-label="Suraj Piping Homepage">
              <img
                src={logoImage}
                alt="Suraj Pipe and Fitting"
                className="navbar-brand-logo"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="desktop-navigation" aria-label="Main Navigation">
              <ul className="desktop-nav-list">
                {navLinks.map((item) => {
                  const hasDropdown = item.hasDropdown && item.dropdownItems?.length > 0;
                  const isDropdownOpen = activeDropdown === item.id;

                  if (hasDropdown) {
                    return (
                      <li
                        key={item.id}
                        className={`desktop-nav-item has-dropdown ${isDropdownOpen ? 'dropdown-active' : ''}`}
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `nav-link-box has-dropdown-trigger ${isActive ? 'nav-link-active' : ''}`
                          }
                          aria-haspopup="true"
                          aria-expanded={isDropdownOpen}
                        >
                          <span className="nav-link-label">{item.label}</span>
                          <ChevronDown size={14} className="dropdown-arrow-icon" aria-hidden="true" />
                          <span className="nav-hover-frame" aria-hidden="true"></span>
                        </NavLink>

                        {/* Dropdown Menu */}
                        <div
                          className={`nav-dropdown-menu ${item.id === 'materials' ? 'materials-dropdown-menu' : ''} ${isDropdownOpen ? 'is-open' : ''}`}
                          role="menu"
                          aria-label={`${item.label} Submenu`}
                        >
                          <div className={`nav-dropdown-inner ${item.id === 'materials' ? 'materials-dropdown-inner' : ''}`}>
                            {item.dropdownItems.map((subItem) => (
                              <Link
                                key={subItem.id}
                                to={subItem.path}
                                className="dropdown-item-link"
                                role="menuitem"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="dropdown-item-left">
                                  <span className="dropdown-item-bullet" aria-hidden="true" />
                                  <span className="dropdown-item-text">{subItem.label}</span>
                                </div>
                                <ChevronRight size={13} className="dropdown-item-arrow" aria-hidden="true" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={item.id} className="desktop-nav-item">
                      <NavLink
                        to={item.path}
                        end={item.exact}
                        className={({ isActive }) =>
                          `nav-link-box ${isActive ? 'nav-link-active' : ''}`
                        }
                      >
                        <span className="nav-link-label">{item.label}</span>
                        <span className="nav-hover-frame" aria-hidden="true"></span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop Right CTA: GET QUOTE */}
            <div className="navbar-cta-wrapper">
              <Button
                to={navCta.path}
                variant="nav-cta"
                icon={<ArrowRight size={15} />}
                iconPosition="right"
              >
                {navCta.label}
              </Button>
            </div>

            {/* Mobile Hamburger / Close Toggle */}
            <button
              type="button"
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'is-active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Feature Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        navCta={navCta}
        quickInfo={companyContactQuickInfo}
      />
    </>
  );
}

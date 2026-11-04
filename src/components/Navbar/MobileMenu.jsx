import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  X,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from '../common/SocialIcons';
import logoImage from '../../assets/logo/suraj-logo.jpg';
import Button from '../Button/Button';
import './MobileMenu.css';

export default function MobileMenu({ isOpen, onClose, navLinks, navCta, quickInfo }) {
  const [expandedSubmenus, setExpandedSubmenus] = useState({
    products: false,
    materials: false,
  });

  const toggleSubmenu = (id) => {
    setExpandedSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className={`mobile-drawer-overlay ${isOpen ? 'is-visible' : ''}`} onClick={onClose}>
      <aside
        className={`mobile-drawer-panel ${isOpen ? 'is-open' : ''}`}
        onClick={(e) => e.stopPropagation()}
        aria-label="Mobile Navigation Menu"
      >
        {/* Modern Drawer Header with Logo & Close Button */}
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-brand">
            <Link to="/" onClick={onClose} className="mobile-drawer-logo-link" aria-label="Suraj Pipe and Fitting Home">
              <img
                src={logoImage}
                alt="Suraj Pipe and Fitting"
                className="mobile-drawer-logo-img"
              />
            </Link>
            <div className="mobile-drawer-badge">
              <ShieldCheck size={13} className="badge-icon-iso" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>

          <button
            type="button"
            className="mobile-drawer-close-btn"
            onClick={onClose}
            aria-label="Close Navigation Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mobile-drawer-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((item) => {
              const hasDropdown = item.hasDropdown && item.dropdownItems?.length > 0;
              const isExpanded = !!expandedSubmenus[item.id];
              const itemCount = item.dropdownItems?.length || 0;

              if (hasDropdown) {
                return (
                  <li key={item.id} className="mobile-nav-item mobile-item-has-submenu">
                    <div className="mobile-dropdown-header">
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `mobile-nav-link mobile-nav-link-split ${isActive ? 'is-active' : ''}`
                        }
                        onClick={onClose}
                      >
                        <span className="mobile-nav-label">{item.label}</span>
                        <span className="mobile-nav-count-pill">{itemCount}</span>
                      </NavLink>

                      <button
                        type="button"
                        className={`mobile-submenu-toggle ${isExpanded ? 'is-expanded' : ''}`}
                        onClick={() => toggleSubmenu(item.id)}
                        aria-label={`Toggle ${item.label} Submenu`}
                        aria-expanded={isExpanded}
                      >
                        <ChevronDown size={18} className="toggle-chevron" />
                      </button>
                    </div>

                    {/* Expandable Submenu */}
                    {isExpanded && (
                      <ul className="mobile-submenu-list">
                        {item.dropdownItems.map((subItem) => (
                          <li key={subItem.id} className="mobile-submenu-item">
                            <Link
                              to={subItem.path}
                              className="mobile-submenu-link"
                              onClick={onClose}
                            >
                              <span className="mobile-sub-bullet" aria-hidden="true" />
                              <span className="mobile-sub-label">{subItem.label}</span>
                              <ChevronRight size={14} className="mobile-sub-arrow" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.id} className="mobile-nav-item">
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? 'is-active' : ''}`
                    }
                    onClick={onClose}
                  >
                    <span className="mobile-nav-label">{item.label}</span>
                    <ArrowRight size={16} className="mobile-nav-arrow" />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Quick Direct Communication Buttons */}
        <div className="mobile-quick-actions">
          <a
            href={`tel:${quickInfo.phone}`}
            className="mobile-action-btn mobile-action-call"
            title="Call Suraj Pipe And Fitting"
          >
            <Phone size={15} />
            <span>Call: {quickInfo.phone}</span>
          </a>

          <a
            href="https://wa.me/917045173574?text=Hello%20Suraj%20Pipe%20And%20Fitting,%20I%20am%20interested%20in%20your%20products"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-action-btn mobile-action-whatsapp"
            title="Chat on WhatsApp"
          >
            <MessageCircle size={15} />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Prominent GET QUOTE CTA Inside Drawer */}
        <div className="mobile-drawer-cta-section">
          <Button
            to={navCta.path}
            variant="primary"
            fullWidth
            icon={<ArrowRight size={16} />}
            iconPosition="right"
            onClick={onClose}
          >
            {navCta.label}
          </Button>
        </div>

        {/* Quick Contact & Verification in Mobile Drawer */}
        <div className="mobile-drawer-footer">
          <div className="mobile-footer-contact">
            <a href={`mailto:${quickInfo.email}`} className="mobile-footer-link">
              <Mail size={14} className="mobile-footer-icon" />
              <span>{quickInfo.email}</span>
            </a>
            <div className="mobile-footer-loc">
              <MapPin size={14} className="mobile-footer-icon" />
              <span>{quickInfo.location}</span>
            </div>
          </div>

          <div className="mobile-drawer-socials">
            <span className="mobile-socials-label">Follow Us:</span>
            <div className="mobile-socials-icons">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon-btn"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon-btn"
                aria-label="Facebook"
                title="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-icon-btn"
                aria-label="Twitter / X"
                title="Twitter / X"
              >
                <TwitterIcon size={15} />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

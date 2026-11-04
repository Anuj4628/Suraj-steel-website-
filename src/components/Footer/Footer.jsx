import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Copy,
  Check,
  User,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import logoImage from '../../assets/logo/suraj-logo.jpg';
import CTASection from './CTASection';
import './Footer.css';

export default function Footer() {
  const [copiedKey, setCopiedKey] = useState(null);

  // Exact contact information from the company visiting card
  const contactDetails = {
    contactPerson: 'Suraj Goswami',
    primaryPhone: '7045173574',
    primaryPhoneDisplay: '+91 70451 73574',
    secondaryPhone: '7984097489',
    secondaryPhoneDisplay: '+91 79840 97489',
    email: 'surajpipefitting21@gmail.com',
    address:
      '(Shop) Plumbhar Chawl, Shantabai Building, Ground Floor, Shop No. 6, 4th Cross Lane, Khetwadi, Pathe Bapurao Marg, Mumbai - 400004.',
  };

  // Robust copy to clipboard with fallback
  const handleCopy = async (text, key) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 2200);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Materials', path: '/materials' },
    { label: 'Certificates', path: '/certificates' },
    { label: 'Industries We Serve', path: '/#industries' },
    { label: 'Our Clients', path: '/#clients' },
    { label: 'Global Export', path: '/#global-export' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Request a Quote', path: '/contact?inquiry=quote' },
  ];

  const ourProductLinks = [
    { name: 'Forge Fittings', path: '/products/forge-fittings' },
    { name: 'Flanges', path: '/products/flanges' },
    { name: 'Buttweld Fittings', path: '/products/buttweld-fittings' },
    { name: 'Fasteners', path: '/products/fasteners' },
    { name: 'Pipes & Tubes', path: '/products/pipes-tubes' },
    { name: 'Sheets & Plates', path: '/products/sheets-plates' },
    { name: 'Rods & Bars', path: '/products/rods-bars' },
  ];

  return (
    <>
      {/* 1. CTA Section Placed Immediately Above Footer */}
      <CTASection />

      {/* 2. Main Footer */}
      <footer className="site-footer" aria-label="Site Footer">
        <div className="container">
          <div className="footer-main-grid">
            {/* Column 1: Company Branding */}
            <div className="footer-col footer-col-brand">
              <Link to="/" className="footer-logo-link" aria-label="Suraj Pipe And Fitting Home">
                <img
                  src={logoImage}
                  alt="Suraj Pipe And Fitting Logo"
                  className="footer-logo-image"
                  loading="lazy"
                />
              </Link>

              <h3 className="footer-company-name">Suraj Pipe And Fitting</h3>

              <p className="footer-company-desc">
                Your source for industrial pipes, pipe fittings, flanges, and steel products across a range of materials and specifications.
              </p>

              <div className="footer-trust-badge">
                <ShieldCheck size={18} className="trust-badge-icon" />
                <span>ISO 9001:2015 Certified Company</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col footer-col-links">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-nav-list">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="footer-nav-link">
                      <ChevronRight size={13} className="nav-chevron" aria-hidden="true" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Products */}
            <div className="footer-col footer-col-products">
              <h4 className="footer-col-title">Our Products</h4>
              <ul className="footer-product-list">
                {ourProductLinks.map((prod, idx) => (
                  <li key={idx}>
                    <Link to={prod.path} className="footer-product-link">
                      <span className="product-bullet" aria-hidden="true"></span>
                      <span>{prod.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Details (From Visiting Card) */}
            <div className="footer-col footer-col-contact">
              <h4 className="footer-col-title">Contact Us</h4>

              <div className="footer-contact-items">
                {/* Contact Person */}
                <div className="contact-row">
                  <div className="contact-icon-box" aria-hidden="true">
                    <User size={16} />
                  </div>
                  <div className="contact-content">
                    <span className="contact-label">Contact Person</span>
                    <span className="contact-value contact-person-name">
                      {contactDetails.contactPerson}
                    </span>
                  </div>
                </div>

                {/* Primary Phone with Click-to-Call & Copy Button */}
                <div className="contact-row">
                  <div className="contact-icon-box" aria-hidden="true">
                    <Phone size={16} />
                  </div>
                  <div className="contact-content">
                    <span className="contact-label">Primary Phone</span>
                    <div className="contact-action-line">
                      <a
                        href={`tel:+91${contactDetails.primaryPhone}`}
                        className="contact-link"
                        title="Click to call primary number"
                      >
                        {contactDetails.primaryPhoneDisplay}
                      </a>
                      <button
                        type="button"
                        className={`copy-btn ${copiedKey === 'phone1' ? 'copied' : ''}`}
                        onClick={() => handleCopy(contactDetails.primaryPhone, 'phone1')}
                        aria-label="Copy primary phone number to clipboard"
                        title="Copy phone number"
                      >
                        {copiedKey === 'phone1' ? (
                          <>
                            <Check size={13} className="copy-icon" />
                            <span className="copied-text">Copied!</span>
                          </>
                        ) : (
                          <Copy size={13} className="copy-icon" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Secondary Phone with Click-to-Call & Copy Button */}
                <div className="contact-row">
                  <div className="contact-icon-box" aria-hidden="true">
                    <Phone size={16} />
                  </div>
                  <div className="contact-content">
                    <span className="contact-label">Secondary Phone</span>
                    <div className="contact-action-line">
                      <a
                        href={`tel:+91${contactDetails.secondaryPhone}`}
                        className="contact-link"
                        title="Click to call secondary number"
                      >
                        {contactDetails.secondaryPhoneDisplay}
                      </a>
                      <button
                        type="button"
                        className={`copy-btn ${copiedKey === 'phone2' ? 'copied' : ''}`}
                        onClick={() => handleCopy(contactDetails.secondaryPhone, 'phone2')}
                        aria-label="Copy secondary phone number to clipboard"
                        title="Copy phone number"
                      >
                        {copiedKey === 'phone2' ? (
                          <>
                            <Check size={13} className="copy-icon" />
                            <span className="copied-text">Copied!</span>
                          </>
                        ) : (
                          <Copy size={13} className="copy-icon" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Email with Click-to-Mail & Copy Button */}
                <div className="contact-row">
                  <div className="contact-icon-box" aria-hidden="true">
                    <Mail size={16} />
                  </div>
                  <div className="contact-content">
                    <span className="contact-label">Email Address</span>
                    <div className="contact-action-line">
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="contact-link contact-email-link"
                        title="Click to send email"
                      >
                        {contactDetails.email}
                      </a>
                      <button
                        type="button"
                        className={`copy-btn ${copiedKey === 'email' ? 'copied' : ''}`}
                        onClick={() => handleCopy(contactDetails.email, 'email')}
                        aria-label="Copy email address to clipboard"
                        title="Copy email address"
                      >
                        {copiedKey === 'email' ? (
                          <>
                            <Check size={13} className="copy-icon" />
                            <span className="copied-text">Copied!</span>
                          </>
                        ) : (
                          <Copy size={13} className="copy-icon" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Full Postal Address with Copy Button */}
                <div className="contact-row contact-row-address">
                  <div className="contact-icon-box" aria-hidden="true">
                    <MapPin size={16} />
                  </div>
                  <div className="contact-content">
                    <div className="address-header-row">
                      <span className="contact-label">Shop Address</span>
                      <button
                        type="button"
                        className={`copy-btn copy-btn-address ${
                          copiedKey === 'address' ? 'copied' : ''
                        }`}
                        onClick={() => handleCopy(contactDetails.address, 'address')}
                        aria-label="Copy full postal address to clipboard"
                        title="Copy address"
                      >
                        {copiedKey === 'address' ? (
                          <>
                            <Check size={13} className="copy-icon" />
                            <span className="copied-text">Address copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={13} className="copy-icon" />
                            <span className="copy-hint-text">Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <address className="contact-address-text">
                      <strong>(Shop) Plumbhar Chawl</strong>, Shantabai Building, Ground Floor,
                      <br />
                      Shop No. 6, 4th Cross Lane, Khetwadi,
                      <br />
                      Pathe Bapurao Marg, Mumbai - 400004.
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="footer-bottom-bar">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Suraj Pipe And Fitting. All Rights Reserved.
            </p>
            <p className="quality-statement">
              Precision Manufacturer & Stockist of Forged Fittings, Flanges & High-Grade Piping
            </p>
            <div className="footer-credit">
              <a
                href="https://kptron-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-credit-link"
              >
                SEO and Design by SUNMARG INDIA
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


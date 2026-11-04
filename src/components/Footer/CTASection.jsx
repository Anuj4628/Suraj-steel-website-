import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import './CTASection.css';

export default function CTASection() {
  const primaryPhone = '+917045173574';
  const whatsappUrl = `https://wa.me/917045173574?text=${encodeURIComponent(
    'Hello Suraj Pipe And Fitting, I would like to inquire about industrial pipe fittings and steel products.'
  )}`;

  return (
    <section className="cta-section" id="quote-cta" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-box">
          {/* Subtle Ambient Decorative Ring */}
          <div className="cta-glow-backdrop" aria-hidden="true" />

          <div className="cta-content">
            <span className="cta-badge">DIRECT FACTORY & STOCKIST PRICING</span>

            <h2 id="cta-heading" className="cta-heading">
              Looking for Reliable <span className="cta-highlight-red">Pipe Fittings</span> & Industrial Steel Products?
            </h2>

            <p className="cta-description">
              Connect with Suraj Pipe And Fitting for product availability, material specifications, and competitive quotations delivered within 24 hours.
            </p>

            <div className="cta-actions">
              {/* Primary: Request a Quote */}
              <Link to="/contact?inquiry=quote" className="cta-btn cta-btn-primary">
                <span>Request a Quote</span>
                <ArrowRight size={18} className="cta-btn-icon" />
              </Link>

              {/* Secondary: Call Us Now */}
              <a href={`tel:${primaryPhone}`} className="cta-btn cta-btn-secondary">
                <Phone size={17} className="cta-btn-icon" />
                <span>Call Us Now</span>
              </a>

              {/* Third Action: WhatsApp Us */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn-whatsapp"
                aria-label="Chat with Suraj Pipe And Fitting on WhatsApp"
              >
                <MessageCircle size={18} className="cta-btn-icon" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


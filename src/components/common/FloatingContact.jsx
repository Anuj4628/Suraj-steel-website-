import React, { useState, useEffect } from 'react';
import { ChevronUp, Phone, MessageCircle } from 'lucide-react';
import './FloatingContact.css';

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const primaryPhone = '+917045173574';
  const whatsappUrl = `https://wa.me/917045173574?text=${encodeURIComponent(
    'Hello Suraj Pipe And Fitting, I would like to inquire about industrial pipe fittings and steel products.'
  )}`;

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <aside className="floating-actions-stack" aria-label="Quick Contact & Actions">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="floating-btn btn-scroll-top"
          aria-label="Scroll to top of page"
          title="Back to Top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* Direct Phone Call Button */}
      <a
        href={`tel:${primaryPhone}`}
        className="floating-btn btn-phone-dial"
        aria-label="Call Suraj Pipe And Fitting"
        title="Call Now (+91 70451 73574)"
      >
        <Phone size={19} />
      </a>

      {/* Direct WhatsApp Chat Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn btn-whatsapp-chat"
        aria-label="Chat on WhatsApp with Suraj Pipe And Fitting"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
    </aside>
  );
}


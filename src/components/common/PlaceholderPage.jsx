import React from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import Button from '../Button/Button';
import './PlaceholderPage.css';

export default function PlaceholderPage({ title, subtitle, phase = 'Phase 02' }) {
  return (
    <div className="placeholder-page">
      <div className="container placeholder-container">
        <div className="placeholder-card">
          <div className="placeholder-badge">
            <Clock size={14} className="placeholder-clock-icon" />
            <span>ARCHITECTURE READY • {phase.toUpperCase()}</span>
          </div>
          <h1 className="placeholder-title">{title}</h1>
          <p className="placeholder-desc">{subtitle}</p>
          <div className="placeholder-action">
            <Button to="/" variant="primary" icon={<ArrowLeft size={16} />} iconPosition="left">
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


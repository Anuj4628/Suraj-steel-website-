import React from 'react';
import { ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import Button from '../Button/Button';

export default function HeroSlide({ slide, isActive, index }) {
  return (
    <div
      className={`hero-slide ${isActive ? 'is-active' : ''}`}
      aria-hidden={!isActive}
      role="group"
      aria-roledescription="slide"
      aria-label={`Slide ${slide.index} of 04: ${slide.title}`}
    >
      {/* Background Image Container */}
      <div className="hero-image-wrapper">
        <img
          src={slide.image}
          alt={slide.alt || slide.title}
          className="hero-bg-image"
          style={slide.imagePosition ? { objectPosition: slide.imagePosition } : undefined}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
        {/*
          Intelligent Industrial Scrim:
          Targeted left-side dark scrim so text has 100% contrast, while leaving
          the authentic machinery/piping subject on the right clearly visible and vivid.
        */}
        <div className="hero-scrim-left" aria-hidden="true"></div>
        <div className="hero-scrim-bottom" aria-hidden="true"></div>
      </div>

      {/* Hero Content Container */}
      <div className="container hero-content-container">
        <div className="hero-text-block">
          {/* Eyebrow / Industrial Category */}
          <div className="hero-eyebrow-wrapper">
            <span className="hero-eyebrow-dot"></span>
            <span className="hero-eyebrow-text">{slide.eyebrow}</span>
          </div>

          {/* Large Powerful Industrial Headline */}
          <h1 className="hero-headline">
            <span className="headline-line">{slide.title}</span>
            {slide.titleAccent && (
              <span className="headline-line hero-headline-accent">
                {slide.titleAccent}
              </span>
            )}
            {slide.titleEnd && (
              <span className="headline-line">{slide.titleEnd}</span>
            )}
          </h1>

          {/* Authoritative Description */}
          <p className="hero-description">{slide.description}</p>

          {/* Action Buttons */}
          <div className="hero-actions-group">
            <Button
              to={slide.primaryCta.link}
              variant="primary"
              size="lg"
              className="hero-primary-btn"
              icon={<ArrowRight size={18} />}
            >
              {slide.primaryCta.text}
            </Button>

            {slide.secondaryCta && (
              <Button
                to={slide.secondaryCta.link}
                variant="secondary"
                size="lg"
                className="hero-secondary-btn"
                icon={<ChevronRight size={18} />}
              >
                {slide.secondaryCta.text}
              </Button>
            )}
          </div>

          {/* Bottom Statistics / Technical Specifications Columns */}
          {slide.specs && slide.specs.length > 0 && (
            <div className="hero-specs-row">
              {slide.specs.map((spec, i) => (
                <div key={i} className="hero-spec-pill">
                  <span className="hero-spec-value">{spec.value}</span>
                  <span className="hero-spec-label">{spec.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


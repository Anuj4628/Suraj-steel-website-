import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, CheckCircle2, Truck, Globe2 } from 'lucide-react';
import Button from '../Button/Button';

export default function HeroSlide({ slide, isActive, index }) {
  // Industrial Trust & Supply Capability Badges (Replacing technical specs)
  const trustBadges = [
    {
      id: 'iso',
      icon: ShieldCheck,
      heading: 'ISO 9001:2015',
      subtext: 'Certified Plant',
    },
    {
      id: 'mtc',
      icon: CheckCircle2,
      heading: '100% Tested & MTC',
      subtext: 'EN 10204 3.1 Reports',
    },
    {
      id: 'stock',
      icon: Truck,
      heading: 'Ready Stock',
      subtext: 'Immediate Dispatch',
    },
    {
      id: 'export',
      icon: Globe2,
      heading: 'Global Export',
      subtext: '25+ Nations Served',
    },
  ];

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

          {/* Premium Industrial Trust & Supply Capability Ribbon */}
          <div className="hero-trust-ribbon">
            {trustBadges.map((badge) => {
              const IconComponent = badge.icon;
              return (
                <div key={badge.id} className="hero-trust-card">
                  <div className="hero-trust-icon-wrap" aria-hidden="true">
                    <IconComponent size={16} />
                  </div>
                  <div className="hero-trust-meta">
                    <span className="hero-trust-heading">{badge.heading}</span>
                    <span className="hero-trust-subtext">{badge.subtext}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


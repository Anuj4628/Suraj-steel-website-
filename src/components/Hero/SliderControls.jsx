import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SliderControls({
  totalSlides,
  currentSlide,
  onSelectSlide,
  onPrev,
  onNext,
  isPaused,
}) {
  return (
    <div className="slider-controls-wrapper">
      <div className="container slider-controls-container">
        {/* Slide Number Indicators (01  02  03  04) */}
        <div className="slide-indicators-group" role="tablist" aria-label="Hero slide pagination">
          {Array.from({ length: totalSlides }).map((_, index) => {
            const slideNum = String(index + 1).padStart(2, '0');
            const isActive = currentSlide === index;

            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${slideNum}`}
                className={`slide-indicator-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => onSelectSlide(index)}
              >
                <span className="indicator-number">{slideNum}</span>
                <span className="indicator-bar-track">
                  <span
                    className={`indicator-bar-fill ${isActive && !isPaused ? 'is-animating' : ''}`}
                  ></span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Minimalist Prev/Next Arrow Navigation Buttons */}
        <div className="slider-arrow-controls">
          <button
            type="button"
            className="slider-arrow-btn slider-arrow-prev"
            onClick={onPrev}
            aria-label="Previous Hero Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="slider-arrow-divider" aria-hidden="true"></div>
          <button
            type="button"
            className="slider-arrow-btn slider-arrow-next"
            onClick={onNext}
            aria-label="Next Hero Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}


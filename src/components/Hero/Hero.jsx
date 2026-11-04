import React, { useState, useEffect, useRef, useCallback } from 'react';
import { heroSlides } from '../../data/heroSlides';
import HeroSlide from './HeroSlide';
import SliderControls from './SliderControls';
import './Hero.css';

const AUTOPLAY_INTERVAL = 5500; // 5.5 seconds per slide

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = heroSlides.length;

  const timerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const heroRef = useRef(null);

  // Transition to next slide safely
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Transition to previous slide safely
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Direct slide selection
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Autoplay setup with pause/resume support
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, currentSlide]);

  // Keyboard navigation support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle if not focused in an input/textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch / Mobile Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50; // Minimum threshold in pixels

    if (swipeDistance > minSwipeDistance) {
      // Swiped Left -> Go to Next Slide
      nextSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      // Swiped Right -> Go to Prev Slide
      prevSlide();
    }

    // Resume autoplay after touch interaction
    setIsPaused(false);
  };

  return (
    <section
      ref={heroRef}
      className="hero-section"
      aria-roledescription="carousel"
      aria-label="Suraj Piping Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 4 Slides Container */}
      <div className="hero-slides-viewport">
        {heroSlides.map((slide, index) => (
          <HeroSlide
            key={slide.id}
            slide={slide}
            isActive={currentSlide === index}
            index={index}
          />
        ))}
      </div>

      {/* Hero Controls: Indicators (01 02 03 04) + Minimalist Prev/Next Arrows */}
      <SliderControls
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
        onPrev={prevSlide}
        onNext={nextSlide}
        isPaused={isPaused}
      />
    </section>
  );
}


/**
 * SURAJ PIPING — HERO SLIDES DATA
 * Exactly 4 data-driven slides in required order:
 * 1. FORGED FITTINGS
 * 2. FLANGES
 * 3. PIPES & TUBES
 * 4. FLANGE FORGING PROCESS
 */

import forgedFittingsImage from '../assets/hero/forged-fittings-hero.webp';
import flangesImage from '../assets/hero/stainless-steel-flanges-hero.webp';
import pipesTubesImage from '../assets/hero/stainless-steel-pipes-tubes-hero.webp';
import forgingProcessImage from '../assets/hero/industrial-flange-forging-hero.webp';

export const heroSlides = [
  {
    id: 1,
    index: '01',
    eyebrow: 'PRECISION ENGINEERED COMPONENTS',
    title: 'Precision Forged',
    titleAccent: 'Fittings for Demanding',
    titleEnd: 'Industrial Applications',
    description: 'Explore stainless steel forged fittings engineered for reliable piping connections and demanding industrial requirements.',
    primaryCta: {
      text: 'Explore Forged Fittings',
      link: '/products',
    },
    secondaryCta: {
      text: 'Get Instant Quote',
      link: '/contact?inquiry=quote',
    },
    image: forgedFittingsImage,
    alt: 'Stainless steel socket weld elbows, forged tees, and high-pressure threaded pipe fittings',
    specs: [
      { value: 'ASTM A182 / B16.11', label: 'STANDARDS' },
      { value: '2000# / 3000# / 6000#', label: 'PRESSURE CLASS' },
      { value: '1/8" to 4" NB', label: 'SIZE RANGE' },
    ],
  },
  {
    id: 2,
    index: '02',
    eyebrow: 'INDUSTRIAL FLANGE SOLUTIONS',
    title: 'Precision Engineered',
    titleAccent: 'Flanges for Industrial',
    titleEnd: 'Piping Systems',
    description: 'Discover stainless steel industrial flanges designed for dependable connections across demanding piping and engineering applications.',
    primaryCta: {
      text: 'Explore Flanges',
      link: '/products',
    },
    secondaryCta: {
      text: 'Get Instant Quote',
      link: '/contact?inquiry=quote',
    },
    image: flangesImage,
    alt: 'Stainless steel weld neck flanges, slip-on flanges, blind flanges, and raised face flanges',
    specs: [
      { value: 'ASME B16.5 / B16.47', label: 'STANDARDS' },
      { value: '150# to 2500# Class', label: 'PRESSURE RATING' },
      { value: 'WNRF, SORF & Blind', label: 'FLANGE TYPES' },
    ],
  },
  {
    id: 3,
    index: '03',
    eyebrow: 'STAINLESS STEEL PIPING SOLUTIONS',
    title: 'Quality Pipes & Tubes',
    titleAccent: 'for Critical Industrial',
    titleEnd: 'Applications',
    description: 'Explore stainless steel pipes and tubes manufactured and supplied for diverse industrial, engineering and infrastructure requirements.',
    primaryCta: {
      text: 'Explore Pipes & Tubes',
      link: '/products',
    },
    secondaryCta: {
      text: 'Get Instant Quote',
      link: '/contact?inquiry=quote',
    },
    image: pipesTubesImage,
    alt: 'Stacked bundles of large and medium diameter stainless steel seamless and welded pipes',
    specs: [
      { value: 'ASTM A312 / A358', label: 'STANDARDS' },
      { value: '1/2" to 48" NB', label: 'SIZE RANGE' },
      { value: 'SCH 10S to XXS', label: 'SCHEDULES' },
    ],
  },
  {
    id: 4,
    index: '04',
    eyebrow: 'FORGING & MANUFACTURING',
    title: 'From Precision',
    titleAccent: 'Forging to Quality',
    titleEnd: 'Industrial Flanges',
    description: 'Explore the hot forging process behind industrial flanges, where controlled forming operations shape steel into essential piping components.',
    primaryCta: {
      text: 'Explore Our Products',
      link: '/products',
    },
    secondaryCta: {
      text: 'Get Instant Quote',
      link: '/contact?inquiry=quote',
    },
    image: forgingProcessImage,
    imagePosition: '75% center',
    alt: 'Industrial heavy forging press shaping red-hot glowing steel flange workpiece with flying sparks',
    specs: [
      { value: 'Closed-Die Hot Forging', label: 'FORMING PROCESS' },
      { value: 'Solution Annealed', label: 'HEAT TREATMENT' },
      { value: '100% Ultrasonic & MPI', label: 'TESTING METHODS' },
    ],
  },
];

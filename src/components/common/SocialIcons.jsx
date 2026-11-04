import React from 'react';

/**
 * Official Authentic Brand Logos for Social Media
 */

export function InstagramIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <defs>
        <radialGradient id="instagram-gradient" cx="0.2" cy="1" r="1">
          <stop offset="0%" stopColor="#FFD521" />
          <stop offset="10%" stopColor="#F50000" />
          <stop offset="50%" stopColor="#B900B4" />
          <stop offset="100%" stopColor="#1C00DB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6.5" fill="url(#instagram-gradient)" />
      <rect
        x="3.6"
        y="3.6"
        width="16.8"
        height="16.8"
        rx="4.8"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.3" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.15" fill="#FFFFFF" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#FFFFFF"
        d="M16.5 12.05h-2.55V21h-3.72v-8.95H8v-3.15h2.23V6.62c0-1.85.88-4.72 4.72-4.72l3.47.01v3.08h-2.52c-.42 0-1.01.21-1.01 1.1v2.81h3.55l-.44 3.15z"
      />
    </svg>
  );
}

export function TwitterIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <rect width="24" height="24" rx="6.5" fill="#0F1419" />
      <path
        fill="#FFFFFF"
        d="M17.53 4.5h2.53l-5.53 6.32L21 20.5h-5.09l-3.99-5.21L7.36 20.5H4.83l5.91-6.76L4.2 4.5h5.22l3.6 4.76 4.51-4.76zm-.89 14.48h1.4L8.74 5.92H7.24l9.4 13.06z"
      />
    </svg>
  );
}

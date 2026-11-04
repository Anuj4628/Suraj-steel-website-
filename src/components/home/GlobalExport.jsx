import React from 'react';
import './GlobalExport.css';

// Import 25 official national flag SVGs from assets/flags
import aeFlag from '../../assets/flags/ae.svg';
import saFlag from '../../assets/flags/sa.svg';
import qaFlag from '../../assets/flags/qa.svg';
import omFlag from '../../assets/flags/om.svg';
import kwFlag from '../../assets/flags/kw.svg';
import bhFlag from '../../assets/flags/bh.svg';
import usFlag from '../../assets/flags/us.svg';
import gbFlag from '../../assets/flags/gb.svg';
import deFlag from '../../assets/flags/de.svg';
import frFlag from '../../assets/flags/fr.svg';
import itFlag from '../../assets/flags/it.svg';
import nlFlag from '../../assets/flags/nl.svg';
import beFlag from '../../assets/flags/be.svg';
import esFlag from '../../assets/flags/es.svg';
import trFlag from '../../assets/flags/tr.svg';
import sgFlag from '../../assets/flags/sg.svg';
import myFlag from '../../assets/flags/my.svg';
import thFlag from '../../assets/flags/th.svg';
import idFlag from '../../assets/flags/id.svg';
import vnFlag from '../../assets/flags/vn.svg';
import bdFlag from '../../assets/flags/bd.svg';
import lkFlag from '../../assets/flags/lk.svg';
import npFlag from '../../assets/flags/np.svg';
import zaFlag from '../../assets/flags/za.svg';
import auFlag from '../../assets/flags/au.svg';

const exportCountries = [
  { id: 'ae', name: 'United Arab Emirates', flag: aeFlag },
  { id: 'sa', name: 'Saudi Arabia', flag: saFlag },
  { id: 'qa', name: 'Qatar', flag: qaFlag },
  { id: 'om', name: 'Oman', flag: omFlag },
  { id: 'kw', name: 'Kuwait', flag: kwFlag },
  { id: 'bh', name: 'Bahrain', flag: bhFlag },
  { id: 'us', name: 'United States', flag: usFlag },
  { id: 'gb', name: 'United Kingdom', flag: gbFlag },
  { id: 'de', name: 'Germany', flag: deFlag },
  { id: 'fr', name: 'France', flag: frFlag },
  { id: 'it', name: 'Italy', flag: itFlag },
  { id: 'nl', name: 'Netherlands', flag: nlFlag },
  { id: 'be', name: 'Belgium', flag: beFlag },
  { id: 'es', name: 'Spain', flag: esFlag },
  { id: 'tr', name: 'Turkey', flag: trFlag },
  { id: 'sg', name: 'Singapore', flag: sgFlag },
  { id: 'my', name: 'Malaysia', flag: myFlag },
  { id: 'th', name: 'Thailand', flag: thFlag },
  { id: 'id', name: 'Indonesia', flag: idFlag },
  { id: 'vn', name: 'Vietnam', flag: vnFlag },
  { id: 'bd', name: 'Bangladesh', flag: bdFlag },
  { id: 'lk', name: 'Sri Lanka', flag: lkFlag },
  { id: 'np', name: 'Nepal', flag: npFlag },
  { id: 'za', name: 'South Africa', flag: zaFlag },
  { id: 'au', name: 'Australia', flag: auFlag },
];

export default function GlobalExport() {
  return (
    <section className="global-export-section" id="global-export" aria-labelledby="global-export-heading">
      <div className="container">
        {/* Centered Heading Area */}
        <div className="export-header">
          <div className="export-eyebrow">
            <span className="export-eyebrow-line" aria-hidden="true"></span>
            <span className="export-eyebrow-text">OUR GLOBAL REACH</span>
          </div>

          <h2 id="global-export-heading" className="export-title">
            Global Export <span className="export-title-highlight">Network</span>
          </h2>
        </div>

        {/* 5-Column Grid with 25 Country Cards */}
        <div className="export-grid">
          {exportCountries.map((country) => (
            <article key={country.id} className="country-card">
              <div className="country-flag-wrapper">
                <img
                  src={country.flag}
                  alt={`Flag of ${country.name}`}
                  className="country-flag"
                  loading="lazy"
                  width="44"
                  height="30"
                />
              </div>
              <span className="country-name">{country.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


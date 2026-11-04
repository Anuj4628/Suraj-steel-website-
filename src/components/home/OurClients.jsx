import React from 'react';
import './OurClients.css';

// Import 12 official client/partner logos from assets/partners
import tataSteelLogo from '../../assets/partners/tata_steel.svg';
import larsenToubroLogo from '../../assets/partners/larsen_toubro.png';
import jswSteelLogo from '../../assets/partners/jsw_steel.svg';
import jindalSteelLogo from '../../assets/partners/jindal_steel.svg';
import relianceLogo from '../../assets/partners/reliance.svg';
import adaniLogo from '../../assets/partners/adani.svg';
import adityaBirlaLogo from '../../assets/partners/aditya_birla.svg';
import godrejLogo from '../../assets/partners/godrej.svg';
import indianOilLogo from '../../assets/partners/indian_oil.svg';
import hindustanPetroleumLogo from '../../assets/partners/hindustan_petroleum.svg';
import bhushanPowerLogo from '../../assets/partners/bhushan_power.svg';
import haldiaPetrochemicalsLogo from '../../assets/partners/haldia_petrochemicals.svg';

const clientsData = [
  { id: 'tata-steel', name: 'Tata Steel', logo: tataSteelLogo },
  { id: 'larsen-toubro', name: 'Larsen & Toubro', logo: larsenToubroLogo },
  { id: 'jsw-steel', name: 'JSW Steel', logo: jswSteelLogo },
  { id: 'jindal-steel', name: 'Jindal Steel', logo: jindalSteelLogo },
  { id: 'reliance', name: 'Reliance Industries', logo: relianceLogo },
  { id: 'adani', name: 'Adani Group', logo: adaniLogo },
  { id: 'aditya-birla', name: 'Aditya Birla', logo: adityaBirlaLogo },
  { id: 'godrej', name: 'Godrej', logo: godrejLogo },
  { id: 'indian-oil', name: 'Indian Oil', logo: indianOilLogo },
  { id: 'hindustan-petroleum', name: 'Hindustan Petroleum', logo: hindustanPetroleumLogo },
  { id: 'bhushan-power', name: 'Bhushan Power', logo: bhushanPowerLogo },
  { id: 'haldia-petrochemicals', name: 'Haldia Petrochemicals', logo: haldiaPetrochemicalsLogo },
];

export default function OurClients() {
  return (
    <section className="clients-section" id="clients" aria-labelledby="clients-heading">
      <div className="container">
        {/* Section Heading Area */}
        <div className="clients-header">
          <div className="clients-eyebrow">
            <svg
              className="clients-eyebrow-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="clients-eyebrow-text">07 — INDUSTRIAL PARTNERSHIPS</span>
          </div>

          <h2 id="clients-heading" className="clients-title">
            Our Clients
          </h2>

          <p className="clients-subtitle">
            Trusted by businesses across industrial and engineering sectors. Supplying precision metal products, fittings, and flanges to premier industrial enterprises.
          </p>
        </div>

        {/* Outer Card Container with Grid */}
        <div className="clients-outer-box">
          <div className="clients-grid">
            {clientsData.map((client) => (
              <div key={client.id} className="client-card">
                <div className="client-logo-wrapper">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="client-logo"
                    loading="lazy"
                  />
                </div>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


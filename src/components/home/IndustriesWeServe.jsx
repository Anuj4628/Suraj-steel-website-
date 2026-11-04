import React from 'react';
import './IndustriesWeServe.css';

// Import optimized WebP assets from Serving Global Mission-Critical Sectors folder
import petrochemicalImg from '../../assets/Serving Global Mission-Critical Sectors/petrochemical.webp';
import precisionPipingImg from '../../assets/Serving Global Mission-Critical Sectors/precision industrial piping.webp';
import nuclearPowerImg from '../../assets/Serving Global Mission-Critical Sectors/nuclear and thermal power.webp';
import heavyEngineeringImg from '../../assets/Serving Global Mission-Critical Sectors/heavt engineering.webp';
import marineImg from '../../assets/Serving Global Mission-Critical Sectors/marine.webp';
import aerospaceImg from '../../assets/Serving Global Mission-Critical Sectors/aerospace and defence.webp';

const industriesData = [
  {
    id: 'petrochemical',
    title: 'Petrochemical & Refineries',
    category: 'Energy & Processing',
    image: petrochemicalImg,
    alt: 'Petrochemical refinery distillation towers and industrial piping infrastructure',
  },
  {
    id: 'precision-piping',
    title: 'Precision Industrial Piping',
    category: 'Process Plants',
    image: precisionPipingImg,
    alt: 'High-pressure stainless steel industrial piping, manifolds and process valves',
  },
  {
    id: 'nuclear-power',
    title: 'Nuclear & Thermal Power',
    category: 'Power Generation',
    image: nuclearPowerImg,
    alt: 'Nuclear and thermal power generation plant cooling towers and facilities',
  },
  {
    id: 'heavy-engineering',
    title: 'Heavy Engineering',
    category: 'Manufacturing & Plant',
    image: heavyEngineeringImg,
    alt: 'Heavy engineering automated manufacturing robotic systems and heavy machinery',
  },
  {
    id: 'marine-offshore',
    title: 'Marine & Offshore',
    category: 'Shipbuilding & Marine',
    image: marineImg,
    alt: 'Shipbuilding dockyard, ocean vessels, and offshore marine infrastructure',
  },
  {
    id: 'aerospace-defence',
    title: 'Aerospace & Defence',
    category: 'High-Precision Sectors',
    image: aerospaceImg,
    alt: 'Aerospace high-grade precision components and defense manufacturing',
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="industries-section" id="industries" aria-labelledby="industries-heading">
      <div className="container">
        {/* Section Heading Area */}
        <div className="industries-header">
          <div className="industries-eyebrow">
            <span className="industries-eyebrow-line" aria-hidden="true"></span>
            <span className="industries-eyebrow-text">INDUSTRIES WE SERVE</span>
          </div>

          <h2 id="industries-heading" className="industries-title">
            Serving <span className="industries-title-highlight">Critical Industries.</span>
          </h2>

          <p className="industries-subtitle">
            Reliable steel supply across industries that demand precision, durability and compliance.
          </p>
        </div>

        {/* Industrial Image Cards Grid */}
        <div className="industries-grid">
          {industriesData.map((item) => (
            <article key={item.id} className="industry-card">
              <div className="industry-card-media">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="industry-card-image"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="industry-card-scrim" aria-hidden="true" />
              </div>

              <div className="industry-card-content">
                <span className="industry-card-category">{item.category}</span>
                <h3 className="industry-card-title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ChevronRight,
  Clock,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  FileCheck,
  Truck,
  Flame,
  Droplets,
  Zap,
  Factory,
  Anchor,
  Layers,
} from 'lucide-react';
import './About.css';

// Warehouse & Stockyard Asset
import warehouseImg from '../../assets/about/warehouse-stockyard.webp';

// Application Images from Mission-Critical Sectors
import petrochemicalImg from '../../assets/Serving Global Mission-Critical Sectors/petrochemical.webp';
import precisionPipingImg from '../../assets/Serving Global Mission-Critical Sectors/precision industrial piping.webp';
import nuclearPowerImg from '../../assets/Serving Global Mission-Critical Sectors/nuclear and thermal power.webp';
import heavyEngineeringImg from '../../assets/Serving Global Mission-Critical Sectors/heavt engineering.webp';
import marineImg from '../../assets/Serving Global Mission-Critical Sectors/marine.webp';
import aerospaceImg from '../../assets/Serving Global Mission-Critical Sectors/aerospace and defence.webp';

export default function About() {
  // 8 Product Scope Categories matching Reference Image 2
  const productScope = [
    {
      id: 'rods-bars',
      title: 'Rods & Bars',
      desc: 'Precision stainless steel and high-nickel alloy round bars, hex bars, square rods, and flat bars for precision machining and industrial fabrication.',
      link: '/products',
    },
    {
      id: 'pipes-tubes',
      title: 'Pipes & Tubes',
      desc: 'Seamless and welded stainless steel, alloy steel, and carbon steel pipes and instrumentation tubes in standard schedules and custom lengths.',
      link: '/products',
    },
    {
      id: 'sheets-plates',
      title: 'Sheets & Plates',
      desc: 'Cold rolled sheets, hot rolled plates, coils, strips, and chequered plates available in diverse thicknesses, widths, and surface finishes.',
      link: '/products',
    },
    {
      id: 'flanges',
      title: 'Flanges',
      desc: 'Forged industrial flanges including Slip-On, Weld Neck, Blind, Socket Weld, Lap Joint, and Threaded configurations in ASME/ANSI standards.',
      link: '/products',
    },
    {
      id: 'fasteners',
      title: 'Fasteners',
      desc: 'High-tensile and corrosion-resistant industrial fasteners including heavy hex bolts, stud bolts, nuts, washers, and threaded rods.',
      link: '/products',
    },
    {
      id: 'butt-weld',
      title: 'Butt Weld Fittings',
      desc: 'Seamless and welded butt weld elbows (90° and 45°), equal and reducing tees, concentric and eccentric reducers, stub ends, and pipe caps.',
      link: '/products',
    },
    {
      id: 'forged-fittings',
      title: 'Forged Fittings',
      desc: 'High-pressure Class 3000, 6000, and 9000 forged socket weld and threaded (NPT/BSPT) pipe fittings, unions, couplings, and hex nipples.',
      link: '/products',
    },
    {
      id: 'ferrule-fittings',
      title: 'Ferrule Fittings',
      desc: 'Precision double-ferrule compression tube fittings for high-pressure instrumentation, chemical dosing, hydraulic, and pneumatic lines.',
      link: '/products',
    },
  ];

  // 3 Customer Service Pillars matching Reference Image 3
  const servicePillars = [
    {
      id: 'rapid-quote',
      title: 'Rapid Quotations & Communication',
      icon: Clock,
      colorClass: 'service-icon-red',
      desc: 'We understand project deadlines. Our sales desk responds to inquiries with detailed breakdowns of item pricing, lead time, and specification compliance within hours.',
    },
    {
      id: 'spec-match',
      title: 'Accurate Specification Match',
      icon: CheckCircle,
      colorClass: 'service-icon-blue',
      desc: 'Whether you need a specific schedule (SCH 10S to XXS), raised face flange serration, or specific MTC documentation, we verify details prior to dispatch.',
    },
    {
      id: 'packaging',
      title: 'Logistics & Packaging Integrity',
      icon: ShieldCheck,
      colorClass: 'service-icon-green',
      desc: 'Materials are packed with protective end caps, wooden crates, or bundle strappings to ensure pipes, precision bevels, and polished bars reach your worksite undamaged.',
    },
  ];

  // 6 Industrial Applications matching Reference Image 4
  const applications = [
    {
      id: 'oil-gas',
      title: 'Oil & Gas',
      image: petrochemicalImg,
      icon: Flame,
      desc: 'Upstream extraction, offshore platforms, subsea pipelines, and refinery piping requiring high-integrity corrosion-resistant pipes, valves, and forged flanges.',
      link: '/products',
    },
    {
      id: 'petrochemical',
      title: 'Petrochemical',
      image: precisionPipingImg,
      icon: Droplets,
      desc: 'Ethylene crackers, polymer units, and ammonia synthesis plants operating under elevated temperatures, pressures, and volatile hydrocarbon atmospheres.',
      link: '/products',
    },
    {
      id: 'chemical-processing',
      title: 'Chemical Processing',
      image: aerospaceImg,
      icon: Layers,
      desc: 'Severe acidic media, chlorine handling, and pharmaceutical manufacturing requiring high-nickel alloys (Inconel, Hastelloy) and Titanium.',
      link: '/products',
    },
    {
      id: 'power-gen',
      title: 'Power Generation',
      image: nuclearPowerImg,
      icon: Zap,
      desc: 'Supercritical thermal boilers, nuclear reactors, combined cycle plants, and steam turbine systems demanding creep-resistant alloy steels.',
      link: '/products',
    },
    {
      id: 'heavy-eng',
      title: 'Heavy Engineering',
      image: heavyEngineeringImg,
      icon: Factory,
      desc: 'Heavy industrial machinery fabrication, pressure vessels, heat exchangers, structural framing, and specialized automated mechanical assemblies.',
      link: '/products',
    },
    {
      id: 'marine',
      title: 'Marine & Offshore',
      image: marineImg,
      icon: Anchor,
      desc: 'Seawater cooling circuits, ballast water piping, naval vessels, and offshore exploration platforms requiring marine-grade stainless steels.',
      link: '/products',
    },
  ];

  return (
    <div className="about-page">
      {/* 1. TOP HERO BANNER */}
      <section className="about-hero-banner" aria-label="About Page Header">
        <div className="container">
          <div className="about-banner-content">
            <div className="about-badge">
              <Shield size={14} className="about-badge-icon" aria-hidden="true" />
              <span>ABOUT SURAJ PIPE AND FITTING</span>
            </div>

            <h1 className="about-banner-title">About Suraj Pipe And Fitting</h1>

            <p className="about-banner-subtitle">
              Supplying stainless steel, carbon steel, alloy steel, and specialty nickel alloys with verified specifications, prompt communication, and dependable service.
            </p>
          </div>
        </div>

        {/* Red Accent Divider Line */}
        <div className="banner-red-line" aria-hidden="true" />
      </section>

      {/* Breadcrumb Navigation */}
      <div className="about-breadcrumb-bar">
        <div className="container">
          <nav className="about-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <span className="breadcrumb-current" aria-current="page">About Us</span>
          </nav>
        </div>
      </div>

      {/* 2. BUSINESS OVERVIEW SECTION */}
      <section className="about-overview-section" aria-labelledby="overview-heading">
        <div className="container">
          <div className="overview-grid">
            {/* Left Column: Narrative & Values */}
            <div className="overview-content">
              <div className="about-eyebrow-badge">
                <span>BUSINESS OVERVIEW</span>
              </div>

              <h2 id="overview-heading" className="overview-title">
                Dedicated Stockist & Supplier for <span className="highlight-navy">Industrial Metals</span>
              </h2>

              <p className="overview-lead">
                <strong>SURAJ PIPE AND FITTING</strong> operates as a dedicated metal trading and stocking enterprise located in the heart of Mumbai’s historic industrial metals marketplace at Khetwadi, Girgaon.
              </p>

              <p className="overview-body">
                We cater to engineering contractors, chemical processing facilities, refineries, thermal power plants, and original equipment manufacturers (OEMs). By maintaining close relationships with premier domestic and international mills, we ensure every heat number, schedule, and dimension conforms strictly to ASME, ASTM, DIN, and EN specifications.
              </p>

              {/* Key Competence Highlights */}
              <div className="overview-highlights">
                <div className="highlight-item">
                  <FileCheck size={20} className="highlight-icon" />
                  <div>
                    <h4 className="highlight-title">100% Certified Traceability</h4>
                    <p className="highlight-desc">Every dispatch is accompanied by genuine Mill Test Certificates (EN 10204 3.1) and PMI test records.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <Truck size={20} className="highlight-icon" />
                  <div>
                    <h4 className="highlight-title">Prompt Domestic & Global Dispatch</h4>
                    <p className="highlight-desc">Strategic warehousing near Mumbai logistics corridors ensures rapid 24-48 hour order execution.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Warehouse Photograph */}
            <div className="overview-media">
              <div className="overview-image-wrapper">
                <img
                  src={warehouseImg}
                  alt="Suraj Pipe And Fitting industrial inventory warehouse and pipe racks"
                  className="overview-image"
                  loading="eager"
                  width="600"
                  height="450"
                />
                <div className="overview-floating-tag">
                  <div className="tag-dot" />
                  <span>Ready Stock in Mumbai Facility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SUPPLIED PRODUCT SCOPE */}
      <section className="product-scope-section" aria-labelledby="scope-heading">
        <div className="container">
          <div className="section-centered-header">
            <div className="about-eyebrow-badge">
              <span>PORTFOLIO</span>
            </div>
            <h2 id="scope-heading" className="section-main-heading">
              Our Supplied Product Scope
            </h2>
            <p className="section-main-subtitle">
              An all-inclusive inventory covering major piping, flanging, structural, and instrumentation components.
            </p>
          </div>

          <div className="product-scope-grid">
            {productScope.map((item) => (
              <article key={item.id} className="scope-card">
                <h3 className="scope-card-title">{item.title}</h3>
                <p className="scope-card-desc">{item.desc}</p>
                <Link to={item.link} className="scope-card-link">
                  <span>View Specifications</span>
                  <ChevronRight size={14} className="scope-link-arrow" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR CUSTOMER SERVICE APPROACH */}
      <section className="service-approach-section" aria-labelledby="service-heading">
        <div className="container">
          <div className="section-centered-header">
            <div className="about-eyebrow-badge">
              <span>OPERATIONAL FOCUS</span>
            </div>
            <h2 id="service-heading" className="section-main-heading">
              Our Customer Service Approach
            </h2>
            <p className="section-main-subtitle">
              Clear principles guiding every quotation, material dispatch, and client interaction.
            </p>
          </div>

          <div className="service-pillars-grid">
            {servicePillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div key={pillar.id} className="service-pillar-card">
                  <div className={`service-icon-box ${pillar.colorClass}`} aria-hidden="true">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="service-pillar-title">{pillar.title}</h3>
                  <p className="service-pillar-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. RELEVANT INDUSTRIAL APPLICATIONS */}
      <section className="applications-section" aria-labelledby="applications-heading">
        <div className="container">
          <div className="section-centered-header">
            <div className="about-eyebrow-badge">
              <span>INDUSTRY EXPERIENCE</span>
            </div>
            <h2 id="applications-heading" className="section-main-heading">
              Relevant Industrial Applications
            </h2>
            <p className="section-main-subtitle">
              Our supplied raw materials and engineered metal products serve essential processing, mechanical, and structural applications across major sectors:
            </p>
          </div>

          <div className="applications-grid">
            {applications.map((app) => {
              const IconComp = app.icon;
              return (
                <article key={app.id} className="app-card">
                  <div className="app-card-media">
                    <img
                      src={app.image}
                      alt={`${app.title} industrial application`}
                      className="app-card-image"
                      loading="lazy"
                      width="350"
                      height="220"
                    />
                  </div>

                  <div className="app-card-content">
                    <div className="app-card-header">
                      <div className="app-icon-wrapper" aria-hidden="true">
                        <IconComp size={16} />
                      </div>
                      <h3 className="app-card-title">{app.title}</h3>
                    </div>

                    <p className="app-card-desc">{app.desc}</p>

                    <Link to={app.link} className="app-card-link">
                      <span>Suitable Products</span>
                      <ChevronRight size={13} className="app-link-arrow" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

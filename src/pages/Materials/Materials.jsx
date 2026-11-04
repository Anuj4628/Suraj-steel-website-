import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { materials } from '../../data/productCatalog';
import { materialHeroImages } from '../../data/productAssets';
import './Materials.css';

export default function Materials() {
  return (
    <div className="materials-listing-page">
      {/* 1. HERO BANNER */}
      <section className="mat-hero-banner" aria-label="Materials Catalog Header">
        <div className="container">
          <div className="mat-hero-content">
            <div className="mat-badge">
              <ShieldCheck size={14} className="mat-badge-icon" aria-hidden="true" />
              <span>SURAJ PIPING — 9 INDUSTRIAL METALLURGICAL FAMILIES</span>
            </div>

            <h1 className="mat-hero-title">
              Explore Our <span className="highlight-red">Materials</span>
            </h1>

            <p className="mat-hero-desc">
              Discover quality metal materials and explore the products, grades, and specifications available for your industrial requirements.
            </p>

            <div className="mat-specs-strip">
              <div className="mat-strip-item">
                <span className="mat-strip-val">100% Verified</span>
                <span className="mat-strip-label">Direct Mill Certification</span>
              </div>
              <div className="mat-strip-item">
                <span className="mat-strip-val">9 Material Groups</span>
                <span className="mat-strip-label">Complete Chemical Compliance</span>
              </div>
              <div className="mat-strip-item">
                <span className="mat-strip-val">ASME / DIN / EN</span>
                <span className="mat-strip-label">International Standards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Red Bottom Divider */}
        <div className="banner-red-line" aria-hidden="true" />
      </section>

      {/* 2. BREADCRUMB BAR */}
      <div className="mat-breadcrumb-bar">
        <div className="container">
          <nav className="mat-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <span className="breadcrumb-current" aria-current="page">Materials</span>
          </nav>
        </div>
      </div>

      {/* 3. 9 MATERIALS GRID SECTION */}
      <section className="mat-cards-section" aria-labelledby="materials-catalog-heading">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow-tag">AUTHENTIC INDUSTRIAL SCOPE</span>
            <h2 id="materials-catalog-heading" className="section-title-clean">
              Select an Industrial Material Family
            </h2>
            <p className="section-subtitle-clean">
              Inspect dedicated product categories, certified chemical compositions, mechanical ratings, and ASTM/ASME specifications.
            </p>
          </div>

          <div className="mat-cards-grid">
            {materials.map((mat) => {
              const image = materialHeroImages[mat.id] || materialHeroImages['stainless-steel'];

              return (
                <article key={mat.id} className="mat-catalog-card">
                  {/* Media Container */}
                  <div className="mat-card-media">
                    <img
                      src={image}
                      alt={mat.name}
                      className="mat-card-img"
                      loading="lazy"
                      width="380"
                      height="240"
                    />
                    <span className="mat-card-badge">{mat.badge}</span>
                  </div>

                  {/* Body Content */}
                  <div className="mat-card-body">
                    <h3 className="mat-card-title">{mat.name}</h3>
                    <p className="mat-card-desc">{mat.shortDesc}</p>

                    {/* Families Chips */}
                    {mat.families && mat.families.length > 0 && (
                      <div className="mat-families-wrap">
                        <span className="mat-families-label">Scope:</span>
                        <div className="mat-families-chips">
                          {mat.families.slice(0, 2).map((fam, idx) => (
                            <span key={idx} className="mat-chip-pill">{fam}</span>
                          ))}
                          {mat.families.length > 2 && (
                            <span className="mat-chip-pill-more">+{mat.families.length - 2} more</span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Action Button Aligned at Bottom */}
                    <div className="mat-card-action">
                      <Link
                        to={`/materials/${mat.id}`}
                        className="mat-explore-btn"
                        aria-label={`Explore ${mat.name} Products`}
                      >
                        <span>Explore Material</span>
                        <ArrowRight size={15} className="btn-arrow" aria-hidden="true" />
                      </Link>
                    </div>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { products } from '../../data/productCatalog';
import { productHeroImages } from '../../data/productAssets';
import './Products.css';

export default function Products() {
  return (
    <div className="products-catalog-page">
      {/* 1. HERO BANNER */}
      <section className="catalog-hero-banner" aria-label="Products Catalog Header">
        <div className="container">
          <div className="catalog-banner-content">
            <div className="catalog-badge">
              <Layers size={14} className="badge-icon" aria-hidden="true" />
              <span>INDUSTRIAL MANUFACTURING & SUPPLY CATALOG</span>
            </div>

            <h1 className="catalog-banner-title">Precision Industrial Products</h1>

            <p className="catalog-banner-subtitle">
              Comprehensive inventory of seamless & welded pipes, buttweld fittings, forged flanges, high-pressure forged fittings, industrial fasteners, sheets, plates, and precision round bars.
            </p>
          </div>
        </div>

        {/* Brand Red Bottom Divider */}
        <div className="banner-red-line" aria-hidden="true" />
      </section>

      {/* Breadcrumb Navigation */}
      <div className="catalog-breadcrumb-bar">
        <div className="container">
          <nav className="catalog-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <span className="breadcrumb-current" aria-current="page">Products</span>
          </nav>
        </div>
      </div>

      {/* 2. 7 PRODUCT CATEGORIES SHOWCASE */}
      <section className="catalog-categories-section" aria-labelledby="catalog-categories-heading">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow-tag">7 CORE PRODUCT CATEGORIES</span>
            <h2 id="catalog-categories-heading" className="section-title-large">
              Browse by Product Category
            </h2>
            <p className="section-subtitle-text">
              Select any product category below to view all available materials, alloy grades, technical specifications, and dimensional standards.
            </p>
          </div>

          <div className="catalog-categories-grid">
            {products.map((product, idx) => {
              const heroImage = productHeroImages[product.id];
              return (
                <article key={product.id} className="category-card">
                  <div className="category-card-media">
                    <img
                      src={heroImage}
                      alt={product.name}
                      className="category-card-image"
                      loading="lazy"
                      width="400"
                      height="260"
                    />
                    <span className="category-index-badge">{String(idx + 1).padStart(2, '0')}</span>
                  </div>

                  <div className="category-card-body">
                    <h3 className="category-card-title">{product.name}</h3>
                    <p className="category-card-desc">{product.shortDesc}</p>

                    <div className="category-spec-preview">
                      <div className="spec-item">
                        <span className="spec-label">Sizes:</span>
                        <span className="spec-val">{product.sizeRange.split('|')[0]}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Standards:</span>
                        <span className="spec-val">{product.standards.slice(0, 2).join(', ')}</span>
                      </div>
                    </div>

                    <Link to={`/products/${product.id}`} className="category-card-cta">
                      <span>Explore Materials</span>
                      <ArrowRight size={15} className="cta-arrow" aria-hidden="true" />
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

import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { products, materials, getProductMaterialInfo } from '../../data/productCatalog';
import { getProductMaterialImage } from '../../data/productAssets';
import { getProductMaterialPath } from '../../data/seoSlugs';
import './ProductMaterials.css';

export default function ProductMaterials() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === productId);

  // If invalid product id, redirect to main catalog
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="product-materials-page">
      {/* 1. HERO BANNER */}
      <section className="pm-hero-banner" aria-label="Product Materials Header">
        <div className="container">
          <div className="pm-banner-content">
            <div className="pm-badge">
              <ShieldCheck size={14} className="badge-icon" aria-hidden="true" />
              <span>{product.name.toUpperCase()} — 9 INDUSTRIAL MATERIAL GRADES</span>
            </div>

            <h1 className="pm-banner-title">
              {product.name} <span className="highlight-red">Materials</span>
            </h1>

            <p className="pm-banner-subtitle">
              {product.shortDesc} Explore our comprehensive inventory across nine primary material families engineered to ASME, ASTM, and DIN standards.
            </p>

            <div className="pm-specs-strip">
              <div className="strip-item">
                <span className="strip-label">Standard Sizes:</span>
                <span className="strip-val">{product.sizeRange.split('|')[0]}</span>
              </div>
              <div className="strip-item">
                <span className="strip-label">Pressure Ratings:</span>
                <span className="strip-val">{product.pressureRatings.split('(')[0]}</span>
              </div>
              <div className="strip-item">
                <span className="strip-label">Governing Standards:</span>
                <span className="strip-val">{product.standards.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Red Bottom Divider */}
        <div className="banner-red-line" aria-hidden="true" />
      </section>

      {/* Breadcrumb Navigation */}
      <div className="pm-breadcrumb-bar">
        <div className="container">
          <nav className="pm-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <Link to="/products" className="breadcrumb-link">Products</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <span className="breadcrumb-current" aria-current="page">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* 2. 9 MATERIAL CARDS GRID */}
      <section className="pm-materials-section" aria-labelledby="materials-grid-heading">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow-tag">NINE METALLURGICAL GRADES</span>
            <h2 id="materials-grid-heading" className="section-title-large">
              Select Material for {product.name}
            </h2>
            <p className="section-subtitle-text">
              Choose a material option below to inspect product-specific chemical compositions, mechanical ratings, available types, and ASTM / ASME grade specifications.
            </p>
          </div>

          <div className="pm-materials-grid">
            {materials.map((material) => {
              const materialInfo = getProductMaterialInfo(product.id, material.id);
              const cardImage = getProductMaterialImage(product.id, material.id);

              return (
                <article key={material.id} className="material-card">
                  <div className="material-card-media">
                    <img
                      src={cardImage}
                      alt={`${material.name} ${product.name}`}
                      className="material-card-image"
                      loading="lazy"
                      width="380"
                      height="240"
                    />
                    <span className="material-card-badge">{material.badge}</span>
                  </div>

                  <div className="material-card-body">
                    <h3 className="material-card-title">{material.name}</h3>
                    <p className="material-card-desc">
                      {materialInfo?.shortDesc || material.shortDesc}
                    </p>

                    <div className="material-features-list">
                      <div className="feat-item">
                        <CheckCircle2 size={13} className="feat-icon" />
                        <span>Certified EN 10204 3.1 MTC Traceability</span>
                      </div>
                      <div className="feat-item">
                        <CheckCircle2 size={13} className="feat-icon" />
                        <span>Guaranteed ASME / ASTM Dimension Compliance</span>
                      </div>
                    </div>

                    <Link
                      to={getProductMaterialPath(product.id, material.id)}
                      className="material-explore-btn"
                    >
                      <span>Explore Product</span>
                      <ArrowRight size={15} className="btn-arrow" aria-hidden="true" />
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


import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';
import { getMaterial, getProductsForMaterial, materials } from '../../data/productCatalog';
import { materialHeroImages, getProductMaterialImage } from '../../data/productAssets';
import { getProductMaterialPath } from '../../data/seoSlugs';
import './MaterialProducts.css';

export default function MaterialProducts() {
  const { materialId } = useParams();

  const material = getMaterial(materialId);

  // If invalid material id, redirect to main materials listing
  if (!material) {
    return <Navigate to="/materials" replace />;
  }

  const productsList = getProductsForMaterial(material.id);
  const heroImage = materialHeroImages[material.id] || materialHeroImages['stainless-steel'];
  const otherMaterials = materials.filter((m) => m.id !== material.id);

  return (
    <div className="material-products-page">
      {/* 1. HERO BANNER */}
      <section className="mp-hero-banner" aria-label="Material Header">
        <div className="container">
          <div className="mp-banner-grid">
            <div className="mp-banner-content">
              <div className="mp-badge">
                <ShieldCheck size={14} className="badge-icon" aria-hidden="true" />
                <span>{material.badge} — VERIFIED MILL SUPPLY</span>
              </div>

              <h1 className="mp-banner-title">
                {material.name} <span className="highlight-red">Products</span>
              </h1>

              <p className="mp-banner-subtitle">
                {material.shortDesc} Explore our comprehensive catalogue of {material.name.toLowerCase()} fittings, flanges, fasteners, pipes, sheets, and bars manufactured to stringent ASME, ASTM, and DIN standards.
              </p>

              {/* Material Families Chips */}
              {material.families && material.families.length > 0 && (
                <div className="mp-families-strip">
                  <span className="families-title">Metallurgical Scope:</span>
                  <div className="families-chips-list">
                    {material.families.map((fam, idx) => (
                      <span key={idx} className="mp-family-pill">{fam}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Showcase Media */}
            <div className="mp-banner-media">
              <div className="mp-media-card">
                <img
                  src={heroImage}
                  alt={`${material.name} Raw Material Stock`}
                  className="mp-hero-img"
                  loading="eager"
                  width="480"
                  height="320"
                />
                <div className="mp-media-tag">
                  <span className="status-dot-green"></span>
                  <span>100% PMI Inspected &amp; Mill Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Red Bottom Divider */}
        <div className="banner-red-line" aria-hidden="true" />
      </section>

      {/* 2. BREADCRUMB BAR */}
      <div className="mp-breadcrumb-bar">
        <div className="container">
          <nav className="mp-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <Link to="/materials" className="breadcrumb-link">Materials</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <span className="breadcrumb-current" aria-current="page">{material.name}</span>
          </nav>
        </div>
      </div>

      {/* 3. PRODUCT CARDS GRID AVAILABLE IN THIS MATERIAL */}
      <section className="mp-products-section" aria-labelledby="material-products-heading">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow-tag">PRODUCT SCOPE</span>
            <h2 id="material-products-heading" className="section-title-clean">
              {material.name} Product Categories
            </h2>
            <p className="section-subtitle-clean">
              Select a product category below to view specific dimensional tables, available grades, configurations, and technical specifications in {material.name}.
            </p>
          </div>

          <div className="mp-products-grid">
            {productsList.map((product) => {
              const productImage = getProductMaterialImage(product.id, material.id);

              return (
                <article key={product.id} className="mp-product-card">
                  {/* Product Media */}
                  <div className="mp-card-media">
                    <img
                      src={productImage}
                      alt={`${material.name} ${product.name}`}
                      className="mp-card-img"
                      loading="lazy"
                      width="380"
                      height="240"
                    />
                    <span className="mp-card-tag">{product.name}</span>
                  </div>

                  {/* Product Content */}
                  <div className="mp-card-body">
                    <h3 className="mp-card-title">{product.title}</h3>
                    <p className="mp-card-desc">{product.shortDesc}</p>

                    {/* Technical Summary */}
                    <div className="mp-card-specs">
                      <div className="mp-spec-item">
                        <span className="spec-lbl">Sizes:</span>
                        <span className="spec-txt">{product.sizeRange.split('|')[0]}</span>
                      </div>
                      <div className="mp-spec-item">
                        <span className="spec-lbl">Rating:</span>
                        <span className="spec-txt">{product.pressureRatings.split('(')[0]}</span>
                      </div>
                    </div>

                    {/* Explore Product Button Aligned to Bottom */}
                    <div className="mp-card-action">
                      <Link
                        to={getProductMaterialPath(product.id, material.id)}
                        className="mp-explore-btn"
                        aria-label={`Explore ${product.title}`}
                      >
                        <span>Explore Product</span>
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

      {/* 4. OTHER MATERIALS SWITCHER STRIP */}
      {otherMaterials.length > 0 && (
        <section className="mp-other-materials-section" aria-label="Other Materials">
          <div className="container">
            <div className="other-mat-box">
              <span className="other-mat-title">Explore Other Material Families:</span>
              <div className="other-mat-pills">
                {otherMaterials.map((other) => (
                  <Link
                    key={other.id}
                    to={`/materials/${other.id}`}
                    className="other-mat-pill-btn"
                  >
                    <span>{other.name}</span>
                    <ChevronRight size={13} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}


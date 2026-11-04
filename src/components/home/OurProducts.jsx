import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { featuredProducts } from '../../data/products';
import './OurProducts.css';

export default function OurProducts() {
  return (
    <section className="our-products-section" id="our-products" aria-labelledby="products-heading">
      <div className="container">
        {/* Section Header with Center Alignment */}
        <div className="products-section-header">
          <div className="products-eyebrow">
            <span className="products-eyebrow-dot" aria-hidden="true"></span>
            <span className="products-eyebrow-text">OUR PRODUCT RANGE</span>
          </div>

          <h2 id="products-heading" className="products-main-heading">
            Explore Our Premium Product Range
          </h2>

          <div className="products-heading-accent-bar" aria-hidden="true"></div>

          <p className="products-description">
            Discover our range of precision-engineered stainless steel products, designed to meet the needs of demanding industrial and engineering applications.
          </p>
        </div>

        {/* Product Cards Grid: 4 columns on desktop */}
        <div className="products-grid">
          {featuredProducts.map((product, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <article key={product.id} className="product-card">
                <Link
                  to={product.link}
                  className="product-card-main-link"
                  aria-label={`Explore ${product.title}`}
                >
                  {/* Top Image Container */}
                  <div className="product-image-container">
                    {/* Top-Left Circular Number Badge (01, 02, etc.) */}
                    <span className="product-number-badge" aria-label={`Product ${formattedIndex}`}>
                      {formattedIndex}
                    </span>

                    {/* Top-Right Circular Arrow Button */}
                    <div className="product-corner-arrow-btn" aria-hidden="true">
                      <ArrowUpRight size={17} className="corner-arrow-icon" />
                    </div>

                    {/* Product Photograph */}
                    <img
                      src={product.image}
                      alt={product.alt || product.title}
                      className="product-card-image"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content Body */}
                  <div className="product-card-body">
                    {/* Product Title */}
                    <h3 className="product-card-title">{product.title}</h3>

                    {/* Short Description */}
                    <p className="product-card-desc">{product.description}</p>

                    {/* Subtle Horizontal Divider */}
                    <div className="product-card-divider" aria-hidden="true"></div>

                    {/* Bottom Action: EXPLORE PRODUCTS → */}
                    <div className="product-card-footer">
                      <span className="explore-action-label">EXPLORE PRODUCTS</span>
                      <span className="explore-action-icon">
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

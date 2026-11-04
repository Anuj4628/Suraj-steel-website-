import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Info,
  ExternalLink,
  MessageCircle,
  FileText,
  Award,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { products, materials, getProductMaterialInfo } from '../../data/productCatalog';
import { getProductMaterialImage } from '../../data/productAssets';
import { getGradeMetadata } from '../../data/gradeMetadata';
import { extractMaterialId, extractGradeId, getProductMaterialPath, getGradeDetailPath } from '../../data/seoSlugs';
import './GradeDetail.css';

export default function GradeDetail() {
  const { productId, materialId, gradeId } = useParams();

  const cleanMaterialId = extractMaterialId(materialId);
  const product = products.find((p) => p.id === productId);
  const material = materials.find((m) => m.id === cleanMaterialId);

  // If invalid product or material, redirect
  if (!product) return <Navigate to="/products" replace />;
  if (!material) return <Navigate to={`/products/${productId}`} replace />;

  const info = getProductMaterialInfo(productId, cleanMaterialId);
  const cleanGradeId = extractGradeId(gradeId, info?.grades || []);
  const grade = info?.grades?.find((g) => g.id === cleanGradeId);

  // If grade not found, navigate back to material detail
  if (!grade) return <Navigate to={getProductMaterialPath(product.id, material.id)} replace />;

  const heroImage = getProductMaterialImage(productId, cleanMaterialId);
  const metadata = getGradeMetadata(grade.id, grade.designation);

  const phonePrimary = '+919920194838';
  const phoneSecondary = '+917045173574';
  const whatsappUrl = `https://wa.me/919920194838?text=${encodeURIComponent(
    `Hello Suraj Pipe And Fitting, I am inquiring about genuine mill pricing, delivery time, and stock availability for Grade ${grade.pillLabel || grade.designation} ${material.name} ${product.name}.`
  )}`;

  return (
    <div className="grade-detail-page">
      {/* 1. BREADCRUMB BAR */}
      <div className="gd-breadcrumb-bar">
        <div className="container">
          <nav className="gd-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <Link to="/products" className="breadcrumb-link">Products</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <Link to={`/products/${product.id}`} className="breadcrumb-link">{product.name}</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <Link to={getProductMaterialPath(product.id, material.id)} className="breadcrumb-link">{material.name}</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <span className="breadcrumb-current" aria-current="page">{grade.pillLabel || grade.designation}</span>
          </nav>
        </div>
      </div>

      {/* 2. TOP GRADE SHOWCASE CARD */}
      <section className="gd-showcase-section" aria-label="Grade Showcase and Selector">
        <div className="container">
          <div className="gd-showcase-card">
            {/* Left Media Column */}
            <div className="gd-showcase-media">
              <div className="gd-showcase-img-wrap">
                <img
                  src={heroImage}
                  alt={`${grade.designation} ${product.name}`}
                  className="gd-showcase-img"
                  loading="eager"
                  width="540"
                  height="400"
                />
                <div className="gd-pill-tag gd-pill-top-left">
                  <span>{product.name}</span>
                </div>
                <div className="gd-pill-tag gd-pill-bottom-right">
                  <span className="status-dot-green"></span>
                  <span>Ready Stock &amp; Mill Sourced</span>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="gd-showcase-info">
              {/* Scope Badge */}
              <div className="gd-scope-badge">
                <ShieldCheck size={15} className="scope-icon" aria-hidden="true" />
                <span>ISO 9001:2015 VERIFIED SCOPE • EN 10204 3.1 MTC CERTIFIED</span>
              </div>

              {/* Main Heading */}
              <h1 className="gd-showcase-title">
                {grade.designation} <span className="title-product-tag">{product.name}</span>
              </h1>

              {/* UNS & Material Family Pill */}
              <div className="gd-meta-strip">
                <span className="meta-pill meta-uns">{metadata.uns}</span>
                <span className="meta-pill meta-mat">{material.name} Family</span>
                <span className="meta-pill meta-wnr">W.Nr. {metadata.wnr}</span>
              </div>

              {/* Stockist Description */}
              <p className="gd-showcase-desc">
                Suraj Pipe And Fitting is an authentic manufacturer, stockist, and global exporter of <strong>{grade.designation} {product.name.toLowerCase()}</strong>. Sourced directly from ISO-certified premier mills, our materials comply with ASTM, ASME, DIN, and EN specifications with complete chemical, mechanical, and 100% Positive Material Identification (PMI) traceability.
              </p>

              {/* Switch to Another Grade Bar */}
              {info.grades && info.grades.length > 1 && (
                <div className="gd-grade-selector-wrap">
                  <div className="gd-grade-selector-header">
                    <span className="gd-selector-label">
                      <Sparkles size={13} className="selector-icon-red" aria-hidden="true" />
                      AVAILABLE {material.name.toUpperCase()} GRADES (CLICK TO SWITCH):
                    </span>
                    <span className="gd-selector-hint">Direct spec pages</span>
                  </div>

                  <div className="gd-grade-pills-grid" role="tablist" aria-label="Available grades">
                    {info.grades.map((g) => {
                      const isActive = g.id === grade.id;
                      return (
                        <Link
                          key={g.id}
                          to={getGradeDetailPath(product.id, material.id, g.id)}
                          className={`grade-pill-btn ${isActive ? 'active' : ''}`}
                          title={`View ${g.pillLabel || g.designation} technical page`}
                        >
                          <span className="pill-name">{g.pillLabel || g.designation}</span>
                          <Info size={12} className="pill-info-icon" aria-hidden="true" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 3 Call-To-Action Buttons */}
              <div className="gd-showcase-actions">
                <a
                  href={`https://wa.me/919920194838?text=${encodeURIComponent(
                    `Hello Suraj Pipe And Fitting, please provide a commercial quotation for ${grade.designation} ${product.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gd-action-btn gd-btn-red"
                >
                  <span>Request a Quote ({grade.pillLabel || 'Instant'})</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gd-action-btn gd-btn-green"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>WhatsApp Technical Desk</span>
                </a>

                <a href={`tel:${phonePrimary}`} className="gd-action-btn gd-btn-outline">
                  <Phone size={15} aria-hidden="true" />
                  <span>Call +91 99201 94838</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: METALLURGICAL OVERVIEW & CHEMICAL COMPOSITION */}
      <section className="gd-metallurgy-section" aria-labelledby="metallurgy-heading">
        <div className="container">
          <div className="gd-section-header">
            <span className="section-eyebrow-tag">METALLURGICAL ANALYSIS &amp; CHEMISTRY</span>
            <h2 id="metallurgy-heading" className="section-title-clean">
              Chemical Composition &amp; Corrosion Behavior of {grade.designation}
            </h2>
            <p className="section-subtitle-clean">
              {grade.fullDescription || grade.shortSpec}
            </p>
          </div>

          <div className="gd-chemistry-card">
            <div className="chem-card-header">
              <span className="chem-header-title">Elemental Chemistry Breakdown (% By Weight)</span>
              <span className="chem-header-badge">Governing ASTM / ASME Standard</span>
            </div>

            {grade.chemistry && Object.keys(grade.chemistry).length > 0 ? (
              <div className="chem-table-scroll">
                <table className="gd-chem-table" aria-label="Chemical composition table">
                  <thead>
                    <tr>
                      <th>Element</th>
                      {Object.keys(grade.chemistry).map((elem) => (
                        <th key={elem}>{elem}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Composition (% w/w)</strong></td>
                      {Object.values(grade.chemistry).map((val, idx) => (
                        <td key={idx}>{val}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="no-chem-note">Verified according to standard ASTM mill chemical composition requirements.</p>
            )}

            <div className="chem-card-footer">
              <p className="chem-footer-note">
                <strong>Corrosion &amp; Heat Integrity:</strong> Chemical composition carefully balanced with tight controls over tramp elements, ensuring maximum resistance to localized pitting, stress-corrosion cracking, and thermal oxidation in corrosive service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: MECHANICAL & PHYSICAL PROPERTIES */}
      <section className="gd-properties-section" aria-labelledby="properties-heading">
        <div className="container">
          <div className="gd-section-header">
            <span className="section-eyebrow-tag">GUARANTEED STRENGTH &amp; CONSTANTS</span>
            <h2 id="properties-heading" className="section-title-clean">
              Mechanical Ratings &amp; Physical Characteristics
            </h2>
            <p className="section-subtitle-clean">
              Certified room temperature test results conforming to ASTM E8, ASTM E10, and ASTM E23 standards.
            </p>
          </div>

          <div className="gd-props-dual-grid">
            {/* Left: Mechanical Properties Table */}
            <div className="gd-prop-card">
              <div className="prop-card-head">
                <h3 className="prop-card-title">Mechanical Properties (Room Temperature)</h3>
                <span className="prop-badge">ASTM E8 Tested</span>
              </div>

              <div className="prop-list-table">
                {grade.properties?.tensile && (
                  <div className="prop-row-item">
                    <span className="prop-item-name">Tensile Strength (Rm)</span>
                    <span className="prop-item-val highlight">{grade.properties.tensile}</span>
                    <span className="prop-item-test">ASTM E8 / ISO 6892</span>
                  </div>
                )}
                {grade.properties?.yield && (
                  <div className="prop-row-item">
                    <span className="prop-item-name">Yield Strength (Rp 0.2%)</span>
                    <span className="prop-item-val highlight">{grade.properties.yield}</span>
                    <span className="prop-item-test">ASTM E8 / ISO 6892</span>
                  </div>
                )}
                {grade.properties?.elongation && (
                  <div className="prop-row-item">
                    <span className="prop-item-name">Elongation (A5 Gauge Length)</span>
                    <span className="prop-item-val">{grade.properties.elongation}</span>
                    <span className="prop-item-test">50mm Gauge Length</span>
                  </div>
                )}
                {grade.properties?.hardness && (
                  <div className="prop-row-item">
                    <span className="prop-item-name">Hardness (HBW / HRc)</span>
                    <span className="prop-item-val">{grade.properties.hardness}</span>
                    <span className="prop-item-test">ASTM E10 / E18</span>
                  </div>
                )}
                {grade.properties?.impact && (
                  <div className="prop-row-item">
                    <span className="prop-item-name">Charpy V-Notch Impact</span>
                    <span className="prop-item-val">{grade.properties.impact}</span>
                    <span className="prop-item-test">ASTM E23 (-46°C / -196°C)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Physical & Thermal Constants */}
            <div className="gd-prop-card">
              <div className="prop-card-head">
                <h3 className="prop-card-title">Physical &amp; Thermal Properties</h3>
                <span className="prop-badge">Engineering Constants</span>
              </div>

              <div className="prop-list-table">
                <div className="prop-row-item">
                  <span className="prop-item-name">Density (at 20°C)</span>
                  <span className="prop-item-val">{metadata.density}</span>
                  <span className="prop-item-test">Standard Value</span>
                </div>
                <div className="prop-row-item">
                  <span className="prop-item-name">Melting Temperature Range</span>
                  <span className="prop-item-val">{metadata.meltingRange}</span>
                  <span className="prop-item-test">Thermal Limit</span>
                </div>
                <div className="prop-row-item">
                  <span className="prop-item-name">Modulus of Elasticity</span>
                  <span className="prop-item-val">{metadata.elasticModulus}</span>
                  <span className="prop-item-test">Tension (Young's)</span>
                </div>
                <div className="prop-row-item">
                  <span className="prop-item-name">Thermal Conductivity</span>
                  <span className="prop-item-val">{metadata.thermalConductivity}</span>
                  <span className="prop-item-test">Heat Dissipation</span>
                </div>
                <div className="prop-row-item">
                  <span className="prop-item-name">Magnetic Permeability</span>
                  <span className="prop-item-val">Non-magnetic / Ferromagnetic</span>
                  <span className="prop-item-test">In Annealed State</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: INTERNATIONAL EQUIVALENT SPECIFICATIONS */}
      <section className="gd-equivalents-section" aria-labelledby="equivalents-heading">
        <div className="container">
          <div className="gd-section-header">
            <span className="section-eyebrow-tag">CROSS-REFERENCE STANDARDS</span>
            <h2 id="equivalents-heading" className="section-title-clean">
              International Equivalents for {grade.designation}
            </h2>
            <p className="section-subtitle-clean">
              Globally recognized material grade designations cross-referenced across major international engineering codes.
            </p>
          </div>

          <div className="gd-equiv-card">
            <div className="equiv-grid">
              <div className="equiv-item">
                <span className="equiv-standard">UNS (USA / SAE)</span>
                <span className="equiv-code">{metadata.uns}</span>
                <span className="equiv-desc">Unified Numbering System</span>
              </div>
              <div className="equiv-item">
                <span className="equiv-standard">W.Nr. (Germany DIN)</span>
                <span className="equiv-code">{metadata.wnr}</span>
                <span className="equiv-desc">Werkstoff Number</span>
              </div>
              <div className="equiv-item">
                <span className="equiv-standard">EN (European Union)</span>
                <span className="equiv-code">{metadata.en}</span>
                <span className="equiv-desc">European Norm</span>
              </div>
              <div className="equiv-item">
                <span className="equiv-standard">JIS (Japan)</span>
                <span className="equiv-code">{metadata.jis}</span>
                <span className="equiv-desc">Japanese Industrial Standard</span>
              </div>
              <div className="equiv-item">
                <span className="equiv-standard">BS (United Kingdom)</span>
                <span className="equiv-code">{metadata.bs}</span>
                <span className="equiv-desc">British Standard</span>
              </div>
              <div className="equiv-item">
                <span className="equiv-standard">AFNOR (France)</span>
                <span className="equiv-code">{metadata.afnor}</span>
                <span className="equiv-desc">French Normalization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: PRODUCT SUPPLY SCOPE & TECHNICAL COMPLIANCE */}
      <section className="gd-scope-section" aria-labelledby="scope-heading">
        <div className="container">
          <div className="gd-section-header">
            <span className="section-eyebrow-tag">MANUFACTURING &amp; SUPPLY SCOPE</span>
            <h2 id="scope-heading" className="section-title-clean">
              {product.name} Supply Capabilities in {grade.pillLabel || grade.designation}
            </h2>
            <p className="section-subtitle-clean">
              Comprehensive manufacturing parameters, size schedules, heat treatment, and fabrication readiness.
            </p>
          </div>

          <div className="gd-specs-table-card">
            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Dimensional Size Range</span>
                <span className="spec-tag">Nominal Bore / OD</span>
              </div>
              <div className="spec-value-cell">
                <strong>{info.sizeRange}</strong>
                <p className="spec-detail-note">Manufactured to ASME B16.5, B16.11, B16.9, ASTM A182, ASTM A312, and DIN dimensions with tight tolerance controls.</p>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Pressure Ratings &amp; Schedules</span>
                <span className="spec-tag">Working Limits</span>
              </div>
              <div className="spec-value-cell">
                <strong>{info.pressureRatings}</strong>
                <p className="spec-detail-note">Hydrostatically proof-tested and certified to full design pressure ratings with zero leakage.</p>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Heat Treatment Condition</span>
                <span className="spec-tag">Microstructural State</span>
              </div>
              <div className="spec-value-cell">
                <strong>{metadata.heatTreatment}</strong>
                <p className="spec-detail-note">Ensures uniform carbide distribution, optimal grain structure, and freedom from detrimental intermetallic phases.</p>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Weldability &amp; Fabrication</span>
                <span className="spec-tag">Welding Guidance</span>
              </div>
              <div className="spec-value-cell">
                <strong>{metadata.weldability}</strong>
                <p className="spec-detail-note">Qualified under ASME Section IX welding procedures (WPS/PQR) for seamless site fabrication and installation.</p>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Quality Testing &amp; Inspection (100% NDE)</span>
                <span className="spec-tag">Non-Destructive Testing</span>
              </div>
              <div className="spec-value-cell">
                <ul className="spec-bullet-list">
                  <li><strong>100% PMI Spectro Testing:</strong> Positive Material Identification to verify elemental composition against heat number.</li>
                  <li><strong>Ultrasonic Flaw Detection (UT):</strong> Verified 100% volumetric integrity to ASTM A388 / ASME Section V.</li>
                  <li><strong>Hydrostatic Testing:</strong> Pressure tested at 1.5x design pressure to confirm containment envelope.</li>
                  <li><strong>Intergranular Corrosion (IGC):</strong> Tested according to ASTM A262 Practice E / A for austenitic grades.</li>
                </ul>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Mill Test Certification &amp; Traceability</span>
                <span className="spec-tag">Documentation</span>
              </div>
              <div className="spec-value-cell">
                <p className="spec-detail-note">
                  Supplied with authentic <strong>EN 10204 Type 3.1 Mill Test Certificate (MTC)</strong> detailing chemical composition, tensile test results, hardness values, heat number, and heat treatment log. Third-party inspection (TPI) to <strong>EN 10204 3.2</strong> endorsed by TUV, DNV, BV, Lloyds, or SGS available on demand. Compliant with <strong>NACE MR0175 / ISO 15156</strong> for sour service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: TYPICAL INDUSTRIAL APPLICATIONS */}
      {grade.applications && grade.applications.length > 0 && (
        <section className="gd-applications-section" aria-labelledby="applications-heading">
          <div className="container">
            <div className="gd-section-header">
              <span className="section-eyebrow-tag">SUITABILITY &amp; APPLICATIONS</span>
              <h2 id="applications-heading" className="section-title-clean">
                Key Industrial Applications for {grade.designation}
              </h2>
              <p className="section-subtitle-clean">
                Engineered for continuous service in critical chemical, marine, and high-pressure sectors.
              </p>
            </div>

            <div className="gd-app-grid">
              {grade.applications.map((app, idx) => (
                <div key={idx} className="gd-app-box">
                  <CheckCircle2 size={18} className="app-box-icon" aria-hidden="true" />
                  <span className="app-box-text">{app}</span>
                </div>
              ))}
              <div className="gd-app-box">
                <CheckCircle2 size={18} className="app-box-icon" aria-hidden="true" />
                <span className="app-box-text">High-Pressure Flanged Headers &amp; Manifolds</span>
              </div>
              <div className="gd-app-box">
                <CheckCircle2 size={18} className="app-box-icon" aria-hidden="true" />
                <span className="app-box-text">Critical Refining Process Lines &amp; Steam Systems</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. SECTION 6: FAST QUOTATION & CONTACT DESK */}
      <section className="gd-contact-section" aria-labelledby="quotation-heading">
        <div className="container">
          <div className="gd-contact-card">
            <div className="contact-card-left">
              <span className="contact-card-eyebrow">READY STOCK • PROMPT DISPATCH</span>
              <h2 id="quotation-heading" className="contact-card-title">
                Ready to Order {grade.designation} {product.name}?
              </h2>
              <p className="contact-card-desc">
                Suraj Pipe And Fitting maintains ready stock in our Mumbai stockyard with fast dispatch across India and global export destinations. Contact our sales desk for immediate mill test certificates, dimensional charts, and commercial quotations.
              </p>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <MapPin size={16} className="contact-icon" aria-hidden="true" />
                  <span>107/109, Vitthalbhai Patel Road, 1st Floor, Room No. 04, Mumbai - 400 004</span>
                </div>
                <div className="contact-info-item">
                  <Mail size={16} className="contact-icon" aria-hidden="true" />
                  <span>surajpipefitting@gmail.com</span>
                </div>
                <div className="contact-info-item">
                  <Phone size={16} className="contact-icon" aria-hidden="true" />
                  <span>+91 99201 94838 / +91 70451 73574</span>
                </div>
              </div>
            </div>

            <div className="contact-card-right">
              <div className="contact-actions-box">
                <h3 className="actions-box-title">Direct Procurement Channel</h3>
                <p className="actions-box-desc">Connect directly with our technical quotation team:</p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn contact-btn-whatsapp"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>Inquire via WhatsApp (24/7 Desk)</span>
                </a>

                <a
                  href={`tel:${phonePrimary}`}
                  className="contact-btn contact-btn-phone"
                >
                  <Phone size={18} aria-hidden="true" />
                  <span>Call Technical Desk (+91 99201 94838)</span>
                </a>

                <Link
                  to={`/products/${product.id}/${material.id}`}
                  className="contact-btn contact-btn-back"
                >
                  <ArrowRight size={16} className="btn-back-arrow" aria-hidden="true" />
                  <span>Back to {material.name} {product.name} Overview</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

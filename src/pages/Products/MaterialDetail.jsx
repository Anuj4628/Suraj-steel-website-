import React, { useState, useEffect } from 'react';
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
  Layers,
  Sparkles,
} from 'lucide-react';
import { products, materials, getProductMaterialInfo } from '../../data/productCatalog';
import { getProductMaterialImage } from '../../data/productAssets';
import { extractMaterialId, getGradeDetailPath } from '../../data/seoSlugs';
import './MaterialDetail.css';

export default function MaterialDetail() {
  const { productId, materialId } = useParams();

  const cleanMaterialId = extractMaterialId(materialId);
  const product = products.find((p) => p.id === productId);
  const material = materials.find((m) => m.id === cleanMaterialId);

  // If invalid parameters, redirect to catalog
  if (!product) return <Navigate to="/products" replace />;
  if (!material) return <Navigate to={`/products/${productId}`} replace />;

  const info = getProductMaterialInfo(productId, cleanMaterialId);
  const heroImage = getProductMaterialImage(productId, cleanMaterialId);

  // Active selected grade state (defaults to first available grade)
  const [selectedGradeId, setSelectedGradeId] = useState(info?.grades?.[0]?.id || '');

  // Reset active grade when product or material changes
  useEffect(() => {
    if (info?.grades && info.grades.length > 0) {
      setSelectedGradeId(info.grades[0].id);
    }
  }, [productId, cleanMaterialId, info]);

  // Resolve currently active grade object
  const activeGrade =
    info?.grades?.find((g) => g.id === selectedGradeId) ||
    info?.grades?.[0] ||
    null;

  // Material families for badges
  const families = material.families || [
    `${material.name} Standard`,
    `${material.name} High-Yield`,
    `${material.name} Specialty`,
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello Suraj Pipe And Fitting, I am inquiring about ${info.title} in Grade ${activeGrade?.pillLabel || activeGrade?.designation || ''}. Please share pricing and mill test availability.`
  );

  return (
    <div className="material-detail-page">
      {/* 1. BREADCRUMB BAR */}
      <div className="md-breadcrumb-bar">
        <div className="container">
          <nav className="md-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <Link to="/products" className="breadcrumb-link">Products</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <Link to={`/products/${product.id}`} className="breadcrumb-link">{product.name}</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <span className="breadcrumb-current" aria-current="page">{material.name}</span>
          </nav>
        </div>
      </div>

      {/* 2. TOP PRODUCT & GRADE SHOWCASE CARD */}
      <section className="md-showcase-section" aria-label="Product Showcase and Grade Selector">
        <div className="container">
          <div className="md-showcase-card">
            {/* Left Media Showcase */}
            <div className="md-showcase-media">
              <div className="md-showcase-img-wrap">
                <img
                  src={heroImage}
                  alt={info.title}
                  className="md-showcase-img"
                  loading="eager"
                  width="540"
                  height="400"
                />
                {/* Floating tags */}
                <div className="md-pill-tag md-pill-top-left">
                  <span>{product.name}</span>
                </div>
                <div className="md-pill-tag md-pill-bottom-right">
                  <span className="status-dot-green"></span>
                  <span>Ready Stock &amp; Mill Sourced</span>
                </div>
              </div>
            </div>

            {/* Right Information & Compact Grade Selector */}
            <div className="md-showcase-info">
              {/* Quality Scope Badge */}
              <div className="md-scope-badge">
                <ShieldCheck size={15} className="scope-icon" aria-hidden="true" />
                <span>ISO 9001:2015 VERIFIED SCOPE • DIRECT MILL STOCK</span>
              </div>

              {/* Main Heading */}
              <h1 className="md-showcase-title">{info.title}</h1>

              {/* Company & Product Description Paragraph */}
              <p className="md-showcase-desc">
                Suraj Pipe And Fitting stocks a comprehensive inventory of {info.title.toLowerCase()} manufactured to stringent dimensional and metallurgical tolerances. Offered in certified mill-annealed, cold drawn, or hot forged conditions, our products exhibit exceptional surface finish, leak-proof pressure containment, and extended lifecycle in critical process operations.
              </p>

              {/* Compact Grade Selector */}
              {info.grades && info.grades.length > 0 && (
                <div className="md-grade-selector-wrap">
                  <div className="md-grade-selector-header">
                    <span className="md-selector-label">
                      <Sparkles size={13} className="selector-icon-red" aria-hidden="true" />
                      CLICK ANY GRADE TO VIEW METALLURGY SPECS:
                    </span>
                    <span className="md-selector-hint">Click to inspect</span>
                  </div>

                  {/* Compact Grade Pills (Click to open Grade Description Page) */}
                  <div className="md-grade-pills-grid" role="navigation" aria-label="Material grades">
                    {info.grades.map((grade) => {
                      const isActive = grade.id === (activeGrade?.id || selectedGradeId);
                      return (
                        <Link
                          key={grade.id}
                          to={getGradeDetailPath(product.id, material.id, grade.id)}
                          className={`grade-pill-btn ${isActive ? 'active' : ''}`}
                          title={`Click to view ${grade.pillLabel || grade.designation} specification page`}
                        >
                          <span className="pill-name">{grade.pillLabel || grade.designation}</span>
                          <Info size={12} className="pill-info-icon" aria-hidden="true" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Available Material Families */}
              <div className="md-material-families-row">
                <span className="families-label">AVAILABLE MATERIAL FAMILIES:</span>
                <div className="families-chips">
                  {families.map((fam, idx) => (
                    <span key={idx} className="family-chip">{fam}</span>
                  ))}
                </div>
              </div>

              {/* 3 Call-To-Action Buttons */}
              <div className="md-showcase-actions">
                <a
                  href={`https://wa.me/919920194838?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md-action-btn md-btn-red"
                >
                  <span>Request a Quote ({activeGrade?.pillLabel || 'Stock'})</span>
                </a>

                <a
                  href={`https://wa.me/919920194838?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md-action-btn md-btn-green"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>WhatsApp Inquiry</span>
                </a>

                {activeGrade && (
                  <Link
                    to={getGradeDetailPath(product.id, material.id, activeGrade.id)}
                    className="md-action-btn md-btn-outline"
                  >
                    <span>View {activeGrade.pillLabel || activeGrade.id.toUpperCase()} Full Spec</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: ACTIVE GRADE DATASHEET & METALLURGY */}
      {activeGrade && (
        <section className="md-datasheet-section" aria-labelledby="active-grade-heading">
          <div className="container">
            <div className="md-datasheet-card">
              {/* Header Bar */}
              <div className="md-datasheet-header">
                <div className="datasheet-header-left">
                  <div className="datasheet-badge">
                    <FileText size={14} aria-hidden="true" />
                    <span>ACTIVE GRADE DATASHEET</span>
                  </div>
                  <span className="datasheet-uns">
                    {activeGrade.unsNumber ? `UNS ${activeGrade.unsNumber}` : 'Standard Mill Grade'}
                  </span>
                </div>
                <div className="datasheet-header-right">
                  <Link
                    to={getGradeDetailPath(product.id, material.id, activeGrade.id)}
                    className="datasheet-spec-link"
                  >
                    <span>Open Full Engineering Page</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="md-datasheet-body">
                {/* Title and Short Description */}
                <div className="datasheet-info-block">
                  <h2 id="active-grade-heading" className="datasheet-title">
                    {activeGrade.designation}
                  </h2>
                  <p className="datasheet-summary">
                    {activeGrade.shortSpec || activeGrade.fullDescription}
                  </p>
                </div>

                {/* Mechanical Properties & Chemistry Grid */}
                <div className="md-datasheet-grid">
                  {/* Left Column: Mechanical Properties */}
                  <div className="datasheet-col">
                    <h3 className="datasheet-subheading">Mechanical Properties (Standard Test Condition)</h3>
                    <div className="mechanical-props-grid">
                      {activeGrade.properties?.tensile && (
                        <div className="mech-prop-box">
                          <span className="prop-name">Tensile Strength</span>
                          <span className="prop-val">{activeGrade.properties.tensile}</span>
                        </div>
                      )}
                      {activeGrade.properties?.yield && (
                        <div className="mech-prop-box">
                          <span className="prop-name">Yield Strength (0.2% Offset)</span>
                          <span className="prop-val">{activeGrade.properties.yield}</span>
                        </div>
                      )}
                      {activeGrade.properties?.elongation && (
                        <div className="mech-prop-box">
                          <span className="prop-name">Elongation (% in 2")</span>
                          <span className="prop-val">{activeGrade.properties.elongation}</span>
                        </div>
                      )}
                      {activeGrade.properties?.hardness && (
                        <div className="mech-prop-box">
                          <span className="prop-name">Hardness (HBW / HRc)</span>
                          <span className="prop-val">{activeGrade.properties.hardness}</span>
                        </div>
                      )}
                    </div>

                    {/* Standards */}
                    {activeGrade.standards && activeGrade.standards.length > 0 && (
                      <div className="datasheet-standards-row">
                        <span className="standards-label">Applicable Standards:</span>
                        <div className="standards-chips">
                          {activeGrade.standards.map((std, i) => (
                            <span key={i} className="std-chip">{std}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Chemical Composition Table */}
                  {activeGrade.chemistry && Object.keys(activeGrade.chemistry).length > 0 && (
                    <div className="datasheet-col">
                      <h3 className="datasheet-subheading">Chemical Composition (% By Weight)</h3>
                      <div className="chem-table-responsive">
                        <table className="chem-table" aria-label="Chemical Composition Table">
                          <thead>
                            <tr>
                              <th>Element</th>
                              {Object.keys(activeGrade.chemistry).map((elem) => (
                                <th key={elem}>{elem}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Nominal / Max</td>
                              {Object.values(activeGrade.chemistry).map((val, idx) => (
                                <td key={idx}>{val}</td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Applications Scope */}
                      {activeGrade.applications && activeGrade.applications.length > 0 && (
                        <div className="datasheet-applications">
                          <span className="app-label">Typical Service Applications:</span>
                          <div className="app-tags">
                            {activeGrade.applications.map((app, idx) => (
                              <span key={idx} className="app-tag">
                                <CheckCircle2 size={12} className="tag-check" aria-hidden="true" />
                                <span>{app}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. SECTION 2: TYPES AVAILABLE */}
      {/* STRICTLY ONLY FOR FOUR PRODUCTS (Forge Fittings, Buttweld Fittings, Flanges, Fasteners) */}
      {info.hasTypes && info.types && info.types.length > 0 && (
        <section className="md-types-section" aria-labelledby="types-heading">
          <div className="container">
            <div className="section-header-compact">
              <span className="section-eyebrow-tag">INFORMATIONAL CATALOGUE</span>
              <h2 id="types-heading" className="section-title-clean">
                Types Available in {material.name} {product.name}
              </h2>
              <p className="section-subtitle-clean">
                Precision-engineered configurations manufactured in strict adherence to ASME, ANSI, and DIN dimensions.
              </p>
            </div>

            <div className="md-types-grid">
              {info.types.map((type, idx) => (
                <div key={idx} className="type-card">
                  <div className="type-card-top">
                    <span className="type-index">{String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="type-name">{type.name}</h3>
                  </div>
                  <p className="type-spec">{type.spec}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. SECTION 3: TECHNICAL GENUINE SPECIFICATION */}
      <section className="md-specifications-section" aria-labelledby="genuine-specs-heading">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow-tag">ENGINEERING COMPLIANCE &amp; STANDARDS</span>
            <h2 id="genuine-specs-heading" className="section-title-clean">
              Technical Genuine Specifications for {info.title}
            </h2>
            <p className="section-subtitle-clean">
              Rigorous inspection criteria, mill test certifications, and dimensional compliance guaranteed on every dispatch.
            </p>
          </div>

          <div className="md-specs-table-card">
            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Size Range &amp; Dimensions</span>
                <span className="spec-tag">Nominal Bore / OD</span>
              </div>
              <div className="spec-value-cell">
                <strong>{info.sizeRange}</strong>
                <p className="spec-detail-note">Custom outer diameters, precision wall thickness, and tailored lengths available upon client drawing approval.</p>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Pressure Class &amp; Schedules</span>
                <span className="spec-tag">Working Limits</span>
              </div>
              <div className="spec-value-cell">
                <strong>{info.pressureRatings}</strong>
                <p className="spec-detail-note">Hydrostatically proof-tested and certified to ASME B16.5, B16.11, B16.9, and DIN pressure containment parameters.</p>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Manufacturing Standards</span>
                <span className="spec-tag">Governing Codes</span>
              </div>
              <div className="spec-value-cell">
                <div className="standards-badge-list">
                  {info.standards.map((std, i) => (
                    <span key={i} className="std-badge-pill">{std}</span>
                  ))}
                  <span className="std-badge-pill">MSS-SP</span>
                  <span className="std-badge-pill">DIN / EN</span>
                  <span className="std-badge-pill">BS / IS</span>
                </div>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Testing &amp; Quality Inspection</span>
                <span className="spec-tag">100% NDE Verification</span>
              </div>
              <div className="spec-value-cell">
                <ul className="spec-bullet-list">
                  <li><strong>PMI Testing:</strong> 100% Positive Material Identification using calibrated handheld XRF analyzers.</li>
                  <li><strong>Non-Destructive Testing:</strong> Ultrasonic Examination (UT), Radiography Testing (RT), and Dye Penetrant Inspection (DPI).</li>
                  <li><strong>Mechanical Testing:</strong> Tensile, Yield, Elongation, Flattening, Flaring, and Charpy V-Notch Impact down to -46°C / -196°C.</li>
                  <li><strong>Corrosion Testing:</strong> Intergranular Corrosion (IGC) test according to ASTM A262 Practice E / A.</li>
                </ul>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Mill Test Certification</span>
                <span className="spec-tag">EN 10204 3.1 &amp; 3.2</span>
              </div>
              <div className="spec-value-cell">
                <p className="spec-detail-note">
                  Supplied with authentic <strong>Manufacturer Test Certificate (MTC) conforming to EN 10204 Type 3.1</strong>. Third-party inspection (TPI) endorsable to <strong>EN 10204 Type 3.2</strong> by Lloyds, TUV, DNV, Bureau Veritas, or SGS upon client requisition. Fully compliant with <strong>NACE MR0175 / ISO 15156</strong> for sour service.
                </p>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-name-cell">
                <span className="spec-title">Marking &amp; Packaging</span>
                <span className="spec-tag">Traceability Guaranteed</span>
              </div>
              <div className="spec-value-cell">
                <p className="spec-detail-note">
                  Every piece is computer dot-peen or laser marked with <strong>Manufacturer Logo, Material Grade, Heat Number, Nominal Size, Schedule / Rating, and Standard</strong>. Packaged in export-grade seaworthy wooden boxes, palletized, end-capped with plastic protectors, and wrapped in moisture-barrier VCI plastic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

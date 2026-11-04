import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ChevronRight,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Send,
  AlertCircle,
  Clock,
  Sparkles,
  FileCheck2,
  X,
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [searchParams] = useSearchParams();

  // Official verified details from the company visiting card
  const verifiedContact = {
    companyName: 'Suraj Pipe And Fitting',
    contactPerson: 'Suraj Goswami',
    primaryPhone: '7045173574',
    primaryPhoneDisplay: '+91 70451 73574',
    secondaryPhone: '7984097489',
    secondaryPhoneDisplay: '+91 79840 97489',
    email: 'surajpipefitting21@gmail.com',
    fullAddress:
      '(Shop) Plumbhar Chawl, Shantabai Building, Ground Floor, Shop No. 6, 4th Cross Lane, Khetwadi, Pathe Bapurao Marg, Mumbai - 400004.',
    mapAddressQuery:
      'Shop No. 6, Shantabai Building, Plumbhar Chawl, 4th Cross Lane, Khetwadi, Pathe Bapurao Marg, Mumbai, Maharashtra 400004, India',
  };

  // Copy state feedback
  const [copiedKey, setCopiedKey] = useState(null);

  // Form state with prefill from URL query params if available
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productCategory: searchParams.get('product') || '',
    materialGrade: searchParams.get('grade') || searchParams.get('material') || '',
    dimensions: '',
    quantity: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formFeedback, setFormFeedback] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Synchronize URL parameters if they change
  useEffect(() => {
    const prodParam = searchParams.get('product');
    const gradeParam = searchParams.get('grade');
    const matParam = searchParams.get('material');

    if (prodParam || gradeParam || matParam) {
      setFormData((prev) => ({
        ...prev,
        productCategory: prodParam || prev.productCategory,
        materialGrade: gradeParam || matParam || prev.materialGrade,
      }));
    }
  }, [searchParams]);

  // Handle clipboard copy
  const handleCopy = async (text, key) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    } catch (err) {
      console.error('Clipboard copy error:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validate required fields
  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone Number is required';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 8) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!formData.productCategory) errors.productCategory = 'Please select a Product Category';
    if (!formData.materialGrade.trim()) errors.materialGrade = 'Material / Grade is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Prepare message contents
  const buildEmailData = () => {
    const emailSubject = `Product Enquiry: ${formData.productCategory || 'Industrial Steel'} - ${formData.fullName}`;
    const emailBody =
      `SURAJ PIPE AND FITTING - COMMERCIAL PRODUCT ENQUIRY\n` +
      `===================================================\n\n` +
      `Customer Details:\n` +
      `• Full Name: ${formData.fullName}\n` +
      `• Company Name: ${formData.companyName || 'Not specified'}\n` +
      `• Email Address: ${formData.email}\n` +
      `• Phone Number: ${formData.phone}\n\n` +
      `Technical Specifications Requested:\n` +
      `• Product Category: ${formData.productCategory}\n` +
      `• Material / Grade: ${formData.materialGrade}\n` +
      `• Required Dimensions / Sizes: ${formData.dimensions || 'Standard / To be quoted'}\n` +
      `• Quantity / Weight: ${formData.quantity || 'Please advise minimum batch'}\n\n` +
      `Additional Notes / Requirements:\n` +
      `${formData.message || 'Kindly share commercial quote, lead time, and test certificate availability.'}\n\n` +
      `Sent via Website Product Enquiry Form`;

    return { emailSubject, emailBody };
  };

  const buildWhatsAppText = () => {
    return (
      `*SURAJ PIPE AND FITTING - PRODUCT ENQUIRY*\n` +
      `----------------------------------------\n` +
      `*Name:* ${formData.fullName}\n` +
      (formData.companyName ? `*Company:* ${formData.companyName}\n` : '') +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Product:* ${formData.productCategory}\n` +
      `*Material/Grade:* ${formData.materialGrade}\n` +
      (formData.dimensions ? `*Dimensions:* ${formData.dimensions}\n` : '') +
      (formData.quantity ? `*Quantity:* ${formData.quantity}\n` : '') +
      (formData.message ? `*Notes:* ${formData.message}\n` : '') +
      `----------------------------------------\n` +
      `Please provide current stock availability, MTC details, and pricing.`
    );
  };

  // Form submit: validates inputs and opens channel selection modal
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setShowSubmitModal(true);
  };

  // Redirect to WhatsApp
  const handleRedirectWhatsApp = () => {
    if (!validateForm()) return;
    const waText = encodeURIComponent(buildWhatsAppText());
    window.open(`https://wa.me/91${verifiedContact.primaryPhone}?text=${waText}`, '_blank', 'noopener,noreferrer');
    setShowSubmitModal(false);
    setFormFeedback({
      type: 'info',
      message: 'Redirected to WhatsApp with your enquiry pre-filled. Click Send to submit.',
    });
  };

  // Redirect to Gmail
  const handleRedirectGmail = () => {
    if (!validateForm()) return;
    const { emailSubject, emailBody } = buildEmailData();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      verifiedContact.email
    )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open direct Gmail web compose in a new tab
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setShowSubmitModal(false);
    setFormFeedback({
      type: 'info',
      message: `Opened Gmail compose pre-addressed to ${verifiedContact.email}. Please click Send in Gmail to complete submission.`,
    });
  };

  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    verifiedContact.mapAddressQuery
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const googleMapsExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    verifiedContact.mapAddressQuery
  )}`;

  return (
    <div className="contact-page">
      {/* 1. CONTACT PAGE HERO */}
      <section className="contact-hero-banner" aria-label="Contact Header">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-badge">
              <ShieldCheck size={14} className="badge-icon" aria-hidden="true" />
              <span>GET IN TOUCH</span>
            </div>

            <h1 className="contact-hero-title">
              Contact <span className="highlight-red">Suraj Pipe And Fitting</span>
            </h1>

            <p className="contact-hero-desc">
              Connect with us for pipe fittings, flanges, steel products, material enquiries, and quotations.
            </p>
          </div>
        </div>

        {/* Brand Red Bottom Divider */}
        <div className="banner-red-line" aria-hidden="true" />
      </section>

      {/* 2. BREADCRUMB BAR */}
      <div className="contact-breadcrumb-bar">
        <div className="container">
          <nav className="contact-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={13} className="breadcrumb-separator" aria-hidden="true" />
            <span className="breadcrumb-current" aria-current="page">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* 3. MAIN CONTACT SECTION: TWO-COLUMN LAYOUT */}
      <section className="contact-main-section" aria-label="Business Contact and Enquiry Form">
        <div className="container">
          <div className="contact-layout-grid">
            {/* =========================================
                LEFT COLUMN — BUSINESS CONTACT INFORMATION
                ========================================= */}
            <div className="contact-left-col">
              <div className="contact-col-header">
                <span className="contact-eyebrow">DIRECT CONTACT CHANNELS</span>
                <h2 className="contact-col-title">Get in Touch</h2>
                <p className="contact-col-desc">
                  Reach out to us for product availability, material specifications, and quotation enquiries.
                </p>
              </div>

              {/* A. Company and Address Card */}
              <div className="contact-card address-card">
                <div className="contact-card-top">
                  <div className="icon-badge icon-badge-red" aria-hidden="true">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-card-meta">
                    <span className="card-mini-label">OFFICIAL SHOP LOCATION</span>
                    <h3 className="card-main-title">{verifiedContact.companyName}</h3>
                    <span className="card-person-tag">Proprietor: {verifiedContact.contactPerson}</span>
                  </div>
                </div>

                <address className="contact-address-block">
                  (Shop) Plumbhar Chawl, Shantabai Building, Ground Floor,
                  <br />
                  Shop No. 6, 4th Cross Lane, Khetwadi,
                  <br />
                  Pathe Bapurao Marg, Mumbai - 400004.
                </address>

                <div className="card-action-row">
                  <button
                    type="button"
                    className={`copy-control-btn ${copiedKey === 'address' ? 'is-copied' : ''}`}
                    onClick={() => handleCopy(verifiedContact.fullAddress, 'address')}
                    aria-label="Copy shop address"
                  >
                    {copiedKey === 'address' ? (
                      <>
                        <Check size={14} className="copy-icon-success" />
                        <span>Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={googleMapsExternalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-ext-link"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* B. Phone Contact Cards */}
              <div className="contact-card phone-card">
                <div className="contact-card-top">
                  <div className="icon-badge icon-badge-blue" aria-hidden="true">
                    <Phone size={20} />
                  </div>
                  <div className="contact-card-meta">
                    <span className="card-mini-label">DIRECT DESK &amp; SALES</span>
                    <h3 className="card-main-title">Telephone Assistance</h3>
                  </div>
                </div>

                <div className="phone-numbers-list">
                  {/* Primary Phone */}
                  <div className="phone-entry-row">
                    <div className="phone-entry-left">
                      <span className="phone-tag">Primary Line</span>
                      <a href={`tel:+91${verifiedContact.primaryPhone}`} className="phone-num-link">
                        {verifiedContact.primaryPhoneDisplay}
                      </a>
                    </div>
                    <button
                      type="button"
                      className={`copy-control-btn btn-sm ${copiedKey === 'phone1' ? 'is-copied' : ''}`}
                      onClick={() => handleCopy(verifiedContact.primaryPhoneDisplay, 'phone1')}
                      title="Copy primary phone number"
                    >
                      {copiedKey === 'phone1' ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedKey === 'phone1' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  {/* Secondary Phone */}
                  <div className="phone-entry-row">
                    <div className="phone-entry-left">
                      <span className="phone-tag">Secondary Line</span>
                      <a href={`tel:+91${verifiedContact.secondaryPhone}`} className="phone-num-link">
                        {verifiedContact.secondaryPhoneDisplay}
                      </a>
                    </div>
                    <button
                      type="button"
                      className={`copy-control-btn btn-sm ${copiedKey === 'phone2' ? 'is-copied' : ''}`}
                      onClick={() => handleCopy(verifiedContact.secondaryPhoneDisplay, 'phone2')}
                      title="Copy secondary phone number"
                    >
                      {copiedKey === 'phone2' ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedKey === 'phone2' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* C. Email Contact Card */}
              <div className="contact-card email-card">
                <div className="contact-card-top">
                  <div className="icon-badge icon-badge-green" aria-hidden="true">
                    <Mail size={20} />
                  </div>
                  <div className="contact-card-meta">
                    <span className="card-mini-label">COMMERCIAL INQUIRIES</span>
                    <h3 className="card-main-title">Official Email</h3>
                  </div>
                </div>

                <div className="email-display-row">
                  <a href={`mailto:${verifiedContact.email}`} className="email-link-text">
                    {verifiedContact.email}
                  </a>

                  <button
                    type="button"
                    className={`copy-control-btn btn-sm ${copiedKey === 'email' ? 'is-copied' : ''}`}
                    onClick={() => handleCopy(verifiedContact.email, 'email')}
                    title="Copy official email"
                  >
                    {copiedKey === 'email' ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedKey === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* D. Quick Action Buttons */}
              <div className="quick-actions-card">
                <span className="quick-actions-label">QUICK ASSISTANCE:</span>
                <div className="quick-actions-grid">
                  <a href={`tel:+91${verifiedContact.primaryPhone}`} className="quick-action-btn btn-call">
                    <Phone size={15} />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={`https://wa.me/91${verifiedContact.primaryPhone}?text=${encodeURIComponent(
                      'Hello Suraj Pipe And Fitting, I would like to inquire about industrial pipe fittings and steel products.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-action-btn btn-whatsapp"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp Us</span>
                  </a>

                  <a href={`mailto:${verifiedContact.email}`} className="quick-action-btn btn-email">
                    <Mail size={15} />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* =========================================
                RIGHT COLUMN — ENQUIRY FORM
                ========================================= */}
            <div className="contact-right-col">
              <div className="enquiry-form-card">
                <div className="form-card-header">
                  <span className="form-card-badge">PRODUCT ENQUIRY</span>
                  <h2 className="form-card-title">Send Us Your Requirement</h2>
                  <p className="form-card-subtitle">
                    Share your product specifications and requirements. Our team can review your enquiry and respond using your contact details.
                  </p>
                </div>

                {formFeedback && (
                  <div className={`form-feedback-box ${formFeedback.type}`}>
                    <AlertCircle size={18} className="feedback-icon" />
                    <p className="feedback-text">{formFeedback.message}</p>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="rfq-form" noValidate>
                  {/* Row 1: Full Name & Company Name */}
                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="fullName" className="field-label">
                        Full Name <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Rajesh Sharma"
                        className={`form-input ${formErrors.fullName ? 'has-error' : ''}`}
                        required
                      />
                      {formErrors.fullName && (
                        <span className="field-error-msg">{formErrors.fullName}</span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="companyName" className="field-label">
                        Company Name <span className="opt-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Precision Engineering Ltd."
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Phone Number */}
                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="email" className="field-label">
                        Email Address <span className="req-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className={`form-input ${formErrors.email ? 'has-error' : ''}`}
                        required
                      />
                      {formErrors.email && (
                        <span className="field-error-msg">{formErrors.email}</span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone" className="field-label">
                        Phone Number <span className="req-star">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`form-input ${formErrors.phone ? 'has-error' : ''}`}
                        required
                      />
                      {formErrors.phone && (
                        <span className="field-error-msg">{formErrors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Product Category & Material / Grade */}
                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="productCategory" className="field-label">
                        Product Category <span className="req-star">*</span>
                      </label>
                      <select
                        id="productCategory"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleInputChange}
                        className={`form-select ${formErrors.productCategory ? 'has-error' : ''}`}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="Forge Fittings">Forge Fittings</option>
                        <option value="Flanges">Flanges</option>
                        <option value="Buttweld Fittings">Buttweld Fittings</option>
                        <option value="Fasteners">Fasteners</option>
                        <option value="Pipes & Tubes">Pipes & Tubes</option>
                        <option value="Sheets & Plates">Sheets & Plates</option>
                        <option value="Rods & Bars">Rods & Bars</option>
                      </select>
                      {formErrors.productCategory && (
                        <span className="field-error-msg">{formErrors.productCategory}</span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="materialGrade" className="field-label">
                        Material / Grade <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="materialGrade"
                        name="materialGrade"
                        value={formData.materialGrade}
                        onChange={handleInputChange}
                        placeholder="e.g. SS 316L, ASTM A105, Duplex 2205"
                        className={`form-input ${formErrors.materialGrade ? 'has-error' : ''}`}
                        required
                      />
                      {formErrors.materialGrade && (
                        <span className="field-error-msg">{formErrors.materialGrade}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Size / Dimensions & Quantity / Weight */}
                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="dimensions" className="field-label">
                        Size / Dimensions <span className="opt-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="dimensions"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleInputChange}
                        placeholder="e.g. 2 inch NB, Class 3000, SCH 40"
                        className="form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="quantity" className="field-label">
                        Quantity / Weight <span className="opt-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g. 500 Pcs / 1.5 MT"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Full-Width Textarea: Message / Requirements */}
                  <div className="form-field full-width">
                    <label htmlFor="message" className="field-label">
                      Requirements / Message <span className="opt-tag">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please mention your required grade, dimensions, quantity, specifications, or delivery requirements."
                      className="form-textarea"
                    ></textarea>
                  </div>

                  {/* Form Submission Actions */}
                  <div className="form-submit-row">
                    <button type="submit" className="form-submit-btn btn-primary">
                      <Send size={16} />
                      <span>Submit Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleRedirectWhatsApp}
                      className="form-submit-btn btn-whatsapp-secondary"
                    >
                      <MessageCircle size={16} />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleRedirectGmail}
                      className="form-submit-btn btn-gmail-secondary"
                    >
                      <Mail size={16} />
                      <span>Send via Gmail</span>
                    </button>
                  </div>

                  <p className="form-compliance-notice">
                    * Submitting will let you choose between instant WhatsApp chat or pre-filled Gmail compose addressed to <strong>{verifiedContact.email}</strong>.
                  </p>
                </form>

                {/* MODAL: CHOOSE WHATSAPP OR GMAIL */}
                {showSubmitModal && (
                  <div className="contact-modal-overlay" onClick={() => setShowSubmitModal(false)}>
                    <div
                      className="contact-modal-box"
                      onClick={(e) => e.stopPropagation()}
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="modal-choice-title"
                    >
                      <button
                        type="button"
                        className="modal-close-btn"
                        onClick={() => setShowSubmitModal(false)}
                        aria-label="Close modal"
                      >
                        <X size={18} />
                      </button>

                      <div className="modal-header">
                        <span className="modal-eyebrow">CHOOSE SUBMISSION CHANNEL</span>
                        <h3 id="modal-choice-title" className="modal-title">
                          How would you like to submit your enquiry?
                        </h3>
                        <p className="modal-subtitle">
                          Your technical enquiry for <strong>{formData.productCategory || 'Industrial Steel'}</strong> is ready. Select your preferred channel below to redirect immediately:
                        </p>
                      </div>

                      <div className="modal-channel-options">
                        {/* Option 1: WhatsApp */}
                        <button
                          type="button"
                          onClick={handleRedirectWhatsApp}
                          className="channel-card channel-whatsapp"
                        >
                          <div className="channel-icon-wrap icon-wa">
                            <MessageCircle size={28} />
                          </div>
                          <div className="channel-info">
                            <div className="channel-top">
                              <span className="channel-name">Submit via WhatsApp</span>
                              <span className="channel-tag tag-fast">Fastest • Instant Chat</span>
                            </div>
                            <p className="channel-desc">
                              Redirects to WhatsApp with all your specifications pre-filled to chat with Suraj Goswami (+91 70451 73574).
                            </p>
                          </div>
                        </button>

                        {/* Option 2: Gmail */}
                        <button
                          type="button"
                          onClick={handleRedirectGmail}
                          className="channel-card channel-gmail"
                        >
                          <div className="channel-icon-wrap icon-gm">
                            <Mail size={28} />
                          </div>
                          <div className="channel-info">
                            <div className="channel-top">
                              <span className="channel-name">Submit via Gmail</span>
                              <span className="channel-tag tag-formal">Official • Direct Compose</span>
                            </div>
                            <p className="channel-desc">
                              Opens Gmail in your browser with your quotation specifications pre-addressed to surajpipefitting21@gmail.com.
                            </p>
                          </div>
                        </button>
                      </div>

                      <div className="modal-footer">
                        <button
                          type="button"
                          className="modal-back-btn"
                          onClick={() => setShowSubmitModal(false)}
                        >
                          Back to Form
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPACT HELPER SECTION: FOR FASTER QUOTATIONS */}
      <section className="faster-quote-strip" aria-labelledby="faster-quote-heading">
        <div className="container">
          <div className="faster-quote-box">
            <div className="faster-quote-left">
              <span className="faster-quote-eyebrow">
                <Sparkles size={14} className="sparkle-icon" aria-hidden="true" />
                QUICK CHECKLIST
              </span>
              <h2 id="faster-quote-heading" className="faster-quote-title">
                For Faster &amp; More Accurate Quotations
              </h2>
              <p className="faster-quote-desc">
                Providing comprehensive parameters helps our technical sales desk verify direct mill availability and issue an official quotation promptly.
              </p>
            </div>

            <div className="faster-quote-pillars">
              <div className="quote-pillar-item">
                <FileCheck2 size={18} className="pillar-check" aria-hidden="true" />
                <div>
                  <strong className="pillar-heading">Product Category</strong>
                  <span className="pillar-detail">Flanges, Forge Fittings, Pipes, etc.</span>
                </div>
              </div>

              <div className="quote-pillar-item">
                <FileCheck2 size={18} className="pillar-check" aria-hidden="true" />
                <div>
                  <strong className="pillar-heading">Material &amp; Grade</strong>
                  <span className="pillar-detail">SS 316L, A105, F51 Duplex, etc.</span>
                </div>
              </div>

              <div className="quote-pillar-item">
                <FileCheck2 size={18} className="pillar-check" aria-hidden="true" />
                <div>
                  <strong className="pillar-heading">Dimensions &amp; Rating</strong>
                  <span className="pillar-detail">Nominal Bore, Schedule, Class 3000#</span>
                </div>
              </div>

              <div className="quote-pillar-item">
                <FileCheck2 size={18} className="pillar-check" aria-hidden="true" />
                <div>
                  <strong className="pillar-heading">Quantity / Testing</strong>
                  <span className="pillar-detail">Pieces/Ton, EN 10204 3.1 MTC, PMI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GOOGLE MAP SECTION — EXACT VISITING CARD LOCATION */}
      <section className="contact-map-section" aria-labelledby="map-section-heading">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow-tag">PHYSICAL STOCKIST LOCATION</span>
            <h2 id="map-section-heading" className="section-title-clean">
              Find Us in Mumbai
            </h2>
            <p className="section-subtitle-clean">
              Visit Suraj Pipe And Fitting at our Khetwadi, Mumbai location.
            </p>
          </div>

          <div className="map-display-wrapper">
            {/* Map Header Bar */}
            <div className="map-bar-header">
              <div className="map-header-left">
                <div className="map-pin-pill">
                  <MapPin size={15} />
                  <span>Khetwadi, Mumbai</span>
                </div>
                <span className="map-address-line">
                  Shop No. 6, Ground Floor, Shantabai Building, Plumbhar Chawl, 4th Cross Lane, Khetwadi, Mumbai - 400004
                </span>
              </div>

              <a
                href={googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-open-btn"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Embedded Google Maps Frame */}
            <div className="map-iframe-container">
              <iframe
                title="Suraj Pipe And Fitting Location Map"
                src={googleMapsEmbedUrl}
                width="100%"
                height="440"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Map Footer Note */}
            <div className="map-bar-footer">
              <p className="map-note">
                <strong>Address Reference:</strong> Exact location query verified against Suraj Pipe And Fitting visiting card. Conveniently situated in South Mumbai’s metal trading district near Pathe Bapurao Marg.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

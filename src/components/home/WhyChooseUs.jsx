import React from 'react';
import { Package, ShieldCheck, Factory, Headphones } from 'lucide-react';
import whyChooseUsImg from '../../assets/home/why-choose-us-industrial.webp';
import './WhyChooseUs.css';

const benefits = [
  {
    id: 1,
    icon: <Package size={22} />,
    title: 'Comprehensive Product Range',
    description: 'Explore forged fittings, flanges, butt weld fittings, pipes and tubes for diverse industrial requirements.',
  },
  {
    id: 2,
    icon: <ShieldCheck size={22} />,
    title: 'Quality-Focused Approach',
    description: 'A focus on product quality, material details and specifications to support dependable industrial applications.',
  },
  {
    id: 3,
    icon: <Factory size={22} />,
    title: 'Industrial Application Focus',
    description: 'Product options suited to different piping, engineering and industrial application requirements.',
  },
  {
    id: 4,
    icon: <Headphones size={22} />,
    title: 'Customer-Focused Support',
    description: 'Clear communication and assistance to help customers identify suitable products for their requirements.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section" id="why-choose-us" aria-labelledby="why-heading">
      <div className="container">
        {/* Centered Section Header */}
        <div className="why-section-header">
          {/* Centered Eyebrow: Big Font, No Red Dot */}
          <div className="why-eyebrow">
            <span className="why-eyebrow-text">WHY CHOOSE US</span>
          </div>

          {/* Centered Main Heading with Red Highlighted Word */}
          <h2 id="why-heading" className="why-main-heading">
            The Right Partner for Every <span className="why-highlight-badge">Industrial</span> Piping Requirement
          </h2>

          {/* Centered Company Description */}
          <p className="why-description">
            At Suraj Piping, we focus on providing quality piping products and industrial components to meet diverse engineering requirements. From forged fittings and flanges to pipes, tubes and butt weld fittings, we aim to make product selection and sourcing straightforward for our customers.
          </p>
        </div>

        {/* Content Showcase: Left Image + Right 2x2 Benefits Grid */}
        <div className="why-content-wrapper">
          {/* Left Column: Industrial Image */}
          <div className="why-image-column">
            <div className="why-image-container">
              <img
                src={whyChooseUsImg}
                alt="Precision engineered industrial flanges, forged fittings and piping components inspection"
                className="why-main-image"
                loading="lazy"
              />
              <div className="why-image-accent-tag" aria-hidden="true">
                <span className="why-accent-dot"></span>
                <span>PRECISION ENGINEERING</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Benefits Grid */}
          <div className="why-text-column">
            <div className="why-benefits-grid">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="why-benefit-item">
                  <div className="why-benefit-icon-wrapper" aria-hidden="true">
                    {benefit.icon}
                  </div>
                  <div className="why-benefit-content">
                    <h3 className="why-benefit-title">{benefit.title}</h3>
                    <p className="why-benefit-desc">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

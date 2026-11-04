import React from 'react';
import Hero from '../../components/Hero/Hero';
import OurProducts from '../../components/home/OurProducts';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import IndustriesWeServe from '../../components/home/IndustriesWeServe';
import OurClients from '../../components/home/OurClients';
import GlobalExport from '../../components/home/GlobalExport';

export default function Home() {
  return (
    <main className="home-page" id="main-content">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Our Products Showcase Section */}
      <OurProducts />

      {/* 3. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 4. Industries We Serve Section */}
      <IndustriesWeServe />

      {/* 5. Our Clients / Industrial Partnerships Section */}
      <OurClients />

      {/* 6. Global Export Network Section */}
      <GlobalExport />
    </main>
  );
}

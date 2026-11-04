import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer/Footer';
import FloatingContact from './components/common/FloatingContact';

export default function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <div className="main-content">
        <AppRoutes />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
}

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Products from '../pages/Products/Products';
import ProductMaterials from '../pages/Products/ProductMaterials';
import MaterialDetail from '../pages/Products/MaterialDetail';
import GradeDetail from '../pages/Products/GradeDetail';
import Materials from '../pages/Materials/Materials';
import MaterialProducts from '../pages/Materials/MaterialProducts';
import Certificates from '../pages/Certificates/Certificates';
import Contact from '../pages/Contact/Contact';

/**
 * ScrollToTop helper ensures every route change begins at the top of the viewport
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Product Catalog Hierarchical Routes */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductMaterials />} />
        <Route path="/products/:productId/:materialId" element={<MaterialDetail />} />
        <Route path="/products/:productId/:materialId/:gradeId" element={<GradeDetail />} />

        {/* Materials Catalog Hierarchical Routes */}
        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/:materialId" element={<MaterialProducts />} />

        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

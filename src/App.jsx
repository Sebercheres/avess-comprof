// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import ConsciousSection from "./components/ConsciousSection";
import CoreValuesSection from "./components/CoreValuesSection";
import BeautySection from "./components/BeautySection";
import KeyIngredientsCarousel from "./components/KeyIngredientsCarousel";
import BenefitsSection from "./components/BenefitsSection";
import FAQSection from "./components/FAQSection";

import AboutPage from "./components/AboutPage";
import ShopPage from "./components/ShopPage";

function HomePage() {
  return (
    <>
      <Hero />
      <ConsciousSection />
      <CoreValuesSection />
      <BeautySection />
      <KeyIngredientsCarousel />
      <BenefitsSection />
      <FAQSection />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f4f9fc] text-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

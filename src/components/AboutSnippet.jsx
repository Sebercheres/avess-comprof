// src/components/AboutSnippet.jsx
import React from "react";

export default function AboutSnippet() {
  return (
    <section id="about" className="py-20 bg-rose-50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl font-semibold text-rose-800">Why Avess?</h2>
        <p className="text-gray-700">
          At Avess, we’re more than a beauty brand — we’re a promise. A promise to craft high-quality products that empower you to feel confident in your own skin. Sustainability, health, and elegance are at the heart of everything we do.
        </p>
        <a href="#shop" className="px-6 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700">Explore Our Products</a>
      </div>
    </section>
  );
}

// src/components/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-pink-50">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl font-semibold text-pink-800">About Avess</h2>
        <p className="text-gray-700">
          {/* Replace with your real about text from PDF */}
          “Avess was founded with a simple mission: craft beauty products that uplift, empower, and celebrate every individual’s uniqueness.”
        </p>
        <a
          href="#shop"
          className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
}

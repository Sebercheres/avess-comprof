// src/components/SectionFeatures.jsx
import React from "react";

export default function SectionFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="text-4xl text-pink-600">🌸</div>
          <h3 className="mt-4 text-xl font-semibold text-pink-800">Natural Ingredients</h3>
          <p className="mt-2 text-gray-600">
            {/* Replace with text from PDF */}
            “We use only the finest botanicals and skin-friendly ingredients.”
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl text-pink-600">💧</div>
          <h3 className="mt-4 text-xl font-semibold text-pink-800">Hydrating Formulas</h3>
          <p className="mt-2 text-gray-600">
            “Formulated to keep your skin soft, healthy, and glowing all day.”
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl text-pink-600">✨</div>
          <h3 className="mt-4 text-xl font-semibold text-pink-800">Radiant Glow</h3>
          <p className="mt-2 text-gray-600">
            “Bring out natural radiance with our gentle yet powerful formula.”
          </p>
        </div>
      </div>
    </section>
  );
}

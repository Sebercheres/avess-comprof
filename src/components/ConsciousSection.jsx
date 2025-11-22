// src/components/ConsciousSection.jsx
import React from "react";

export default function ConsciousSection() {
  return (
    <section
      id="about"
      className="relative z-20 bg-white max-w-6xl mx-auto mt-10 md:-mt-12 rounded-3xl shadow-md px-6 md:px-10 py-10"
    >
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-3">Conscious Formulation</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            We believe skincare should work as intelligently and tirelessly as
            you do. Guided by dermatological science and purpose-driven design,
            AVESS delivers high-performance solutions with each ingredient
            chosen with precision to support clarity and long-term skin health.
          </p>
        </div>
        <div className="text-sm md:text-base text-gray-700 leading-relaxed">
          <p>
            Because your skin is more than a surface — it’s your story. It
            deserves care that’s advanced, honest, and innovatively conscious.
          </p>
          <p className="mt-3 font-medium">
            Science-led. Purpose-built. Conscious care.
          </p>
        </div>
      </div>
    </section>
  );
}

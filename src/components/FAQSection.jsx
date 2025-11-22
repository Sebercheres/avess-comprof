// src/components/FAQSection.jsx
import React from "react";

const faqs = [
  {
    q: "What is AVESS?",
    a: "AVESS is an Indonesian skincare brand that combines advanced science with conscious care to deliver visible results while supporting healthy, radiant skin.",
  },
  { q: "Who is AVESS for?", a: "AVESS is for everyone with active lifestyles seeking effective, science-led skincare." },
  { q: "Are AVESS products suitable for sensitive skin?", a: "Formulas are designed with thoughtful ingredients; always patch test first." },
  { q: "What does conscious care mean?", a: "It means formulas that are science-led, transparent, and created with long-term skin health in mind." },
];

export default function FAQSection() {
  return (
    <section className="max-w-6xl mx-auto mt-10 bg-white rounded-3xl shadow-md p-6 md:p-8">
      <h2 className="text-xl font-semibold mb-4">FAQ</h2>
      <p className="text-sm text-gray-600 mb-4">Find out more about Avess</p>

      <div className="space-y-4">
        {faqs.map((item) => (
          <div key={item.q} className="border-b border-gray-200 pb-3">
            <h3 className="text-sm font-medium text-gray-900 mb-1">
              {item.q}
            </h3>
            <p className="text-xs text-gray-600">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

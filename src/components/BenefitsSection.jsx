// src/components/BenefitsSection.jsx
import React, { useState } from "react";
import beforeImg from "../assets/homepage/benefitbefore.png";
import afterImg from "../assets/homepage/benefitafter.png";

const specials = [
  {
    title: "High Percentage & Effective Formula",
    desc: "Each AVESS product is crafted with a high concentration of active ingredients, designed to deliver visible results.",
  },
  {
    title: "Proven Not Harsh & Effective",
    desc: "Gentle on skin while remaining powerful enough to improve texture, tone, and clarity.",
  },
  {
    title: "Clinically Backed Ingredients",
    desc: "Our formulations are supported by research, ensuring both safety and effectiveness.",
  },
];

export default function BenefitsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % specials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + specials.length) % specials.length);

  const current = specials[index];

  return (
    <section className="max-w-6xl mx-auto mt-10 rounded-3xl border border-gray-300 bg-white p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* BEFORE/AFTER IMAGES */}
        <div className="flex gap-4">
          <img
            src={beforeImg}
            alt="Before"
            className="w-1/2 h-[260px] md:h-[300px] rounded-xl object-cover"
          />
          <img
            src={afterImg}
            alt="After"
            className="w-1/2 h-[260px] md:h-[300px] rounded-xl object-cover"
          />
        </div>

        {/* TEXT SIDE */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Benefits</h2>

          <ul className="space-y-2 text-gray-700 text-sm border-t border-gray-300 pt-3">
            <li className="border-b border-gray-200 pb-2">
              Helps fade dark spots, hyperpigmentation & acne marks
            </li>
            <li className="border-b border-gray-200 pb-2">
              Helps make skin look brighter and more radiant
            </li>
            <li className="border-b border-gray-200 pb-2">
              Evens out uneven or patchy skin tone
            </li>
            <li className="">
              Leaves skin feeling smoother, softer, and healthier
            </li>
          </ul>

          <p className="mt-5 text-sm font-semibold">Why it’s special</p>

          {/* SLIDER BOX */}
          <div className="mt-3 bg-white rounded-2xl border border-gray-200 shadow-sm px-3 py-3">
            <div className="flex items-center gap-3">
              {/* LEFT ARROW */}
              <button
                onClick={prev}
                className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full border bg-white text-gray-700 shadow"
              >
                ‹
              </button>

              {/* TEXT */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{current.title}</h3>
                <p className="text-xs mt-1 text-gray-600 leading-relaxed">
                  {current.desc}
                </p>
              </div>

              {/* RIGHT ARROW */}
              <button
                onClick={next}
                className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full border bg-white text-gray-700 shadow"
              >
                ›
              </button>
            </div>
          </div>

          {/* DISCLAIMER */}
          <p className="mt-4 text-[11px] text-gray-500 leading-snug">
            *Based on a 45-subject consumer perception study after immediate
            use. Photos have not been retouched. Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
}

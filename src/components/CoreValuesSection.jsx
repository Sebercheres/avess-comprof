// src/components/CoreValuesSection.jsx
import React from "react";
import img1 from "../assets/homepage/2. OP_AVESS-5.jpg";
import img2 from "../assets/homepage/4. OP_AVESS-8.jpg";
import img3 from "../assets/homepage/5. OP_AVESS-10.jpg";
import img4 from "../assets/homepage/15. OP_AVESS-35.jpg";

const cards = [
  {
    title: "Transparency",
    desc: "Full disclosure of formulations, ingredients, and sourcing. You deserve clarity.",
    img: img1,
  },
  {
    title: "Effectiveness",
    desc: "High-performance formulas designed to deliver visible, reliable results.",
    img: img2,
  },
  {
    title: "Honesty",
    desc: "Never overpromising, always delivering with integrity and care.",
    img: img3,
  },
  {
    title: "Innovation",
    desc: "Science, research, and technology that evolve with you and your skin.",
    img: img4,
  },
];

export default function CoreValuesSection() {
  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-xl font-semibold mb-4">Guided by our core values</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-2">{card.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

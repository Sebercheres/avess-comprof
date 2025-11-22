// src/components/KeyIngredientsCarousel.jsx
import React, { useState, useEffect } from "react";
import banner1 from "../assets/homepage/Banner Ingredients-01.png";
import banner2 from "../assets/homepage/Banner Ingredients-02.png";
import banner3 from "../assets/homepage/Banner Ingredients-03.png";

const slides = [
  {
    id: 0,
    chip: "Glycolic Acid (AHA, 9.4%)",
    description:
      "Small molecular size allows deep exfoliation of the outer skin layer, improving uneven tone and fading pigmentation.",
    image: banner1,
  },
  {
    id: 1,
    chip: "Lactobionic Acid (PHA, 10%) & Gluconolactone (PHA)",
    description:
      "Lactobionic acid offers gentle chemical exfoliation to protect against dryness and irritation, while gluconolactone supports skin barrier function and maintains hydration for smoother, more even skin tone.",
    image: banner2,
  },
  {
    id: 2,
    chip: "Fruit Acids (AHA, 7.2%)",
    description:
      "Blended fruit AHAs help to gently resurface dull skin, improving texture and radiance while keeping the skin feeling comfortable.",
    image: banner3,
  },
];

export default function KeyIngredientsCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const goNext = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  // Auto-slide every 2 seconds, pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="max-w-6xl mx-auto mt-10">
      <div
        className="relative rounded-3xl overflow-hidden shadow-md h-[260px] md:h-[340px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides (cross-fade) */}
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.chip}
              className="w-full h-full object-cover"
            />

            {/* Content overlay */}
            <div className="absolute inset-0 bg-white/10" />

            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 text-gray-800">
              {/* Left: title + pill button */}
              <div className="space-y-4 max-w-xs">
                <p className="text-sm font-semibold tracking-wide">
                  Key ingredients
                </p>
                <button className="inline-flex items-center px-4 py-2 text-xs md:text-sm rounded-full bg-white/80 hover:bg-white shadow-sm border border-white/60">
                  {slide.chip}
                </button>
              </div>

              {/* Right: description */}
              <p className="mt-6 md:mt-0 md:max-w-sm text-xs md:text-sm leading-relaxed text-gray-800 md:text-right">
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        {/* Carousel controls inside the image */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <button
            onClick={goPrev}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md text-xs"
          >
            ‹
          </button>
          <div className="flex gap-1.5">
            {slides.map((s, i) => (
              <span
                key={s.id}
                className={`h-1.5 w-4 rounded-full ${
                  i === index ? "bg-gray-900" : "bg-gray-400/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md text-xs"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

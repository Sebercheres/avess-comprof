// src/components/BeautySection.jsx
import React from "react";
import beautyVideo from "../assets/homepage/Home Page - Section 3 compressed.mp4";

export default function BeautySection() {
  return (
    <section className="max-w-6xl mx-auto mt-10 rounded-3xl shadow-md overflow-hidden">
      <div className="relative w-full h-[260px] md:h-[320px]">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={beautyVideo}
          autoPlay
          loop
          muted
        />

        {/* Soft overlay so text is readable */}
        <div className="absolute inset-0 bg-white/10" />

        {/* “Beauty” text on the right like in the PDF */}
        <div className="relative z-10 h-full flex items-center justify-end pr-10 md:pr-16">
          <span className="text-2xl md:text-4xl font-light tracking-[0.25em] text-white/90">
            Beauty
          </span>
        </div>
      </div>
    </section>
  );
}

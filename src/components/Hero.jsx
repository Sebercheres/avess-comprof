// src/components/Hero.jsx
import React from "react";
import heroVideo from "../assets/homepage/Home page - Section 1 Compressed.mp4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden pt-28 pb-10"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />

      {/* Blue overlay + text */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex items-center h-full px-10 md:px-55">
        <div className="max-w-xl text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Skin Deserves <br />
            Conscious Care
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            Our formula is packed with 30% active ingredients and backed by
            clinical data for real &amp; proven results. See visible
            improvements in just 30 days for smoother, brighter, and
            healthier-looking skin.
            <br />
            <br />
            Your skin deserves more than care — it deserves conscious care. Born
            from scientific innovation and belief, AVESS designs intelligent
            formulas that honor your skin’s unique rhythm and the person you’re
            becoming.
          </p>
        </div>
      </div>
    </section>
  );
}

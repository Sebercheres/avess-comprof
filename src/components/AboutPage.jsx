import React from "react";
import heroImg from "../assets/about/AVESS x ONpro1070.jpg";
import philosophyVideo from "../assets/homepage/Home page - Section 1 Compressed.mp4";
import opAvess6 from "../assets/about/3. OP_AVESS-6.jpg";
import aboutBannerVideo from "../assets/about/Banner-About Us,Blogs-Compressed.mp4";
import CoreValuesSection from "./CoreValuesSection"; // reuse existing section

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0 pb-16 pt-28">
      {/* ABOUT US TOP SECTION */}
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">About Us</h1>
          <p>
            Every skin has its story – long days, late nights, stress, sun, and
            everything in between. Over time, these moments can leave visible
            signs like hyperpigmentation, uneven tone, rough texture, or
            dullness. When life gets busy and skincare becomes just another
            checkbox, AVESS was created from a simple belief: your skin deserves
            more than care — it deserves conscious care.
          </p>
          <p>
            Born from scientific innovation and belief, AVESS goes beyond the
            superficial to design intelligent formulas that honor your skin’s
            unique rhythm and the person you’re becoming.
          </p>
          <p>
            We believe skincare should work as intelligently and tirelessly as
            you do. Guided by dermatological science and purpose-driven design,
            AVESS delivers high-performance solutions with each ingredient
            chosen with precision to support clarity and long-term skin health.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-md">
          <img
            src={heroImg}
            alt="AVESS x ONPRO collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* OUR PHILOSOPHY + COMMITMENT SECTION */}
      <section className="mt-10 rounded-3xl bg-white shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2 h-full">
          {/* LEFT: Full-height video background */}
          <div className="relative min-h-[320px] md:min-h-[380px]">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={philosophyVideo}
              autoPlay
              loop
              muted
            />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative h-full flex flex-col justify-center px-8 py-6 text-white">
              <h2 className="text-xl font-semibold mb-3">Our Philosophy</h2>
              <p className="text-sm md:text-base leading-relaxed">
                We see skincare as more than a routine — it’s a relationship
                built on trust. Every AVESS creation is guided by three
                principles: consciousness, science, and transparency — so you're
                always fully informed and empowered.
              </p>
            </div>
          </div>

          {/* RIGHT: Our Commitment */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-md">
              <img
                src={opAvess6}
                alt="AVESS lab & formula"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 text-sm md:text-base text-gray-700 leading-relaxed">
              <h3 className="text-base md:text-lg font-semibold mb-2">
                Our Commitment to Your Skin
              </h3>
              <p>
                Because your skin is more than a surface — it's your story. Our
                formulas are crafted to support clarity, resilience, and
                long-term skin health while honoring your unique rhythm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDED BY OUR CORE VALUES (reuse existing component) */}
      <section className="mt-10">
        <CoreValuesSection />
      </section>

      {/* FEATURED ESSENTIALS SECTION */}
      <section className="mt-10 rounded-3xl overflow-hidden shadow-md">
        <div className="relative h-[220px] md:h-[260px]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={aboutBannerVideo}
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-white/10" />

          <div className="relative h-full flex items-center px-6 md:px-10">
            <div className="bg-white/90 rounded-2xl shadow-md px-6 py-4 max-w-md text-sm md:text-base text-gray-800">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">
                Featured Essentials
              </p>
              <h3 className="text-base md:text-lg font-semibold mb-1">
                Skincare Essentials
              </h3>
              <p className="font-semibold">
                AVESS Advanced Exfoliating Solution 30
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-2">
                Powered by 30% active ingredients and clinically proven to
                deliver real results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

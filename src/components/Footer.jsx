// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#d7eaf5] pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm text-gray-700">
        <div>
          <h3 className="font-semibold mb-2">AVESS</h3>
          <p className="text-xs">
            Science-led. Purpose-built. Conscious care.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Home</h4>
          <ul className="space-y-1 text-xs">
            <li>About us</li>
            <li>Process</li>
            <li>Gallery</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-1 text-xs">
            <li>Instagram</li>
            <li>X</li>
            <li>Tiktok</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Be part of our community</h4>
          <button className="mt-1 px-4 py-2 bg-gray-900 text-white rounded-full text-xs">
            Subscribe
          </button>
        </div>
      </div>

      <p className="text-center text-[11px] text-gray-600 mt-6">
        © {new Date().getFullYear()} AVESS. All rights reserved.
      </p>
    </footer>
  );
}

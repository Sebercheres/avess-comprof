// src/components/Navbar.jsx
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import shopImage from "../assets/homepage/2. OP_AVESS-5.jpg";
import aboutImg1 from "../assets/homepage/4. OP_AVESS-8.jpg";
import aboutImg2 from "../assets/homepage/5. OP_AVESS-10.jpg";

export default function Navbar() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(null); // "shop" | "about" | null (desktop only)
  const [isMobileOpen, setIsMobileOpen] = useState(false); // mobile menu
  const closeTimeout = useRef(null);

  const openWithCancel = (menu) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenMenu(menu);
  };

  const scheduleClose = () => {
    // only for desktop hover menus
    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 180);
  };

  const cancelClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const goHome = () => {
    openWithCancel(null);
    setIsMobileOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goShop = () => {
    openWithCancel("shop");
    setIsMobileOpen(false);
    navigate("/shop");
  };

  const goAbout = () => {
    openWithCancel("about");
    setIsMobileOpen(false);
    navigate("/about");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
      <div
        className="relative w-[90%] max-w-5xl px-4 md:px-8 py-3 flex items-center justify-between bg-white/70 backdrop-blur-md rounded-3xl shadow-md"
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        {/* Logo */}
        <div
          className="text-2xl font-semibold tracking-wide text-gray-900 cursor-pointer"
          onClick={goHome}
        >
          Avess
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-900"
            onMouseEnter={() => openWithCancel(null)}
            onClick={goHome}
          >
            Home
          </button>

          <button
            type="button"
            className={`relative text-gray-600 hover:text-gray-900 ${
              openMenu === "shop" ? "font-semibold" : ""
            }`}
            onMouseEnter={() => openWithCancel("shop")}
            onClick={goShop}
          >
            Shop
          </button>

          <button
            type="button"
            className={`relative text-gray-600 hover:text-gray-900 ${
              openMenu === "about" ? "font-semibold" : ""
            }`}
            onMouseEnter={() => openWithCancel("about")}
            onClick={goAbout}
          >
            About
          </button>
        </div>

        {/* RIGHT ICONS (desktop + mobile) */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <button aria-label="Search" className="hidden md:inline hover:scale-110 transition">
            🔍
          </button>
          <button aria-label="Cart" className="hidden md:inline hover:scale-110 transition">
            🛒
          </button>
          <button aria-label="Profile" className="hidden md:inline hover:scale-110 transition">
            👤
          </button>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center rounded-full border border-gray-300 bg-white/70"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-4 bg-gray-800 transition ${isMobileOpen ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-0.5 w-4 bg-gray-800 my-0.5 transition ${isMobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-4 bg-gray-800 transition ${isMobileOpen ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* SHOP DROPDOWN (desktop only) */}
        {openMenu === "shop" && (
          <div className="hidden md:block absolute left-1/2 top-full -translate-x-1/2 mt-4 w-full max-w-4xl">
            <div className="flex bg-white/85 backdrop-blur-md rounded-3xl shadow-xl border border-white/60 overflow-hidden">
              <div className="w-1/2 p-6 text-sm text-gray-700">
                <p className="mb-4 font-semibold text-gray-900">Shop</p>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:text-gray-900" onClick={goShop}>
                    New!
                  </li>
                  <li className="cursor-pointer hover:text-gray-900" onClick={goShop}>
                    End of season sale
                  </li>
                  <li className="cursor-pointer hover:text-gray-900" onClick={goShop}>
                    Skincare
                  </li>
                  <li className="cursor-pointer hover:text-gray-900" onClick={goShop}>
                    Diamond Drops
                  </li>
                  <li className="cursor-pointer hover:text-gray-900" onClick={goShop}>
                    Shop all
                  </li>
                </ul>
              </div>

              <div className="w-1/2 bg-gradient-to-tr from-sky-50 to-sky-100 p-4 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-[220px]">
                  <img
                    src={shopImage}
                    alt="Avess product"
                    className="w-full h-48 object-cover"
                  />
                  <div className="px-4 py-3 text-xs text-gray-700">
                    <p className="font-semibold mb-1">AVESS 30% Active Serum</p>
                    <p>Brightening &amp; resurfacing treatment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT DROPDOWN (desktop only) */}
        {openMenu === "about" && (
          <div className="hidden md:block absolute left-1/2 top-full -translate-x-1/2 mt-4 w-full max-w-4xl">
            <div className="flex bg-white/85 backdrop-blur-md rounded-3xl shadow-xl border border-white/60 overflow-hidden">
              <div className="w-1/3 p-6 text-sm text-gray-700">
                <p className="mb-4 font-semibold text-gray-900">About</p>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:text-gray-900" onClick={goAbout}>
                    About Avess
                  </li>
                  <li className="cursor-pointer hover:text-gray-900" onClick={goAbout}>
                    Mission
                  </li>
                  <li className="cursor-pointer hover:text-gray-900" onClick={goAbout}>
                    Goals
                  </li>
                </ul>
              </div>

              <div className="w-2/3 p-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={aboutImg1}
                    alt="Avess skincare usage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={aboutImg2}
                    alt="Avess lab"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MOBILE MENU PANEL */}
      {isMobileOpen && (
        <div className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-40">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl py-4 px-6 space-y-2 text-sm text-gray-800">
            <button
              className="block w-full text-left py-2 border-b border-gray-200"
              onClick={goHome}
            >
              Home
            </button>
            <button
              className="block w-full text-left py-2 border-b border-gray-200"
              onClick={goShop}
            >
              Shop
            </button>
            <button
              className="block w-full text-left py-2"
              onClick={goAbout}
            >
              About
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// src/components/Navbar.jsx
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import shopImage from "../assets/homepage/2. OP_AVESS-5.jpg";
import aboutImg1 from "../assets/homepage/4. OP_AVESS-8.jpg";
import aboutImg2 from "../assets/homepage/5. OP_AVESS-10.jpg";

export default function Navbar() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(null); // "shop" | "about" | null
  const closeTimeout = useRef(null);

  const openWithCancel = (menu) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenMenu(menu);
  };

  const scheduleClose = () => {
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
      <div
        className="relative w-[90%] max-w-5xl px-8 py-3 flex items-center justify-between bg-white/70 backdrop-blur-md rounded-3xl shadow-md"
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        {/* Logo */}
        <div
          className="text-2xl font-semibold tracking-wide text-gray-900 cursor-pointer"
          onClick={() => {
            openWithCancel(null);
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Avess
        </div>

        {/* Main links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {/* Home */}
          <button
            type="button"
            className="text-gray-600 hover:text-gray-900"
            onMouseEnter={() => openWithCancel(null)}
            onClick={() => {
              openWithCancel(null);
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </button>

          {/* Shop */}
          <button
            type="button"
            className={`relative text-gray-600 hover:text-gray-900 ${
              openMenu === "shop" ? "font-semibold" : ""
            }`}
            onMouseEnter={() => openWithCancel("shop")}
            onClick={() => {
              openWithCancel("shop");
              navigate("/shop");
            }}
          >
            Shop
          </button>

          {/* About */}
          <button
            type="button"
            className={`relative text-gray-600 hover:text-gray-900 ${
              openMenu === "about" ? "font-semibold" : ""
            }`}
            onMouseEnter={() => openWithCancel("about")}
            onClick={() => {
              openWithCancel("about");
              navigate("/about");
            }}
          >
            About
          </button>
        </div>

        {/* Right icons */}
        <div className="flex space-x-4 text-lg">
          <button aria-label="Search" className="hover:scale-110 transition">
            🔍
          </button>
          <button aria-label="Cart" className="hover:scale-110 transition">
            🛒
          </button>
          <button aria-label="Profile" className="hover:scale-110 transition">
            👤
          </button>
        </div>

        {/* SHOP DROPDOWN */}
        {openMenu === "shop" && (
          <div className="absolute left-1/2 top-full -translate-x-1/2 mt-4 w-full max-w-4xl">
            <div className="flex bg-white/85 backdrop-blur-md rounded-3xl shadow-xl border border-white/60 overflow-hidden">
              {/* Left links */}
              <div className="w-1/2 p-6 text-sm text-gray-700">
                <p className="mb-4 font-semibold text-gray-900">Shop</p>
                <ul className="space-y-2">
                  <li
                    className="cursor-pointer hover:text-gray-900"
                    onClick={() => navigate("/shop")}
                  >
                    New!
                  </li>
                  <li
                    className="cursor-pointer hover:text-gray-900"
                    onClick={() => navigate("/shop")}
                  >
                    End of season sale
                  </li>
                  <li
                    className="cursor-pointer hover:text-gray-900"
                    onClick={() => navigate("/shop")}
                  >
                    Skincare
                  </li>
                  <li
                    className="cursor-pointer hover:text-gray-900"
                    onClick={() => navigate("/shop")}
                  >
                    Diamond Drops
                  </li>
                  <li
                    className="cursor-pointer hover:text-gray-900"
                    onClick={() => navigate("/shop")}
                  >
                    Shop all
                  </li>
                </ul>
              </div>

              {/* Right product card */}
              <div className="w-1/2 bg-gradient-to-tr from-sky-50 to-sky-100 p-4 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-[220px]">
                  <img
                    src={shopImage}
                    alt="Avess product"
                    className="w-full h-48 object-cover"
                  />
                  <div className="px-4 py-3 text-xs text-gray-700">
                    <p className="font-semibold mb-1">
                      AVESS 30% Active Serum
                    </p>
                    <p>Brightening &amp; resurfacing treatment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT DROPDOWN */}
        {openMenu === "about" && (
          <div className="absolute left-1/2 top-full -translate-x-1/2 mt-4 w-full max-w-4xl">
            <div className="flex bg-white/85 backdrop-blur-md rounded-3xl shadow-xl border border-white/60 overflow-hidden">
              <div className="w-1/3 p-6 text-sm text-gray-700">
                <p className="mb-4 font-semibold text-gray-900">About</p>
                <ul className="space-y-2">
                  <li
                    className="cursor-pointer hover:text-gray-900"
                    onClick={() => navigate("/about")}
                  >
                    About Avess
                  </li>
                  <li
                    className="cursor-pointer hover:text-gray-900"
                    onClick={() => navigate("/about")}
                  >
                    Mission
                  </li>
                  <li
                    className="cursor-pointer hover:text-gray-900"
                    onClick={() => navigate("/about")}
                  >
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
    </nav>
  );
}

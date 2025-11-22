// src/components/ShopPage.jsx
import React, { useState, useMemo } from "react";

import drop10 from "../assets/shop/Avess Drop 1.0.png";
import dropX from "../assets/shop/Avess Drop X.png";
import serum from "../assets/shop/Avess Serum.png";
import tube from "../assets/shop/Avess.png";
import featureImg from "../assets/shop/8. OP_AVESS-14.jpg";

const products = [
  {
    id: 1,
    name: "Avess Drop 1.0",
    image: drop10,
    tag: "New",
    badge: "30% Active",
    category: "serum",
  },
  {
    id: 2,
    name: "Avess Drop X",
    image: dropX,
    tag: "Best seller",
    badge: "Brightening",
    category: "serum",
  },
  {
    id: 3,
    name: "Avess Advanced Serum",
    image: serum,
    tag: "Clinical",
    badge: "Resurfacing",
    category: "serum",
  },
  {
    id: 4,
    name: "Avess Cream",
    image: tube,
    tag: "Hydrating",
    badge: "Barrier Care",
    category: "moisturizer",
  },
  {
    id: 5,
    name: "Avess Skin Story Edit",
    image: featureImg,
    tag: "Curated set",
    badge: "Limited",
    category: "set",
    featured: true,
  },
  {
    id: 6,
    name: "Avess Everyday Cleanser",
    image: tube,
    tag: "Daily",
    badge: "Gentle",
    category: "cleanser",
  },
];

const filters = ["Newest", "Curated", "Recommended"];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("Newest");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (activeFilter === "Curated") {
      // show featured product first
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (activeFilter === "Recommended") {
      // simple “recommended” simulation: prefer serums
      list.sort((a, b) => (a.category === "serum" ? -1 : 1));
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(term));
    }

    return list;
  }, [activeFilter, searchTerm]);

  return (
    <div className="pt-28 pb-16 bg-[#f4f9fc]">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        {/* Header row: filters + search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 text-sm">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-full border text-xs md:text-sm transition ${
                  activeFilter === f
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-60">
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-gray-300 bg-white py-2 pl-9 pr-3 text-xs md:text-sm outline-none focus:ring-2 focus:ring-gray-900/20"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs">
              🔍
            </span>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`relative rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition hover:-translate-y-1 ${
                product.featured ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Tag + badge */}
              <div className="absolute top-3 left-3 flex flex-col gap-1 text-[10px]">
                {product.tag && (
                  <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 text-gray-800 shadow-sm">
                    {product.tag}
                  </span>
                )}
                {product.badge && (
                  <span className="inline-flex items-center rounded-full bg-gray-900/90 px-2 py-0.5 text-white shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Image */}
              <div className="w-full h-56 bg-gray-50 rounded-t-3xl overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-contain h-full w-full ${
                    product.featured ? "object-cover" : ""
                  }`}
                />
              </div>

              {/* Info */}
              <div className="px-4 py-3 flex items-center justify-between text-xs md:text-sm text-gray-800">
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Exfoliating • Brightening • Conscious Care
                  </p>
                </div>
                <button className="mt-1 rounded-full border border-gray-300 px-3 py-1 text-[11px] hover:bg-gray-900 hover:text-white transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Navbar from "./Navbar";
import "../index.css";
import Testimonial from "./Testimonial";
import Leadership from "./LeaderShip";
import Footer from "./Footer";
import CursorParticles from "./CursorParticles";

const ProductSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [showFlavours, setShowFlavours] = useState(true); // default active

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const flavourImages = [
    {
      src: "/assets/greenbtl.png",
      label: "Kiwi Lemon",
      bg: "bg-green-200",
    },
    {
      src: "/assets/yellowbtl.png",
      label: "Mango Pineapple",
      bg: "bg-yellow-200",
    },
    {
      src: "/assets/redbtl.png",
      label: "Strawberry Watermelon",
      bg: "bg-red-200",
    },
  ];

  const handleExplore = () => {
    setShowFlavours(false);
  };

  const handleMyFlavoured = () => {
    setShowFlavours(true);
  };

  return (
    <div className="bg-[#d4e789] min-h-screen pt-15 relative overflow-hidden">
      <Navbar />

      <CursorParticles/>
      <section className="relative w-full max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Vertical Marquee */}
        <div className="hidden md:block absolute -left-20 top-[53px] h-[448px] w-34 overflow-hidden rounded-lg shadow-2xl bg-white/30 backdrop-blur-md z-20">
          <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-b from-[#fefdf9] to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-[#dbd8cb] to-transparent z-10" />
          <div className="flex flex-col items-center gap-4 animate-marqueev">
            <img
              src="/assets/marqv1.webp"
              alt="Marquee 1"
              className="h-28 w-28 object-cover border-2 border-black rounded-lg"
            />
            <img
              src="/assets/marqv.webp"
              alt="Marquee 2"
              className="h-28 w-28 object-cover border-2 border-black rounded-lg"
            />
            <img
              src="/assets/marquee1.jpeg"
              alt="Marquee 3"
              className="h-28 w-28 object-cover border-2 border-black rounded-lg"
            />
            <img
              src="/assets/greenbtl.png"
              alt="Marquee 4"
              className="h-28 w-28 object-cover border-2 border-black rounded-lg"
            />
            <img
              src="/assets/marquee5.jpeg"
              alt="Marquee 5"
              className="h-28 w-28 object-cover border-2 border-black rounded-lg"
            />
            <img
              src="/assets/redbtl.png"
              alt="Marquee 6"
              className="h-28 w-28 object-cover border-2 border-black rounded-lg"
            />
          </div>
        </div>

        {/* Flavour Images Row (Absolute Floating) */}
        {showFlavours && (
          <div className="absolute -right-10 top-[50%] flex flex-col md:flex-row gap-4 z-30">
            {flavourImages.map((item, idx) => (
              <div
                key={idx}
                className={`relative p-2 rounded-lg shadow-lg border border-black ${item.bg}`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-28 h-28 object-contain rounded"
                />
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 text-center py-1 text-xs font-semibold rounded-b-md">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottle Image */}
        <div className="flex justify-center">
          <img
            src="/assets/3btl.webp"
            alt="Fokus Hydration Pack"
            className="w-full max-w-md object-contain border-3 border-black rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4 text-[#1a1a1a] relative">
          <p className="w-fit text-4xl font-bold">Fokus Hydration Pack of 3</p>
          <p className="inline-flex items-center bg-white font-bold text-gray-600 rounded-full px-3 py-1 text-md w-fit">
            3 Flavours, 1 Bottle Each
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {/* Explore More Button */}
            <button
              onClick={handleExplore}
              className={`relative px-6 py-2 font-semibold border-none outline-none rounded-md overflow-hidden transition-all duration-500 ease-in-out group ${
                !showFlavours
                  ? "bg-black text-white scale-105"
                  : "bg-gradient-to-r from-[#7e8a97] to-[#4b525a] text-black hover:text-white hover:scale-105"
              }`}
            >
              <span className="relative z-10">Explore More</span>
              {showFlavours && (
                <>
                  <span className="absolute top-0 left-0 w-full h-1/2 bg-green-300 transform origin-bottom group-hover:-translate-y-full transition-all duration-500"></span>
                  <span className="absolute bottom-0 left-0 w-full h-1/2 bg-green-500 transform origin-top group-hover:translate-y-full transition-all duration-500"></span>
                </>
              )}
            </button>

            {/* My Flavoured Button */}
            <button
              onClick={handleMyFlavoured}
              className={`relative px-6 py-2 font-semibold border-none outline-none rounded-md overflow-hidden transition-all duration-500 ease-in-out group ${
                showFlavours
                  ? "bg-black text-white scale-105"
                  : "bg-gradient-to-r from-[#2c3e50] to-[#2b2b2d] text-black hover:text-white hover:scale-105"
              }`}
            >
              <span className="relative z-10">My Flavoured</span>
              {!showFlavours && (
                <>
                  <span className="absolute top-0 left-0 w-full h-1/2 bg-green-300 transform origin-bottom group-hover:-translate-y-full transition-all duration-500"></span>
                  <span className="absolute bottom-0 left-0 w-full h-1/2 bg-green-500 transform origin-top group-hover:translate-y-full transition-all duration-500"></span>
                </>
              )}
            </button>
          </div>

          <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
            <li>Kiwi Lemon</li>
            <li>Mango Pineapple</li>
            <li>Strawberry Watermelon</li>
          </ul>

          <div className="mt-4">
            <p className="text-lg font-semibold">
              Rs. 450.00{" "}
              <span className="text-sm text-gray-500">(Rs.150 x 3)</span>
            </p>
            <p className="text-sm text-gray-500">Incl. of taxes + shipping</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={decrease}
              className="w-8 h-8 text-lg bg-gray-200 hover:bg-gray-300 rounded"
            >
              –
            </button>
            <p className="text-lg font-medium">{quantity}</p>
            <button
              onClick={increase}
              className="w-8 h-8 text-lg bg-gray-200 hover:bg-gray-300 rounded"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 relative px-6 py-2 font-semibold border-none outline-none rounded-md overflow-hidden transition-all duration-500 ease-in-out group active:scale-95 bg-emerald-400">
            <span className="relative z-10 text-white font-bold">
              Add to Cart
            </span>

            {/* Splitting layers */}
            <span className="absolute top-0 left-0 w-full h-1/2 bg-red-400 transform origin-bottom group-hover:-translate-y-full transition-all duration-500"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/2 bg-red-500 transform origin-top group-hover:translate-y-full transition-all duration-500"></span>
          </button>
        </div>
      </section>
      <Testimonial />
      <Footer/>
    </div>
  );
};

export default ProductSection;

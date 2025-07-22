import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "../index.css";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import CursorParticles from "../components/CursorParticles";
import Marquee from "../components/Marquee";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [showFlavours, setShowFlavours] = useState(true);
  const navigate = useNavigate();
  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const flavourImages = [
    { src: "/assets/greenbtl.png", label: "Kiwi Lemon", bg: "bg-green-200" },
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
    navigate("/product-info");
  };
  const handleMyFlavoured = () => setShowFlavours(true);

  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: "fokus-hydration-pack", // unique ID
      name: "Fokus Hydration Pack of 3",
      price: 450,
      quantity: quantity,
      image: "/assets/3btl.webp",
    });
    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

  };

  return (
    <div className="bg-[#d4e789] min-h-screen pt-25 relative overflow-hidden">
      <Navbar />
      <CursorParticles />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
      >
        {/* Vertical Marquee */}
        <div className="hidden md:block absolute -left-20 top-[40px] h-[448px] w-34 overflow-hidden rounded-lg shadow-2xl bg-white/30 backdrop-blur-md z-20">
          <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-b from-[#c8c6c1] to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-[#c8c6c1] to-transparent z-10" />
          <div className="flex flex-col items-center gap-4 animate-marqueev">
            {[
              "/assets/marqv1.webp",
              "/assets/marqv.webp",
              "/assets/marquee1.jpeg",
              "/assets/greenbtl.png",
              "/assets/marquee5.jpeg",
              "/assets/redbtl.png",
            ].map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`Marquee ${idx}`}
                className="h-28 w-28 object-cover border-2 border-black rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: idx * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Flavour Cards */}
        {showFlavours && (
          <div className="hidden md:flex absolute -right-12 top-[65%] transform -translate-y-1/2 flex-col md:flex-row gap-4 z-30">
            {flavourImages.map((item, idx) => (
              <motion.div
                key={idx}
                className={`relative p-2 rounded-lg shadow-lg border border-black ${item.bg}`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  delay: idx * 0.3,
                }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-28 h-28 object-contain rounded"
                />
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 text-center py-1 text-xs font-semibold rounded-b-md">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottle Image with Tilt */}
        <div className="flex justify-center w-full">
          <img
            src="/assets/3btl.webp"
            alt="Fokus Hydration Pack"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain border-4 border-black rounded-xl shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4 text-[#1a1a1a] w-full">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Fokus Hydration Pack of 3
          </p>
          <p className="inline-flex items-center bg-white font-semibold text-gray-700 rounded-full px-3 py-1 text-sm sm:text-md w-fit mx-auto md:mx-0">
            3 Flavours, 1 Bottle Each
          </p>

          {/* Action Buttons with Hover Animations */}
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center md:justify-start">
            {[
              {
                label: "Explore More",
                action: handleExplore,
                active: !showFlavours,
                inactiveBg: "from-[#c7e6b4] to-[#a8d18f]", // soft sage gradient
                hoverBg: "bg-[#6cae75]", // deep green hover
              },
              {
                label: "My Flavoured",
                action: handleMyFlavoured,
                active: showFlavours,
                inactiveBg: "from-[#f7e8c9] to-[#e2d2b1]", // warm beige gradient
                hoverBg: "bg-[#bfa779]", // muted brown hover
              },
            ].map((btn, idx) => (
              <motion.button
                key={idx}
                onClick={btn.action}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0,0,0,0.15)",
                }}
                className={`relative px-6 py-2 font-semibold border-none outline-none rounded-md overflow-hidden transition-all duration-500 ease-in-out group ${
                  btn.active
                    ? "bg-[#375a3c] text-white scale-105" // forest green active
                    : `bg-gradient-to-t ${btn.inactiveBg} text-[#1a1a1a] hover:${btn.hoverBg} hover:text-white`
                }`}
              >
                <span className="relative z-10">{btn.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Flavour List */}
          <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1 text-center md:text-left">
            <li>Kiwi Lemon</li>
            <li>Mango Pineapple</li>
            <li>Strawberry Watermelon</li>
          </ul>

          {/* Price */}
          <div className="mt-2 text-center md:text-left">
            <p className="text-lg font-semibold">
              Rs. 450.00{" "}
              <span className="text-sm text-gray-500">(Rs.150 x 3)</span>
            </p>
            <p className="text-xs text-gray-500">Incl. of taxes + shipping</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
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

          {/* Add to Cart Button with Hover Animation */}
          <motion.button
            onClick={handleAddToCart}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
            }}
            className="mt-5 px-6 py-2 text-sm sm:text-base font-semibold bg-[#4a8f5c] hover:bg-[#3c724b] text-white rounded-md shadow active:scale-95 transition mx-auto md:mx-0"
          >
            Add to Cart
          </motion.button>
        </div>
      </motion.section>
      <Marquee />
      <Testimonial />
      <Footer />
      <ToastContainer />
      
      {/* Mobile Overlapping Images */}
    </div>
  );
};

export default ProductSection;

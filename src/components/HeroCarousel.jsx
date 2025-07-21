// src/components/HeroCarousel.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "/assets/hero2.jpeg",
  "/assets/hero1.jpeg",
  "/assets/hero3.jpeg",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen md:h-screen sm:h-[80vh] w-full relative overflow-hidden">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 mb-40 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.3 }}
          className="flex px-4 py-2 rounded-full bg-transparent backdrop-blur-sm border border-white/30 justify-center items-center"
        >
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/products")}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.3 }}
            className="px-10 py-3 sm:px-6 sm:py-2 text-sm sm:text-base bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition cursor-pointer"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

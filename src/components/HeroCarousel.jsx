// src/components/HeroCarousel.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/assets/hero1.jpeg",
  "/assets/hero2.jpeg",
  "/assets/hero3.jpeg",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover "
        />
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.3 }}
          className="flex px-6 py-2 rounded-full bg-transparent backdrop-blur-sm border border-white/30 justify-center items-center"
        >
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.3 }}
            className="px-10 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition cursor-pointer"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
      /
    </div>
  );
}

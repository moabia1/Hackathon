// src/components/HeroCarousel.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = ["/assets/hero1.jpeg", "/assets/Hero2.png", "/assets/hero3.jpeg"];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover mt-16"
        />
      ))}

      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Discover Your Style
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl max-w-xl"
        >
          High-quality streetwear and accessories inspired by Fokus.shop for
          your daily vibe.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
}

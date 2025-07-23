import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const defaultImages = [
  "/assets/hero2.jpeg",
  "/assets/hero1.jpeg", // Will conditionally swap on mobile
  "/assets/hero3.jpeg",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(defaultImages);
  const navigate = useNavigate();

  useEffect(() => {
    // Swap hero1.jpeg with hero1-mobile.jpeg only on mobile
    if (window.innerWidth <= 768) {
      setImages([
        "/assets/hero2.jpeg",
        "/assets/hero1-mobile.jpeg", // Mobile-specific image
        "/assets/hero3.jpeg",
      ]);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-screen md:h-screen sm:h-[80vh] overflow-hidden">
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

      {/* CTA Button Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 mb-40 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex px-4 py-2 rounded-full border border-white/30 bg-transparent backdrop-blur-sm justify-center items-center"
        >
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate("/products")}
            className="px-10 py-3 sm:px-6 sm:py-2 text-sm sm:text-base bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition cursor-pointer"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

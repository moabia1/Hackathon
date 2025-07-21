// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingUp = window.scrollY < lastScrollY;
      setShow(isScrollingUp || window.scrollY < 100); // stays visible near top
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: show ? 0 : -80, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 w-full z-50 h-20 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6"
    >
      {/* Left Navigation Links */}
      <div className="space-x-6 hidden md:flex text-zinc-700">
        <motion.p
          className="text-lg font-semibold hover:text-black cursor-pointer"
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
        >
          Home
        </motion.p>
        <motion.p
          className="text-lg font-semibold hover:text-black cursor-pointer"
          whileTap={{ scale: 0.95 }}
        >
          Know Fokus
        </motion.p>
        <motion.p
          className="text-lg font-semibold hover:text-black cursor-pointer"
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/products")}
        >
          Product
        </motion.p>
      </div>

      {/* Center Logo */}
      <Link to="/" className="flex items-center">
        <img
          className="h-10 md:h-12 object-contain"
          src="/assets/navlogo.png"
          alt="Fokus Logo"
        />
      </Link>

      {/* Right Icons & CTA */}
      <div className="space-x-5 flex items-center">
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="p-2 text-2xl rounded-full"
        >
          <i className="ri-user-add-fill text-black hover:text-gray-400"></i>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="p-2 text-2xl rounded-full"
        >
          <i className="ri-shopping-cart-fill text-black hover:text-gray-400"></i>
        </motion.button>
        <motion.button
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-400 text-white text-sm md:text-base px-4 py-2 rounded-full"
          onClick={() => navigate("/products")}
        >
          Buy Now
        </motion.button>
      </div>
    </motion.nav>
  );
}

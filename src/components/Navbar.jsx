// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: show ? 0 : -80 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm to-zinc-100 text-white p-4 flex justify-between items-center"
    >
      <div className="space-x-6 hidden md:flex text-black ml-5">
        <Link to="/" className="text-lg font-semibold hover:text-zinc-500">
          Home
        </Link>
        <Link to="/about" className="text-lg font-semibold hover:text-zinc-500">
          Know Fokus
        </Link>
        <Link
          to="/contact"
          className="text-lg font-semibold hover:text-zinc-500"
        >
          Product
        </Link>
      </div>
      <Link to="/" className="flex items-center space-x-2">
        <img
          className="w-30 items-center justify-center font-black"
          src="/assets/navlogo.png"
          alt="Logo"
        />
      </Link>
      <div className="space-x-7 flex items-center">
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="p-2 text-2xl rounded-full"
        >
          <i className="ri-user-add-fill hover:text-gray-400 text-black"></i>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="p-2 text-2xl rounded-full"
        >
          <i className="ri-shopping-cart-fill hover:text-gray-400 text-black"></i>
        </motion.button>
        <motion.button
          whileHover={{ scale: 0.9 }}
          className="bg-emerald-400 text-xl text-zinc-100 px-4 py-2 rounded"
        >
          Buy Now
        </motion.button>
      </div>
    </motion.nav>
  );
}

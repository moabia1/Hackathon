import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingUp = window.scrollY < lastScrollY;
      setShow(isScrollingUp || window.scrollY < 100);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Know Fokus", path: "/about" },
    { name: "Product", path: "/products" },
    { name: "Login", path: "/login" },
    { name: "Create Account", path: "/register" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: show ? 0 : -80, opacity: show ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full z-50 h-20 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6"
      >
        {/* Left Navigation Links or Hamburger */}
        <div className="flex items-center">
          {/* Desktop links */}
          <div className="space-x-6 hidden md:flex text-zinc-700">
            {menuLinks.slice(0, 3).map((link, idx) => (
              <motion.p
                key={idx}
                className="text-lg font-semibold hover:text-black cursor-pointer"
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </motion.p>
            ))}
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <i className="ri-menu-line"></i>
          </motion.button>
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
        <div className="flex items-center space-x-4">
          {/* Mobile Cart Icon */}
          {/* Mobile Cart Icon */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="p-2 text-2xl md:hidden ml-auto absolute right-1"
          >
            <i className="ri-shopping-cart-fill text-black hover:text-gray-400"></i>
          </motion.button>

          {/* Desktop User & Cart Icons */}
          <div className="hidden md:flex space-x-4">
            <motion.button whileHover={{ scale: 1.2 }} className="p-2 text-2xl">
              <i className="ri-user-add-fill text-black hover:text-gray-400"></i>
            </motion.button>
            <motion.button whileHover={{ scale: 1.2 }} className="p-2 text-2xl">
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
        </div>
      </motion.nav>

      {/* Slide-in Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col space-y-6"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-zinc-700"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
            {menuLinks.map((link, idx) => (
              <motion.p
                key={idx}
                whileTap={{ scale: 0.95 }}
                className="text-lg font-semibold text-zinc-700 hover:text-black cursor-pointer"
                onClick={() => {
                  navigate(link.path);
                  setMenuOpen(false);
                }}
              >
                {link.name}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

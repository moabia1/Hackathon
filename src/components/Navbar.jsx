import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Handle hide/show navbar on scroll
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
    { name: "Create Account", path: "/login" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: show ? 0 : -80, opacity: show ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full z-50 h-20 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6"
      >
        {/* Left: Desktop Links & Mobile Hamburger */}
        <div className="flex items-center">
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-zinc-700">
            {menuLinks.slice(0, 3).map((link, idx) => (
              <motion.p
                key={idx}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(link.path)}
                className="text-lg font-semibold hover:text-black cursor-pointer"
              >
                {link.name}
              </motion.p>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(true)}
            className="text-2xl md:hidden"
          >
            <i className="ri-menu-line"></i>
          </motion.button>
        </div>

        {/* Center: Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/navlogo.png"
            alt="Fokus Logo"
            className="h-10 md:h-12 object-contain"
          />
        </Link>

        {/* Right: Icons & CTA */}
        <div className="flex items-center space-x-4">
          {/* Mobile Cart */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={() => navigate("/cart")}
            className="relative p-2 text-2xl md:hidden ml-auto"
          >
            <i className="ri-shopping-cart-fill text-black hover:text-gray-400"></i>
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs bg-red-500 text-white rounded-full">
                {totalQuantity}
              </span>
            )}
          </motion.button>

          {/* Desktop User & Cart Icons with CTA */}
          <div className="hidden md:flex space-x-4">
            {/* User */}
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => navigate("/login")}
              className="p-2 text-2xl"
            >
              <i className="ri-user-add-fill text-black hover:text-gray-400"></i>
            </motion.button>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => navigate("/cart")}
              className="relative p-2 text-2xl"
            >
              <i className="ri-shopping-cart-fill text-black hover:text-gray-400"></i>
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs bg-red-500 text-white rounded-full">
                  {totalQuantity}
                </span>
              )}
            </motion.button>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/products")}
              className="bg-emerald-400 text-white text-sm md:text-base px-7 py-1 rounded-full font-semibold"
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col space-y-6"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-zinc-700"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>

            {/* Mobile Menu Links */}
            {menuLinks.map((link, idx) => (
              <motion.p
                key={idx}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate(link.path);
                  setMenuOpen(false);
                }}
                className="text-lg font-semibold text-zinc-700 hover:text-black cursor-pointer"
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

import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="rounded-lg shadow-lg bg-[#ffe9b7] w-full">
      <footer className="text-black py-8 px-6 sm:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-screen-xl mx-auto">
        {/* Logo and Text */}
        <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
          <img
            src="/assets/know1.png"
            alt="Fokus Logo"
            className="h-30 sm:h-32 md:h-32 lg:h-34 mb-3 object-contain w-full"
          />
          <p className="text-base sm:text-lg text-gray-700 tracking-wide font-semibold text-center sm:text-left">
            &copy; 2025 Fokus — All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 text-base sm:text-lg mb-6 sm:mb-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-2 items-center sm:items-start">
            <p className="font-semibold mb-1">Explore</p>
            <p
              onClick={() => navigate("/products")}
              className="hover:underline cursor-pointer"
            >
              Shop
            </p>
            <p
              onClick={() => navigate("/cart")}
              className="hover:underline cursor-pointer"
            >
              Orders
            </p>
            <p className="hover:underline cursor-pointer">Return Policy</p>
            <p
              onClick={() => navigate("/products")}
              className="hover:underline cursor-pointer"
            >
              Product
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2 items-center sm:items-start">
            <p className="font-semibold mb-1">Support</p>
            <p
              onClick={() => navigate("/about")}
              className="hover:underline cursor-pointer"
            >
              Know Fokus
            </p>
            <p className="hover:underline cursor-pointer">Contact</p>
            <p className="hover:underline cursor-pointer">Customer Service</p>
            <p className="hover:underline cursor-pointer">Terms & Conditions</p>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center sm:justify-end gap-4 sm:gap-5">
          <a href="https://mail.com" target="_blank" rel="noreferrer">
            <img
              src="/assets/mail.svg"
              alt="Mail"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
          </a>
          <a
            href="https://www.instagram.com/letsfokus/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/instagram.svg"
              alt="Instagram"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img
              src="/assets/twitter.svg"
              alt="Twitter"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img
              src="/assets/youtube.svg"
              alt="YouTube"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

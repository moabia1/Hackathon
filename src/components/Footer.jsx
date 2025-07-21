import React from "react";

const Footer = () => {
  return (
    <div className="rounded-lg shadow-lg">
      <footer className="bg-[#ffe9b7] text-black pl-20 py-10 flex flex-row items-center justify-between ">
        {/* Logo Image */}
        <div>
          <img
            src="/assets/know1.png"
            alt="Fokus Logo"
            className="h-70 w-70 mb-2 object-contain"
          />
          <p className="text-lg text-gray-700 tracking-wider font-semibold">
            &copy; 2025 Fokus — All rights reserved.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-lg">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold mb-2">Explore</p>
            <p>Shop</p>
            <p>Orders</p>
            <p>Return Policy</p>
            <p>Product</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold mb-2">Support</p>
            <p>Know Fokus</p>
            <p>Contact</p>
            <p>Customer Service</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5 mr-10">
          <a href="https://mail.com" target="_blank" rel="noreferrer">
            <img src="/assets/mail.svg" alt="Facebook" className="h-10 w-10" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              src="/assets/instagram.svg"
              alt="Instagram"
              className="h-10 w-10"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="/assets/twitter.svg" alt="Twitter" className="h-10 w-10" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src="/assets/youtube.svg" alt="YouTube" className="h-10 w-10" />
          </a>
        </div>

        {/* Footer Text */}
      </footer>
    </div>
  );
};

export default Footer;

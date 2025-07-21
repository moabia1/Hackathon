import React from "react";

const Footer = () => {
  return (
    <div className="rounded-lg shadow-lg bg-[#ffe9b7]">
      <footer className=" text-black pl-20 py-10 flex flex-row items-center justify-between ">
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
            <p className="hover:underline cursor-pointer">Shop</p>
            <p className="hover:underline cursor-pointer">Orders</p>
            <p className="hover:underline cursor-pointer">Return Policy</p>
            <p className="hover:underline cursor-pointer">Product</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold mb-2">Support</p>
            <p className="hover:underline cursor-pointer">Know Fokus</p>
            <p className="hover:underline cursor-pointer">Contact</p>
            <p className="hover:underline cursor-pointer">Customer Service</p>
            <p className="hover:underline cursor-pointer">Terms & Conditions</p>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
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
            <img
              src="/assets/twitter.svg"
              alt="Twitter"
              className="h-10 w-10"
            />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img
              src="/assets/youtube.svg"
              alt="YouTube"
              className="h-10 w-10"
            />
          </a>
        </div>

        {/* Footer Text */}
      </footer>
    </div>
  );
};

export default Footer;

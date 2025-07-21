import { motion } from "framer-motion";
import Navbar from "./Navbar";
import OurMission from "./OurMission";
import Leadership from "./LeaderShip";
import CursorParticles from "./CursorParticles";

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#ffe9b7] overflow-hidden pt-15 relative">
      <Navbar />
      <CursorParticles />
      <div className="w-full flex justify-center items-center py-8 sm:py-10">
        <div className="relative w-[80%] sm:w-[60%] md:w-[40%] h-[40vh] sm:h-[45vh] rounded-lg overflow-hidden">
          <img
            src="/assets/know-fokus.png" // Replace with your actual image
            alt="Know Fokus"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-neutral-900 text-center mt-12 mb-8 w-full"
      >
        <div className="absolute left-10 w-3 h-3 rounded-full bg-black mt-10"></div>
        <div className="absolute right-10 w-3 h-3 rounded-full bg-black mt-10"></div>
        How it started
      </motion.h2>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8 md:gap-12 pb-16">
        {/* Left Founder */}
        <div className="flex flex-col items-center mr-10 w-15 h-15 mt-15">
          <img
            src="/assets/abhishek.jpg"
            alt="Abhishek Malhan"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover shadow-md"
          />
          <span className="mt-2 px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-semibold">
            Abhishek
          </span>
        </div>

        {/* Story Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left text-neutral-800 text-xl sm:text-lg leading-relaxed max-w-2xl font-semibold"
        >
          Before Fokus, our founders{" "}
          <span className="font-bold">Abhishek Malhan</span> and{" "}
          <span className="font-bold">Nischay Malhan</span> envisioned a brand
          that would not only refresh but also empower a generation seeking a
          healthier, purpose-driven lifestyle.
          <br />
          <br />
          Having spent years creating content and building communities, they
          realized the need for a clean, functional hydration solution that
          seamlessly fits into a busy, goal-driven life. In 2024, they brought
          Fokus to life, driven by the mission to craft drinks that fuel your
          every moment with authenticity and energy.
        </motion.p>

        {/* Right Founder */}
        <div className="flex flex-col items-center w-15 h-15 mb-45">
          <img
            src="/assets/nischay.jpg"
            alt="Nischay Malhan"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover shadow-md"
          />
          <span className="mt-2 px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-semibold">
            Nischay
          </span>
        </div>
      </div>
      <OurMission />
      <Leadership />
    </div>
  );
};

export default About;

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Navbar from "../components/Navbar";
import OurMission from "../components/OurMission";
import Leadership from "../components/LeaderShip";
import CursorParticles from "../components/CursorParticles";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#ffe9b7] overflow-hidden pt-16 relative ">
      <Navbar />
      <CursorParticles />

      {/* Logo Image with fade and scale on load */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center items-center py-6 sm:py-10"
      >
        <div className="relative w-3/4 sm:w-1/2 md:w-1/3 h-40 sm:h-48 md:h-60 rounded-lg overflow-hidden">
          <img
            src="/assets/know-fokus.png"
            alt="Know Fokus"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </motion.div>

      {/* Heading with slight bounce */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 60,
        }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 text-center mt-10 mb-8 w-full px-4 relative"
      >
        <div className="absolute left-6 sm:left-10 top-1/2 transform -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black"></div>
        <div className="absolute right-6 sm:right-10 top-1/2 transform -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black"></div>
        How it started
      </motion.h2>

      {/* Main Content with staggered fade-slide for founders and paragraph */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 gap-8 md:gap-12 pb-16"
      >
        {/* Left Founder with Parallax */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.15}
          scale={1.02}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="flex flex-col items-center"
          >
            <img
              src="/assets/abhishek.jpg"
              alt="Abhishek Malhan"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover shadow-md"
            />
            <span className="mt-2 px-3 py-1 bg-[#ff6464] text-white rounded-full text-xs sm:text-sm font-semibold">
              Abhishek
            </span>
          </motion.div>
        </Tilt>

        {/* Story Paragraph */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="text-center md:text-left text-neutral-800 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-medium px-4"
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

        {/* Right Founder with Parallax */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.15}
          scale={1.02}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="flex flex-col items-center"
          >
            <img
              src="/assets/nischay.jpg"
              alt="Nischay Malhan"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover shadow-md"
            />
            <span className="mt-2 px-3 py-1 bg-[#94e050] text-black rounded-full text-xs sm:text-sm font-semibold">
              Nischay
            </span>
          </motion.div>
        </Tilt>
      </motion.div>

      <OurMission />
      <Leadership />
      <hr className="text-zinc-500 text-xl w-full"/>
      <Footer/>
    </div>
  );
};

export default About;

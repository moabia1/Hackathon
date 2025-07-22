import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const KnowFokusSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative overflow-hidden py-20 md:py-24 flex justify-center items-center w-full bg-cover bg-center object-cover"
      style={{ backgroundImage: "url('/assets/Banner-bg.jpeg')" }}
    >
      {/* Left Model (Desktop) */}
      <motion.img
        src="/assets/know1.png"
        alt="Left Model"
        className="hidden lg:block absolute bottom-0 left-16 md:left-24 lg:left-32 xl:left-36 w-[280px] xl:w-[320px] 2xl:w-[360px] object-contain"
        initial={{ opacity: 0, x: -120, y: 120 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Right Model (Desktop) */}
      <motion.img
        src="/assets/know2.png"
        alt="Right Model"
        className="hidden lg:block absolute bottom-0 right-16 md:right-24 lg:right-32 xl:right-36 w-[280px] xl:w-[320px] 2xl:w-[360px] object-contain"
        initial={{ opacity: 0, x: 120, y: -120 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Center Content */}
      <div className="max-w-2xl text-center px-4 z-10 flex flex-col items-center gap-5">
        <motion.img
          src="/assets/know-fokus.png"
          alt="Know Fokus, Know Us"
          className="w-72 sm:w-80 md:w-[440px] lg:w-[480px] mb-6 object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          className="text-black font-medium sm:font-semibold text-sm sm:text-base md:text-xl leading-relaxed mb-4"
        >
          <p>Fokus isn’t just a drink—</p>
          <p>it’s a lifestyle you live</p>
          <p>every day. Dive into our</p>
          <p>story and see what makes us different.</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          onClick={() => navigate("/about")}
          className="px-10 py-3 bg-black text-white font-semibold rounded-full hover:bg-zinc-800 transition cursor-pointer"
        >
          Explore
        </motion.button>

        {/* Mobile Overlapping Images */}
        <div className="relative mt-8 flex justify-center items-center gap-[-20px] lg:hidden">
          <motion.img
            src="/assets/know1.png"
            alt="Left Model Mobile"
            className="w-40 xs:w-44 sm:w-48 object-contain z-10"
            initial={{ opacity: 0, x: -60, y: 60 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <motion.img
            src="/assets/know2.png"
            alt="Right Model Mobile"
            className="w-40 xs:w-44 sm:w-48 object-contain -ml-6"
            initial={{ opacity: 0, x: 60, y: -60 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default KnowFokusSection;

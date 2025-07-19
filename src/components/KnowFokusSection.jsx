import React from "react";
import { motion } from "framer-motion";

const KnowFokusSection = () => {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24 flex justify-center items-center w-full bg-cover bg-center object-cover"
      style={{ backgroundImage: "url('/assets/Banner-bg.jpeg')" }}
    >
      {/* Left Model */}
      <motion.img
        src="/assets/know1.png"
        alt="Left Model"
        className="hidden lg:block absolute bottom-0 left-16 md:left-24 lg:left-32 xl:left-36 w-[280px] xl:w-[320px] 2xl:w-[360px] object-contain"
        initial={{ opacity: 0, x: -120, y: 120 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      />

      {/* Right Model */}
      <motion.img
        src="/assets/know2.png"
        alt="Right Model"
        className="hidden lg:block absolute bottom-0 right-16 md:right-24 lg:right-32 xl:right-36 w-[280px] xl:w-[320px] 2xl:w-[360px] object-contain"
        initial={{ opacity: 0, x: 120, y: -120 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
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
          transition={{ duration: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-black font-bold text-base sm:text-lg md:text-xl leading-relaxed mb-4"
          // 👈 reduced from mb-6 to mb-4 to move button closer
        >
          <p>Fokus isn’t just a drink—</p>
          <p>it’s a lifestyle you live</p>
          <p>every day. Dive into our</p>
          <p>story and see what makes us different.</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0, duration: 0.3 }}
          className="px-10 py-3 bg-black text-white font-semibold rounded-full hover:bg-zinc-800 transition cursor-pointer"
        >
          Explore
        </motion.button>
      </div>
    </section>
  );
};

export default KnowFokusSection;

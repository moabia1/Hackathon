import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FokusFeatureSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const sectionRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const typingText = "“Cool in the hand. Fire in the soul.”";

  useEffect(() => {
    if (inView) {
      let idx = 0;
      setDisplayedText("");
      setTypingDone(false);
      const interval = setInterval(() => {
        setDisplayedText(typingText.slice(0, idx + 1));
        idx++;
        if (idx === typingText.length) {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section
      ref={(node) => {
        ref(node);
        sectionRef.current = node;
      }}
      className="bg-[#94e050] py-12 sm:py-16 flex flex-col items-center relative overflow-hidden"
    >
      {/* Typing Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 sm:mb-10 max-w-[90%] px-2 relative z-10">
        {displayedText}
        <span className="animate-pulse">{!typingDone && "|"}</span>
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-12 w-full max-w-6xl px-4 relative z-10">
        {/* Left Features */}
        <div className="flex flex-row md:flex-col items-center md:items-end gap-6 sm:gap-8 md:gap-12">
          <motion.img
            src="/assets/coconut.png"
            alt="Made with Coconut Water"
            className="w-20 sm:w-28 md:w-32 lg:w-40 xl:w-48 translate-x-2 sm:translate-x-4 md:translate-x-10 -translate-y-4 sm:-translate-y-6 md:-translate-y-10 opacity-90"
            initial={{ opacity: 0, x: -150 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
            transition={{ delay: 0.4, duration: 1 }}
          />
          <motion.img
            src="/assets/sugar.png"
            alt="No Added Sugar"
            className="w-20 sm:w-28 md:w-32 lg:w-40 xl:w-48 translate-x-2 sm:translate-x-4 md:translate-x-10 -translate-y-4 sm:-translate-y-6 md:-translate-y-10 opacity-90"
            initial={{ opacity: 0, x: -150 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </div>

        {/* Bottles Display */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={
            inView
              ? { y: 0, opacity: 1, rotate: [0, -2, 2, -2, 2, 0] }
              : { y: 200, opacity: 0 }
          }
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src="/assets/3bottle.png"
            alt="Fokus Bottles"
            className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-96 h-auto"
          />
        </motion.div>

        {/* Right Features */}
        <div className="flex flex-row md:flex-col items-center md:items-start gap-6 sm:gap-8 md:gap-12">
          <motion.img
            src="/assets/fatigue.png"
            alt="Fight Off Fatigue"
            className="w-20 sm:w-28 md:w-32 lg:w-40 xl:w-48 -translate-x-2 sm:-translate-x-4 md:-translate-x-10 translate-y-2 sm:translate-y-4 md:translate-y-8 opacity-90"
            initial={{ opacity: 0, x: 150 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
            transition={{ delay: 0.4, duration: 1 }}
          />
          <motion.img
            src="/assets/energy.png"
            alt="Increase Your Energy"
            className="w-20 sm:w-28 md:w-32 lg:w-40 xl:w-48 -translate-x-2 sm:-translate-x-4 md:-translate-x-10 translate-y-2 sm:translate-y-4 md:translate-y-8 opacity-90"
            initial={{ opacity: 0, x: 150 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default FokusFeatureSection;

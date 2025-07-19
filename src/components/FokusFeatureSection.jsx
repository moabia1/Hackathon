import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FokusFeatureSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  const typingText = "“Cool in the hand. Fire in the soul.”";

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

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
      ref={ref}
      className="bg-[#94e050] py-16 flex flex-col items-center relative overflow-hidden"
    >
      {/* Typing Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-10 max-w-[90%]">
        {displayedText}
        <span className="animate-pulse">{!typingDone && "|"}</span>
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-6xl px-4 relative">
        {/* Left Features */}
        <div className="flex flex-col items-center md:items-end gap-12 z-0 -mt-10 md:-mt-0 ">
          <motion.img
            src="/assets/coconut.png"
            alt="Made with Coconut Water"
            className="w-32 sm:w-40 md:w-48 translate-x-10 md:translate-x-12 -translate-y-8 md:-translate-y-12 opacity-90"
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ delay: 0.4, duration: 1 }}
          />
          <motion.img
            src="/assets/sugar.png"
            alt="No Added Sugar"
            className="w-32 sm:w-40 md:w-48 translate-x-8 md:translate-x-12 -translate-y-8 md:-translate-y-12 opacity-90"
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </div>

        {/* Bottles (Single Image) */}
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={
            inView
              ? {
                  y: 0,
                  opacity: 1,
                  rotate: [0, -2, 2, -2, 2, 0], // one-time shake
                }
              : { y: 300, opacity: 0 }
          }
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex justify-center z-10"
        >
          <img
            src="/assets/3bottle.png"
            alt="Fokus Bottles"
            className="w-56 sm:w-72 md:w-80 lg:w-96 h-auto"
          />
        </motion.div>

        {/* Right Features */}
        <div className="flex flex-col items-center md:items-start gap-12 z-20 -mt-12 md:-mt-0">
          <motion.img
            src="/assets/fatigue.png"
            alt="Fight Off Fatigue"
            className="w-40 sm:w-48 md:w-56 -translate-x-8 md:-translate-x-12 translate-y-4 md:translate-y-8 opacity-90"
            initial={{ opacity: 0, x: 200 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
            transition={{ delay: 0.4, duration: 1 }}
          />
          <motion.img
            src="/assets/energy.png"
            alt="Increase Your Energy"
            className="w-40 sm:w-48 md:w-56 -translate-x-8 md:-translate-x-12 translate-y-4 md:translate-y-8 opacity-90"
            initial={{ opacity: 0, x: 200 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default FokusFeatureSection;

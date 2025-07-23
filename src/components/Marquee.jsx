import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: [-500, 0], // adjust based on combined image width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#d4e789] py-4 w-full">
      <motion.div
        className="flex gap-20 items-center"
        variants={marqueeVariants}
        animate="animate"
      >
        <img src="/assets/sugar.png" alt="Marquee 1" className="h-30 w-auto" />
        <img
          src="/assets/coconut.png"
          alt="Marquee 2"
          className="h-30 w-auto"
        />
        <img
          src="/assets/fatigue.png"
          alt="Marquee 3"
          className="h-30 w-auto"
        />
        <img src="/assets/madein.png" alt="Marquee 4" className="h-35 w-auto" />

        {/* repeat hoga seamless looping */}
        <img src="/assets/sugar.png" alt="Marquee 1" className="h-30 w-auto" />
        <img
          src="/assets/coconut.png"
          alt="Marquee 2"
          className="h-30 w-auto"
        />
        <img
          src="/assets/fatigue.png"
          alt="Marquee 3"
          className="h-30 w-auto"
        />
        <img src="/assets/madein.png" alt="Marquee 4" className="h-35 w-auto" />
      </motion.div>
    </div>
  );
};

export default Marquee;

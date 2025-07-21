import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FokusFeatureSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [bottles, setBottles] = useState([]);
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

  const bottleImages = [
    "/assets/greenbtl.png",
    "/assets/redbtl.png",
    "/assets/yellowbtl.png",
  ];

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 50;
    const y = e.clientY - rect.top - 50;

    const id = Date.now() + Math.random();

    const newBottle = {
      id,
      src: bottleImages[Math.floor(Math.random() * bottleImages.length)],
      x,
      y,
      rotate: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4,
    };

    setBottles((prev) => [...prev, newBottle]);

    setTimeout(() => {
      setBottles((prev) => prev.filter((b) => b.id !== id));
    }, 500);
  };

  return (
    <section
      ref={(node) => {
        ref(node);
        sectionRef.current = node;
      }}
      onMouseMove={handleMouseMove}
      className="bg-[#94e050] py-12 sm:py-16 flex flex-col items-center relative overflow-hidden"
    >
      {/* Bottles appearing on cursor movement */}
      {bottles.map((bottle) => (
        <motion.img
          key={bottle.id}
          src={bottle.src}
          initial={{
            opacity: 0,
            rotate: bottle.rotate,
            scale: bottle.scale,
          }}
          animate={{
            opacity: [0, 0.9, 0],
            rotate: bottle.rotate + 90,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute pointer-events-none select-none z-0"
          style={{
            left: bottle.x,
            top: bottle.y,
            width: "80px", // smaller for mobile neatness
            height: "80px",
          }}
        />
      ))}

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
            className="w-20 sm:w-28 md:w-32 translate-x-2 sm:translate-x-4 md:translate-x-10 -translate-y-4 sm:-translate-y-6 md:-translate-y-10 opacity-90"
            initial={{ opacity: 0, x: -150 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
            transition={{ delay: 0.4, duration: 1 }}
          />
          <motion.img
            src="/assets/sugar.png"
            alt="No Added Sugar"
            className="w-20 sm:w-28 md:w-32 translate-x-2 sm:translate-x-4 md:translate-x-10 -translate-y-4 sm:-translate-y-6 md:-translate-y-10 opacity-90"
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
            className="w-40 sm:w-56 md:w-64 lg:w-72 h-auto"
          />
        </motion.div>

        {/* Right Features */}
        <div className="flex flex-row md:flex-col items-center md:items-start gap-6 sm:gap-8 md:gap-12">
          <motion.img
            src="/assets/fatigue.png"
            alt="Fight Off Fatigue"
            className="w-20 sm:w-28 md:w-32 -translate-x-2 sm:-translate-x-4 md:-translate-x-10 translate-y-2 sm:translate-y-4 md:translate-y-8 opacity-90"
            initial={{ opacity: 0, x: 150 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
            transition={{ delay: 0.4, duration: 1 }}
          />
          <motion.img
            src="/assets/energy.png"
            alt="Increase Your Energy"
            className="w-20 sm:w-28 md:w-32 -translate-x-2 sm:-translate-x-4 md:-translate-x-10 translate-y-2 sm:translate-y-4 md:translate-y-8 opacity-90"
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

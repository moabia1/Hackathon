import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [split, setSplit] = useState(false);
  const [startExit, setStartExit] = useState(false);
  const [scaleUp, setScaleUp] = useState(false);
  const [centerBottle, setCenterBottle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setCenterBottle(true);

          setTimeout(() => setScaleUp(true), 400);
          setTimeout(() => {
            setSplit(true);
            setTimeout(() => {
              setStartExit(true);
              setTimeout(() => onFinish(), 600); // smooth final exit
            }, 1500);
          }, 1200);

          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onFinish]);

  const translateX = centerBottle ? 0 : (progress / 100) * 500 - 250;

  return (
    <AnimatePresence>
      {!startExit && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: split ? 0 : 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#064e3b" }} // Calm aesthetic background
        >
          {!split ? (
            <div className="flex flex-col items-center justify-center space-y-6 z-10">
              {/* Aesthetic Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide"
              >
                Hold Tight, Burst Of Energy is Loading...
              </motion.div>

              {/* Bottle Animation */}
              <motion.img
                src="/assets/greenbtl.png"
                alt="Bottle"
                animate={{
                  x: translateX,
                  rotate: 3600,
                  scale: scaleUp ? 7 : 1,
                }}
                transition={{
                  x: { duration: centerBottle ? 0.8 : 0.1, ease: "easeInOut" },
                  rotate: { ease: "linear", duration: 30, repeat: Infinity },
                  scale: { duration: 1.2, ease: "easeInOut" },
                }}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mt-4"
              />

              {/* Progress Bar */}
              <div className="relative w-[80%] max-w-[380px] h-3 sm:h-4 rounded-full bg-neutral-800 overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-[#4ade80]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "linear" }}
                />
              </div>

              {/* Progress Percentage */}
              <p className="text-sm sm:text-base text-neutral-300 font-medium tracking-widest">
                {progress}%
              </p>
            </div>
          ) : (
            // Split Animation
            <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
              <motion.img
                src="/assets/greenbtl.png"
                alt="Left Split"
                className="absolute w-1/2 h-full object-contain"
                style={{ clipPath: "inset(0 50% 0 0)" }}
                initial={{ x: 0, y: 0, scale: 6, opacity: 1 }}
                animate={{ x: "-70vw", y: "-70vh", scale: 12, opacity: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.img
                src="/assets/greenbtl.png"
                alt="Right Split"
                className="absolute w-1/2 h-full object-contain"
                style={{ clipPath: "inset(0 0 0 50%)" }}
                initial={{ x: 0, y: 0, scale: 6, opacity: 1 }}
                animate={{ x: "70vw", y: "70vh", scale: 12, opacity: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

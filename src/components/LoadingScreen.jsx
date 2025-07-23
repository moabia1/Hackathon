import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [split, setSplit] = useState(false);
  const [startExit, setStartExit] = useState(false);
  const [scaleUp, setScaleUp] = useState(false);
  const [centerBottle, setCenterBottle] = useState(false);
  const [hideBg, setHideBg] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setCenterBottle(true);

          setTimeout(() => setScaleUp(true), 400);

          setTimeout(() => {
            setSplit(true);
            setTimeout(() => setHideBg(true), 500);

            setTimeout(() => {
              setStartExit(true);
              setTimeout(() => onFinish(), 500);
            }, 1800);
          }, 1400);

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
          animate={{ opacity: hideBg ? 0 : 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Blurred Gradient Background Layer */}
          {!hideBg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-br from-[#94e050] via-[#facc15] to-[#e2424b] blur-[100px]"
            />
          )}

          {!split ? (
            <div className="flex flex-col items-center justify-center space-y-6 z-10">
              {/* Aesthetic Gradient Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
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
                  scale: scaleUp ? 8 : 1,
                }}
                transition={{
                  x: { duration: centerBottle ? 0.7 : 0.1, ease: "easeInOut" },
                  rotate: { ease: "linear", duration: 30, repeat: Infinity },
                  scale: { duration: 1.2, ease: "easeInOut" },
                }}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mt-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              />

              {/* Modern Progress Bar */}
              <div className="relative w-[80%] max-w-[400px] h-4 sm:h-5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#94e050] via-[#facc15] to-[#e2424b] shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "linear" }}
                />
              </div>

              {/* Progress Percentage */}
              <p className="text-sm sm:text-base text-white font-semibold tracking-widest drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
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
                initial={{ x: 0, y: 0, scale: 8, opacity: 1 }}
                animate={{ x: "-70vw", y: "-70vh", scale: 14, opacity: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.img
                src="/assets/greenbtl.png"
                alt="Right Split"
                className="absolute w-1/2 h-full object-contain"
                style={{ clipPath: "inset(0 0 0 50%)" }}
                initial={{ x: 0, y: 0, scale: 8, opacity: 1 }}
                animate={{ x: "70vw", y: "70vh", scale: 14, opacity: 0 }}
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

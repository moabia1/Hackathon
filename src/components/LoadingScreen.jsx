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

          setTimeout(() => setScaleUp(true), 500);

          setTimeout(() => {
            setSplit(true);
            setTimeout(() => setHideBg(true), 600);

            setTimeout(() => {
              setStartExit(true);
              setTimeout(() => onFinish(), 600);
            }, 2200);
          }, 1600);

          return 100;
        }
        return prev + 1;
      });
    }, 22);

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
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center`}
        >
          {/* Background Image Layer */}
          {!hideBg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black/40"
              style={{
                backgroundImage: `url('/assets/hero3.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "blur(4px)",
              }}
            />
          )}

          {!split ? (
            <>
              {/* Aesthetic Layered Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide z-10 drop-shadow-md text-center"
              >
                Loading Fokus Experience...
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
                  x: { duration: centerBottle ? 0.8 : 0.1, ease: "easeInOut" },
                  rotate: { ease: "linear", duration: 30, repeat: Infinity },
                  scale: { duration: 1.5, ease: "easeInOut" },
                }}
                className="w-16 h-16 sm:w-20 sm:h-20 mt-6 z-10"
              />

              {/* Progress Bar */}
              <div className="relative w-[80%] max-w-[500px] h-3 rounded-full bg-white/30 overflow-hidden mt-4 z-10">
                <motion.div
                  className="h-full bg-[#e2424b]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.25 }}
                />
              </div>

              <p className="text-xs sm:text-sm text-black font-medium mt-2 z-10 tracking-wider">
                {progress}%
              </p>
            </>
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

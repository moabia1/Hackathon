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

          // 1️⃣ Center bottle smoothly
          setCenterBottle(true);

          // 2️⃣ Scale up from current position without resetting
          setTimeout(() => {
            setScaleUp(true);
          }, 600);

          // 3️⃣ Trigger split after scale up
          setTimeout(() => {
            setSplit(true);

            // 4️⃣ Remove background after split starts to prevent flicker
            setTimeout(() => {
              setHideBg(true);
            }, 500);

            // 5️⃣ Exit after split completes
            setTimeout(() => {
              setStartExit(true);
              setTimeout(() => onFinish(), 300);
            }, 2500);
          }, 1800);

          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onFinish]);

  const maxWidth = 500;
  const translateX = centerBottle
    ? 0
    : (progress / 100) * maxWidth - maxWidth / 2;

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
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center ${
            hideBg ? "pointer-events-none" : ""
          }`}
          style={{
            backgroundImage: hideBg ? "none" : "url('/assets/hero3.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background 0.8s ease",
          }}
        >
          {!hideBg && (
            <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none" />
          )}

          {!split ? (
            <>
              {/* Bottle above progress bar, rotating, moving, scaling, centering */}
              <div className="relative w-full flex justify-center z-10">
                <motion.img
                  src="/assets/greenbtl.png"
                  alt="Bottle"
                  className="object-contain"
                  animate={{
                    x: translateX,
                    rotate: 3600,
                    scale: scaleUp ? 8 : 1,
                  }}
                  transition={{
                    x: {
                      ease: "easeInOut",
                      duration: centerBottle ? 0.8 : 0.1,
                    },
                    rotate: { ease: "linear", duration: 30, repeat: Infinity },
                    scale: { ease: "easeInOut", duration: 1.5 },
                  }}
                  style={{
                    width: "4rem",
                    height: "4rem",
                    marginBottom: "1rem",
                  }}
                />
              </div>

              {/* Progress Bar */}
              <div className="relative w-[85%] max-w-[600px] h-3 bg-white/30 rounded-full overflow-hidden shadow-md z-10">
                <motion.div
                  className="h-full bg-[#e2424b] rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-sm text-white font-semibold tracking-wider mt-3 z-10">
                {progress}%
              </p>
            </>
          ) : (
            // Splitting Animation
            <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
              {/* Left Half */}
              <motion.img
                src="/assets/greenbtl.png"
                alt="Left Split"
                className="absolute w-1/2 h-full object-contain"
                style={{ clipPath: "inset(0 50% 0 0)" }}
                initial={{ x: 0, y: 0, scale: 8, opacity: 1 }}
                animate={{
                  x: "-60vw",
                  y: "-60vh",
                  scale: 12,
                  opacity: 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              {/* Right Half */}
              <motion.img
                src="/assets/greenbtl.png"
                alt="Right Split"
                className="absolute w-1/2 h-full object-contain"
                style={{ clipPath: "inset(0 0 0 50%)" }}
                initial={{ x: 0, y: 0, scale: 8, opacity: 1 }}
                animate={{
                  x: "60vw",
                  y: "60vh",
                  scale: 12,
                  opacity: 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

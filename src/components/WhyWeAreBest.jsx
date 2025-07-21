import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    id: 1,
    image: "/assets/redbtl.png",
    text: "We deliver high-quality products that blend innovation with durability.",
    color: "#F87171",
  },
  {
    id: 2,
    image: "/assets/greenbtl.png",
    text: "Our support team ensures seamless assistance and client satisfaction.",
    color: "#34D399",
  },
  {
    id: 3,
    image: "/assets/yellowbtl.png",
    text: "Eco-friendly processes are integrated at every stage of our workflow.",
    color: "#FBBF24",
  },
];

const WhyWeAreBest = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const cursorX = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 30 });

  return (
    <div
      className="relative w-full mx-auto p-4 sm:p-6 md:p-8 lg:p-12 rounded-3xl shadow-lg overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
      }}
    >
      {/* Mobile: Heading and Button Row */}
      <div className="flex justify-between items-center mb-6 sm:hidden">
        <h2 className="text-xl font-bold text-neutral-900 tracking-wide">
          Why we are best!!
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow hover:from-pink-500 hover:to-pink-600 transition-all"
        >
          See More <ArrowUpRight size={16} />
        </motion.button>
      </div>

      {/* Tablet and Above: Center Heading */}
      <div className="hidden sm:block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow hover:from-pink-500 hover:to-pink-600 transition-all"
        >
          See More <ArrowUpRight size={16} />
        </motion.button>

        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-12 sm:mb-8 md:mb-10 text-center tracking-wide px-2">
          Why we are best!!
        </h2>
      </div>

      {/* Feature Items */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative w-full"
            onMouseMove={(e) => {
              setHoveredItem(feature.id);
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              cursorX.set(x);
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
            }}
          >
            {/* Floating Bottle */}
            <AnimatePresence>
              {hoveredItem === feature.id && (
                <motion.div
                  className="absolute top-1/2 transform -translate-y-1/2 z-10 pointer-events-none"
                  style={{ x: smoothX, left: 0 }}
                  initial={{ opacity: 0.9, scale: 0.8 }}
                  animate={{ opacity: 0.9, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 250, damping: 25 }}
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg backdrop-blur-sm"
                    style={{
                      backgroundColor: `${feature.color}40`,
                      filter: "blur(1px)",
                    }}
                  >
                    <img
                      src={feature.image}
                      alt="Floating Bottle"
                      className="w-full h-full object-contain opacity-80"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Feature Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row items-center rounded-2xl shadow p-4 sm:p-5 md:p-6 bg-white/70 hover:bg-white/80 backdrop-blur cursor-pointer hover:shadow-md transition-all w-full"
              style={{ backgroundColor: `${feature.color}10` }}
            >
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0 mb-3 sm:mb-0"
                style={{
                  backgroundColor: feature.color,
                  width: "4.5rem", // increased size
                  height: "4.5rem", // increased size
                }}
              >
                <img
                  src={feature.image}
                  alt="Feature"
                  className="w-14 h-14 sm:w-20 sm:h-20 object-contain" // increased image size
                />
              </div>
              <p className="text-center sm:text-left text-sm sm:text-base md:text-lg font-medium leading-tight sm:ml-4 px-2 sm:px-0">
                {feature.text}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWeAreBest;

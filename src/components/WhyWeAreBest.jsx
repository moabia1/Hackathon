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
      className="relative w-full mx-auto p-6 sm:p-8 md:p-12 rounded-2xl shadow-sm overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
      }}
    >
      {/* See More Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="absolute top-4 right-4 flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow hover:from-pink-500 hover:to-pink-600 transition-all"
      >
        See More <ArrowUpRight size={16} />
      </motion.button>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-neutral-900 mb-8 tracking-wider">
        Why we are best!!
      </h2>

      {/* Feature Items */}
      <div className="flex flex-col gap-5">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative"
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
                    className="w-16 h-16 rounded-full overflow-hidden shadow-lg backdrop-blur-sm"
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
              className="flex items-center rounded-xl shadow p-4 cursor-pointer hover:shadow-md transition-shadow"
              style={{ backgroundColor: `${feature.color}20` }}
            >
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  backgroundColor: feature.color,
                  width: "5rem",
                  height: "5rem",
                }}
              >
                <img
                  src={feature.image}
                  alt="Feature"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-neutral-800 text-xl font-medium leading-tight ml-4">
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

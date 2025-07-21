import { useState } from "react";
import { motion } from "framer-motion";
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
  const [cursorX, setCursorX] = useState(0);

  return (
    <div
      className="relative w-full mx-auto p-6 sm:p-8 md:p-12 rounded-2xl shadow-sm overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
      }}
    >
      {/* 🔼 See More Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="absolute top-4 right-4 flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow hover:from-pink-500 hover:to-pink-600 transition-all"
      >
        See More <ArrowUpRight size={16} />
      </motion.button>

      {/* 🔤 Heading */}
      <h2 className="text-3xl font-semibold text-neutral-900 mb-8">
        Why we are best.
      </h2>

      {/* 📦 Feature Items */}
      <div className="flex flex-col gap-5">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative"
            onMouseMove={(e) => {
              setHoveredItem(feature.id);
              setCursorX(e.nativeEvent.offsetX);
            }}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Floating Bottle Follower (inside item div) */}
            {hoveredItem === feature.id && (
              <motion.div
                className="absolute top-0 pointer-events-none z-10"
                style={{ left: cursorX }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div
                  className="w-14 h-14 rounded-full overflow-hidden shadow-md"
                  style={{ backgroundColor: feature.color }}
                >
                  <img
                    src={feature.image}
                    alt="Floating Bottle"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            )}

            {/* Main Feature Box */}
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
                  className="w-25 h-25 object-contain"
                />
              </div>
              <p className="text-neutral-800 text-sm md:text-base leading-relaxed ml-4">
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

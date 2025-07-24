import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ingredient list with 
const ingredients = [
  { name: "Vitamin D3", benefit: "Bone & immune health support" },
  { name: "Water", benefit: "Hydration" },
  { name: "Coconut Water (22%)", benefit: "Electrolyte replenishment" },
  { name: "Sucralose", benefit: "Zero-calorie sweetness" },
  { name: "Taurine", benefit: "Energy support" },
  { name: "Ginseng Extract", benefit: "Mental focus" },
  { name: "Ginkgo Biloba Extract", benefit: "Cognitive support" },
  { name: "Creatine", benefit: "Muscle power" },
  { name: "Glutamine", benefit: "Recovery" },
  { name: "LCLT (L-Carnitine L-Tartrate)", benefit: "Fat metabolism" },
  { name: "5-HTP", benefit: "Mood support" },
  { name: "Inositol", benefit: "Supports cellular health and mood balance" },
];

export default function Ingredients() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative min-h-screen bg-yellow-100/70 flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Floating Bottle */}
      <motion.img
        src="/assets/3bottle.png"
        alt="Fokus Bottle"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        }}
        className="w-32 sm:w-40 md:w-48 lg:w-56 mb-8 drop-shadow-[0_0_25px_rgba(253,224,71,2)]"
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent"
      >
        Fokus Ingredients
      </motion.h2>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {ingredients.map((ingredient, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "tween",
              ease:[0.25,0.8,0.25,1],
              duration: 0.6,
              delay: index * 0.03,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
            }}
            className="cursor-pointer p-4 rounded-2xl border border-gray-200 bg-white/80 hover:bg-gradient-to-br hover:from-yellow-50 hover:via-pink-50 hover:to-green-50 shadow-sm hover:shadow-md text-center backdrop-blur-sm transition-all duration-300"
            onClick={() => setSelected(ingredient)}
          >
            <motion.p
              whileHover={{
                background:
                  "linear-gradient(to right, #fb7185, #facc15, #4ade80)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-semibold text-lg text-gray-800 transition-all duration-300"
            >
              {ingredient.name}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Benefit Overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center border-4 border-black shadow-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                {selected.name}
              </h3>
              <p className="text-lg text-gray-800">{selected.benefit}</p>
              <button
                onClick={() => setSelected(null)}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-red-400 to-green-400 text-white rounded-full font-semibold hover:opacity-90 active:scale-95 transition duration-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

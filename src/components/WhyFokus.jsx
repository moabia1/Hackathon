import React from "react";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export default function WhyFokus() {
  // Framer Motion infinite rotation controls for mango
  const mangoControls = useAnimationControls();
  const watermelonControls = useAnimationControls();

  useEffect(() => {
    mangoControls.start({
      rotate: 360,
      transition: { repeat: Infinity, ease: "linear", duration: 10 },
    });
    watermelonControls.start({
      rotate: 360,
      transition: { repeat: Infinity, ease: "linear", duration: 10 },
    });
  }, [mangoControls, watermelonControls]);

  return (
    <div className="relative bg-[#ffe9b7] min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 overflow-hidden">
      {/* Top mango image with Framer Motion rotation */}
      <motion.img
        src="/assets/mango.png"
        alt="Mango"
        animate={mangoControls}
        className="absolute top-0 left-1 w-28 sm:w-36 md:w-40 translate-x-[-10%] translate-y-[-10%] z-20 drop-shadow-[0_0_20px_rgba(253,224,71,0.3)]"
      />

      {/* Outer bordered container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-7xl border-4 border-black rounded-2xl bg-white px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 shadow-lg overflow-hidden"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8">
          WHY FOKUS
        </h2>

        {/* Table wrapper */}
        <div className="overflow-x-auto w-full max-w-6xl mx-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b-2 border-r-2 border-black w-[30%]"></th>
                <th className="p-4 border-2 border-black text-center bg-red-400 text-white text-lg sm:text-xl font-extrabold">
                  FOKUS
                </th>
                <th className="p-4 border-2 border-black text-center text-lg sm:text-xl font-extrabold">
                  Generic Energy Drink
                </th>
                <th className="p-4 border-2 border-black text-center text-lg sm:text-xl font-extrabold">
                  Generic Sports Drink
                </th>
              </tr>
            </thead>
            <tbody className="text-base sm:text-lg font-semibold">
              {[
                {
                  label: "Caffeine Content",
                  fokus: "None",
                  energy: "High (typically 80 mg to 300 mg per can)",
                  sports: "Low to moderate (electrolyte focus)",
                },
                {
                  label: "Added Sugars",
                  fokus: "None",
                  energy: "Yes (high fructose corn syrup, glucose)",
                  sports: "Yes (glucose, fructose)",
                },
                {
                  label: "Health Benefits",
                  fokus:
                    "Vitamin D3 for bone health, LCLT for recovery, Ginkgo Biloba for brain health, Glutamine for muscle recovery, 5-HTP for mood support",
                  energy: "Quick energy boost, some amino acids",
                  sports: "Electrolyte balance, minimal nutritional benefits",
                },
                {
                  label: "Electrolyte Balance",
                  fokus: "Provided by Coconut Water and Salt",
                  energy: "May lack sufficient electrolytes",
                  sports: "Only basic electrolytes",
                },
              ].map((row, idx) => (
                <motion.tr
                  key={idx}
                  whileHover={{ backgroundColor: "#fef9c3" }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="cursor-default"
                >
                  <td className="p-4 border-2 border-black font-bold">
                    {row.label}
                  </td>
                  <td className="p-4 border-2 border-black text-center">
                    {row.fokus}
                  </td>
                  <td className="p-4 border-2 border-black text-center">
                    {row.energy}
                  </td>
                  <td className="p-4 border-2 border-black text-center">
                    {row.sports}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom watermelon image with Framer Motion rotation */}
        <motion.img
          src="/assets/watermelom.png"
          alt="Watermelon"
          animate={watermelonControls}
          className="absolute -bottom-4 -right-2 w-24 sm:w-32 md:w-36 z-50 drop-shadow-[0_0_20px_rgba(253,224,71,0.3)]"
        />
      </motion.div>
    </div>
  );
}

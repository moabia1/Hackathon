import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function WhyFokus() {
  const mangoRaw = useMotionValue(0);
  const watermelonRaw = useMotionValue(0);

  const mangoRotation = useSpring(mangoRaw, { stiffness: 50, damping: 20 });
  const watermelonRotation = useSpring(watermelonRaw, {
    stiffness: 50,
    damping: 20,
  });

  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const speed = delta * 0.5;
      mangoRaw.set(mangoRaw.get() + speed);
      watermelonRaw.set(watermelonRaw.get() + speed);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mangoRaw, watermelonRaw]);

  return (
    <div className="relative bg-yellow-100/70 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 overflow-hidden">
      {/* Outer bordered container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-7xl border-4 border-black rounded-2xl bg-white px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 shadow-lg overflow-hidden"
      >
        {/* Mango pinned to corner of container */}
        <motion.img
          src="/assets/mango.png"
          alt="Mango"
          style={{ rotate: mangoRotation }}
          className="absolute top-20 left-15 -translate-x-1/4 -translate-y-1/4 w-24 sm:w-28 md:w-32 lg:w-36 z-50 drop-shadow-[0_0_20px_rgba(253,224,71,0.3)]"
        />

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8">
          WHY FOKUS
        </h2>

        {/* Table */}
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

        {/* Bottom watermelon image */}
        <motion.img
          src="/assets/watermelom.png"
          alt="Watermelon"
          style={{ rotate: watermelonRotation }}
          className="absolute -bottom-4 -right-2 w-24 sm:w-32 md:w-36 z-50 drop-shadow-[0_0_20px_rgba(253,224,71,0.3)]"
        />
      </motion.div>
    </div>
  );
}

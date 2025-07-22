import React from "react";

export default function WhyFokus() {
  return (
    <div className="relative bg-[#f7f6e7] px-4 py-12 sm:px-6 md:px-8 flex flex-col items-center">
      {/* Top mango image */}
      <img
        src="/assets/mango.png"
        alt="Mango"
        className="absolute top-0 left-0 w-20 sm:w-28 md:w-32 -translate-x-4 -translate-y-4 rotate-[15deg]"
      />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        WHY FOKUS
      </h2>

      <div className="overflow-x-auto w-full max-w-4xl border border-black rounded-xl shadow-md bg-white">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 border border-black w-[30%]"></th>
              <th className="p-4 border border-black text-center bg-red-400 text-white text-lg font-bold">
                FOKUS
              </th>
              <th className="p-4 border border-black text-center text-lg font-bold">
                Generic Energy Drink
              </th>
              <th className="p-4 border border-black text-center text-lg font-bold">
                Generic Sports Drink
              </th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base">
            <tr>
              <td className="p-4 border border-black font-semibold">
                Caffeine Content
              </td>
              <td className="p-4 border border-black text-center">None</td>
              <td className="p-4 border border-black text-center">
                High (typically 80 mg to 300 mg per can)
              </td>
              <td className="p-4 border border-black text-center">
                Low to moderate (electrolyte focus)
              </td>
            </tr>
            <tr>
              <td className="p-4 border border-black font-semibold">
                Added Sugars
              </td>
              <td className="p-4 border border-black text-center">None</td>
              <td className="p-4 border border-black text-center">
                Yes (high fructose corn syrup, glucose)
              </td>
              <td className="p-4 border border-black text-center">
                Yes (glucose, fructose)
              </td>
            </tr>
            <tr>
              <td className="p-4 border border-black font-semibold">
                Health Benefits
              </td>
              <td className="p-4 border border-black text-center">
                Vitamin D3 for bone health, LCLT for recovery, Ginkgo Biloba for
                brain health, Glutamine for muscle recovery, 5-HTP for mood
                support
              </td>
              <td className="p-4 border border-black text-center">
                Quick energy boost, some amino acids
              </td>
              <td className="p-4 border border-black text-center">
                Electrolyte balance, minimal nutritional benefits
              </td>
            </tr>
            <tr>
              <td className="p-4 border border-black font-semibold">
                Electrolyte Balance
              </td>
              <td className="p-4 border border-black text-center">
                Provided by Coconut Water and Salt
              </td>
              <td className="p-4 border border-black text-center">
                May lack sufficient electrolytes
              </td>
              <td className="p-4 border border-black text-center">
                Only basic electrolytes
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom watermelon image */}
      <img
        src="/assets/watermelon.png"
        alt="Watermelon"
        className="absolute bottom-0 right-0 w-20 sm:w-28 md:w-32 translate-x-4 translate-y-4 rotate-[-15deg]"
      />
    </div>
  );
}

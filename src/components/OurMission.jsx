import { motion } from "framer-motion";

const OurMission = () => {

  return (
    <section className="w-full py-12 px-6 bg-[#ffe9b7] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
      {/* LEFT SIDE */}
      <div className="relative bg-purple-600 rounded-2xl text-white p-8 flex-1 max-w-lg">
        {/* Decorative Dots */}
        {[
          "top-2 left-2",
          "top-2 right-2",
          "bottom-2 left-2",
          "bottom-2 right-2",
        ].map((pos, idx) => (
          <div
            key={idx}
            className={`absolute ${pos} w-3 h-3 rounded-full bg-white`}
          />
        ))}

        {/* Label */}
        <div className="inline-block bg-zinc-200 text-purple-700 font-semibold px-4 py-1 rounded-full mb-6">
          OUR MISSION
        </div>

        {/* Mission Statement */}
        <p className="text-xl sm:text-2xl font-semibold leading-relaxed">
          to deliver clean, functional hydration that fits seamlessly into your
          daily routine. Whether you’re chasing fitness goals, building your
          dream, or just living life on your own terms, we’re here to fuel every
          step of your journey. #GetFokus
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative bg-purple-100 rounded-2xl flex-1 max-w-lg w-full aspect-square overflow-hidden">
        {/* Center positioning container */}
        {/* Central Circle */}
        <div className="w-full h-full rounded-full bg-zinc-300 flex items-center justify-center shadow-md z-10">
          <img
            src="/assets/hero2.jpeg"
            alt="Logo"
            className="w-full h-full object-contain hover:scale-105 transition rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;

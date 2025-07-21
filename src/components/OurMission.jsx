import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-8 bg-[#ffe9b7] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-purple-600 rounded-2xl text-white p-6 sm:p-8 flex-1 w-full max-w-md"
      >
        {/* Decorative Dots */}
        {[
          "top-2 left-2",
          "top-2 right-2",
          "bottom-2 left-2",
          "bottom-2 right-2",
        ].map((pos, idx) => (
          <div
            key={idx}
            className={`absolute ${pos} w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white`}
          />
        ))}

        {/* Label */}
        <div className="inline-block bg-zinc-200 text-purple-700 font-semibold px-3 py-0.5 sm:px-4 sm:py-1 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
          OUR MISSION
        </div>

        {/* Mission Statement */}
        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
          to deliver clean, functional hydration that fits seamlessly into your
          daily routine. Whether you’re chasing fitness goals, building your
          dream, or just living life on your own terms, we’re here to fuel every
          step of your journey. <span className="font-semibold">#GetFokus</span>
        </p>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-purple-100 rounded-full flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square overflow-hidden shadow-md"
      >
        <img
          src="/assets/hero2.jpeg"
          alt="Logo"
          className="w-full h-full object-cover rounded-full hover:scale-105 transition duration-500 ease-in-out"
        />
      </motion.div>
    </section>
  );
};

export default OurMission;

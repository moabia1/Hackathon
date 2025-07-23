import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const OurMission = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-8 bg-yellow-100/70 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-[#94e050] rounded-2xl text-zinc-700 p-6 sm:p-8 flex-1 w-full max-w-md"
      >
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
        <div className="inline-block bg-[#ff6464] text-black font-semibold px-3 py-0.5 sm:px-4 sm:py-1 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
          OUR MISSION
        </div>
        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
          to deliver clean, functional hydration that fits seamlessly into your
          daily routine. Whether you’re chasing fitness goals, building your
          dream, or just living life on your own terms, we’re here to fuel every
          step of your journey. <span className="font-semibold">#GetFokus</span>
        </p>
      </motion.div>

      {/* RIGHT SIDE with Parallax */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.15}
        scale={1.02}
        className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-purple-100 rounded-full overflow-hidden shadow-md w-full h-full"
        >
          <img
            src="/assets/hero2.jpeg"
            alt="Logo"
            className="w-full h-full object-cover rounded-full hover:scale-105 transition duration-500 ease-in-out"
          />
        </motion.div>
      </Tilt>
    </section>
  );
};

export default OurMission;

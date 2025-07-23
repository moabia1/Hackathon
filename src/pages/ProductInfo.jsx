import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BoltIcon,
  SunIcon,
  AcademicCapIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import WhyFokus from "../components/WhyFokus";
import Ingredients from "../components/Ingredients";
import Footer from "../components/Footer";
import CursorParticles from "../components/CursorParticles";

const features = [
  {
    icon: <BoltIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
    label: "Instant Energy",
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
    label: "Study Mode",
  },
  {
    icon: <FireIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
    label: "Controlled Chaos",
  },
  {
    icon: <SunIcon className="h-8 w-8 sm:h-10 sm:w-10" />,
    label: "Fullday Grind",
  },
];

export default function ProductInfo() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <Navbar />
      <CursorParticles/>
      <div className="bg-gradient-to-b from-green-100 via-green-50 to-yellow-100 min-h-[80vh] flex justify-center items-center px-4 sm:px-6 md:px-8 py-12 mt-20">
        <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900/90 rounded-2xl w-full max-w-screen-xl overflow-hidden p-6 sm:p-8 shadow-xl transition duration-500 hover:shadow-2xl pt-10">
          {/* Floating Button for web view */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/products")}
            className="hidden sm:flex absolute bottom-6 right-6 text-neutral-900 bg-yellow-300 font-semibold py-3 px-6 rounded-full shadow-md z-10 transition duration-300 hover:bg-yellow-400"
          >
            Shop Now
          </motion.button>

          {/* Inner Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 md:gap-12 text-white justify-evenly">
            {/* Product Image */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end mr-15"
            >
              <img
                src="/assets/3bottle.png"
                alt="Fokus Mango Pineapple Drink"
                className="w-60 sm:w-72 md:w-80 lg:w-auto h-auto drop-shadow-[0_0_25px_rgba(253,224,71,0.5)] transition-transform duration-500 ease-out hover:scale-105"
              />
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="space-y-5 text-yellow-200 sm:-ml-4 md:-ml-10 px-2 sm:px-0 "
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-center lg:text-left">
                Take What You Need
              </h2>
              <p className="text-base sm:text-lg md:text-xl max-w-md font-medium text-center lg:text-left mx-auto lg:mx-0 text-yellow-100/90">
                The energy’s always there. Refresh your grind with Fokus.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 justify-items-center lg:justify-items-start mr-5">
                {features.map(({ icon, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 sm:space-x-3 md:space-x-4"
                  >
                    <div className="text-yellow-300">{icon}</div>
                    <span className="text-sm sm:text-base md:text-lg font-medium text-yellow-100">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Ingredients/>
      <WhyFokus />
      <Footer/>
    </div>
  );
}

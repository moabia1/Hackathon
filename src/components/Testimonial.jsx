import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    image: "/assets/rev1.jpg",
    quote:
      "Fokus helped me stay hydrated during long work days. I feel more active and focused.",
  },
  {
    id: 2,
    name: "Priya Mehta",
    image: "/assets/rev2.jpg",
    quote:
      "Absolutely love the flavors and how refreshing they are after workouts!",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    image: "/assets/rev3.jpg",
    quote:
      "A simple yet effective way to add functional hydration to my day without hassle.",
  },
  {
    id: 4,
    name: "Simran Kaur",
    image: "/assets/rev4.jpg",
    quote:
      "Fokus drinks are now a daily ritual for me. Clean, delicious, and energizing!",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full bg-[#ffe9b7] py-12 overflow-hidden border-b border-zinc-500">
      {/* Centered Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-800 mb-10">
        What Our Customers Say
      </h2>

      {/* Marquee Section */}
      <motion.div
        className="flex gap-6 w-max animate-marquee px-4"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 30,
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#375a3c] backdrop-blur-md items-center rounded-xl shadow-md p-6 min-w-[250px] sm:min-w-[300px] max-w-[300px] mx-2"
            style={{ backgroundColor: `#34D39940` }}
          >
            {/* Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-neutral-200 shadow-sm"
            />
            {/* Name */}
            <h3 className="text-lg font-semibold text-neutral-800 mb-2 text-center">
              {testimonial.name}
            </h3>
            {/* Quote */}
            <p className="text-sm text-neutral-600 text-center leading-relaxed">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonial;

import React, { useState } from "react";
import "../index.css"; // import the separated styles

const FokusMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    "/assets/marquee1.jpeg",
    "/assets/marquee2.jpeg",
    "/assets/marquee3.jpeg",
    "/assets/marquee4.jpeg",
    "/assets/marquee5.jpeg",
    "/assets/marquee6.jpeg",
    "/assets/marquee7.jpeg",
  ];

  return (
    <section className="bg-white py-8 overflow-hidden">
      <div className="-rotate-[2deg]">
        <div
          className={`flex w-max gap-6 animate-marquee ${
            isPaused ? "paused" : ""
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...images, ...images].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`fokus-${idx}`}
              className="h-64 object-cover rounded-lg shadow-lg select-none pointer-events-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FokusMarquee;

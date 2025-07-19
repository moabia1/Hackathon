import React, { useRef, useEffect, useState } from "react";

const FokusMarquee = () => {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let frameId;
    const speed = 0.5; // Adjust speed here

    const animate = () => {
      if (!isPaused && marqueeRef.current) {
        marqueeRef.current.scrollLeft += speed;
        if (
          marqueeRef.current.scrollLeft >=
          marqueeRef.current.scrollWidth / 2
        ) {
          marqueeRef.current.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  return (
    <section className="bg-white py-8 overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex w-full whitespace-nowrap overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-4">
          {/* Replace with your image paths */}
          <img
            src="/assets/fokus1.png"
            alt="Fokus 1"
            className="h-64 object-cover rounded-md"
          />
          <img
            src="/assets/fokus2.png"
            alt="Fokus 2"
            className="h-64 object-cover rounded-md"
          />
          <img
            src="/assets/fokus3.png"
            alt="Fokus 3"
            className="h-64 object-cover rounded-md"
          />
          <img
            src="/assets/fokus4.png"
            alt="Fokus 4"
            className="h-64 object-cover rounded-md"
          />
          <img
            src="/assets/fokus5.png"
            alt="Fokus 5"
            className="h-64 object-cover rounded-md"
          />
          {/* Repeat for infinite loop */}
          <img
            src="/assets/fokus1.png"
            alt="Fokus 1"
            className="h-64 object-cover rounded-md"
          />
          <img
            src="/assets/fokus2.png"
            alt="Fokus 2"
            className="h-64 object-cover rounded-md"
          />
          <img
            src="/assets/fokus3.png"
            alt="Fokus 3"
            className="h-64 object-cover rounded-md"
          />
          <img
            src="/assets/fokus4.png"
            alt="Fokus 4"
            className="h-64 object-cover rounded-md"
          />
          <img
            src="/assets/fokus5.png"
            alt="Fokus 5"
            className="h-64 object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default FokusMarquee;

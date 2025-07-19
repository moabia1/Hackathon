import React, { useState, useEffect, useRef } from "react";

const FlavourBtl = () => {
  const [activeBottle, setActiveBottle] = useState(null);
  const [shaking, setShaking] = useState(null);
  const [rotation, setRotation] = useState(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const animationFrame = useRef(null);

  // Grid background color logic
  const getBgColor = () => {
    if (activeBottle === 1) return "#94e050";
    if (activeBottle === 2) return "#ffe464";
    if (activeBottle === 3) return "#ff6464";
    return "#F9F7E6";
  };

  // Scroll-rotate jelly & lemon
  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        rotateWhileScrolling();
      }

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        cancelAnimationFrame(animationFrame.current);
      }, 200);
    };

    const rotateWhileScrolling = () => {
      setRotation((prev) => (prev + 2) % 360);
      if (isScrolling.current) {
        animationFrame.current = requestAnimationFrame(rotateWhileScrolling);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  // Shake once on hover logic
  const handleMouseEnter = (id) => {
    setActiveBottle(id);
    setShaking(id);
    setTimeout(() => {
      setShaking(null);
    }, 500); // match shake duration
  };

  const handleMouseLeave = () => {
    setActiveBottle(null);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full py-10 relative overflow-visible transition-colors duration-500"
      style={{ backgroundColor: getBgColor() }}
    >
      {/* Left Jelly (rotating) */}
      <div
        className="absolute -top-20 -left-12 z-10 w-40 sm:w-48 md:w-56 lg:w-64 ml-20"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <img src="/assets/jelly.png" alt="Jelly" className="w-full h-auto" />
      </div>

      {/* Right Lemon (rotating) */}
      <div
        className="
    absolute -top-18 right-4 sm:right-8 md:right-12 lg:right-16 z-10
    w-24 sm:w-28 md:w-32 lg:w-36
  "
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <img src="/assets/lemon.png" alt="Lemon" className="w-full h-auto" />
      </div>

      {/* Bottles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 w-full max-w-7xl px-4 mt-12 transition-colors duration-500">
        {/* Bottles */}
        {[
          {
            id: 1,
            bottle: "/assets/greenbtl.png",
            leftImg: "/assets/lemon.png",
            rightImg: "/assets/kiwi.png",
            alt: "Green Bottle",
          },
          {
            id: 2,
            bottle: "/assets/yellowbtl.png",
            leftImg: "/assets/pineapple.png",
            rightImg: "/assets/mango.png",
            alt: "Yellow Bottle",
          },
          {
            id: 3,
            bottle: "/assets/redbtl.png",
            leftImg: "/assets/dbljelly.png",
            rightImg: "/assets/watermelom.png",
            alt: "Red Bottle",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="relative flex justify-center items-center cursor-pointer"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Left Image */}
            <img
              src={item.leftImg}
              alt=""
              className={`
                absolute top-[35%] -translate-y-1/2 left-[20%] w-20 sm:w-24 md:w-28
                transition-opacity duration-500
                ${
                  activeBottle === item.id
                    ? "opacity-100 animate-spin-slow"
                    : "opacity-0"
                }
                z-0
              `}
            />
            {/* Right Image */}
            <img
              src={item.rightImg}
              alt=""
              className={`
                absolute bottom-[10%] right-[20%] translate-y-1/4 w-20 sm:w-24 md:w-28
                transition-opacity duration-500
                ${
                  activeBottle === item.id
                    ? "opacity-100 animate-spin-slow"
                    : "opacity-0"
                }
                z-20
              `}
            />
            {/* Bottle */}
            <img
              src={item.bottle}
              alt={item.alt}
              className={`
                object-contain w-[280px] sm:w-[384px] md:w-[448px] lg:w-[512px] xl:w-[576px]
                h-auto relative z-10 transition-transform duration-300
                ${shaking === item.id ? "animate-[shake_0.5s]" : ""}
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavourBtl;

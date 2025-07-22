import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

const FlavourBtl = () => {
  const [activeBottle, setActiveBottle] = useState(null);
  const [shaking, setShaking] = useState(null);
  const [rotation, setRotation] = useState(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const animationFrame = useRef(null);

  const getBgColor = () => {
    if (activeBottle === 1) return "#94e050";
    if (activeBottle === 2) return "#ffe464";
    if (activeBottle === 3) return "#ff6464";
    return "#ffe9b7";
  };

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

  const handleMouseEnter = (id) => {
    setActiveBottle(id);
    setShaking(id);
    setTimeout(() => {
      setShaking(null);
    }, 500);
  };

  const handleMouseLeave = () => {
    setActiveBottle(null);
  };

  const bottleData = [
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
  ];

  return (
    <div
      className="flex flex-col items-center justify-center w-full py-10 relative overflow-visible transition-colors duration-500"
      style={{ backgroundColor: getBgColor() }}
    >
      {/* Left Jelly (rotating) */}
      <div
        className="absolute -top-18 -left-18 z-10 w-40 sm:w-48 md:w-56 lg:w-64 ml-20"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <img src="/assets/jelly.png" alt="Jelly" className="w-full h-auto" />
      </div>

      {/* Right Lemon (rotating) */}
      <div
        className="
          absolute -top-15 right-5 sm:right-8 md:right-12 lg:right-16 z-10
          w-24 sm:w-28 md:w-32 lg:w-36
        "
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <img
          src="/assets/watermelom.png"
          alt="Watermelon"
          className="w-full h-auto"
        />
      </div>

      {/* Mobile View Swiper */}
      <div className="block sm:hidden w-full max-w-sm px-4 mt-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            const currentId = bottleData[swiper.realIndex].id;
            setActiveBottle(currentId);
            setShaking(currentId);
            setTimeout(() => {
              setShaking(null);
            }, 500);
          }}
          onInit={(swiper) => {
            const currentId = bottleData[swiper.realIndex].id;
            setActiveBottle(currentId);
            setShaking(currentId);
            setTimeout(() => {
              setShaking(null);
            }, 500);
          }}
        >
          {bottleData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative flex justify-center items-center cursor-pointer">
                {/* Left Fruit in mobile */}
                <img
                  src={item.leftImg}
                  alt=""
                  className={`
              absolute top-10 left-[25%]
              w-20
              transition-opacity duration-500
              ${
                activeBottle === item.id
                  ? "opacity-100 animate-spin-slow"
                  : "opacity-0"
              }
              z-10
            `}
                />

                {/* Right Fruit in mobile */}
                <img
                  src={item.rightImg}
                  alt=""
                  className={`
              absolute bottom-10 right-[25%]
              w-20
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
              object-contain w-[280px]
              h-auto relative z-10 transition-transform duration-300
              ${shaking === item.id ? "animate-[shake_0.5s]" : ""}
            `}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Web View Grid */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-16 w-full max-w-7xl px-4 mt-12 transition-colors duration-500">
        {bottleData.map((item) => (
          <div
            key={item.id}
            className="relative flex justify-center items-center cursor-pointer"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={item.leftImg}
              alt=""
              className={`
                absolute top-[28%] left-[25%] -translate-y-1/2
                w-20 md:w-24
                transition-opacity duration-500
                ${
                  activeBottle === item.id
                    ? "opacity-100 animate-spin-slow"
                    : "opacity-0"
                }
                z-10
              `}
            />
            <img
              src={item.rightImg}
              alt=""
              className={`
                absolute bottom-[12%] right-[22%] translate-y-1/4
                w-20 md:w-24
                transition-opacity duration-500
                ${
                  activeBottle === item.id
                    ? "opacity-100 animate-spin-slow"
                    : "opacity-0"
                }
                z-20
              `}
            />
            <img
              src={item.bottle}
              alt={item.alt}
              className={`
                object-contain w-[384px] md:w-[448px] lg:w-[512px] xl:w-[576px]
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

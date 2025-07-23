import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Ashish Chanchlani",
    image: "/assets/ashish.jpg",
    feedback:
      "Fokus—naam hi nahi, ek vibe hai! The branding, the taste, the whole energy of it is so addictive that it’s effortlessly becoming my daily companion.",
  },
  {
    name: 'Tanmay "Scout"',
    image: "/assets/tanmay.jpg",
    feedback:
      "Being among the first to try Fokus, I knew from the first sip—this wasn’t just a drink; it was an experience! Now, I proudly say I’m its biggest fan.",
  },
  {
    name: "Purav Jha",
    image: "/assets/purav.jpg",
    feedback:
      "Is 400ml ki bottle mein itni cheezein hai! Gym se lekar shoot tak, har jagah Fokus mera saath dega to keep me going all day long.  that's why we always want to take it in my carrybag.",
  },
  {
    name: "Aditya Rikhari",
    image: "/assets/aditya.jpg",
    feedback:
      "Fokus gives me the clarity and energy I need to perform and create content all day without crashing. It's nor only energy it also for grind the whole day",
  },
];

export default function FavSay() {
  return (
    <section className="bg-yellow-100/70 py-16 px-4 sm:px-8 md:px-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
        WHAT YOUR FAVOURITES SAY
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1000}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col bg-white border-4 border-black rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-5 flex flex-col flex-1 justify-between">
                <h3 className="text-base sm:text-lg font-bold text-center mb-2">
                  {t.name}
                </h3>
                <p className="text-md sm:text-base text-center text-gray-700">
                  {t.feedback}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

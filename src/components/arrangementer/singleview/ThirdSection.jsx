"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import Image from "next/image";
import { useRef, useState } from "react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

export default function ThirdSection({ event }) {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-between relative overflow-hidden">
        <div>
          <blockquote className="max-w-100 italic m-5 pb-5">{`"${event.quote}"`}</blockquote>
        </div>
      {/* Swiper */}
      <Swiper
        modules={[EffectFade, Navigation, Autoplay]}
        effect="fade"
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex + 1);
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-[500] h-screen"
      >
        {event.billeder.map((billede, i) => (
          <SwiperSlide
            key={i}
            className="flex justify-center items-center"
          >
            <Image
              src={`/arrangementer/${billede}`}
              alt={event.titel}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pile */}
      <div className="absolute inset-0 flex items-end gap-20 px-10 z-20">
        <button aria-label="gå tilbage"
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-(--yellow) hover:scale-110 cursor-pointer transition-transform duration-300"
        >
          <CgArrowLongLeft size={60} />
        </button>

        <button aria-label="gå frem"
          onClick={() => swiperRef.current?.slideNext()}
          className="text-(--yellow) hover:scale-110 cursor-pointer transition-transform duration-300"
        >
          <CgArrowLongRight size={60} />
        </button>
      </div>

      {/* Counter */}
      <div className="absolute bottom-10 right-10 thin italic text-(--yellow) text-5xl font-bold z-20 overflow-hidden h-[3.5rem]">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {String(currentIndex).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
        {" / "}
        {String(event.billeder.length).padStart(2, "0")}
      </div>
    </div>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import bestyrelse from "@/backend/bestyrelse.json";
import Image from "next/image";
import { useRef, useState } from "react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import LineAnimationInView from "../animationer/LineAnimationINView";

export default function RepreasentanterCard() {
  const repraesentanter = bestyrelse[0].repraesentanter;

  const swiperTextRef = useRef(null);
  const swiperImageRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const slidePrev = () => {
    swiperTextRef.current?.slidePrev();
    swiperImageRef.current?.slidePrev();
  };

  const slideNext = () => {
    swiperTextRef.current?.slideNext();
    swiperImageRef.current?.slideNext();
  };

  return (
    <div className="w-full h-screen flex relative overflow-hidden">
      {/* Venstre: Tekst */}
      <div className="w-1/2 h-screen">
        <Swiper
          modules={[EffectFade, Navigation]}
          effect="fade"
          loop={true}
          onSwiper={(swiper) => {
            swiperTextRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex + 1);
          }}
          className="w-full h-screen"
        >
          {repraesentanter.map((person, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center h-screen pl-5">
              <div className="bg-(--background) h-screen">
                <div className="flex gap-2">
                    <h3>{person.stilling}</h3>
                    <span className="thin">|</span>
                    <span className="uppercase">{person.mail}</span>
                </div>
                <h2 className="black italic">{person.navn}</h2>
                <h3 className="thin italic">{person.beskrivelse}</h3>
                <LineAnimationInView/>
                <p className="max-w-[500] pt-5">{person.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Højre: Billede */}
      <div className="w-1/2 h-screen relative">
        <Swiper
          modules={[EffectFade, Navigation]}
          effect="fade"
          loop={true}
          onSwiper={(swiper) => {
            swiperImageRef.current = swiper;
          }}
          className="w-[500] h-screen"
        >
          {repraesentanter.map((person, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <Image
                src={`/bestyrelse/${person.billede}`}
                alt={person.navn}
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pile */}
      <div className="absolute inset-0 flex items-end gap-20 px-10 z-20">
        <button
          onClick={slidePrev}
          className="text-(--yellow) hover:scale-110 cursor-pointer transition-transform duration-300"
        >
          <CgArrowLongLeft size={60} />
        </button>

        <button
          onClick={slideNext}
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
        {String(repraesentanter.length).padStart(2, "0")}
      </div>
    </div>
  );
}

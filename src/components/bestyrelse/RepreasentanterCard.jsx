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
    <div className="w-full flex flex-col md:flex-row overflow-hidden min-h-screen">
      {/* Venstre: Tekst + Pile */}
      <div className="flex flex-col w-full py-10 md:py-0 md:w-1/2 px-5 md:pl-20 order-2 md:order-1">
        {/* Tekst */}
        <div className="flex-1">
          <Swiper
              modules={[Navigation]}
              loop={true}
              onSwiper={(swiper) => {
                swiperTextRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.realIndex + 1);
              }}
              className="w-full"
            >
            {repraesentanter.map((person, i) => (
              <SwiperSlide
                key={i}
                className="flex items-start justify-start"
              >
                <div className="max-w-xl">
                  <div className="flex flex-wrap gap-2">
                    <h3>{person.stilling}</h3>
                    <span className="thin">|</span>
                    <span className="uppercase">{person.mail}</span>
                  </div>
                  <h2 className="black italic">{person.navn}</h2>
                  <h3 className="thin italic">{person.beskrivelse}</h3>
                  <LineAnimationInView />
                  <p className="pt-5">{person.quote}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pile kun desktop */}
        <div className="hidden md:flex gap-10 mt-10">
          <button
            aria-label="gå tilbage"
            onClick={slidePrev}
            className="text-(--yellow) hover:scale-110 cursor-pointer transition-transform duration-300"
          >
            <CgArrowLongLeft size={40} className="md:size-[60px]" />
          </button>

          <button
            aria-label="gå frem"
            onClick={slideNext}
            className="text-(--yellow) hover:scale-110 cursor-pointer transition-transform duration-300"
          >
            <CgArrowLongRight size={40} className="md:size-[60px]" />
          </button>
        </div>
      </div>

      {/* Højre: Billede + Counter */}
      <div className="relative flex justify-center items-start order-1 md:order-2">
        <div className="relative w-[500px] max-h-screen overflow-hidden flex justify-center items-start">
          <Swiper
            modules={[EffectFade, Navigation]}
            effect="fade"
            loop={true}
            onSwiper={(swiper) => {
              swiperImageRef.current = swiper;
            }}
            className="w-[500px] h-auto max-h-screen"
          >
            {repraesentanter.map((person, i) => (
              <SwiperSlide
                key={i}
                className="flex justify-center items-start"
              >
                <Image
                  src={`/bestyrelse/${person.billede}`}
                  alt={person.navn}
                  width={500}
                  height={1000}
                  className="object-cover w-[500px] h-auto max-h-screen"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pile ovenpå billedet på mobil */}
          <div className="md:hidden absolute bottom-5 left-5 flex gap-5 z-30">
            <button
              aria-label="gå tilbage"
              onClick={slidePrev}
              className="text-(--yellow) hover:scale-110 cursor-pointer transition-transform duration-300"
            >
              <CgArrowLongLeft size={40} />
            </button>
            <button
              aria-label="gå frem"
              onClick={slideNext}
              className="text-(--yellow) hover:scale-110 cursor-pointer transition-transform duration-300"
            >
              <CgArrowLongRight size={40} />
            </button>
          </div>

          {/* Counter ovenpå billedet */}
          <div className="absolute bottom-5 right-5 thin italic text-(--yellow) text-5xl font-bold z-20 overflow-hidden h-[3.5rem]">
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
      </div>
    </div>
  );
}

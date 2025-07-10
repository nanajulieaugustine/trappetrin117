"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

export default function ThirdSection({ event }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3 },
    animation: {
    duration: 50000,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  },
});

  return (
    <div className="w-full flex flex-col items-center gap-4 overflow-hidden">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider w-full">
        {event.billeder.map((billede, i) => (
          <div key={i} className="keen-slider__slide flex justify-center">
            <Image
              src={`/arrangementer/${billede}`}
              alt={event.titel}
              height={600}
              width={600}
              className="object-cover"
            />
          </div>
        ))}
        </div>

      {/* Pile */}
      <div className="relative -top-25 flex gap-10 mt-2 z-10">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="text-(--blue) hover:scale-103 cursor-pointer duration-300 transition-all transform scale-x-150 scale-y-55"
        >
          <CgArrowLongLeft size={60} />
        </button>

        <button
          onClick={() => instanceRef.current?.next()}
          className="text-(--blue) hover:scale-103 cursor-pointer duration-300 transition-all transform scale-x-150 scale-y-55"
        >
          <CgArrowLongRight size={60} />
        </button>
    </div>
    </div>
  );
}

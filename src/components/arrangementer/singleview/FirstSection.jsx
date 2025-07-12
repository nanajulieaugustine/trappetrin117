"use client";
import Image from "next/image";
import LineAnimationInView from "@/components/animationer/LineAnimationINView";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDarkBackground } from "@/hooks/useDarkBackground";

const FirstSection = ({ event }) => {
  const containerRef = useDarkBackground(0.1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden -z-10">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-[-1] will-change-transform bg-black"
      >
        {event.billeder && event.billeder.length > 0 && (
          <div className="relative w-full h-full">
            <Image
              src={`/arrangementer/${event.billeder[0]}`}
              fill
              priority
              className="object-cover w-full h-full z-0"
              alt={event.titel}
            />
            {/* Overlay for darkening effect */}
            <div className="absolute inset-0 bg-black opacity-50 z-1" />
          </div>
        )}
      </motion.div>

      <section className="flex flex-col md:flex-row gap-10 px-4 md:px-[--content-width-wide] py-10">
        <Image
          src={`/arrangementer/${event.plakat}`}
          height={400}
          width={400}
          alt={event.titel}
          className="w-full h-auto md:w-[400px]"
        />
        <div className="max-w-none md:max-w-[600px]">
          <h1 className="italic white">{event.titel}</h1>
          <div className="flex gap-2">
            <h3 className="thin italic white">{event.genre}</h3>
            <span className="thin italic white">|</span>
            <h3 className="thin italic white">{event.varighed}</h3>
          </div>
          <LineAnimationInView color={"white"} />
          <p className="pt-10 white">{event.beskrivelse}</p>
        </div>
      </section>

    </div>
  );
};

export default FirstSection;

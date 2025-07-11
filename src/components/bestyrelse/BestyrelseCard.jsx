"use client";
import bestyrelse from "@/backend/bestyrelse.json";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDarkBackground } from "@/hooks/useDarkBackground";

const BestyrelseCard = () => {
  const ansatte = bestyrelse[0].bestyrelse;

    const containerRef = useDarkBackground(0.1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div  ref={containerRef} className="relative w-full h-screen overflow-hidden -z-10">
      <ul className="flex">
        {ansatte.map((ansat) => (
        <li
            className="relative w-full h-screen overflow-hidden"
            key={`${ansat.navn}-${ansat.stilling}`}
        >
            <motion.div
            style={{ y }}
            className="absolute inset-0 z-[-1] will-change-transform"
            >
            <Image
                src={`/bestyrelse/${ansat.billede}`}
                fill
                priority
                className="object-cover w-full h-full"
                alt={ansat.navn}
            />
            {/* DARKENING EFFEKT KUN PÅ BILLEDET */}
            <div className="absolute inset-0 bg-black opacity-30" />
            </motion.div>

            <section className="absolute inset-0 flex flex-col justify-between p-4 text-white z-10">
            <div>
                <h3 className="yellow">{ansat.navn}</h3>
                <div className="flex gap-2">
                <h3 className="italic thin">{ansat.stilling}</h3>
                <span className="thin italic">|</span>
                <h3 className="thin italic text-sm">{ansat.email}</h3>
                </div>
            </div>
            <p className="max-w-80">{ansat.beskrivelse}</p>
            </section>
        </li>
        ))}

      </ul>
    </div>
  );
};

export default BestyrelseCard;

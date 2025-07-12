"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useDarkBackground } from "@/hooks/useDarkBackground";

const ThirdSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const ulVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const liVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const text = "Hvorfor vælg os?";
  const index = text.indexOf("os");
  const before = text.substring(0, index);
  const after = text.substring(index + 2);

  const imageRef = useDarkBackground(80);

  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row gap-10">
      <div className="ml-5 flex flex-col gap-5 basis-full md:basis-1/3">
        <h1 className="black">
          {before}
          <span className="blue">os</span>
          {after}
        </h1>

        <motion.div
          className="flex flex-col gap-10 max-w-110"
          variants={ulVariants}
          initial="hidden"
          animate={controls}
        >
          <ul className="flex gap-5 align-top">
            <motion.li className="thin" variants={liVariants}>
              01.
            </motion.li>
            <motion.li variants={liVariants}>
              <h2>Udvikl dit talent</h2>
            </motion.li>
          </ul>

          <ul className="flex gap-5 align-top">
            <motion.li className="thin" variants={liVariants}>
              02.
            </motion.li>
            <motion.li variants={liVariants}>
              <h2>FØR DINE AMBITIONER VIDERE</h2>
            </motion.li>
          </ul>

          <ul className="flex gap-5 align-top">
            <motion.li className="thin" variants={liVariants}>
              03.
            </motion.li>
            <motion.li variants={liVariants}>
              <h2>FÅ PROFESSIONEL SPARRING</h2>
            </motion.li>
          </ul>
        </motion.div>
      </div>

      <div className="flex flex-col justify-between basis-full ml-5 md:ml-0 md:basis-1/3 max-w-100">
        <div>
          <p>
            Trappetrin 117 er en forening skabt af ambitiøse unge fra Holbæk Drama College. Du kan bruge Trappetrin 117 til at udvikle dine projekter, og have en forening i ryggen når/hvis du søger fonde og puljer.
          </p>
          <p>
            Projekterne kan gennem Trappetrin 117 indebære professionel sparring eller instruktion, som kan guide og give lærdom. På den måde opnår hvert individ størst mulig udvikling, og kan nå nye højder. Et projekt kan ske i alle former og iblandt alle kunstarter. Det er kun dig selv, der sætter grænserne!
          </p>
        </div>
        <div className="justify-end thin max-w-80">
          <span>KONTAKT OS OG FÅ DIT VÆRK UDSTILLET HOS OS</span>
          <p className="blue">TRAPPETRIN117@GMAIL.COM</p>
        </div>
      </div>

      {/* ✅ Her er billedet med dark background */}
      <div ref={imageRef} className="basis-full md:basis-1/3 w-full md:w-auto relative overflow-hidden">
        <Image
          src="/omos/monsior_min_anus_lilla.webp"
          alt="Monsior Min-An*S 2025"
          width={400}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ThirdSection;

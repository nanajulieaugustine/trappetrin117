"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDarkBackground } from "@/hooks/useDarkBackground";

export default function FirstSection() {
  const containerRef = useDarkBackground(0.1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden -z-10"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-[-1] will-change-transform"
      >
        <Image
          src={"/omos/medea_blue_mask.webp"}
          fill
          priority
          className="object-cover w-full h-full z-0"
          alt={"medea 2024"}
        />
      </motion.div>
      <section className="z-10 px-(--content-width-wide) text-(--background)">
        <h1 className="italic">"Tag med os til næste etage"</h1>
        <h3>Hvem er vi?</h3>
        <p className="max-w-100">
          Trappetrin 117 er skabt af to unge skuespilleraspiranter fra Holbæk. Sarah og Josefine er begge to dimitterede fra Holbæk Drama College i 2023. Nu søger de at videreudvikle deres talent som skuespillere, inden de går videre med drømmen om at blive professionelle skuespillere. 
        </p>
      </section>
    </div>
  );
}

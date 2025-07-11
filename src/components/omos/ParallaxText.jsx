"use client";
import { motion } from "framer-motion";
import React from "react";
import LineAnimationInView from "../animationer/LineAnimationINView";

const ParallaxText = () => {
  const baseText = "Monsør Min-An*s vinder af Quongas hovedpris 2025 | "; 

  return (
    <div className="overflow-x-hidden whitespace-nowrap w-full py-25 flex flex-col gap-2">
      <motion.div
        className="flex w-max"
        animate={{ x: ["-5%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <h2 className="black thin italic mr-8">{baseText.repeat(10)}</h2>
        <h2 className="black thin mr-8 italic">{baseText.repeat(10)}</h2>
      </motion.div>
      <LineAnimationInView/>
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-5%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <h2 className="black thin mr-8 italic">{baseText.repeat(10)}</h2>
        <h2 className="black thin mr-8 italic">{baseText.repeat(10)}</h2>
      </motion.div>
    </div>
  );
};

export default ParallaxText;


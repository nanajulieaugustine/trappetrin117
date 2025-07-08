"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeInAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;

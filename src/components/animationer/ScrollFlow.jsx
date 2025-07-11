"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollFlow = ({ children, speed = -100 }) => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ScrollFlow;

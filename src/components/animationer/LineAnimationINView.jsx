"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LineAnimationInView = ({color}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.hr
      ref={ref}
      initial={{ width: "0%" }}
      animate={{ width: isInView ? "100%" : "0%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ borderTop: `1px solid ${color}` }}
    />
  );
};

export default LineAnimationInView;

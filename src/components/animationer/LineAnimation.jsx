"use client";
import { motion } from "framer-motion";

const LineAnimation = ({ isHovered }) => {
  return (
    <motion.hr
      initial={{ width: "0%" }}
      animate={{ width: isHovered ? "100%" : "0%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="border-t border-white"
    />
  );
};

export default LineAnimation;

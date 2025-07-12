"use client";
import { useRef } from "react";
import { useEffect } from "react";
import { useHeaderStyle } from "./header-context";
import { useScroll } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";

export function useDarkBackground(headerHeight = 80) {
  const ref = useRef(null);
  const { setIsDark } = useHeaderStyle();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${headerHeight}px`, `end ${headerHeight}px`],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsDark(latest > 0 && latest < 1);
  });

  useEffect(() => {
    return () => {
      setIsDark(false);
    };
  }, [setIsDark]);

  return ref;
}

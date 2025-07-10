import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useHeaderStyle } from "./header-context";

export function useDarkBackground(threshold = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold });

  const { setIsDark } = useHeaderStyle();

  useEffect(() => {
    setIsDark(isInView);

    return () => {
      setIsDark(false);
    };
  }, [isInView, setIsDark]);

  return ref;
}

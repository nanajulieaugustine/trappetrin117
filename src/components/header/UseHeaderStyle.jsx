import { useEffect, useState } from "react";

export function useHeaderStyle(darkId) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const dark = document.getElementById(darkId);
    if (!dark) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDark(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(dark);

    return () => observer.disconnect();
  }, [darkId]);

  return isDark;
}

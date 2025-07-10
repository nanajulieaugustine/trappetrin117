"use client";
import { createContext, useContext, useState } from "react";

const HeaderStyleContext = createContext();

export function HeaderStyleProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  return (
    <HeaderStyleContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </HeaderStyleContext.Provider>
  );
}

export function useHeaderStyle() {
  return useContext(HeaderStyleContext);
}

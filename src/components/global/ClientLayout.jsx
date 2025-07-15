"use client";

import Header from "@/components/header/Header";
import SideMenu from "@/components/header/SideMenu";
import Footer from "@/components/global/Footer";
import { useState } from "react";
import { HeaderStyleProvider } from "@/hooks/header-context";

export default function ClientLayout({ children }) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSideMenu = () => setShowSideMenu((prev) => !prev);

  return (
    <HeaderStyleProvider>
      <Header showSideMenu={showSideMenu} toggleSideMenu={toggleSideMenu} />
      <SideMenu
        isVisible={showSideMenu}
        toggleSideMenu={toggleSideMenu}
      />
      {children}
      <Footer />
    </HeaderStyleProvider>
  );
}

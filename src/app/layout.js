"use client";

import "./globals.css";
import Header from "@/components/header/Header";
import SideMenu from "@/components/header/SideMenu";
import Footer from "@/components/omos/Footer";
import { useState } from "react";
import { HeaderStyleProvider } from "@/hooks/header-context";

export default function RootLayout({ children }) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSideMenu = () => setShowSideMenu((prev) => !prev);

  return (
    <html lang="da">
      <body>
        <HeaderStyleProvider>
          <Header showSideMenu={showSideMenu} toggleSideMenu={toggleSideMenu} />
          <SideMenu
            isVisible={showSideMenu}
            toggleSideMenu={toggleSideMenu}
          />
          {children}
          <Footer />
        </HeaderStyleProvider>
      </body>
    </html>
  );
}

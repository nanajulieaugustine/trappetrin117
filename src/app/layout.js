"use client";

import "./globals.css";
import Header from "@/components/header/Header";
import SideMenu from "@/components/header/SideMenu";
import Footer from "@/components/omos/Footer";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSideMenu = () => setShowSideMenu((prev) => !prev);

  return (
    <html lang="da">
      <body>
        <Header showSideMenu={showSideMenu} toggleSideMenu={toggleSideMenu} />
        <SideMenu isVisible={showSideMenu} toggleSideMenu={toggleSideMenu} />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

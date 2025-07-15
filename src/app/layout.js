"use client";

import "./globals.css";
import Header from "@/components/header/Header";
import SideMenu from "@/components/header/SideMenu";
import Footer from "@/components/global/Footer";
import { useState } from "react";
import { HeaderStyleProvider } from "@/hooks/header-context";
import Head from "next/head";

export default function RootLayout({ children }) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSideMenu = () => setShowSideMenu((prev) => !prev);

  return (
    <html lang="da">
        <Head>
        <link title="favicon" rel="icon" href="/favicon.png" />
      </Head>
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

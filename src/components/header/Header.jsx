"use client";

import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useHeaderStyle } from "@/hooks/header-context";
import { useState } from "react";
import LineAnimation from "../animationer/LineAnimation";

const Header = ({ showSideMenu, toggleSideMenu }) => {
  const { isDark } = useHeaderStyle();
  const [isHovered, setIsHovered] = useState(false);

    const closeSideMenu = () => {
    if (showSideMenu) {
      toggleSideMenu();
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-colors duration-300 backdrop-blur">
      <div className="flex items-baseline justify-between py-4 px-8">
        <ul>
            <li>
              <Link href="/" aria-label="Gå til forsiden" onClick={closeSideMenu}>
              <Image src="/logo.webp" width={80} height={80} alt="Logo" />
              </Link>
            </li>
        </ul>

        <div className="flex items-center gap-10">
            <li
              onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={closeSideMenu}
              className={`bold uppercase hover:scale-103 transition-all duration-300 ${ showSideMenu || isDark ? "text-(--white)" : "text-(--black)"}`}
            >
              <Link href="/arrangementer">
              Arrangementer
              <LineAnimation isHovered={isHovered} color={showSideMenu || isDark ? "white" : "black"} />
              </Link>
            </li>

          <button aria-label="gå til menu"
            className={`cursor-pointer hover:scale-105 transition-all duration-300 ${ showSideMenu || isDark ? "text-(--white)" : "text-(--black)"}`}
            onClick={toggleSideMenu}
          >
            {showSideMenu ? (
              <IoMdClose size={40} />
            ) : (
              <IoIosMenu size={40} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

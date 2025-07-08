"use client";

import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useHeaderStyle } from "./UseHeaderStyle";

const Header = ({ showSideMenu, toggleSideMenu }) => {
  const isDarkBackground = useHeaderStyle("dark");

  return (
    <nav className="fixed top-0 w-full z-50 transition-colors duration-300 backdrop-blur">
      <div className="flex items-baseline justify-between py-4 px-8">
        {/* Venstre side */}
        <ul>
          <Link href="/" aria-label="Gå til forsiden">
            <li>
              <Image src="/logo.webp" width={100} height={100} alt="Logo" />
            </li>
          </Link>
        </ul>

        {/* Højre side */}
        <div className="flex items-center gap-10">
          <Link href="/arrangementer">
            <li
              className={`bold hover:underline uppercase ${
                isDarkBackground ? "text-(--white)" : "text-(--black)"
              }`}
            >
              Arrangementer
            </li>
          </Link>

          <button
            className={`cursor-pointer ${
              isDarkBackground ? "text-(--white)" : "text-(--black)"
            }`}
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

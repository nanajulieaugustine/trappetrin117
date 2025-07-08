"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import LineAnimation from "../animationer/LineAnimation";
import FadeInAnimation from "../animationer/FadeInAnimation";

const SideMenu = ({ isVisible, toggleSideMenu }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    { href: "/omos", text: "Om Os" },
    { href: "/arrangementer", text: "Værkarkiv" },
    { href: "/vaerk_hos_os", text: "Dit Værk Hos Os" },
    { href: "/vaerkarkiv", text: "Bestyrelsen" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed top-0 left-0 pt-25 w-full h-screen bg-(--blue) z-20"
        >
            <FadeInAnimation>
          <ul className="p-10 overflow-y-auto grid gap-8">
            {links.map((link, idx) => (
              <li
                key={idx}
                className="grid gap-5 hover:scale-101 transition-all duration-300"
                onMouseEnter={() => setHoveredLink(idx)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link href={link.href} onClick={toggleSideMenu}>
                  <h1 className="white">{link.text}</h1>
                </Link>
                <LineAnimation isHovered={hoveredLink === idx} />
              </li>
            ))}
          </ul>
          </FadeInAnimation>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;

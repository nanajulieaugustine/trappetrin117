"use client";

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";

export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details open={isOpen} className="mb-4">
      <summary
        className="cursor-pointer list-none"
        onClick={(e) => {
          e.preventDefault(); // Forhindrer native toggle
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex justify-between items-center">
          <h3>{title}</h3>
          {isOpen ? <HiMinus size={20} /> : <HiPlus size={20} />}
        </div>
        <hr className="mt-2" />
      </summary>
      <div className="py-2">{children}</div>
    </details>
  );
};

const Accordion = ({ children }) => {
  return <div>{children}</div>;
};

export default Accordion;

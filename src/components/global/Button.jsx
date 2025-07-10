"use client";
import LineAnimation from "../animationer/LineAnimation";
import { useState } from "react";

const Button = ({children, onClick}) => {
      const [isHovered, setIsHovered] = useState(false);

    return ( <button  onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)} className="cursor-pointer bold uppercase hover:scale-103 tranistion-all duration-300" onClick={onClick}>
                {children}
                 <LineAnimation isHovered={isHovered}/>
                </button> );
}
 
export default Button;
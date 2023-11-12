'use client'
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, useAnimate } from "framer-motion";
const NavButton = ({ children }) => {
    const [isClicked,setIsClicked] = useState(false);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(scope.current, { rotateZ: isClicked?'180deg':'0deg' });
  }, [isClicked]);
  return (
    <div
      className="flex flex-row gap-2 items-center justify-between "
      
    >
      <h1 className="text-2xl font-bold">{children}</h1>
      <div ref={scope} onClick={() => setIsClicked(!isClicked)}>
        <FaChevronDown size={20} className="mt-1" />
      </div>
    </div>
  );
};

export default NavButton;

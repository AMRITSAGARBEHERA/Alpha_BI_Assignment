"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import NavButton from "./Utils/NavButton";
import LogoRevealer from "./Utils/LogoRevealer";

const Navbar = () => {
  const options = [
    "USA - English",
    "Mexico - Spanish",
    "Canada - French",
    "Brazil - Portuguese",
    "Argentina - Spanish",
    "Germany - German",
    "France - French",
    "Italy - Italian",
    "Spain - Spanish",
    "Portugal - Portuguese",
    "Russia - Russian",
    "China - Chinese",
    "Japan - Japanese",
    "South Korea - Korean",
    "India - Hindi",
    "Australia - English",
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="bg-black h-44 text-white p-12 flex   items-end mb-28 justify-between w-screen fixed top-0 z-30">
      <a href="#" className="font-semibold w-2/12">
        <LogoRevealer/>
      </a>

      <div className="flex items-center justify-around gap-16">
        <NavButton>Insights</NavButton>
        <NavButton>Services</NavButton>
        <NavButton>Industries</NavButton>
        <NavButton>Careears</NavButton>
        <NavButton>About</NavButton>
      </div>

      <div className="flex items-center justify-center gap-4 mr-24">
        <CiSearch size={40} />
        <div className="flex flex-row justify-between items-center gap-3">
          <TbWorld  size={25}/>

          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}><NavButton>USA</NavButton></button>
            {dropdownOpen && (
              <div className="absolute top-0 right-6 mt-14 w-[300px]  rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5">
                <div
                  className="py-1 h-96 overflow-scroll overflow-x-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {options.map((option) => (
                    <a
                      key={option}
                      href="#"
                      className="block px-4 py-2 h-16 text-sm text-white border-y-2 border-white hover:bg-white hover:text-black bg-slate-700"
                      role="menuitem"
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

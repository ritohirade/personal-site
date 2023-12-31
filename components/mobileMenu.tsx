"use client";

import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { HEADER_MENU } from "../constants/header";

const MobileMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        type="button"
        id="hamburger"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          <BsXLg className="h-6 w-6" />
        ) : (
          <AiOutlineMenu className="h-6 w-6" />
        )}
      </button>
      {menuOpen && (
        <div className="absolute z-10 top-full w-48 rounded-md shadow-lg bg-white">
          <div className="py-1" role="menu">
            {HEADER_MENU.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

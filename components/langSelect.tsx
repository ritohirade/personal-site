"use client";

import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { LANGUAGE } from "../constants/header";

const LangSelect: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Japanese");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <DropdownMenu.Root onOpenChange={(open) => setIsMenuOpen(open)}>
      <DropdownMenu.Trigger className="flex gap-1 outline-none items-center">
        {selectedLanguage}
        {isMenuOpen ? <BsChevronUp /> : <BsChevronDown />}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="cursor-pointer">
        {LANGUAGE.filter((item) => item.label !== selectedLanguage).map(
          (item) => (
            <DropdownMenu.Item
              key={item.label}
              onSelect={() => setSelectedLanguage(item.label)}
              className="outline-none cursor-pointer"
            >
              {item.label}
            </DropdownMenu.Item>
          )
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default LangSelect;

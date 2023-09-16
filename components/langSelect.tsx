"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { LANGUAGE } from "../constants/header";
import { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

export const LangSelect: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Japanese");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <DropdownMenu.Root onOpenChange={(open) => setIsMenuOpen(open)}>
        <DropdownMenu.Trigger className="flex gap-1 outline-none items-center">
          {selectedLanguage}
          {isMenuOpen ? <BsChevronUp /> : <BsChevronDown />}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="cursor-pointer">
          {LANGUAGE.filter((item) => item.label != selectedLanguage).map(
            (item) => {
              return (
                <DropdownMenu.Item
                  key={item.label}
                  onSelect={() => setSelectedLanguage(item.label)}
                  className="outline-none cursor-pointer"
                >
                  {item.label}
                </DropdownMenu.Item>
              );
            }
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};

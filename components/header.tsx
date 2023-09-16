import Link from "next/link";
import { HEADER_MENU } from "../constants/header";
import { LangSelect } from "./langSelect";
import { MobileMenu } from "./mobileMenu";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between h-20 items-center">
      <ul className="hidden lg:flex">
        {HEADER_MENU.map((item) => {
          return (
            <li key={item.label} className="mr-4">
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
      <div className="lg:hidden relative">
        <MobileMenu />
      </div>
      <LangSelect />
    </header>
  );
};

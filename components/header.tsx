import Link from "next/link";
import { HEADER_MENU } from "../constants/header";
import { LangSelect } from "./langSelect";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between h-20 items-center">
      <ul className="flex">
        {HEADER_MENU.map((item) => {
          return (
            <li key={item.label} className="mr-4">
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
      <div>
        <LangSelect />
      </div>
    </header>
  );
};

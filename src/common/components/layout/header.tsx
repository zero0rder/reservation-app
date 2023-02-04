import React from "react";
// import styles from './Layout.module.scss'
interface HeaderProps {}
const pages = ["Home", "Search", "About"];
export const AppHeader: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="z-10 flex items-center justify-between w-full px-16 py-4 text-gray-200 bg-black border-b h-[4.5rem]">
      <span className="text-2xl font-bold">
        Reservation <span className="text-red-700">Hub</span>
      </span>
      <div>
        <ul className="flex cursor-pointer gap-x-4">
          {pages.map((p, i) => (
            <li
              key={i}
              className="font-medium cursor-pointer hover:text-red-700"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

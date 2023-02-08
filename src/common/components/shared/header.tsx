import React from "react";
import Link from "next/link";
// import styles from './Layout.module.scss'
interface HeaderProps {}
const pages = [
  { text: "Home", source: "/" },
  { text: "Search", source: "/search" },
  { text: "About", source: "/about" },
];

const styles = {
  header: `z-10 flex items-center justify-between w-full px-36 py-4 text-gray-200 bg-black border-b h-[4.5rem]`,
  navList: `flex cursor-pointer gap-x-4`,
  navLink: `font-medium cursor-pointer hover:text-red-700`,
};
const AppHeader: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <span className="text-2xl font-bold">
        Reservation <span className="text-red-700">Hub</span>
      </span>
      <div>
        <ul className={styles.navList}>
          {pages.map((p, i) => (
            <Link
              href={p.source}
              title={p.text}
              key={i}
              className={styles.navLink}
            >
              {p.text}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;

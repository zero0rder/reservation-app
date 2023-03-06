import React from "react";
import { useRouter } from "next/router";
// import styles from './Layout.module.scss'
interface HeaderProps {}
const pages = [
  { text: "Home", source: "/" },
  { text: "Search", source: "/search" },
  // { text: "About", source: "/about" },
];

const styles = {
  header: `z-10 flex items-center justify-between flex-col sm:flex-row w-full px-12 py-2 sm:px-20 sm:py-4 text-gray-200 h-24 bg-zinc-800`,
  navList: `text-sm sm:text-base flex cursor-pointer gap-x-4`,
  navLink: `font-medium cursor-pointer hover:text-sky-500`,
  navTitle: `text-xl font-bold sm:text-2xl`,
};
const AppHeader: React.FC<HeaderProps> = ({}) => {
  const router = useRouter();
  const handleNav = (path: string) => {
    router.push(path);
  };

  return (
    <header className={styles.header}>
      <div className="flex gap-x-12">
        <span className={styles.navTitle}>
          Reservation <span className="text-sky-500 ">Hub</span>
        </span>
        <div className="flex">
          <input
            placeholder="search..."
            className="px-4 py-2 rounded-lg outline-0 bg-zinc-900"
          />
        </div>
        <div className="flex items-center justify-center">
          <ul className={styles.navList}>
            {pages.map((p, i) => (
              <span
                onClick={() => handleNav(p.source)}
                key={i}
                className={`${styles.navLink} ${
                  router.pathname === p.source && "border-b-2"
                }`}
              >
                {p.text}
              </span>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-x-4">
        <button className="w-24 p-3 font-medium border rounded-xl bg-sky-500">
          Sign In
        </button>
        <button className="w-24 p-3 font-medium border rounded-xl bg-sky-500">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default AppHeader;

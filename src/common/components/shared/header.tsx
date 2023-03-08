import React from "react";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
// import styles from './Layout.module.scss'
interface HeaderProps {}
const pages = [
  { text: "Home", source: "/" },
  { text: "Search", source: "/search" },
];

const styles = {
  header: `relative z-10 flex items-center justify-between flex-row w-full px-4 py-2 sm:px-20 sm:py-4 text-gray-200 h-24 bg-zinc-800`,
  navList: `text-sm sm:text-base flex cursor-pointer gap-x-4`,
  navLink: `font-medium cursor-pointer hover:text-sky-400`,
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
        <div className="hidden md:flex">
          <input
            placeholder="search..."
            className="px-4 py-2 rounded-lg outline-0 bg-zinc-900"
          />
        </div>
        <div className="items-center justify-center hidden md:flex">
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
      <div className="hidden md:flex gap-x-4">
        <button className="px-4 py-2 font-medium border min-w-24 rounded-xl bg-sky-500 hover:bg-transparent">
          Sign In
        </button>
        <button className="p-3 font-medium border min-w-24 rounded-xl bg-sky-500 hover:bg-transparent">
          Sign Up
        </button>
      </div>
      <div className="flex text-[2rem] order-[-1] md:hidden">
        <FiMenu />
      </div>
    </header>
  );
};

export default AppHeader;

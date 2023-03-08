import React from "react";
import Link from "next/link";
import Button from "./button";

interface Banner {}
// text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-200
const styles = {
  heroImageWrap: `relative w-full md:px-8 md:rounded-3xl h-72`,
  heroTextWrap: `absolute text-center h-full w-full flex flex-col justify-center md:items-end md:gap-y-6 right-0 text-white p-4 md:px-8 text-[2.75rem] font-[200]`,
  heroText: `tracking-[.12rem] border-b-2 text-[2rem] md:text-5xl md:w-80 md:text-right md:border-0 font-medium uppercase`,
  heroBtnWrap: `flex items-center justify-center md:justify-end`,
  button: ` px-8 py-3 text-2xl tracking-[.12rem] font-medium border rounded-lg bg-sky-500`,
};

const Banner: React.FC<Banner> = ({}) => {
  return (
    <div className={`hero ${styles.heroImageWrap}`}>
      <div className={styles.heroTextWrap}>
        <span className={styles.heroText}>Shop local favorites</span>
        <div className={styles.heroBtnWrap}>
          <Link href="/search" title="shop now" key={1}>
            <Button styles={styles.button}>Search Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

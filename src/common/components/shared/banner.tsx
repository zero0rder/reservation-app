import React from "react";
import Link from "next/link";
import Button from "./button";

interface Banner {}
// text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-200
const styles = {
  heroImageWrap: `relative w-full px-8 rounded-3xl h-64`,
  heroTextWrap: `absolute right-0 text-white py-4 px-8 text-[2.75rem] font-[200]`,
  heroText: `tracking-[.12rem] border-b-2`,
  heroBtnWrap: `flex items-center justify-end`,
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

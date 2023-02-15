import React from "react";
import Link from "next/link";
import Image from "next/image";
import DiningImg from "../../../assets/dining.jpg";
import Button from "./button";

interface Banner {}

const styles = {
  heroImageContainer: `relative flex justify-center items-center flex-wrap w-full px-8`,
  heroImage: `w-full m-auto h-64 sm:h-[25rem] lg:h-[27rem]`,
  button: `py-2 px-8 sm:py-3 sm:px-12 md:py-5 md:px-16 font-medium text-white md:text-xl bg-red-700 rounded-lg hover:shadow-md hover:shadow-gray-400 hover:bg-black`,
  heroTextContainer: `absolute flex flex-col justify-center items-center gap-y-8 z-10 md:top-24`,
  heroText: `text-4xl sm:text-6xl md:text-7xl px-12 font-bold md:font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-200 top-24 right-44`,
  arrows: `absolute flex w-[8%] text-[2rem] z-10`,
};

const Banner: React.FC<Banner> = ({}) => {
  return (
    <div className={styles.heroImageContainer}>
      <div className={styles.heroTextContainer}>
        <span className={styles.heroText}>Shop local favorites</span>
        <div className="flex items-center justify-center">
          <Link href="/search" title="shop now" key={1}>
            <Button styles={styles.button}>Search Now</Button>
          </Link>
        </div>
      </div>
      <Image
        src={DiningImg}
        alt="slider image"
        className={styles.heroImage}
        unoptimized
        priority
      />
    </div>
  );
};

export default Banner;

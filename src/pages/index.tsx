import React, { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "./_app";
import DefaultLayout from "@components/layouts/default";
import { motion } from "framer-motion";
import Image from "next/image";
import PizzaImg from "../assets/pizza.jpg";
import AsianImg from "../assets/asian.jpg";
import AfricanImg from "../assets/african.jpg";
import VeganImg from "../assets/vegan.jpg";
import MexicanImg from "../assets/mexican.jpg";
import IndianImg from "../assets/indian.jpg";
import Carousel from "../common/components/shared/carousel";

const explore = [
  { title: "Pizza", src: PizzaImg },
  { title: "Asian", src: AsianImg },
  { title: "African", src: AfricanImg },
  { title: "Indian", src: IndianImg },
  { title: "Vegan", src: VeganImg },
  { title: "Mexican", src: MexicanImg },
];

const styles = {
  pageContainer: `flex flex-col w-full p-8 grow max-w-[1025px] gap-8`,
  button: `px-6 py-3 font-medium text-white bg-red-700 rounded-lg hover:shadow-md hover:shadow-gray-400 hover:bg-black`,
  topSection: `flex gap-y-4`,
  bottomSection: `flex items-start justify-center flex-col w-full p-8`,
  galleryContainer: `flex flex-wrap items-center justify-between w-full h-[34rem] gap-4 overflow-hidden`,
  galleryItem: `h-[16rem] basis-[49%] relative`,
  galleryItemOverlay: `flex justify-center items-center absolute w-full h-full top-0 left-0 backdrop-brightness-50 cursor-pointer`,
  galleryOverlayText: `text-5xl text-white font-medium`,
  showMoreContainer: `flex justify-center items-center w-full my-4`,
};

const Home: NextPageWithLayout = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className={styles.pageContainer}>
      <section className={styles.topSection}>
        <div className="relative flex items-center w-full">
          <Carousel />
        </div>
      </section>
      <section className={styles.bottomSection}>
        <div className="w-full text-center border-t">
          <p className="py-8 text-5xl font-medium">Categories</p>
        </div>
        <motion.ul
          animate={{
            height: isExpanded ? "auto" : 540,
          }}
          exit={{}}
          className={styles.galleryContainer}
        >
          {explore.map((c, i) => (
            <li key={i} className={styles.galleryItem}>
              <Image
                src={c.src}
                alt="category"
                className="h-full"
                unoptimized
                priority
              />
              <motion.div
                whileHover={{ opacity: 0 }}
                className={styles.galleryItemOverlay}
              >
                <span className={styles.galleryOverlayText}>{c.title}</span>
              </motion.div>
            </li>
          ))}
        </motion.ul>
        <div className={styles.showMoreContainer}>
          <motion.button
            className={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            Show {isExpanded ? "Less" : "More"}
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

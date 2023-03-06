import React, { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "./_app";
import DefaultLayout from "@components/layouts/default";
import { motion } from "framer-motion";
import Image from "next/image";
import Banner from "@components/shared/banner";
import Button from "@components/shared/button";
import Carousel from "@components/shared/carousel";
import { db_explore } from "src/utils/data";

const styles = {
  pageContainer: `flex flex-col w-full p-8 max-w-[1025px] gap-y-12 m-auto`,
  button: `px-6 py-3 font-medium text-white rounded-lg hover:shadow-md border bg-sky-500`,
  topSection: `flex gap-y-4`,
  bottomSection: `flex items-start justify-center flex-col w-full p-8`,
  galleryContainer: `flex flex-wrap items-center justify-between w-full h-[34rem] gap-y-8 overflow-hidden`,
  galleryItem: `h-64 basis-full md:h-72 md:basis-[48%] relative overflow-hidden rounded-3xl`,
  galleryItemOverlay: `flex justify-center items-center absolute w-full h-full top-0 left-0 backdrop-brightness-50 cursor-pointer`,
  galleryOverlayText: `text-5xl text-white font-medium`,
  showMoreContainer: `flex justify-center items-center w-full mt-8`,
  categoryTitleWrap: `w-full text-center border-t`,
  categoryTitle: `py-6 text-3xl font-medium sm:py-8 sm:text-5xl`,
  bannerWrap: `relative flex items-center w-full`,
};

const Home: NextPageWithLayout = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className={styles.pageContainer}>
      <section className={styles.topSection}>
        <div className={styles.bannerWrap}>
          <Banner />
        </div>
      </section>
      <section>
        <h3 className="p-6 text-5xl font-medium text-center border-t">
          Top Categories
        </h3>
        <Carousel />
      </section>
      <section className={styles.bottomSection}>
        <div className={styles.categoryTitleWrap}>
          <p className={styles.categoryTitle}>Trending</p>
        </div>
        <motion.ul
          animate={{
            height: isExpanded ? "auto" : 615,
          }}
          // exit={{}}
          className={styles.galleryContainer}
        >
          {db_explore.map((c, i) => (
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
          <Button
            handler={() => setIsExpanded((prev) => !prev)}
            styles={styles.button}
          >
            Show {isExpanded ? "Less" : "More"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

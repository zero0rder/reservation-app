import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Image from "next/image";
import BannerImg from "../../../assets/reserved.jpg";

interface CarouselProps {
  images?: string[];
}

const styles = {
  heroImageContainer: `relative flex justify-center items-center flex-wrap w-full px-8`,
  heroImage: `w-full m-auto h-64 sm:h-[25rem] lg:h-[27rem]`,
  button: `py-2 px-8 sm:py-3 sm:px-12 md:py-5 md:px-16 font-medium text-white bg-red-700 rounded-lg hover:shadow-md hover:shadow-gray-400 hover:bg-black`,
  heroTextContainer: `absolute flex flex-col justify-center items-center gap-y-8 z-10`,
  heroText: `text-4xl sm:text-6xl md:text-7xl px-12 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white top-24 right-44`,
  arrows: `absolute flex w-[8%] text-[2rem] z-10`,
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Carousel: React.FC<CarouselProps> = ({}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  //const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className={`left-[-1rem] ${styles.arrows}`}>
        <FaChevronCircleLeft
          className="cursor-pointer"
          onClick={() => paginate(-1)}
        />
      </div>
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={page}
          className={styles.heroImageContainer}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div className={styles.heroTextContainer}>
            <span className={styles.heroText}>Shop local favorites</span>
            <div className="flex items-center justify-center">
              <Link href="/search" title="shop now" key={1}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.button}
                >
                  Shop Now
                </motion.button>
              </Link>
            </div>
          </div>
          <Image
            src={BannerImg}
            alt="slider image"
            className={styles.heroImage}
            unoptimized
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className={`justify-end right-[-1rem] ${styles.arrows}`}>
        <FaChevronCircleRight
          className="cursor-pointer"
          onClick={() => paginate(1)}
        />
      </div>
    </>
  );
};

export default Carousel;

import React from "react";
import Slider from "react-slick";
import { db_explore } from "src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";

interface CarouselProps {}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  //   responsive: [
  //     {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2
  //         }
  //       },
  //   ]
};

const styles = {
  carouselItemOverlay: `flex justify-center items-center absolute w-full h-full top-0 left-0 backdrop-brightness-50 cursor-pointer`,
  carouselOverlayText: `text-3xl text-white font-medium`,
  sliderTile: `relative h-40 overflow-hidden rounded-3xl`,
};

const Carousel: React.FC<CarouselProps> = ({}) => {
  return (
    <Slider {...settings}>
      {db_explore.map((e, i) => (
        <div key={`exkey-${i}`} className={styles.sliderTile}>
          <Image
            src={e.src}
            alt="category"
            className="h-40"
            unoptimized
            priority
          />
          <motion.div
            whileHover={{ opacity: 0 }}
            className={styles.carouselItemOverlay}
          >
            <span className={styles.carouselOverlayText}>{e.title}</span>
          </motion.div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;

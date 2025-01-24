import React, { useState } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import styles from "./style.module.scss";
import classNames from "classnames";

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    className={`${styles.arrow} ${styles.nextArrow}`}
    onClick={onClick}
    aria-label="Next"
  >
    &rarr;
  </button>
);

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    className={`${styles.arrow} ${styles.prevArrow}`}
    onClick={onClick}
    aria-label="Previous"
  >
    &larr;
  </button>
);
interface CenteredCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  activeSlide: number; // Add this
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>; // Add this
}

const CenteredCarousel = <T,>({
  items,
  renderItem,
  activeSlide,
  setActiveSlide, // Use the setter function
}: CenteredCarouselProps<T>) => {
  const settings: Settings = {
    focusOnSelect: true,
    // centerPadding: "100px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setActiveSlide(next), // Update the active slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className={`${styles.carousel} mx-auto`}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className={classNames(
              styles.slide,
              "grid grid-cols-12 gap-4",
              //   "p-4",
              index === activeSlide ? styles.activeSlide : ""
            )}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenteredCarousel;

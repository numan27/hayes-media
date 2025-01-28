"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./style.module.scss";
import { Images } from "assets";

// Import required styles for slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";

const sliderData = [
  {
    id: 1,
    title: "Landing Page",
    description: "Lorem ipsum is a simply dummy text.",
    image: Images.PortfolioSlider1,
    buttonText: "View More",
  },
  {
    id: 2,
    image: Images.PortfolioSlider2,
  },
  {
    id: 3,
    image: Images.PortfolioSlider3,
  },
];

const CustomSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, centerMode: false } },
    ],
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  return (
    <div className={classNames(styles.sliderContainer, "w-7/12 mx-auto")}>
      <div className={classNames(styles.customContainer)}>
        <Slider {...settings}>
          {sliderData.map((slide, index) => (
            <div key={slide.id} className={classNames(styles.slide)}>
              <div
                className={classNames`${styles.slideContent} ${
                  index === activeSlide
                    ? styles.activeSlide
                    : styles.inactiveSlide
                }`}
              >
                <Image
                  src={slide.image}
                  alt="Slide Image"
                  // width={300}
                  // height={200}
                  // objectFit="cover"
                  // className={styles.image}
                />
                {index === activeSlide && (
                  <div className={styles.overlay}>
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                    <button>{slide.buttonText}</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;

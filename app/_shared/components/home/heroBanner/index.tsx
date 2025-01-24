"use client";

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import BannerVideo from "./banner-video";
import BrandSlider from "./brandSlider";

const changingTexts = [
  "INNOVATIVE CREATIVE SOLUTIONS",
  "RESULTS-DRIVEN STRATEGIES",
  "DATA-POWERED MARKETING",
  "VISIONARY BRAND BUILDING",
  "IMPACTFUL DIGITAL CAMPAIGNS",
  "CREATIVE BUSINESS GROWTH",
];

const HeroBanner = () => {
  const [currentText, setCurrentText] = useState(changingTexts[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Start the animation
      setTimeout(() => {
        // Change text after animation
        setCurrentText((prevText) => {
          const currentIndex = changingTexts.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % changingTexts.length;
          return changingTexts[nextIndex];
        });
        setIsAnimating(false); // Reset animation
      }, 1000); // Match the animation duration
    }, 3000); // Interval for text change
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-full sm:h-screen h-[75vh] flex flex-col justify-between">
      <section
        className={classNames(
          styles.sectionContainer,
          "relative flex items-center h-full"
        )}
      >
        {/* Background Video */}
        <div className="absolute right-20 left-0 top-0 bottom-8 z-0">
          <div className={classNames(styles.customContainer, "h-full")}>
            <BannerVideo
              videoSrc="/HomePageHeader1.webm"
              thumbnailSrc="/hero-banner.png"
              alt="Sample Video Thumbnail"
            />
          </div>
        </div>

        {/* Foreground Content */}
        <div
          className={classNames(styles.customContainer, "relative z-10 h-full")}
        >
          <div
            className={classNames(
              styles.content,
              "grid md:grid-cols-2 grid-cols-1 sm:gap-16 gap-8 h-full"
            )}
          >
            <div className="flex flex-col md:items-start items-center sm:justify-center justify-end h-full xs:gap-8 gap-4">
              <h1 className="text-white md:text-left text-center">
                HAYES MEDIA IS A <br />{" "}
                <span
                  className={classNames(
                    styles.animatedText,
                    { "opacity-0": isAnimating },
                    "transition-all"
                  )}
                >
                  {currentText}
                </span>{" "}
                <br /> WITH AN EMOTIONALLY <br /> INTELLIGENT APPROACH
              </h1>
              <CustomButton title="get started" />
            </div>

            <div className="hidden md:block" />
          </div>
        </div>
      </section>
      <div
        className={classNames(
          styles.sliderContainer,
          "sm:mt-0 pt-6 sm:mb-20 mb-0"
        )}
      >
        <BrandSlider />
      </div>
    </div>
  );
};

export default HeroBanner;

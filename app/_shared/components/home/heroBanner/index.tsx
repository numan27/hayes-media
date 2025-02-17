"use client";

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import BannerVideo from "./banner-video";
import BrandSlider from "../brandSlider";
import { Images } from "assets";
import Image, { StaticImageData } from "next/image";
import useWindowDimensions from "hooks/useWindowDimensions";

const changingTexts = [
  "Marketing Agency",
  "Creative Agency",
  "Advertising Agency",
];

interface HeroBannerProps {
  contentIcon?: boolean;
  title?: string | any;
  desc?: string | any;
  videoSrc?: string | any;
  btnTitle?: string | any;
  brandsHeading?: string | any;
  brandImagesData?: StaticImageData[] | any;
}

const HeroBanner = ({
  contentIcon,
  title,
  desc,
  videoSrc = "/HomePageHeaderFinal.mp4",
  brandImagesData,
  brandsHeading,
  btnTitle = "Get Started",
}: HeroBannerProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeEffect = () => {
      setIsAnimating(true);

      if (!isDeleting) {
        // Typing
        if (letterIndex < changingTexts[wordIndex].length) {
          setCurrentText(
            changingTexts[wordIndex].substring(0, letterIndex + 1)
          );
          letterIndex++;
          timeout = setTimeout(typeEffect, 100);
        } else {
          // Wait before deleting
          isDeleting = true;
          timeout = setTimeout(typeEffect, 1000);
        }
      } else {
        // Deleting
        if (letterIndex > 0) {
          setCurrentText(
            changingTexts[wordIndex].substring(0, letterIndex - 1)
          );
          letterIndex--;
          timeout = setTimeout(typeEffect, 50);
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % changingTexts.length;
          setCurrentIndex(wordIndex);
          timeout = setTimeout(typeEffect, 500);
        }
      }
    };

    timeout = setTimeout(typeEffect, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleScrollToQuote = () => {
    const quoteSection = document.getElementById("get-a-quote");

    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth", block: "center" });

      // Add highlight effect
      quoteSection.classList.add("soft-glow");

      // Remove highlight after animation duration
      setTimeout(() => {
        quoteSection.classList.remove("soft-glow");
      }, 2000);
    }
  };

  return (
    <section className={classNames(styles.sectionContainer, "w-full")}>
      <div className={classNames(styles.customContainer, "h-full")}>
        <div className="h-full relative flex items-center">
          <div
            className={classNames(
              styles.content,
              "grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 h-full w-full pb-20"
            )}
          >
            <div className="md:order-1 order-2 flex flex-col md:items-start items-center md:justify-center justify-start h-full xs:gap-8 gap-4">
              {contentIcon && (
                <div className={classNames(styles.heroContentIcon)}>
                  <Image src={Images.Speaker} alt="icon" />
                </div>
              )}
              <h1
                data-aos="fade-right"
                className="text-white md:text-left text-center uppercase mb-0"
              >
                {title || (
                  <div className="md:w-10/12 w-full md:text-nowrap">
                    HAYES MEDIA IS A <br />
                    <span
                      data-aos="fade-right"
                      className={classNames(
                        styles.animatedText,
                        isAnimating && styles.slideIn
                      )}
                    >
                      {currentText}
                    </span>{" "}
                    <br /> WITH AN EMOTIONALLY <br /> INTELLIGENT APPROACH
                  </div>
                )}
              </h1>
              {desc && (
                <p className="sm:text-justify text-center mb-2">{desc}</p>
              )}

              <CustomButton
                data-aos="fade-up"
                onClick={handleScrollToQuote}
                title={btnTitle}
              />
            </div>

            <div
              className={classNames(
                styles.videoWrapper,
                "flex items-center md:justify-end justify-center md:order-2 order-1"
              )}
            >
              <BannerVideo
                videoSrc={videoSrc}
                thumbnailSrc="/hero-banner.png"
                alt="Sample Video Thumbnail"
              />
            </div>
          </div>

          <span
            className={classNames(
              styles.sliderContainer,
              "absolute bottom-0 left-0 right-0"
            )}
          >
            <BrandSlider
              brandsHeading={brandsHeading}
              data-aos="fade-up"
              imagesData={brandImagesData}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

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
// import AOS from "aos";

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
  const [currentText, setCurrentText] = useState(changingTexts[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const { width } = useWindowDimensions();

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     offset: 200,
  //     easing: "ease-in-out",
  //     once: true,
  //   });
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentText((prevText) => {
          const currentIndex = changingTexts.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % changingTexts.length;
          return changingTexts[nextIndex];
        });
        setIsAnimating(false);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
                      className={classNames(
                        styles.animatedText,
                        { "opacity-0": isAnimating },
                        "transition-all"
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

              <CustomButton data-aos="fade-up" title={btnTitle} />
            </div>

            <div
              className={classNames(
                styles.videoWrapper,
                "flex items-center justify-center md:order-2 order-1 "
              )}
            >
              <BannerVideo
                // videoSrc="/HomePageHeader1.webm"
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
              // "sm:mt-0 pt-6 sm:mb-20 mb-0"
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

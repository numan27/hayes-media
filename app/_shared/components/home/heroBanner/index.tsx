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
  "INNOVATIVE CREATIVE SOLUTIONS",
  "RESULTS-DRIVEN STRATEGIES",
  "DATA-POWERED MARKETING",
  "VISIONARY BRAND BUILDING",
  "IMPACTFUL DIGITAL CAMPAIGNS",
  "CREATIVE BUSINESS GROWTH",
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
  videoSrc = "/HomePageHeader1.webm",
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
    <div
      className={classNames(
        styles.heroBannerWrapper,
        "md:min-h-screen h-full flex flex-col justify-between"
      )}
    >
      <div className={classNames(styles.customContainer, "h-full")}>
        <section
          className={classNames(
            styles.sectionContainer,
            "flex items-center h-full"
          )}
        >
          <div
            className={classNames(
              styles.content,
              "grid md:grid-cols-2 grid-cols-1 gap-16 h-full "
            )}
          >
            <div className="md:order-1 order-2 flex flex-col md:items-start items-center sm:justify-center justify-end h-full xs:gap-8 gap-4">
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
                  <>
                    HAYES MEDIA IS A {width > 640 && <br />}
                    <span
                      className={classNames(
                        styles.animatedText,
                        "xs:w-10/12 w-full mr-auto",
                        { "opacity-0": isAnimating },
                        "transition-all"
                      )}
                    >
                      {currentText}
                    </span>{" "}
                    <br /> WITH AN EMOTIONALLY <br /> INTELLIGENT APPROACH
                  </>
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
        </section>
      </div>
      <div
        className={classNames(
          styles.sliderContainer,
          "sm:mt-0 pt-6 sm:mb-20 mb-0"
        )}
      >
        <BrandSlider
          brandsHeading={brandsHeading}
          data-aos="fade-up"
          imagesData={brandImagesData}
        />
      </div>
    </div>
  );
};

export default HeroBanner;

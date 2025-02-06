"use client";

import classNames from "classnames";
import useWindowDimensions from "hooks/useWindowDimensions";
import React, { forwardRef, ForwardedRef } from "react";
import Image from "next/image";
import CustomSectionHeading from "components/common/customSectionHeading";
import styles from "./style.module.scss";
import { reviews } from "./constant";
import CustomSlider from "components/common/customSlider";
import { Icons } from "assets";

const TeamSection = forwardRef<HTMLDivElement, {}>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const { width } = useWindowDimensions();
    const itemsPerPage = width > 990 ? 2 : 1;

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // centerMode: true,
      autoplaySpeed: 3000,
      arrows: false,
    };

    return (
      <div className={classNames(styles.mainContainer)} ref={ref}>
        <div className="md:pt-0 pt-6">
          <div
            className={classNames(
              styles.customContainer,
              "flex flex-col sm:gap-5"
            )}
          >
            <CustomSectionHeading
              centered
              heading="TESTIMONIAL"
              description=""
            />
            <CustomSlider settings={sliderSettings}>
              {reviews.map((item, index) => (
                <div
                  key={index}
                  className={classNames(
                    styles.cardContainer,
                    "flex flex-col items-center justify-center gap-7 h-fit mx-auto"
                  )}
                >
                  <div
                    className={classNames(
                      styles.imgContainer,
                      "flex items-center justify-center mx-auto"
                    )}
                  >
                    <Image src={item?.image} alt="team-review" />
                  </div>

                  <div className={styles.reviewOutSection}>
                    <div className={styles.reviewSection}>
                      <label className={styles?.review}>{item?.review}</label>
                      <div className="">
                        <div className="flex items-center justify-center pt-3">
                          <label
                            className={classNames(styles.name, "text-center")}
                          >
                            {item?.name}
                          </label>
                        </div>
                        <div className="flex justify-end">
                          <Icons.BigQuote />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CustomSlider>
          </div>
        </div>
      </div>
    );
  }
);

export default TeamSection;

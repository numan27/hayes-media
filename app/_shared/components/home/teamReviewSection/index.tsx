"use client";

import classNames from "classnames";
import useWindowDimensions from "hooks/useWindowDimensions";
import React, { forwardRef, ForwardedRef } from "react";
import Image from "next/image";
import CustomSectionHeading from "components/common/customSectionHeading";
import styles from "./style.module.scss";
import { reviews } from "./constant";
import CustomSlider from "components/common/customSlider";

const TeamSection = forwardRef<HTMLDivElement, {}>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const { width } = useWindowDimensions();
    const itemsPerPage = width > 990 ? 2 : 1;

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: itemsPerPage,
      slidesToScroll: itemsPerPage,
      autoplay: true,
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
              "flex flex-col sm:gap-4"
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
                    "grid xs:grid-cols-2 grid-cols-1 gap-4"
                  )}
                >
                  <div>
                    <Image
                      data-aos="zoom-out"
                      src={item?.image}
                      alt="team-review"
                      className={styles.reviewImage}
                    />
                  </div>
                  <div className={styles.reviewOutSection}>
                    <div className={classNames(styles.reviewSection)}>
                      <div className="flex justify-between xs:mt-0 mt-3">
                        <div className="flex flex-col xs:items-start items-center">
                          <label className={styles.name}>{item?.name}</label>
                          <p
                            className={classNames(
                              styles.review,
                              "xl:w-9/12 w-full sm:mt-0 mt-3"
                            )}
                          >
                            {item?.review}
                          </p>
                        </div>
                      </div>
                      <div className="border-l-2 h-full border-white w-2 my-2"></div>
                      <div
                        className={classNames(
                          styles.number,
                          "flex flex-col xs:items-start items-center"
                        )}
                      >
                        <label className={styles.review}>Learn More</label>
                        <h1>{index + 1}</h1>
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

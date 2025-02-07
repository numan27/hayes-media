"use client";

import classNames from "classnames";
import useWindowDimensions from "hooks/useWindowDimensions";
import React, { useState, forwardRef, ForwardedRef } from "react";
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
      // autoPlay: true,
      autoplaySpeed: 3000,
      arrows: false,
    };

    return (
      <div className={classNames(styles.mainContainer)} ref={ref}>
        <div className="md:pt-0 pt-6 flex flex-col justify-center h-full">
          <div
            className={classNames(
              styles.customContainer,
              "flex flex-col justify-center sm:gap-5 h-full"
            )}
          >
            <CustomSectionHeading
              centered
              heading="TESTIMONIAL"
              description=""
            />
            <div className="flex flex-col justify-center h-full">
              <CustomSlider settings={sliderSettings}>
                {reviews.map((item, index) => (
                  // @ts-ignore
                  <ReviewCard key={index} item={item} />
                ))}
              </CustomSlider>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const ReviewCard = ({
  item,
}: {
  item: { image: string; review: string; name: string };
}) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("auto");

  return (
    <div
      className={classNames(
        styles.cardContainer,
        "flex flex-col items-center justify-center gap-7 mx-auto relative h-full"
      )}
      style={{ minHeight: "100%" }}
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
          <p
            className={classNames(styles.review, {
              [styles.expanded]: expanded,
            })}
          >
            {item?.review}
          </p>
          <button
            className={styles.seeMoreButton}
            onClick={() => {
              setExpanded((prev) => !prev);
              setTimeout(() => {
                setHeight("auto");
              }, 100);
            }}
          >
            <span>{expanded ? "See Less" : "See More"}</span>
          </button>
          <div className="flex items-center justify-center mt-3 pt-8">
            <label className={classNames(styles.name, "text-center")}>
              {item?.name}
            </label>
          </div>
          <div
            className={classNames(
              styles.quoteIcon,
              "flex justify-end absolute right-0 bottom-0"
            )}
          >
            <Icons.BigQuote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

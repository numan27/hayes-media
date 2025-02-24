"use client";

import classNames from "classnames";
import useWindowDimensions from "hooks/useWindowDimensions";
import React, { useState, forwardRef, ForwardedRef } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { reviews } from "./constant";
import CustomSlider from "components/common/customSlider";
import { Icons } from "assets";

const servicesMobileSlider = forwardRef<HTMLDivElement, {}>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const { width } = useWindowDimensions();

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      pauseOnHover: false,
      pauseOnFocus: true,
    };

    return (
      <div className={classNames(styles.mainContainer)} ref={ref}>
        <div className="flex flex-col justify-center h-full">
          {/* <CustomSlider settings={sliderSettings}>
            {servicesData.map((item, index) => (
              // @ts-ignore
              <ServiceCard key={index} item={item} />
            ))}
          </CustomSlider> */}
        </div>
      </div>
    );
  }
);

const ServiceCard = ({
  item,
}: {
  item: { image: string; review: string; name: string };
}) => {
  return <div></div>;
};

export default servicesMobileSlider;

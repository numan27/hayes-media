"use client";

import React, { useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons } from "assets";

const BoxAnimation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const featuresData = [
    {
      heading: 1,
      shape: <Icons.RoundedShapedRectangle1 />,
      featureItems: [
        { icon: <Icons.CoreValuesIcon1 />, title: "SEO" },
        { icon: <Icons.CoreValuesIcon2 />, title: "SEM/PPC" },
        { icon: <Icons.CoreValuesIcon3 />, title: "BLOGGING" },
        { icon: <Icons.CoreValuesIcon4 />, title: "MARKETING" },
        { icon: <Icons.CoreValuesIcon4 />, title: "MARKETING" },
      ],
    },
    {
      heading: 2,
      shape: <Icons.RoundedShapedRectangle2 />,
      featureItems: [
        { icon: <Icons.CoreValuesIcon1 />, title: "SEO" },
        { icon: <Icons.CoreValuesIcon2 />, title: "SEM/PPC" },
        { icon: <Icons.CoreValuesIcon3 />, title: "BLOGGING" },
        { icon: <Icons.CoreValuesIcon4 />, title: "MARKETING" },
      ],
    },
    {
      heading: 3,
      shape: <Icons.RoundedShapedRectangle3 />,
      featureItems: [
        { icon: <Icons.CoreValuesIcon1 />, title: "SEO" },
        { icon: <Icons.CoreValuesIcon2 />, title: "SEM/PPC" },
        { icon: <Icons.CoreValuesIcon3 />, title: "BLOGGING" },
      ],
    },
    {
      heading: 4,
      shape: <Icons.RoundedShapedRectangle4 />,
      featureItems: [
        { icon: <Icons.CoreValuesIcon1 />, title: "SEO" },
        { icon: <Icons.CoreValuesIcon2 />, title: "SEM/PPC" },
      ],
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper, "min-h-screen")}>
      <div className={classNames(styles.customContainer, "h-full")}>
        <div className={classNames(styles.contentContainer, "h-[90vh]")}>
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={classNames(styles.contentItem)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className={classNames(styles.svgWrapper)}>
                <Icons.RoundedShapedRectangle1 />
                <span className={classNames(styles.heading)}>
                  0{feature.heading}
                </span>
              </span>

              <div
                className={classNames(
                  styles.hiddenContent,
                  "flex items-center justify-center flex-wrap xs:gap-2 gap-1"
                )}
              >
                {hoveredIndex === index &&
                  feature.featureItems.map((item, idx) => (
                    <div key={idx} className={classNames(styles.customBadge)}>
                      <div
                        className={classNames(
                          styles.badgeContent,
                          "flex items-center gap-3"
                        )}
                      >
                        <span className={styles.iconContainer}>
                          {item.icon}
                        </span>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxAnimation;

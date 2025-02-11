"use client";

import { useState, useRef } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons } from "assets";
import { motion } from "framer-motion";
import CustomButton from "components/common/customButton";

const BoxAnimation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedRetargeting, setClickedRetargeting] = useState<boolean>(false);
  const firstContentRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleRetargetingClick = () => {
    if (firstContentRef.current) {
      firstContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setClickedRetargeting(true);
  };

  const handleMouseLeaveFirstItem = () => {
    if (clickedRetargeting) {
      setClickedRetargeting(false);
    } else {
      setHoveredIndex(null);
    }
  };

  const featuresData = [
    {
      heading: 1,
      shape: <Icons.RoundedShapedRectangle1 />,
      featureItems: [
        { icon: <Icons.CoreValuesIcon1 />, title: "Graphics" },
        { icon: <Icons.CoreValuesIcon2 />, title: "Blogs" },
        { icon: <Icons.CoreValuesIcon3 />, title: "Keywords" },
        { icon: <Icons.CoreValuesIcon4 />, title: "Carousel" },
        { icon: <Icons.CoreValuesIcon4 />, title: "Video" },
        { icon: <Icons.CoreValuesIcon4 />, title: "TikTok Ads" },
        { icon: <Icons.CoreValuesIcon4 />, title: "Linkedin Ads" },
        { icon: <Icons.CoreValuesIcon4 />, title: "TikTok Ads" },
        { icon: <Icons.CoreValuesIcon4 />, title: "Reels" },
      ],
    },
    {
      heading: 2,
      shape: <Icons.RoundedShapedRectangle2 />,
      featureItems: [
        { icon: <Icons.CoreValuesIcon1 />, title: "Landing Page" },
        { icon: <Icons.CoreValuesIcon2 />, title: "Instagram Message" },
        { icon: <Icons.CoreValuesIcon3 />, title: "Instagram Shop" },
        { icon: <Icons.CoreValuesIcon4 />, title: "Shopify Store" },
        { icon: <Icons.CoreValuesIcon4 />, title: "YouTube Channel" },
      ],
    },
    {
      heading: 3,
      shape: <Icons.RoundedShapedRectangle3 />,
      featureItems: [
        { icon: <Icons.CoreValuesIcon1 />, title: "Cart" },
        { icon: <Icons.CoreValuesIcon2 />, title: "Email Opt-in" },
        { icon: <Icons.CoreValuesIcon3 />, title: "Form" },
        { icon: <Icons.CoreValuesIcon3 />, title: "Subscribe" },
        // {
        //   icon: <Icons.CoreValuesIcon3 />,
        //   title: "Re-targeting",
        //   onClick: handleRetargetingClick,
        // },
      ],
    },
    {
      heading: 4,
      shape: <Icons.RoundedShapedRectangle4 />,
      featureItems: [
        { icon: <Icons.CoreValuesIcon1 />, title: "Sale" },
        { icon: <Icons.CoreValuesIcon2 />, title: "Conversion" },
        { icon: <Icons.CoreValuesIcon2 />, title: "Lead" },
      ],
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper, "min-h-screen")}>
      <div className={classNames(styles.customContainer, "h-full")}>
        <div
          className={classNames(styles.contentContainer, "h-[90vh] relative")}
        >
          {featuresData.map((feature, index) => (
            <div
              key={index}
              ref={index === 0 ? firstContentRef : null}
              className={classNames(styles.contentItem, "relative")}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={
                index === 0 ? handleMouseLeaveFirstItem : handleMouseLeave
              }
            >
              <span className={classNames(styles.svgWrapper)}>
                <Icons.RoundedShapedRectangle1 />
                <span className={classNames(styles.heading)}>
                  0{feature.heading}
                </span>
              </span>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={classNames(
                  styles.hiddenContent,
                  "flex items-center justify-center flex-wrap xs:gap-2 gap-1 relative w-full"
                )}
                style={{
                  opacity:
                    (index === 0 && clickedRetargeting) ||
                    hoveredIndex === index
                      ? 1
                      : 0,
                  visibility:
                    (index === 0 && clickedRetargeting) ||
                    hoveredIndex === index
                      ? "visible"
                      : "hidden",
                  transform:
                    (index === 0 && clickedRetargeting) ||
                    hoveredIndex === index
                      ? "translateY(0)"
                      : "translateY(10px)",
                }}
              >
                {feature.featureItems.map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      staggerChildren: 0.1,
                    }}
                    key={idx}
                    className={classNames(
                      styles.customBadge,
                      item.title === "Re-targeting"
                        ? "absolute -right-28 -top-3 cursor-pointer"
                        : ""
                    )}
                    // onClick={item.onClick}
                  >
                    <div
                      className={classNames(
                        styles.badgeContent,
                        "flex items-center gap-3"
                      )}
                    >
                      <span className={styles.iconContainer}>{item.icon}</span>
                      <p>{item.title}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {hoveredIndex === 2 && index === 2 && (
                <>
                  <svg
                    className={classNames(styles.curvedLine)}
                    width="400"
                    height="250"
                    viewBox="0 0 400 250"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#EC1E24", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#902880", stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M 10 240 C 50 -50, 350 -50, 390 240"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      fill="none"
                      // vectorEffect="non-scaling-stroke"
                      strokeDasharray="10,5" // Dashed Line
                      strokeLinecap="round" // Makes dashed line rounded
                      className={styles.animatedPath}
                    />
                  </svg>

                  <span className="absolute top-10 right-0 cursor-pointer">
                    <div
                      style={{ cursor: "pointer" }}
                      className={classNames(
                        styles.customBadge,
                        styles.targetButton
                      )}
                      onClick={handleRetargetingClick}
                    >
                      <div
                        className={classNames(
                          styles.badgeContent,
                          "flex items-center gap-3"
                        )}
                      >
                        <span className={styles.iconContainer}>
                          <Icons.ArrowUp />
                        </span>
                        Re-targeting Ads
                      </div>
                    </div>
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxAnimation;

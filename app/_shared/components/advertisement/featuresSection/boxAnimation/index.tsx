"use client";

import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons } from "assets";
import { motion } from "framer-motion";

const BoxAnimation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedRetargeting, setClickedRetargeting] = useState<boolean>(false);
  const [isLineVisible, setIsLineVisible] = useState<boolean>(false);
  const firstContentRef = useRef<HTMLDivElement>(null);
  const hideLineTimeout = useRef<NodeJS.Timeout | null>(null);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const featureItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    if (index === 2) {
      setIsLineVisible(true);
      // Clear any existing timeout to prevent hiding the line
      if (hideLineTimeout.current) {
        clearTimeout(hideLineTimeout.current);
        hideLineTimeout.current = null;
      }
    }
  };

  const handleMouseLeave = () => {
    if (!clickedRetargeting) {
      setHoveredIndex(null);
      setIsLineVisible(false);
    }
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
      setIsLineVisible(false);
    }
  };

  useEffect(() => {
    const hideLineOnScrollOrMouseMove = () => {
      if (isLineVisible && hoveredIndex !== 2) {
        setIsLineVisible(false);
      }
    };

    window.addEventListener("scroll", hideLineOnScrollOrMouseMove);
    window.addEventListener("mousemove", hideLineOnScrollOrMouseMove);

    return () => {
      window.removeEventListener("scroll", hideLineOnScrollOrMouseMove);
      window.removeEventListener("mousemove", hideLineOnScrollOrMouseMove);
    };
  }, [isLineVisible, hoveredIndex]);

  // Clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (hideLineTimeout.current) {
        clearTimeout(hideLineTimeout.current);
      }
    };
  }, []);

  // Handle scroll for mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureItemRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            setVisibleIndex(index); // Set the visible index
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the item is visible
      }
    );

    // Observe each feature item
    featureItemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureItemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0, visibility: "hidden" },
    visible: {
      opacity: 1,
      visibility: "visible",
      transition: { staggerChildren: 0.01, delayChildren: 0.01 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.8 },
    visible: {
      opacity: 1,
      y: [10, -5, 0],
      scale: [0.8, 1.1, 1],
      transition: { duration: 0.01, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div
      className={classNames(
        styles.sectionWrapper,
        "flex items-center justify-center h-full"
      )}
    >
      <div
        className={classNames(
          styles.contentContainer,
          "xs:h-[90vh] h-[50vh] max-h-full relative"
        )}
      >
        {featuresData.map((feature, index) => (
          <div
            key={index}
            // @ts-ignore
            ref={(el) => (featureItemRefs.current[index] = el)}
            // ref={index === 0 ? firstContentRef : null}
            className={classNames(
              styles.contentItem,
              "relative w-full my-auto"
            )}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={
              index === 0 ? handleMouseLeaveFirstItem : handleMouseLeave
            }
          >
            <div className={classNames(styles.svgWrapper)}>
              <Icons.RoundedShapedRectangle1 />
              <span className={classNames(styles.heading)}>
                0{feature.heading}
              </span>
            </div>

            <motion.div
              className={classNames(
                styles.hiddenContent,
                "flex items-center justify-center flex-wrap xs:gap-2 gap-0.5 relative w-full"
              )}
              // @ts-ignore
              variants={containerVariants}
              initial="hidden"
              animate={hoveredIndex === index ? "visible" : "hidden"}
            >
              {feature.featureItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={classNames(
                    styles.customBadge,
                    item.title === "Re-targeting"
                      ? "absolute -right-28 -top-3 cursor-pointer"
                      : ""
                  )}
                  variants={itemVariants}
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
                    strokeDasharray="10,5"
                    strokeLinecap="round"
                    className={styles.animatedPath}
                  />
                </svg>

                <span className="absolute xl:top-10 top-14 xl:right-0 sm:-right-12 -right-14 cursor-pointer">
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
  );
};

export default BoxAnimation;

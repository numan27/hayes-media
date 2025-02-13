"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomSectionHeading from "components/common/customSectionHeading";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import CustomButton from "components/common/customButton";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const blogsData = [
    {
      img: "",
      category: "Website",
      title: "Creative landing page Development",
    },
    {
      img: "",
      category: "Digital marketing",
      title: "Why We Collect User’s Data",
    },
    { img: "", category: "Branding", title: "How We Optimized Our SEO" },
    { img: "", category: "DEVELOPMENT", title: "Automation. Advanced Level" },
  ];

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <CustomSectionHeading
            centered
            heading="BLOGS & ARTICLES"
            description=""
          />
          <div
            className={classNames(
              styles.gridContainer,
              "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-4 gap-3"
            )}
          >
            {blogsData.map((items) => (
              <CustomAnimatedBorder
                gradientColors="linear-gradient(270deg, #EC1E24 0%, #141212 50%, #902880 100%)"
                animationSpeed="6s"
                borderRadius="8px"
              >
                <div data-aos="zoom-in" className={classNames(styles.gridItem)}>
                  <div className={classNames(styles.imgContainer)}></div>
                  <div
                    className={classNames(
                      styles.content,
                      "flex flex-col items-start sm:gap-5 gap-3"
                    )}
                  >
                    <div className={classNames(styles.category)}>
                      <span>{items.category}</span>
                    </div>
                    <h5>{items.title}</h5>
                    <div className={classNames(styles.linkContainer)}>
                      <CustomButton
                        title="Read More"
                        containerStyle="md-height-button"
                      />
                    </div>
                  </div>
                </div>
              </CustomAnimatedBorder>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

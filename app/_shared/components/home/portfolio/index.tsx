"use client";

import React, { useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import { Images } from "assets";
import dynamic from "next/dynamic";
import Image from "next/image";

const CenteredCarousel = dynamic(
  () => import("components/common/slickCarousel"),
  { ssr: false }
);

const testimonials = [
  {
    user: {
      name: "John Doe",
    },
    user_type: "Verified Buyer",
    image: Images.ReviewSlider1,
    text: "This product is absolutely amazing! I've been using it for weeks, and it exceeded my expectations.",
  },
  {
    user: {
      name: "Jane Smith",
    },
    user_type: "Regular Customer",
    image: Images.ReviewSlider2,
    text: "Great quality and fantastic customer service. Highly recommend to everyone.",
  },
  {
    user: {
      name: "Ali Khan",
    },
    user_type: "First-time Buyer",
    image: Images.ReviewSlider3,
    text: "I was skeptical at first, but this turned out to be a great purchase. Very satisfied!",
  },
  {
    user: {
      name: "John Doe",
    },
    user_type: "Verified Buyer",
    image: Images.ReviewSlider1,
    text: "This product is absolutely amazing! I've been using it for weeks, and it exceeded my expectations.",
  },
  {
    user: {
      name: "Jane Smith",
    },
    user_type: "Regular Customer",
    image: Images.ReviewSlider2,
    text: "Great quality and fantastic customer service. Highly recommend to everyone.",
  },
  {
    user: {
      name: "Ali Khan",
    },
    user_type: "First-time Buyer",
    image: Images.ReviewSlider3,
    text: "I was skeptical at first, but this turned out to be a great purchase. Very satisfied!",
  },
];

const Portfolio = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Lifted state

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <CustomAnimatedBorder
          gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
          animationSpeed="5s"
          borderRadius="8px"
        >
          <div className={classNames(styles.contentWrapper)}>
            <CustomSectionHeading
              centered
              heading="Testimonials"
              description="Here's what our customers have to say about our products and services."
            />

            <div className={classNames(styles.customContainer)}>
              <CenteredCarousel
                items={testimonials}
                // @ts-ignore
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                renderItem={(testimonial: any, index: number) => (
                  <div
                    className={classNames(
                      styles.review_section,
                      "relative col-span-3",
                      index === activeSlide ? "col-span-6" : ""
                    )}
                  >
                    <Image
                      src={testimonial.image}
                      alt="customer-img"
                      className={styles.image}
                    />
                    <div
                      className={classNames(
                        "absolute inset-0 flex items-center justify-center bg-[#7C002BE5] border border-white rounded-lg transition-opacity",
                        index === activeSlide ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <div className="text-white text-center px-4">
                        <h4
                          className={classNames(styles.listing__title, "mb-2")}
                        >
                          {testimonial.user.name}
                        </h4>
                        <p className="text-sm italic mb-4">
                          {testimonial.user_type}
                        </p>
                        <p
                          className={classNames(
                            styles.review_desc,
                            "text-base"
                          )}
                        >
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </CustomAnimatedBorder>
      </div>
    </section>
  );
};

export default Portfolio;

"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomSectionHeading from "components/common/customSectionHeading";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";

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
    { img: "", category: "Website", title: "Creative landing page" },
    {
      img: "",
      category: "Digital marketing",
      title: "Why We Collect User’s Data",
    },
    { img: "", category: "Branding", title: "How We Optimized Our SEO" },
    { img: "", category: "DEVELOPMENT", title: "Automation. Advanced Level" },
    { img: "", category: "SEO", title: "How We Optimized Our SEO" },
    { img: "", category: "User testing", title: "Automation. Advanced Level" },
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
              "grid lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 lg:gap-10 sm:gap-7 gap-4"
            )}
          >
            {blogsData.map((items) => (
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
                    <Link className="flex items-center gap-1.5" href="">
                      Read more{" "}
                      <Image
                        width={16}
                        height={16}
                        src={Images.RoundedArrowRight}
                        alt="icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

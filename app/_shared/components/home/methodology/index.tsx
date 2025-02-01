"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import { Icons, Images } from "assets";
import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

const Methodology = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const methodologyData = [
    {
      icon: Images.MethodologyIcon1,
      title: "Brand & Audience Analysis",
      desc: "Your vision, our deep dive. Let’s uncover your audience's emotional triggers.",
    },
    {
      icon: Images.MethodologyIcon2,
      title: "Infrastructure & Automation",
      desc: "Let’s get your look at your intake process and get you ready to take in even more leads in the most efficient way possible.",
    },
    {
      icon: Images.MethodologyIcon3,
      title: "Customized Funnel",
      desc: "This step involves designing the flow of leads and your services fitted to your business and industry.",
    },
    {
      icon: Images.MethodologyIcon4,
      title: "AI Integration",
      desc: "In this step, machine models look at data and save money on dollar cost averages.",
    },
    {
      icon: Images.MethodologyIcon5,
      title: "Review & Launch",
      desc: "After a review of processes, content, and systems and any last minute touches, we launch your systems!",
    },
  ];

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <CustomSectionHeading
            centered
            heading="METHODOLOGY"
            description="Lorem ipsum is a simply dummy text.lorem ipsum is a simply dummy text."
          />
          <div
            className={classNames(
              styles.gridContainer,
              "grid lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-8 xs:gap-6 gap-4"
            )}
          >
            {methodologyData.map((items, index) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="3000"
                key={index}
                className={classNames(
                  styles.gridItem,
                  "flex flex-col sm:items-start items-center"
                )}
              >
                <span className={classNames(styles.iconContainer)}>
                  <Image width={70} height={70} src={items.icon} alt="icon" />
                </span>
                {/* <div className={styles.timelineContainer}>
                  <div className={styles.animatedLine}>
                    <span className={styles.arrow}>
                      <Icons.ChevRight />
                    </span>
                    <div className={styles.dots}></div>
                  </div>
                </div> */}
                <span className={classNames(styles.step)}>
                  Step {index + 1}
                </span>
                <h5>{items.title}</h5>
                <p>{items.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

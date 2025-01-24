"use client";

import { useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAccordion from "components/common/customAccordion";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

const FAQs = () => {
  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: "Cardio Combat Bootcamp",
      content:
        "It’s simple: data meets creativity and emotional intelligence while maximizing efficiency with artificial intelligence.",
    },
    {
      id: 2,
      title: "Mind & Muscle Session",
      content:
        "It’s simple: data meets creativity and emotional intelligence while maximizing efficiency with artificial intelligence.",
    },
    {
      id: 3,
      title: "Functional Fitness Foundations Class",
      content:
        "It’s simple: data meets creativity and emotional intelligence while maximizing efficiency with artificial intelligence.",
    },
    {
      id: 4,
      title: "Endurance Builder Workout",
      content:
        "It’s simple: data meets creativity and emotional intelligence while maximizing efficiency with artificial intelligence.",
    },
    {
      id: 5,
      title: "Endurance Builder Workout",
      content:
        "It’s simple: data meets creativity and emotional intelligence while maximizing efficiency with artificial intelligence.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <CustomSectionHeading
            centered
            heading="Frequently Asked Questions"
            description="Questions and Answers, are listed questions and answers, all supposed to be commonly asked in some context. Questions and Answers, are listed questions and answers, all supposed to be commonly asked in some context."
          />
          <div className="lg:w-9/12 sm:w-10/12 w-full mx-auto mt-10">
            <CustomAnimatedBorder
              gradientColors="linear-gradient(270deg, #EC1E24 0%, #141212 50%, #902880 100%)"
              animationSpeed="6s"
              borderRadius="4px"
            >
              <div className={classNames(styles.accordionContainer, "w-full")}>
                {accordionData.map((item) => (
                  <CustomAccordion
                    key={item.id}
                    title={item.title}
                    isOpen={openAccordion === item.id}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    {item.content}
                  </CustomAccordion>
                ))}
              </div>
            </CustomAnimatedBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

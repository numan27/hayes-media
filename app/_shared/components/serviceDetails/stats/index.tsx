"use client";

import { useSpring, animated } from "@react-spring/web";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons } from "assets";

const Stats = () => {
  const stats = [
    { number: "6", details: "Happy Clients" },
    { number: "11", details: "Completed Projects" },
    { number: "7M", details: "Transactions" },
    { number: "6000 +", details: "Customers" },
  ];

  const animateNumber = (endValue: string) => {
    const formattedValue = endValue.replace(/[^0-9]/g, "");
    const startValue = 0;
    return useSpring({
      from: { number: startValue },
      to: { number: Number(formattedValue) },
      config: { tension: 100, friction: 10 },
    });
  };

  return (
    <div className={classNames(styles.sectionWrapper, "")}>
      <div className={classNames(styles.customContainer, "")}>
        <div
          className={classNames(
            styles.contentContainer,
            "grid xs:grid-cols-4 grid-cols-2 xs:gap-10 gap-6"
          )}
        >
          {stats.map((items, index) => {
            const animationProps = animateNumber(items.number);
            return (
              <div
                key={index}
                className={classNames(
                  styles.statItem,
                  "flex flex-col items-center"
                )}
              >
                <animated.h1>
                  {animationProps.number.to((n: number) => n.toFixed(0))}
                </animated.h1>
                <p>{items.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;

"use client";

import { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

const Stats = () => {
  const stats = [
    { number: "6", details: "Happy Clients" },
    { number: "11", details: "Completed Projects" },
    { number: "7M", details: "Transactions" },
    { number: "6000 +", details: "Customers" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const formattedNumber = parseInt(stat.number.replace(/[^0-9]/g, ""));
      let count = 0;
      const step = Math.ceil(formattedNumber / 100);

      return setInterval(() => {
        count += step;
        if (count >= formattedNumber) {
          count = formattedNumber;
          clearInterval(intervals[index]);
        }
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = count;
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className={classNames(styles.sectionWrapper, "")}>
      <div className={classNames(styles.customContainer, "")}>
        <div
          className={classNames(
            styles.contentContainer,
            "grid xs:grid-cols-4 grid-cols-2 xs:gap-10 gap-6"
          )}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className={classNames(
                styles.statItem,
                "flex flex-col items-center"
              )}
            >
              <h1>
                {counts[index]}
                {item.number.includes("M") && "M"}
                {item.number.includes("+") && "+"}
              </h1>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

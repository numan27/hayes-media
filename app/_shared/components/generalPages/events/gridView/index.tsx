"use client";

import { useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import EventCard from "components/common/eventCard";
import CustomPagination from "components/common/customPagination";

interface GridViewEventsProps {
  eventsData: Array<{
    id: number;
    img: string;
    time: string;
    title: string;
    desc: string;
    date: string;
  }>;
  onEventClick: (id: number) => void;
}

const GridViewEvents = ({ eventsData, onEventClick }: GridViewEventsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div
        className={classNames(
          styles.gridContainer,
          "grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-7 sm:gap-5 gap-4"
        )}
      >
        {eventsData.map((item) => (
          <EventCard
            id={item.id}
            key={item.id}
            img={item.img}
            time={item.time}
            title={item.title}
            desc={item.desc}
            date={item.date}
            onButtonClick={() => onEventClick(item.id)}
          />
        ))}
      </div>
      <div className={classNames(styles.paginationContainer)}>
        <CustomPagination
          disablePaginationInfo
          onPageChange={handlePageChange}
          totalCount={100}
          currentPage={currentPage}
          pageSize={10}
        />
      </div>
    </>
  );
};

export default GridViewEvents;

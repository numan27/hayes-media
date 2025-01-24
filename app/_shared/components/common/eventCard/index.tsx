"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";
import { Icons } from "assets";
import CustomButton from "components/common/customButton";

type EventCardProps = {
  id: string | any;
  img: StaticImageData | string;
  time: string;
  title: string;
  desc: string;
  date: string;
  onButtonClick?: () => void;
};

const EventCard = ({
  id,
  img,
  time,
  title,
  desc,
  date,
  onButtonClick,
}: EventCardProps) => {
  return (
    <div className={classNames(styles.eventItem)}>
      <Image width={418} height={200} src={img} alt="event-img" />

      <div className={classNames(styles.cardContent)}>
        <div
          className={classNames(styles.timeStamp, "flex items-center gap-1")}
        >
          <Icons.Clock />
          <p>{time}</p>
        </div>

        <div className={classNames(styles.itemContent)}>
          <div className={classNames(styles.title, "flex items-start gap-2")}>
            <span>
              <Icons.Circle />
            </span>
            <h6>{title}</h6>
          </div>
          <p>{desc}</p>
          <div className={classNames(styles.date, "flex items-center gap-2")}>
            <Icons.Calendar />
            <span>{date}</span>
          </div>
        </div>
      </div>

      <div className={classNames(styles.buttonContainer)}>
        <CustomButton
          containerStyle="bg-blue w-full"
          title="View Detail"
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default EventCard;

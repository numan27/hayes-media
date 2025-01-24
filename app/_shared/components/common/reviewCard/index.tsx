"use client";
import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames";
import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";
import { Images } from "assets";

interface ReviewCardProps {
  data: {
    user: any;
    user_type: string;
    image: StaticImageData | string;
    text: string;
  };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ data }) => {
  const { user, user_type, image, text } = data;

  return (
    <div
      className={classNames(styles.review_section, "shadow relative w-full")}
    >
      <Image
        // @ts-ignore
        src={image}
        alt="customer-img"
      />
      <div className="flex items-center gap-4 absolute left-1/2 top-1/2">
        <div>
          <h4 className={classNames(styles.listing__title)}>{user?.name}</h4>
          <p>{user_type}</p>
        </div>
        <p className={classNames(styles.review_desc)}>"{text}"</p>
      </div>
    </div>
  );
};

export default ReviewCard;

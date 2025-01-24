import classNames from "classnames";
import styles from "./style.module.scss";
import Image from "next/image";
import { Images } from "assets";

interface CustomSectionHeadingProps {
  heading: string;
  description: string;
  centered?: boolean;
}

const CustomSectionHeading = ({
  heading,
  description,
  centered = false,
}: CustomSectionHeadingProps) => {
  return (
    <div
      className={classNames(
        styles.sectionHeading,
        "flex flex-col",
        centered
          ? "items-center text-center sm:w-8/12 xs:w-10/12 w-full mx-auto"
          : "sm:items-start text-left"
      )}
    >
      <div
        className={classNames(styles.titleContainer, "flex items-center gap-1")}
      >
        <span>
          <Image height={36} width={36} src={Images.Logo} alt="mission-img" />
        </span>
        <h2>{heading}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default CustomSectionHeading;

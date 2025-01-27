import classNames from "classnames";
import styles from "./style.module.scss";
import Image from "next/image";
import { Images } from "assets";

interface CustomSecondaryHeadingProps {
  heading: string | any;
  textCase?: "uppercase" | "lowercase" | "capitalize" | "none";
  size?: "default" | "md" | "small" | "large";
}

const CustomSecondaryHeading = ({
  heading,
  size = "default",
  textCase = "uppercase",
}: CustomSecondaryHeadingProps) => {
  const HeadingTag =
    size === "large"
      ? "h1"
      : size === "md"
      ? "h4"
      : size === "small"
      ? "h5"
      : "h3";

  return (
    <div className={classNames(styles.sectionHeading)}>
      <HeadingTag
        style={{
          textTransform: textCase,
          fontSize: size === "large" ? "50px" : undefined,
        }}
        className={classNames(styles.title)}
      >
        <span>{heading}</span>
        <span className={classNames(styles.lineX)}>
          <Image src={Images.GradientLineX} alt="lineX-icon" />
        </span>
      </HeadingTag>
    </div>
  );
};

export default CustomSecondaryHeading;

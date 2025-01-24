import classNames from "classnames";
import styles from "./style.module.scss";
import Image from "next/image";
import { Images } from "assets";

interface CustomSeconadryHeadingProps {
  number: number;
  heading: string;
}

const CustomSecondaryHeading = ({
  number,
  heading,
}: CustomSeconadryHeadingProps) => (
  <div
    className={classNames(
      styles.sectionHeading,
      "flex items-end sm:justify-start justify-center xs:gap-0 gap-1.5"
    )}
  >
    <h1 className={classNames(styles.number)}>{number}</h1>
    <div className="flex items-baseline mt-auto">
      <h3 className={classNames(styles.title)}>
        {heading}
        <span className={classNames(styles.arrow)}>
          <Image
            height={25}
            width={25}
            src={Images.LongArrow}
            alt="arrow-icon"
          />
        </span>
        <span className={classNames(styles.lineX)}>
          <Image src={Images.GradientLineX} alt="lineX-icon" />
        </span>
      </h3>
    </div>
  </div>
);

export default CustomSecondaryHeading;

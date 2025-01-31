import { memo } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";
import CustomSectionHeading from "components/common/customSectionHeading";

interface BrandSliderProps {
  imagesData?: StaticImageData[] | any;
  brandsHeading?: string | any;
}

const ClientSlider = ({ imagesData, brandsHeading = "" }: BrandSliderProps) => {
  return (
    <section className={classNames(styles.brands__section)}>
      <CustomSectionHeading
        centered
        heading="Our Clients"
        description="We’ve partnered with innovative and diverse clients, including"
      />
      <div className={classNames(styles.brands__sectionContent, "pt-6")}>
        <h4 data-aos="fade-down">
          <span>{brandsHeading}</span>
        </h4>

        {/* First Row (Right to Left) */}
        <div className={classNames(styles.loopSlider, styles.loopLeft)}>
          <div className={classNames(styles.inner, "flex items-center gap-2")}>
            {[...imagesData, ...imagesData].map((image, index) => (
              <SlideItem image={image} key={`top-${index}`} />
            ))}
          </div>
        </div>

        {/* Second Row (Left to Right) */}
        <div className={classNames(styles.loopSlider, styles.loopRight)}>
          <div className={classNames(styles.inner, "flex items-center gap-2")}>
            {[...imagesData, ...imagesData].map((image, index) => (
              <SlideItem image={image} key={`bottom-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SlideItemProps {
  image: StaticImageData;
}

const SlideItem = ({ image }: SlideItemProps) => (
  <div className={classNames(styles.slideItem)}>
    <Image src={image} alt="Brand logo" />
  </div>
);

export default memo(ClientSlider, () => true);

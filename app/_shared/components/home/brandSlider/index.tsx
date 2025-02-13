import { memo } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";

interface BrandSliderProps {
  imagesData?: StaticImageData[] | any;
  brandsHeading?: string | any;
}

const BrandSlider = ({
  imagesData,
  brandsHeading = "Brands that work with us",
}: BrandSliderProps) => {
  return (
    <section className={classNames(styles.brands__section)}>
      {/* <div className={classNames(styles.customContainer)}> */}
      <div className={classNames(styles.brands__sectionContent)}>
        <h4 data-aos="">
          <span>{brandsHeading}</span>
        </h4>
        <div className={classNames(styles.loopSlider)}>
          <div className={classNames(styles.inner, "flex items-center gap-2")}>
            {[...imagesData, ...imagesData, ...imagesData, ...imagesData].map(
              (image, index) => (
                <SlideItem image={image} key={index} />
              )
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
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

export default memo(BrandSlider, () => true);

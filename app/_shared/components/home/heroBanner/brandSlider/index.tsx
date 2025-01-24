import { memo } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image, { StaticImageData } from "next/image";

const brands = [
  {
    img: Images.BrandLogo,
  },
  {
    img: Images.BrandLogo,
  },
  {
    img: Images.BrandLogo,
  },
  {
    img: Images.BrandLogo,
  },
  {
    img: Images.BrandLogo,
  },
  {
    img: Images.BrandLogo,
  },
  {
    img: Images.BrandLogo,
  },
  {
    img: Images.BrandLogo,
  },
];

const BrandSlider = () => {
  return (
    <section className={classNames(styles.brands__section)}>
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.brands__sectionContent)}>
          <h4>
            <span className="">Our Brands that work with us:</span>
          </h4>
          <div className={classNames(styles.loopSlider)}>
            <div
              className={classNames(styles.inner, "flex items-center gap-2")}
            >
              {[...brands, ...brands, ...brands, ...brands].map(
                (supplier, index) => {
                  return <SlideItem image={supplier.img} key={index} />;
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SliderProps {
  image: StaticImageData;
}

const SlideItem = ({ image }: SliderProps) => (
  <div className={classNames(styles.slideItem)}>
    <Image src={image} alt="" className={classNames()} />
  </div>
);

export default memo(BrandSlider, () => true);

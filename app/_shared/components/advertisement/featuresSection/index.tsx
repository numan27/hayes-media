import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import BoxAnimation from "./boxAnimation";
import { Images } from "assets";
import Image from "next/image";
import CustomSecondaryHeading from "components/common/customSecondaryHeading";
import CustomButton from "components/common/customButton";

const Features = () => {
  const sectionData = [
    {
      title: "Stand Out from the Crowd",
      desc: "In a sea of competitors, we ensure your brand shines. By combining creative messaging with precision targeting, we develop ad campaigns that captivate attention and leave a lasting impression on your audience.",
    },
    {
      title: "Landing Pages That Convert",
      desc: "In a sea of competitors, we ensure your brand shines. By combining creative messaging with precision targeting, we develop ad campaigns that captivate attention and leave a lasting impression on your audience.",
    },
    {
      title: "Maximize Your Investment",
      desc: "In a sea of competitors, we ensure your brand shines. By combining creative messaging with precision targeting, we develop ad campaigns that captivate attention and leave a lasting impression on your audience.",
    },
    {
      title: "Boost Conversion Rates Over Time",
      desc: "In a sea of competitors, we ensure your brand shines. By combining creative messaging with precision targeting, we develop ad campaigns that captivate attention and leave a lasting impression on your audience.",
    },
  ];
  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <CustomAnimatedBorder
          gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
          animationSpeed="5s"
          borderRadius="8px"
        >
          <div className={classNames(styles.contentWrapper)}>
            <div className="sm:px-0 px-3">
              <CustomSectionHeading
                centered
                heading="OUR FEATURES & FUNNEL"
                description="Your business deserves more than a cookie-cutter approach. This is where our marketing consultants in Austin craft unforgettable digital experiences that inspire conversions, spark loyalty and leave your customers satisfied."
              />
            </div>
            <div
              className={classNames(
                styles.gridContainer,
                "grid xs:grid-cols-2 grid-cols-1 md:gap-16 sm:gap-10 gap-8"
              )}
            >
              {sectionData.map((items, index) => (
                <div
                  key={index}
                  className={classNames(
                    styles.gridItem,
                    "flex lg:flex-row flex-col justify-center lg:items-center xs:items-start items-center sm:gap-10 gap-6"
                  )}
                >
                  <div
                    className={classNames(
                      styles.numberBox,
                      "flex items-center justify-center lg:w-2/5 w-full"
                    )}
                  >
                    <span className={classNames(styles.shapeContainer)}>
                      <Image src={Images.GradientBoxShape} alt="shape" />
                    </span>
                    <h1>{index + 1}</h1>
                  </div>
                  <div className="lg:w-3/5 w-full">
                    <CustomSecondaryHeading
                      size="md"
                      isHaveTopLine={false}
                      textCase="capitalize"
                      heading={items.title}
                    />
                    <p className="mt-3 xs:text-left text-center">
                      {items.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <BoxAnimation />
            </div>
            <div className="flex justify-center">
              <CustomButton title="Learn more" />
            </div>
          </div>
        </CustomAnimatedBorder>
      </div>
    </section>
  );
};

export default Features;

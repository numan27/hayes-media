import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomButton from "components/common/customButton";
import Image from "next/image";
import { Images } from "assets";

const OtherServices = () => {
  const otherServicesData = [Images.OtherServiceImg1, Images.OtherServiceImg2];

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <CustomSectionHeading
            centered
            heading="OUR OTHER SERVICES"
            description=""
          />
          <div
            className={classNames(
              styles.gridContainer,
              "grid sm:grid-cols-2 grid-cols-1 lg:gap-8 sm:gap-5 xs:gap-4 gap-3"
            )}
          >
            {otherServicesData.map((items: any, index) => (
              <div key={index} className={classNames(styles.gridItem)}>
                <CustomAnimatedBorder
                  gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
                  animationSpeed="5s"
                  borderRadius="8px"
                >
                  <div className={classNames(styles.content)}>
                    <div className={classNames(styles.imgContainer)}>
                      <Image src={items} alt="section-img" />
                    </div>
                    <div
                      className={classNames(
                        styles.buttonContainer,
                        "flex justify-center"
                      )}
                    >
                      <CustomButton
                        title="Get A Quote"
                        containerStyle="w-full"
                      />
                    </div>
                  </div>
                </CustomAnimatedBorder>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;

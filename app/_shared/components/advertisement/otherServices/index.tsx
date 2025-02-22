import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomButton from "components/common/customButton";
import Image from "next/image";
import { Images } from "assets";
import { routeConstant } from "routes/constants";
import Link from "next/link";

interface Service {
  img?: string | any;
  buttonAction?: string | any;
}

const OtherServices = () => {
  const otherServicesData: Service[] = [
    {
      img: Images.OtherServiceImg1,
      buttonAction: routeConstant.webMobile.path,
    },
    {
      img: "/OnlineAdsHeader.webp",
      buttonAction: routeConstant.socialMedia.path,
    },
  ];

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
            {otherServicesData.map((items, index) => (
              <div key={index} className={classNames(styles.gridItem)}>
                <CustomAnimatedBorder
                  gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
                  animationSpeed="5s"
                  borderRadius="8px"
                >
                  <div className={classNames(styles.content)}>
                    <div className={classNames(styles.imgContainer)}>
                      <Image
                        height={242}
                        width={400}
                        src={items.img}
                        className="w-full"
                        alt="section-img"
                      />
                    </div>
                    <div
                      className={classNames(
                        styles.buttonContainer,
                        "flex justify-center"
                      )}
                    >
                      <Link className="w-full" href={items.buttonAction}>
                        <CustomButton
                          title="Learn More"
                          containerStyle="w-full"
                        />
                      </Link>
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

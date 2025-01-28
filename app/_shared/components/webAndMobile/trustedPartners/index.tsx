import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomButton from "components/common/customButton";
import Image from "next/image";
import { Icons, Images } from "assets";

const TrustedPartners = () => {
  const partnersData = [
    {
      title: "Fast. Safe. Reliable.",
      data: [
        "Websites that load in under 1.5 seconds.",
        "Industry-standard security: firewalls, SSL certificates, and weekly backups.",
        "Hosting packages that guarantee 99.99% uptime.",
      ],
    },
  ];

  return (
    <section className={classNames(styles.sectionContainer)}>
      <CustomSectionHeading
        centered
        heading="Your Trusted Development Partners"
        description="Partner with us for expert mobile and web development that drives growth, enhances user engagement and delivers seamless, custom solutions."
      />
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <div
            className={classNames(
              styles.gridContainer,
              "grid sm:grid-cols-2 grid-cols-1 lg:gap-8 sm:gap-5 xs:gap-4 gap-3"
            )}
          >
            {partnersData.map((items) => (
              <div className={classNames(styles.gridItem)}>
                <CustomAnimatedBorder
                  gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
                  animationSpeed="5s"
                  borderRadius="12px"
                >
                  <div className={classNames(styles.content)}>
                    <div>
                      <h2 className="uppercase">
                        <span>{items.title}</span>
                      </h2>
                      <ul>
                        {items.data.map((data) => (
                          <li className="flex items-start gap-2 mb-1.5">
                            <span className="mt-1.5">
                              <Image src={Images.Bullet} alt="dot" />
                            </span>
                            <p>{data}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={classNames(
                        styles.buttonContainer,
                        "flex justify-center"
                      )}
                    >
                      <CustomButton
                        title="See Content Samples"
                        containerStyle=""
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

export default TrustedPartners;

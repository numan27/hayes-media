import classNames from "classnames";
import styles from "./style.module.scss";
import Image from "next/image";
import { Images } from "assets";
import CustomSectionHeading from "components/common/customSectionHeading";

const Mission = () => {
  return (
    <section className={classNames(styles.missionContainer)}>
      <div
        className={classNames(
          styles.contentWrapper,
          "h-full flex lg:flex-row flex-col lg:justify-start sm:justify-center justify-start items-center overflow-hidden"
        )}
      >
        <div className={classNames(styles.customContainer)}>
          <div
            className={classNames(
              styles.content,
              "sm:h-full h-fit sm:mb-16 mb-0 sm:mt-0 mt-24"
            )}
          >
            <CustomSectionHeading
              heading="OUR MISSION"
              description="At Hayes Media, we’re not just a digital marketing agency; we’re storytellers, vision executors, and growth hackers. Our mission is to put your brand at the center of the online world. From the cultural hub of Austin, Texas, to the farthest reaches of the online world, we’re here to amplify your voice, break barriers, and create ripples that last. Small business? Big vision? Let’s make your mission our obsession."
            />
          </div>
        </div>
        <span
          className={classNames(
            styles.missonSectionImg,
            "absolute xxl:-right-4 xl:-right-6 right-0 lg:bottom-1.5 sm:bottom-6 bottom-8"
          )}
        >
          <Image
            data-aos="fade-left"
            height={400}
            src={Images.MissionSectionImg}
            alt="mission-img"
          />
        </span>
      </div>
    </section>
  );
};

export default Mission;

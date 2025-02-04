"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSecondaryHeading from "components/common/customSecondaryHeading";
import CustomButton from "components/common/customButton";
import useWindowDimensions from "hooks/useWindowDimensions";

interface VideoSectionProps {
  title?: string | any;
  desc?: string | any;
  btnText?: string | any;
  videoSrc?: string | any;
}

const VideoSection = ({
  title,
  desc = "Online advertising can be complicated. We make it simple. Innovative targeting practices and consistent moderation turn yoursearch engine and social media advertisements into finely tuned money-making machines. Every campaign is treated as if it were our own, backed by a passion for efficiency and quality.",
  btnText = "Contact Us",
}: VideoSectionProps) => {
  const { width } = useWindowDimensions();

  return (
    <div className={classNames(styles.sectionWrapper, "")}>
      <div className={classNames(styles.customContainer, "")}>
        <div
          className={classNames(
            styles.contentContainer,
            "grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-8"
          )}
        >
          <div
            className={classNames(
              styles.videoSection,
              "flex items-center justify-center"
            )}
          >
            <h1 className="">Video</h1>
          </div>{" "}
          <div
            className={classNames(
              styles.content,
              "flex flex-col xs:items-start items-center gap-5 justify-center"
            )}
          >
            <CustomSecondaryHeading
              isHaveTopLine={false}
              size="md"
              heading={
                title
                // <>
                //   Online Advertising is {width > 768 && <br />} No Longer
                //   Optional, {width > 768 && <br />} It’s Non-Negotiable
                // </>
              }
            />
            <p>{desc}</p>
            <CustomButton title={btnText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

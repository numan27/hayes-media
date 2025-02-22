"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSecondaryHeading from "components/common/customSecondaryHeading";
import CustomButton from "components/common/customButton";
import useWindowDimensions from "hooks/useWindowDimensions";
import BannerVideo from "./banner-video";

interface VideoSectionProps {
  title?: string | any;
  desc?: string | any;
  btnText?: string | any;
  buttonAction?: string | any;
  videoSrc?: string | any;
}

const VideoSection = ({
  title,
  desc = "Online advertising can be complicated. We make it simple. Innovative targeting practices and consistent moderation turn yoursearch engine and social media advertisements into finely tuned money-making machines. Every campaign is treated as if it were our own, backed by a passion for efficiency and quality.",
  btnText = "Contact Us",
  buttonAction,
  videoSrc = "/SocialMediaCube1.mp4",
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
          {/* <div className="h-full w-full"> */}
          <BannerVideo
            videoSrc={videoSrc}
            thumbnailSrc="/hero-banner.png"
            alt="Sample Video Thumbnail"
          />
          {/* </div>{" "} */}
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
            <CustomButton title={btnText} onClick={buttonAction} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSecondaryHeading from "components/common/customSecondaryHeading";
import CustomButton from "components/common/customButton";

const VideoSection = () => {
  return (
    <div className={classNames(styles.sectionWrapper, "")}>
      <div className={classNames(styles.customContainer, "")}>
        <div
          className={classNames(
            styles.contentContainer,
            "grid grid-cols-2 gap-16"
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
              "flex flex-col items-start gap-5"
            )}
          >
            <CustomSecondaryHeading
              size="large"
              heading={
                <>
                  Online Advertising is <br /> No Longer Optional, <br /> It’s
                  Non-Negotiable
                </>
              }
            />
            <p>
              Online advertising can be complicated. We make it simple.
              Innovative targeting practices and consistent moderation turn your
              search engine and social media advertisements into finely tuned
              money-making machines. Every campaign is treated as if it were our
              own, backed by a passion for efficiency and quality.
            </p>
            <CustomButton title="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

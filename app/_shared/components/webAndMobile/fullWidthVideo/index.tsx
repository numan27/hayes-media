import classNames from "classnames";
import styles from "./style.module.scss";
import BannerVideo from "components/home/heroBanner/banner-video";

const FullWidthVideo = () => {
  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <BannerVideo videoSrc="/WebsiteAnimation2Updated.webm" />
        </div>
      </div>
    </section>
  );
};

export default FullWidthVideo;

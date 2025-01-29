import HeroBanner from "./heroBanner";
import classNames from "classnames";
import styles from "./style.module.scss";
import Image from "next/image";
import { Images } from "assets";
import Mission from "./mission";
import Services from "./services";
import ServicesDetail from "./services-detail";
import CeoMessage from "./ceoMessage";
import Methodology from "./methodology";
import TeamSection from "./teamReviewSection";
import Blogs from "./blogs";
import Newsletter from "./newsletter";
import GetStartedCall from "./getStartedCall";
import Portfolio from "./portfolio";

const LandingPage = () => {
  const brands = [
    Images.BrandLogo,
    Images.BrandLogo,
    Images.BrandLogo,
    Images.BrandLogo,
    Images.BrandLogo,
    Images.BrandLogo,
    Images.BrandLogo,
    Images.BrandLogo,
  ];

  return (
    <div className={classNames(styles.homeWrapper)}>
      <HeroBanner brandImagesData={brands} />
      <Mission />
      <Services />
      <ServicesDetail />
      <Portfolio />
      <GetStartedCall />
      <CeoMessage />
      <Methodology />
      <TeamSection />
      <Blogs />
      <div className={classNames(styles.newsletterWrapper, "relative")}>
        <div
          className={classNames(styles.bg, "absolute -top-12 left-0 right-0")}
        >
          <Image src={Images.NewsLetterBg} alt="bg-img" />
        </div>
        <Newsletter />
      </div>

      {/* <div className={classNames(styles.backShadow)}>
        <Image src={Images.BackShadow} alt="" />
      </div> */}
    </div>
  );
};

export default LandingPage;

import HeroBanner from "./heroBanner";
import classNames from "classnames";
import styles from "./style.module.scss";
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
import GetQuote from "components/advertisement/getQuote";

const LandingPage = () => {
  const brands = [
    Images.ClientReview1,
    Images.ClientReview2,
    Images.ClientReview3,
    Images.BrandLogo3,
    Images.BrandLogo,
    Images.HFOBrandLogo,
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
      <GetQuote />
      <Newsletter />

      {/* <div className={classNames(styles.backShadow)}>
        <Image src={Images.BackShadow} alt="" />
      </div> */}
    </div>
  );
};

export default LandingPage;

import { Images } from "assets";
import GetStartedCall from "components/home/getStartedCall";
import HeroBanner from "components/home/heroBanner";
import Newsletter from "components/home/newsletter";
import Portfolio from "components/home/portfolio";
import TeamSection from "components/home/teamReviewSection";
import GetQuote from "components/advertisement/getQuote";
import Stats from "components/advertisement/stats";
import VideoSection from "components/advertisement/videoSection";
import MobileSlider from "components/webAndMobile/mobileSlider";
import TargetSection from "components/webAndMobile/targetSection";
import TrustedPartners from "components/webAndMobile/trustedPartners";

const WebDevelopment = () => {
  const brands = [
    Images.WebBrand1,
    Images.WebBrand2,
    Images.WebBrand3,
    Images.WebBrand4,
    Images.WebBrand5,
    Images.WebBrand6,
  ];

  return (
    <div>
      <HeroBanner
        title={
          <>
            <span>
              Building Smarter Web and Mobile Experiences for Global Impact
            </span>
          </>
        }
        desc="Hayes Media is an Austin-based web and mobile app company that specializes in creating custom web and mobile app solutions, blending creativity, innovation, and performance. From sleek websites to powerful apps, let’s build something extraordinary together."
        brandImagesData={brands}
        btnTitle="Get Started Today"
        brandsHeading="Programs we work with"
      />
      <VideoSection
        videoSrc="/WebsiteAnimation2.mp4"
        title="Cutting-Edge Web & App Development Solutions for Your Digital Success"
      />
      <TrustedPartners />
      <MobileSlider />
      <TargetSection />
      <Stats />
      <Portfolio />
      <GetStartedCall />
      <TeamSection />
      <GetQuote />
      <Newsletter />
    </div>
  );
};

export default WebDevelopment;

import { Images } from "assets";
import FAQs from "components/home/faqs";
import GetStartedCall from "components/home/getStartedCall";
import HeroBanner from "components/home/heroBanner";
import TeamSection from "components/home/teamReviewSection";
import Features from "components/serviceDetails/featuresSection";
import GetQuote from "components/serviceDetails/getQuote";
import OtherServices from "components/serviceDetails/otherServices";
import Stats from "components/serviceDetails/stats";
import VideoSection from "components/serviceDetails/videoSection";

const SocialMedia = () => {
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
    <div>
      <HeroBanner
        title={
          <>
            <span>Become the authority with social media management.</span>
          </>
        }
        desc="Hayes Media, an Austin-based agency, specializes in targeted online ad campaigns that help you reach the right audience at the right time and at the right place. From search to social."
        brandImagesData={brands}
        btnTitle="Start Growing Today"
      />
      <VideoSection />
      <Features />
      <Stats />
      <GetStartedCall />
      <TeamSection />
      <OtherServices />
      <GetQuote />
      <FAQs />
    </div>
  );
};

export default SocialMedia;

import { Images } from "assets";
import FAQs from "components/home/faqs";
import GetStartedCall from "components/home/getStartedCall";
import HeroBanner from "components/home/heroBanner";
import TeamSection from "components/home/teamReviewSection";
import Features from "components/serviceDetails/featuresSection";
import Stats from "components/serviceDetails/stats";
import VideoSection from "components/serviceDetails/videoSection";

const ServiceDetails = () => {
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
        contentIcon
        title={
          <>
            <span>more leads at a lower price with online ads.</span>
          </>
        }
        desc="Hayes Media, an Austin-based agency, specializes in targeted online ad campaigns that help you reach the right audience at the right time and at the right place. From search to social."
        brandImagesData={brands}
      />
      <VideoSection />
      <Features />
      <Stats />
      <GetStartedCall />
      <TeamSection />
      <h1>Other Service</h1>
      <h1>Get a Quote</h1>
      <FAQs />
    </div>
  );
};

export default ServiceDetails;

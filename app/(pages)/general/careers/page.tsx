import { Images } from "assets";
import CoreValues from "components/about/coreValues";
import GetStartedCall from "components/home/getStartedCall";
import HeroBanner from "components/home/heroBanner";
import Newsletter from "components/home/newsletter";
import Portfolio from "components/home/portfolio";
import TeamSection from "components/home/teamReviewSection";
import GetQuote from "components/advertisement/getQuote";
import Stats from "components/advertisement/stats";
import VideoSection from "components/advertisement/videoSection";
import EmotionalIntelligence from "components/about/emotionalIntelligence";
import ClientsSlider from "components/about/clientsSlider";
import MeetTheFounder from "components/about/meetTheFounder";
import Jobs from "components/careers/jobs";
import OurTeam from "components/careers/ourTeam";
import CareersCTA from "components/careers/careersCta";

const Careers = () => {
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
            <span>Join the most incredible & creative team.</span>
          </>
        }
        desc="Hayes Media was founded by James Hayes in 2019. With a passion for entrepreneurialism and creative content. James honed his talents in content creation, social media marketing, and, most importantly, getting things done. Through his endeavors, he gathered a team of talented entrepreneurs and directed their brilliance towards a single mission: create viral content that sells. And so, Hayes Media was born."
        brandImagesData={brands}
        btnTitle="View Open Positions"
      />
      <Jobs />
      <OurTeam />
      <CareersCTA />
      <GetQuote />
      <Newsletter />
    </div>
  );
};

export default Careers;

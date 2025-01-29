import { Images } from "assets";
import GetStartedCall from "components/home/getStartedCall";
import HeroBanner from "components/home/heroBanner";
import Newsletter from "components/home/newsletter";
import Portfolio from "components/home/portfolio";
import TeamSection from "components/home/teamReviewSection";
import GetQuote from "components/serviceDetails/getQuote";
import Stats from "components/serviceDetails/stats";
import VideoSection from "components/serviceDetails/videoSection";
import MobileSlider from "components/webAndMobile/mobileSlider";
import TargetSection from "components/webAndMobile/targetSection";
import TrustedPartners from "components/webAndMobile/trustedPartners";

const WebMobile = () => {
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

  const servicesData = [
    {
      title: "Tailored Social Media Management Strategy",
      desc: "Our team of experts in Austin, Texas will create a custom plan to fit your business and industry. With a fully developed website ready for online advertisements and social media content to support, this is the full package for every business.",
    },
    {
      title: "Engaging Content Creation and Posting",
      desc: "Your website isn’t just a page, it’s your stage. We are among the top marketing agencies in Austin that craft designs that don’t just tell your story but sing it. We design websites that charm, inform, and convert. With cutting-edge designs and effortless navigation, your customers won’t just visit, they’ll stay.",
    },
    {
      title: "Community Driven Optimization",
      desc: "Directly invest in your sales without breaking the bank. We are Austin’s PPC experts for Facebook, Instagram, Google, LinkedIn, and more. Expertly crafted funnels, online campaigns, re-targeting campaigns, and landing pages that cost a fraction of what other agencies can buy.",
    },
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
        desc="HHayes Media is an Austin-based web and mobile app company that specializes in creating custom web and mobile app solutions, blending creativity, innovation, and performance. From sleek websites to powerful apps, let’s build something extraordinary together."
        brandImagesData={brands}
        btnTitle="Get Started Today"
        brandsHeading="Programs we work with"
      />
      <VideoSection title="Cutting-Edge Web & App Development Solutions for Your Digital Success" />
      <TrustedPartners />
      <MobileSlider />
      <TargetSection />
      <Stats />
      <Portfolio />
      <GetStartedCall />
      <TeamSection />
      <Newsletter />
      <GetQuote />
    </div>
  );
};

export default WebMobile;

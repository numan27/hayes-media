import { Images } from "assets";
import CoreValues from "components/about/coreValues";
import GetStartedCall from "components/home/getStartedCall";
import HeroBanner from "components/home/heroBanner";
import Newsletter from "components/home/newsletter";
import Portfolio from "components/home/portfolio";
import ServicesDetail from "components/home/services-detail";
import TeamSection from "components/home/teamReviewSection";
import GetQuote from "components/serviceDetails/getQuote";
import Stats from "components/serviceDetails/stats";
import VideoSection from "components/serviceDetails/videoSection";
import InnovationSection from "components/socialMedia/innovationSection";
import SocialMediaScope from "components/socialMedia/socialMediaScope";

const About = () => {
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
            <span>Get To Know ABOUT HAYES MEDIA</span>
          </>
        }
        desc="Hayes Media was founded by James Hayes in 2019. With a passion for entrepreneurialism and creative content. James honed his talents in content creation, social media marketing, and, most importantly, getting things done. Through his endeavors, he gathered a team of talented entrepreneurs and directed their brilliance towards a single mission: create viral content that sells. And so, Hayes Media was born."
        brandImagesData={brands}
        btnTitle="Get Started Today"
      />
      <VideoSection
        title="Our Vision"
        desc="At Hayes Media, we’re reshaping how marketing is done. We believe marketing can be both entertaining and impactful. Why settle for dull, forgettable ads when every campaign could feel like a Super Bowl commercial? We’re building a culture where every piece of content engages, inspires, and delivers results. Businesses embracing this philosophy will thrive in the long run, and we’re here to make that happen"
        btnText="Get Started Today"
      />
      <CoreValues />
      <Stats />
      <Portfolio />
      <GetStartedCall />
      <TeamSection />
      <Newsletter />
      <GetQuote />
    </div>
  );
};

export default About;

"use client";

import { Images } from "assets";
import GetStartedCall from "components/home/getStartedCall";
import HeroBanner from "components/home/heroBanner";
import Newsletter from "components/home/newsletter";
import Portfolio from "components/home/portfolio";
import ServicesDetail from "components/home/services-detail";
import TeamSection from "components/home/teamReviewSection";
import GetQuote from "components/advertisement/getQuote";
import Stats from "components/advertisement/stats";
import VideoSection from "components/advertisement/videoSection";
import InnovationSection from "components/socialMedia/innovationSection";
import SocialMediaScope from "components/socialMedia/socialMediaScope";
import useWindowDimensions from "hooks/useWindowDimensions";

const SocialMedia = () => {
  const { width } = useWindowDimensions();
  const brands = [
    Images.ClientReview1,
    Images.ClientReview2,
    Images.ClientReview3,
    Images.BrandLogo3,
    Images.BrandLogo,
  ];

  const servicesData = [
    {
      title: "Tailored Social Media Management Strategy",
      desc: "We begin by understanding your unique business goals and audience to create a custom social media plan that aligns with your vision so that things work as per your set strategies.",
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
            <span>Become the authority with social media management.</span>
          </>
        }
        desc="Hayes Media, an Austin-based agency, specializes in targeted online ad campaigns that help you reach the right audience at the right time and at the right place. From search to social."
        brandImagesData={brands}
        btnTitle="Start Growing Today"
      />
      <SocialMediaScope />
      <VideoSection
        title={<>The Power of Social {width > 992 && <br />} Media Marketing</>}
        desc={
          <>
            When using our social media marketing services, there may be moments
            when you want to grow even faster. So we constantly test aspects of
            our strategy to expand on what your audience engages and responds
            to.
            <br />
            Our proven strategy lays the foundation for growth while optimizing
            audience trust to drive purchases. We refine even the smallest
            details to build strong relationships with your clients.
          </>
        }
      />
      <ServicesDetail servicesData={servicesData} isHaveHeading />
      <InnovationSection />
      <Stats />
      <Portfolio />
      <GetStartedCall />
      <TeamSection />
      <GetQuote />
      <Newsletter />
    </div>
  );
};

export default SocialMedia;

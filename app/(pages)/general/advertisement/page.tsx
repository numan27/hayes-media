"use client";
import { Images } from "assets";
import FAQs from "components/home/faqs";
import GetStartedCall from "components/home/getStartedCall";
import HeroBanner from "components/home/heroBanner";
import Portfolio from "components/home/portfolio";
import TeamSection from "components/home/teamReviewSection";
import Features from "components/advertisement/featuresSection";
import GetQuote from "components/advertisement/getQuote";
import OtherServices from "components/advertisement/otherServices";
import Stats from "components/advertisement/stats";
import VideoSection from "components/advertisement/videoSection";
import useWindowDimensions from "hooks/useWindowDimensions";

const ServiceDetails = () => {
  const { width } = useWindowDimensions();
  const brands = [
    Images.AdvertisementBrand1,
    Images.AdvertisementBrand2,
    Images.AdvertisementBrand3,
    Images.AdvertisementBrand4,
    Images.AdvertisementBrand5,
    Images.AdvertisementBrand6,
    Images.AdvertisementBrand7,
    Images.AdvertisementBrand8,
  ];

  return (
    <div>
      <HeroBanner
        contentIcon
        title={
          <>
            <span>more leads at a lower price with online ads</span>
          </>
        }
        desc="Hayes Media, an Austin-based agency, specializes in targeted online ad campaigns that help you reach the right audience at the right time and at the right place. From search to social."
        brandImagesData={brands}
        brandsHeading="Platforms we work with"
      />
      <VideoSection
        title={
          <>
            Online Advertising is No Longer Optional, {width > 992 && <br />}{" "}
            It’s Non-Negotiable{" "}
          </>
        }
        videoSrc="/WebsitePageH1Updated.webm"
      />
      <Features />
      <Stats />
      <Portfolio />
      <GetStartedCall />
      <TeamSection />
      <OtherServices />
      <GetQuote />
      <FAQs />
    </div>
  );
};

export default ServiceDetails;

import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import CustomButton from "components/common/customButton";
import Image from "next/image";
import CustomArrowHeading from "components/common/customArrowHeading";
import CustomSectionHeading from "components/common/customSectionHeading";
import BannerVideo from "../heroBanner/banner-video";

interface Service {
  title: string;
  desc: string;
  buttonText: string;
  videoSrc?: string;
}
interface SectionHeadingProps {
  isHaveHeading?: boolean;
  servicesData?: Service[];
}

const ServicesDetail = ({
  isHaveHeading,
  servicesData,
}: SectionHeadingProps) => {
  const defaultServicesData: Service[] = [
    {
      videoSrc: "",
      title: "Full-Stack Digital Marketing",
      desc: "Our team of experts in Austin, Texas will create a custom plan to fit your business and industry. With a fully developed website ready for online advertisements and social media content to support, this is the full package for every business.",
      buttonText: "Get A quote",
    },
    {
      videoSrc: "/WebsiteAnimation2.mp4",
      title: "Website Design & Development",
      desc: "Your website isn’t just a page, it’s your stage. We are among the top marketing agencies in Austin that craft designs that don’t just tell your story but sing it. We design websites that charm, inform, and convert. With cutting-edge designs and effortless navigation, your customers won’t just visit, they’ll stay.",
      buttonText: "Get A quote",
    },
    {
      videoSrc: "",
      title: "Online Advertising",
      desc: "Directly invest in your sales without breaking the bank. We are Austin’s PPC experts for Facebook, Instagram, Google, LinkedIn, and more. Expertly crafted funnels, online campaigns, re-targeting campaigns, and landing pages that cost a fraction of what other agencies can buy.",
      buttonText: "Get A quote",
    },
    {
      videoSrc: "/SocialMediaCube1.mp4",
      title: "Social Media Management",
      desc: "Content is king. Our talented content creators from Austin know the best times to deliver content to your audiences on every channel with quality branded content that gets the conversation started about your business.",
      buttonText: "Get A quote",
    },
  ];
  const dataToRender = servicesData ?? defaultServicesData;

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        {isHaveHeading && (
          <div>
            <CustomSectionHeading
              centered
              heading="Here’s Our Distinct Advantage"
              description="At Hayes Media, we follow a proven 3-step process designed to
              streamline your social media strategy, increase brand awareness,
              and drive growth."
            />
          </div>
        )}
        <div className={classNames(styles.contentWrapper)}>
          <div className={classNames(styles.gridContainer)}>
            {dataToRender.map((item, index) => (
              <div
                key={index}
                className={classNames(
                  styles.gridItem,
                  "h-full",
                  index % 2 === 0 && styles.reverse
                )}
              >
                <div className={classNames(styles.videoContainer)}>
                  {item?.videoSrc ? (
                    <BannerVideo videoSrc={item.videoSrc} />
                  ) : (
                    <Image
                      data-aos="zoom-out"
                      src={Images.GradientPlaceholder}
                      alt={item.title}
                      className="rounded-lg"
                    />
                  )}
                </div>

                <div
                  className={classNames(
                    styles.content,
                    "flex flex-col items-start relative"
                  )}
                >
                  <span
                    className={classNames(
                      "absolute",
                      index % 2 === 0
                        ? "top-0 left-3"
                        : "bottom-0 right-2 scale-x-[-1]"
                    )}
                  >
                    <Image
                      // width={120}
                      // height={42}
                      src={Images.BackQuote}
                      alt="quote-icon"
                    />
                    {/* <Icons.BackQuoteMark /> */}
                  </span>

                  <div className="mb-12">
                    <CustomArrowHeading
                      number={index + 1}
                      heading={item.title}
                    />
                  </div>
                  <p>{item.desc}</p>
                  <CustomButton
                    data-aos="zoom-out"
                    title={item.buttonText}
                    containerStyle="mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;

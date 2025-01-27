import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import Image from "next/image";
import CustomArrowHeading from "components/common/customArrowHeading";

const ServicesDetail = () => {
  const servicesData = [
    {
      icon: Images.ServiceIcon1,
      title: "Full-Stack Digital Marketing",
      desc: "Our team of experts in Austin, Texas will create a custom plan to fit your business and industry. With a fully developed website ready for online advertisements and social media content to support, this is the full package for every business.",
    },
    {
      icon: Images.ServiceIcon2,
      title: "Website Design & Development",
      desc: "Your website isn’t just a page, it’s your stage. We are among the top marketing agencies in Austin that craft designs that don’t just tell your story but sing it. We design websites that charm, inform, and convert. With cutting-edge designs and effortless navigation, your customers won’t just visit, they’ll stay.",
    },
    {
      icon: Images.ServiceIcon3,
      title: "Online Advertising",
      desc: "Directly invest in your sales without breaking the bank. We are Austin’s PPC experts for Facebook, Instagram, Google, LinkedIn, and more. Expertly crafted funnels, online campaigns, re-targeting campaigns, and landing pages that cost a fraction of what other agencies can buy.",
    },
    {
      icon: Images.ServiceIcon4,
      title: "Social Media Management",
      desc: "Content is king. Our talented content creators from Austin know the best times to deliver content to your audiences on every channel with quality branded content that gets the conversation started about your business.",
    },
  ];

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <div className={classNames(styles.gridContainer)}>
            {servicesData.map((item, index) => (
              <div
                key={index}
                className={classNames(
                  styles.gridItem,
                  "h-full",
                  index % 2 === 0 && styles.reverse
                )}
              >
                <div className={classNames(styles.imgContainer)}>
                  <Image
                    data-aos="zoom-out"
                    src={Images.GradientPlaceholder}
                    alt={item.title}
                    className="rounded-lg"
                  />
                </div>

                <div
                  className={classNames(
                    styles.content,
                    "flex flex-col items-start"
                  )}
                >
                  <div className="mb-12">
                    <CustomArrowHeading
                      number={index + 1}
                      heading={item.title}
                    />
                  </div>
                  <p>{item.desc}</p>
                  <CustomButton
                    data-aos="zoom-out"
                    title="Get A Quote"
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

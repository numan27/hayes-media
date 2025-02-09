import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomButton from "components/common/customButton";
import Image from "next/image";
import Link from "next/link";
import { routeConstant } from "routes/constants";

const Services = () => {
  const servicesData = [
    {
      // icon: <Icons.ServiceIcon1 />,
      icon: Images.ServiceIcon1,
      title: "Online Advertising",
      desc: "Our white-glove premium service, customized to each client that includes all of our services.",
      path: routeConstant.advertisement.path,
    },
    {
      icon: Images.ServiceIcon2,
      // icon: <Icons.ServiceIcon2 />,
      title: "Branding",
      desc: "More than just logos, this is your vibe, your story, your reason why. We’ll make it irresistible",
      path: routeConstant.advertisement.path,
    },
    {
      icon: Images.ServiceIcon3,
      // icon: <Icons.ServiceIcon3 />,
      title: "Web & Mobile Development",
      desc: "It’s not just a website. It’s a digital storefront that looks great, runs fast, and is optimized for your audience's experience",
      path: routeConstant.webMobile.path,
    },
    {
      icon: Images.ServiceIcon4,
      // icon: <Icons.ServiceIcon4 />,
      title: "Social Media Management",
      desc: "Share worthy content that gets the conversation started with your audience.",
      path: routeConstant.socialMedia.path,
    },
    {
      icon: Images.ServiceIcon5,
      // icon: <Icons.ServiceIcon5 />,
      title: "SEO",
      desc: "The secret science to being seen. We’ll help you climb to the top  of search engines and stay there.",
      path: routeConstant.advertisement.path,
    },
    {
      icon: Images.ServiceIcon6,
      // icon: <Icons.ServiceIcon6 />,
      title: "Intake Consultation",
      desc: "The best of the best when it comes to managing your leads, closing sales, and high retention rates.",
      path: routeConstant.socialMedia.path,
    },
  ];

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <CustomAnimatedBorder
          gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
          animationSpeed="5s"
          borderRadius="8px"
        >
          <div className={classNames(styles.contentWrapper)}>
            <CustomSectionHeading
              centered
              heading="OUR SERVICES"
              description="Your business deserves more than a cookie-cutter approach. This is where our marketing consultants in Austin craft unforgettable digital experiences that inspire conversions, spark loyalty and leave your customers satisfied."
            />
            <div
              className={classNames(
                styles.gridContainer,
                "grid lg:grid-cols-3 sm:grid-cols-2 gap-5"
              )}
            >
              {servicesData.map((items, index) => (
                <CustomAnimatedBorder
                  gradientColors="linear-gradient(270deg, #EC1E24 0%, #141212 50%, #902880 100%)"
                  animationSpeed="6s"
                  borderRadius="8px"
                >
                  <div key={index} className={classNames(styles.gridItem)}>
                    <div className="flex flex-col gap-3 xs:items-start items-center">
                      <span className={classNames(styles.iconContainer)}>
                        {/* {items.icon} */}
                        <Image
                          height={48}
                          width={48}
                          // @ts-ignore
                          src={items.icon}
                          alt="icon"
                        />
                      </span>
                      <h4>{items.title}</h4>
                      <p>{items.desc}</p>
                      <Link href={items.path}>
                        <CustomButton
                          title="More Details"
                          containerStyle="mt-3"
                        />
                      </Link>
                    </div>
                  </div>
                </CustomAnimatedBorder>
              ))}
            </div>

            {/* <div className={classNames(styles.linkContainer)}>
              <Link href="">See All</Link>
            </div> */}
          </div>
        </CustomAnimatedBorder>
      </div>
    </section>
  );
};

export default Services;

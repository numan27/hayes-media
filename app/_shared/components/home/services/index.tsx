import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomButton from "components/common/customButton";
import Image from "next/image";
import Link from "next/link";
import { routeConstant } from "routes/constants";

const Services = () => {
  const servicesData = [
    {
      icon: Images.ServiceIcon1,
      title: "Full-Stack Digital Marketing",
      desc: "Lorem ipsum is a simply dummy text.Lorem ipsum is a simply dummy text.",
      path: routeConstant.advertisement.path,
    },
    {
      icon: Images.ServiceIcon2,
      title: "Social Media",
      desc: "Lorem ipsum is a simply dummy text.Lorem ipsum is a simply dummy text.",
      path: routeConstant.socialMedia.path,
    },
    {
      icon: Images.ServiceIcon3,
      title: "Web Development",
      desc: "Lorem ipsum is a simply dummy text.Lorem ipsum is a simply dummy text.",
      path: routeConstant.webMobile.path,
    },
    {
      icon: Images.ServiceIcon4,
      title: "Mobile App Development",
      desc: "Lorem ipsum is a simply dummy text.Lorem ipsum is a simply dummy text.",
      path: routeConstant.socialMedia.path,
    },
    {
      icon: Images.ServiceIcon5,
      title: "SEO",
      desc: "Lorem ipsum is a simply dummy text.Lorem ipsum is a simply dummy text.",
      path: routeConstant.advertisement.path,
    },
    {
      icon: Images.ServiceIcon6,
      title: "Intake Consultation",
      desc: "Lorem ipsum is a simply dummy text.Lorem ipsum is a simply dummy text.",
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
                    <div className="flex flex-col gap-3 items-start">
                      <span className={classNames(styles.iconContainer)}>
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

            <div className={classNames(styles.linkContainer)}>
              <Link href="">See All</Link>
            </div>
          </div>
        </CustomAnimatedBorder>
      </div>
    </section>
  );
};

export default Services;

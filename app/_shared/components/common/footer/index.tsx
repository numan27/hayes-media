import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { Icons, Images } from "assets";
import { routeConstant } from "routes/constants";
import useWindowDimensions from "hooks/useWindowDimensions";

const Footer = () => {
  const { width } = useWindowDimensions();
  const socialLink = [
    {
      icon: <Icons.Facebook />,
      link: "https://www.facebook.com/hayesmediahtx",
    },
    {
      icon: <Icons.LinkedIn />,
      link: "https://www.linkedin.com/company/hayesmedia/",
    },
    { icon: <Icons.Twitter />, link: "https://x.com/HayesMediaHTX" },
    {
      icon: <Icons.Youtube />,
      link: "https://www.youtube.com/@hayesmedia5639",
    },
  ];

  const footerLinks = [
    {
      heading: "About Us",
      links: [
        { title: "About Us", path: routeConstant.about.path },
        { title: "Careers", path: routeConstant.careers.path },
        { title: "Privacy Policy", path: "" },
        { title: "Terms of Services", path: "" },
      ],
    },
    {
      heading: "Services",
      links: [
        {
          title: "Full-Stack Digital Marketing",
          path: routeConstant.advertisement.path,
        },
        { title: "Web Development", path: routeConstant.webMobile.path },
        {
          title: "Social Media Management",
          path: routeConstant.socialMedia.path,
        },
        { title: "Branding", path: "" },
        // { title: "SEO", path: "" },
        // { title: "Intake Consultation", path: "" },
      ],
    },
  ];

  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles.customContainer, "h-full")}>
        <div className="grid grid-cols-12 lg:gap-6 md:gap-4 gap-8 h-full">
          <div
            className={classNames(
              styles.logoContainer,
              "lg:col-span-3 md:col-span-2 col-span-12 flex items-center md:justify-start justify-center"
            )}
          >
            <Image
              data-aos={width > 768 && "flip-right"}
              className={classNames(styles.logo)}
              width={150}
              height={150}
              src={Images.Logo}
              alt="logo"
            />
          </div>

          {/* Footer Links */}
          <div className="md:col-span-6 col-span-12 flex justify-around">
            <div className="grid grid-cols-2 gap-16">
              {footerLinks.map((items, index) => (
                <div className="flex md:justify-end justify-center">
                  <div key={index} className="flex flex-col lg:gap-4 gap-2">
                    <h5 className="font-semibold">{items.heading}</h5>
                    <ul
                      className={classNames(
                        styles.menus,
                        "flex flex-col lg:gap-3 gap-1.5"
                      )}
                    >
                      {items.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.path || "#"}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 md:col-span-4 col-span-12 flex md:justify-end justify-center items-center md:mb-0 mb-5">
            <div className="flex flex-col gap-4">
              <h4
                className={classNames(
                  styles.socialHeading,
                  "text-white md:text-left text-center"
                )}
              >
                Follow us on
              </h4>
              <div
                className={classNames(
                  styles.socialContainer,
                  "flex items-center gap-2 md:justify-start justify-center"
                )}
              >
                {socialLink.map((item, index) => (
                  <Link href={item.link}>
                    <span key={index} className={classNames(styles.socialItem)}>
                      {item.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={classNames(
            styles.copyright,
            "mt-3 flex items-center justify-center"
          )}
        >
          <p>© 2025 Hayes Media Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

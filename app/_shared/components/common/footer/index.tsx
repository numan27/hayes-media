import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";
import { headerLinks } from "utils/constants";
import Image from "next/image";
import { Icons, Images } from "assets";

const Footer = () => {
  const socialLink = [
    <Icons.Instagram />,
    <Icons.Facebook />,
    <Icons.Twitter />,
    <Icons.Youtube />,
  ];

  const footerLinks = [
    {
      heading: "About Us",
      links: [
        { title: "About", path: "" },
        { title: "Careers", path: "" },
        { title: "Privacy Policy", path: "" },
        { title: "Terms of Services", path: "" },
      ],
    },
    {
      heading: "Services",
      links: [
        { title: "Lorem Ipsum", path: "" },
        { title: "Lorem Ipsum", path: "" },
        { title: "Lorem Ipsum", path: "" },
        { title: "Lorem Ipsum", path: "" },
      ],
    },
    {
      heading: "Learn",
      links: [
        { title: "Lorem Ipsum", path: "" },
        { title: "Lorem Ipsum", path: "" },
        { title: "Lorem Ipsum", path: "" },
        { title: "Lorem Ipsum", path: "" },
      ],
    },
  ];

  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles.customContainer, "h-full")}>
        <div className="grid grid-cols-12 lg:gap-6 gap-4 h-full">
          <div
            className={classNames(
              styles.footer__copyright,
              "md:col-span-4 order-2 md:order-1 col-span-12"
            )}
          >
            <div className="flex flex-col md:items-start items-center gap-3">
              <Image
                data-aos="flip-right"
                className={classNames(styles.logo)}
                width={125}
                height={125}
                src={Images.Logo}
                alt="logo"
              />
              <div
                className={classNames(
                  styles.socialContainer,
                  "flex items-center gap-2 justify-start"
                )}
              >
                {socialLink.map((item, index) => (
                  <span key={index} className={classNames(styles.socialItem)}>
                    {item}
                  </span>
                ))}
              </div>
              <p className={classNames(styles.copyright)}>
                © 2025 Hayes Media Inc. All rights reserved.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-8 md:order-2 order-1 col-span-12">
            <div className="grid grid-cols-3 gap-3">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;

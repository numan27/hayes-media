import classNames from "classnames";
import GetQuote from "components/advertisement/getQuote";
import styles from "./style.module.scss";
import Image from "next/image";
import { Icons, Images } from "assets";
import Link from "next/link";

const Contact = () => {
  const socialIcons = [
    { icon: <Icons.Instagram />, link: "" },
    { icon: <Icons.Facebook />, link: "" },
    { icon: <Icons.LinkedIn />, link: "" },
    { icon: <Icons.Twitter />, link: "" },
    { icon: <Icons.Youtube />, link: "" },
  ];

  return (
    <div
      className={classNames(styles.pageWrapper, "min-h-screen h-full relative")}
    >
      <div className={classNames(styles.customContainer)}>
        <section
          className={classNames(
            styles.heroSection,
            "flex flex-col justify-center h-full z-50 md:gap-10 sm:gap-16 xs:gap-8 gap-4"
          )}
        >
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-16 xs:gap-8 gap-4">
            <div className="flex flex-col sm:items-start items-center justify-center sm:gap-5 xs:gap-3 gap-2">
              <h2>
                <span>CONTACT US</span>
              </h2>
              <p>Lorem ipsum is a simply dummy text</p>
            </div>

            <div>
              <Image src={Images.ContactMap} alt="map" />
            </div>
          </div>

          <div className="">
            <h6 className="text-left">Follow us on</h6>
            <div
              className={classNames(
                styles.contactDetailsContainer,
                "flex items-center flex-wrap lg:gap-8 sm:gap-5 gap-3 z-40"
              )}
            >
              <div
                className={classNames(
                  styles.socialIconsContainer,
                  "md:border-r border-[#C2C2C2] md:h-20 flex"
                )}
              >
                <div
                  className={classNames(
                    styles.socialIcons,
                    "flex items-center xs:gap-4 gap-3 lg:pr-8 pr-5"
                  )}
                >
                  {socialIcons.map((items, index) => (
                    <Link key={index} href="">
                      <div className={classNames(styles.iconContainer)}>
                        {items.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div
                className={classNames(
                  styles.contactIconContainer,
                  "flex items-center justify-center gap-4 md:border-r lg:pr-8 pr-5 border-[#C2C2C2] lg:h-20 h-16"
                )}
              >
                <span>
                  <Icons.PhoneIcon />
                </span>
                <p>+94 4444 5555 6</p>
              </div>
              <div
                className={classNames(
                  styles.contactIconContainer,
                  "flex items-center justify-center gap-4"
                )}
              >
                <span>
                  <Image
                    width={25}
                    height={32}
                    src={Images.LocationPin}
                    alt="icon"
                  />
                </span>
                <p>Lorem ipsum is dummy text</p>
              </div>
            </div>
          </div>
        </section>
        <GetQuote />
      </div>
      {/* <span className="absolute -left-48 top-12 z-10">
        <Image width={200} src={Images.BackShadow} alt="back-shadow" />
      </span> */}
      <span className="absolute right-0 top-12 z-10 transform rotate-180">
        <Image width={250} src={Images.BackShadow} alt="back-shadow" />
      </span>
    </div>
  );
};

export default Contact;

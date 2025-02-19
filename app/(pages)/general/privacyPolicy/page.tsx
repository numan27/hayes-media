import classNames from "classnames";
import GetQuote from "components/advertisement/getQuote";
import styles from "./style.module.scss";
import Image from "next/image";
import { Icons, Images } from "assets";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div
      className={classNames(styles.pageWrapper, "min-h-screen h-full relative")}
    >
      <div className={classNames(styles.customContainer)}>
        <section
          className={classNames(
            styles.heroSection,
            "flex flex-col justify-center h-full z-50 md:gap-10 sm:gap-16 xs:gap-8 gap-4 shadow"
          )}
        >
          <div className="">
            <div className="flex flex-col items-center justify-center sm:gap-5 xs:gap-3 gap-2">
              <h2>
                <span>Privacy Policy</span>
              </h2>
              <p className="md:w-7/12 xs:w-8/12 mx-auto">
                We are committed to protecting your personal information and
                ensuring transparency in how we collect, use, and safeguard your
                data. Read our Privacy Policy to learn more about your rights,
                our data practices, and how we keep your information secure
              </p>
            </div>
          </div>
        </section>

        <div className={classNames(styles.contentWrapper)}></div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

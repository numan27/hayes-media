import classNames from "classnames";
import GetQuote from "components/advertisement/getQuote";
import Stats from "components/advertisement/stats";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomSecondaryHeading from "components/common/customSecondaryHeading";
import Image from "next/image";
import { Images } from "assets";

const Contact = () => {
  return (
    <div className={classNames(styles.pageWrapper, "min-h-screen h-full")}>
      <div className={classNames(styles.customContainer)}>
        <section
          className={classNames(styles.heroSection, "flex items-center h-full")}
        >
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col items-start justify-center">
              <h2>
                <span>CONTACT US</span>
              </h2>
              <p>Lorem ipsum is a simply dummy text</p>
            </div>

            <div>
              <Image src={Images.ContactMap} alt="map" />
            </div>
          </div>
        </section>
        <GetQuote />
      </div>
    </div>
  );
};

export default Contact;

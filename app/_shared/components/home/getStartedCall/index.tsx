"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image from "next/image";
import CustomButton from "components/common/customButton";
import useWindowDimensions from "hooks/useWindowDimensions";
import { handleScrollToQuote } from "utils/scrollHelpers";

const GetStartedCall = () => {
  const { width } = useWindowDimensions();
  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.heading,
            "text-center flex flex-col items-center gap-3 sm:w-3/12 w-full mx-auto"
          )}
        >
          <h2 data-aos="zoom-in">
            <span>Ready to {width > 640 && <br />} get started?</span>
          </h2>
          <p className="text-white">Push the button to sign up</p>
          <span>
            <Image
              data-aos="flip-right"
              width={42}
              height={42}
              src={Images.Logo}
              alt="icon"
            />
          </span>
          <CustomButton
            title="Get A Quote"
            containerStyle="md:mt-6 sm:mt-5 mt-4"
            onClick={handleScrollToQuote}
          />
        </div>
      </div>
    </section>
  );
};

export default GetStartedCall;

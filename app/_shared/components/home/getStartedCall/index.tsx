"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image from "next/image";
import CustomButton from "components/common/customButton";
import useWindowDimensions from "hooks/useWindowDimensions";

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
          <h2>
            <span>Ready to {width > 640 && <br />} get started?</span>
          </h2>
          <p className="text-white">Push the button to sign up</p>
          <span>
            <Image width={42} height={42} src={Images.Logo} alt="icon" />
          </span>
          <CustomButton title="Sign up" />
        </div>
      </div>
    </section>
  );
};

export default GetStartedCall;

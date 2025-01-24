"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import Image from "next/image";
import CustomButton from "components/common/customButton";
import useWindowDimensions from "hooks/useWindowDimensions";

const CeoMessage = () => {
  const { width } = useWindowDimensions();
  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.heading,
            "text-center flex flex-col items-center gap-3 sm:w-2/12 w-full mx-auto"
          )}
        >
          <h2>
            <span>
              Ready {width > 640 && <br />} to {width > 640 && <br />} get
              started?
            </span>
          </h2>
          <p className="text-white">Push the button to sign up</p>
          <span>
            <Image width={42} height={42} src={Images.Logo} alt="icon" />
          </span>
          <CustomButton title="Sign up" />
        </div>
      </div>
      <div
        className={classNames(
          styles.contentWrapper,
          "grid sm:grid-cols-2 grid-cols-1"
        )}
      >
        <Image src={Images.CeoPlaceholder} alt="ceo-img" />
        <div
          className={classNames(
            styles.contentContainer,
            "flex flex-col items-center justify-center lg:gap-8 sm:gap-5 gap-4"
          )}
        >
          <Icons.BigQuote />
          <h3>
            “ In an attention based economy, we take an interpersonal approach
            to reaching audiences that are otherwise burnt out from the current
            marketing trends. this is emotionally intelligent marketing. ”
          </h3>
          <div>
            <p>CEO MESSAGE</p>
            <h4>James Hayes</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;

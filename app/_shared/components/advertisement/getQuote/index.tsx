import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomButton from "components/common/customButton";
import CustomInput from "components/common/customInput";
import CustomTextArea from "components/common/customTextArea";

const GetQuote = () => {
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
              heading="Get A Quote"
              description=""
            />
            <div className="md:w-9/12 xs:w-10/12 w-full mx-auto">
              <div
                className={classNames(
                  styles.gridContainer,
                  "grid grid-cols-12 gap-4"
                )}
              >
                <div className="xs:col-span-6 col-span-12">
                  <CustomInput
                    label=""
                    placeholder="Enter First Name"
                    customInputContainer={classNames(styles.quoteInput)}
                  />
                </div>{" "}
                <div className="xs:col-span-6 col-span-12">
                  <CustomInput
                    label=""
                    placeholder="Enter Last Name"
                    customInputContainer={classNames(styles.quoteInput)}
                  />
                </div>{" "}
                <div className="col-span-12">
                  <CustomInput
                    label=""
                    type="number"
                    placeholder="Enter Phone Number"
                    customInputContainer={classNames(styles.quoteInput)}
                  />
                </div>{" "}
                <div className="col-span-12">
                  <CustomInput
                    label=""
                    type="email"
                    placeholder="Enter Email"
                    customInputContainer={classNames(styles.quoteInput)}
                  />
                </div>
                <div className="col-span-12">
                  <CustomTextArea
                    label=""
                    placeholder="Write Message"
                    rows={4}
                    customInputContainer={classNames(styles.quoteInput)}
                  />
                </div>
              </div>
            </div>

            <div
              className={classNames(
                styles.buttonContainer,
                "flex justify-center"
              )}
            >
              <CustomButton title="Get A Quote" />
            </div>
          </div>
        </CustomAnimatedBorder>
      </div>
    </section>
  );
};

export default GetQuote;

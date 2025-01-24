import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import NewsLetter from "components/common/newsLetter";
import FAQs from "../faqs";

const Newsletter = () => {
  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <CustomSectionHeading
            centered
            heading="Subscribe to our newsletter"
            description="Lorem ipsum is a simply dummy text.lorem ipsum is a simply dummy text. Lorem ipsum is a simply dummy text.lorem ipsum is a simply dummy text. Lorem ipsum is a simply dummy text.lorem ipsum is a simply dummy text."
          />
          <div
            className={classNames(
              styles.formContainer,
              "md:w-6/12 xs:w-8/12 w-full mx-auto"
            )}
          >
            <NewsLetter />
          </div>
        </div>
      </div>
      <div className={classNames(styles.faqsContainer, "")}>
        <FAQs />
      </div>
    </section>
  );
};

export default Newsletter;

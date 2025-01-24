import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "../customSectionHeading";

interface CustomPageHeaderProps {
  heading: string;
  description: string;
  isContactHeader?: boolean;
}

const CustomPageHeader = ({
  heading,
  description,
  isContactHeader = false,
}: CustomPageHeaderProps) => {
  return (
    <div className={classNames(styles.pageHeader, "mx-auto")}>
      <CustomSectionHeading heading={heading} description={description} />
      {isContactHeader && (
        <p className={classNames(styles.email)}>
          info@careerlabshelp@gmail.com
        </p>
      )}
    </div>
  );
};

export default CustomPageHeader;

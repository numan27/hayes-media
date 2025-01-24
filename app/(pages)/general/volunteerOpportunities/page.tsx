import classNames from "classnames";
import styles from "./style.module.scss";
import CustomPageHeader from "components/common/customPageHeader";

const VolunteerOpportunities = () => {
  return (
    <div className={classNames(styles.eventWrapper)}>
      <div className={classNames(styles.customContainer)}>
        <CustomPageHeader
          heading="Volunteer Opportunities!"
          description="We support Boys & Girls Clubs of Boston alums aged 18 – 24 in building meaningful job and career pathways through coaching, mentorship, and links to resources."
        />

        <div className={classNames(styles.contentContainer)}></div>
      </div>
    </div>
  );
};

export default VolunteerOpportunities;

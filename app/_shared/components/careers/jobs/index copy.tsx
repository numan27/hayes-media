import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import CustomInput from "components/common/customInput";
import { Icons } from "assets";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomSelect from "components/common/customSelect";
import CustomBadge from "components/common/customBadge";

const Jobs = () => {
  const jobsData = [{}];

  const categoryOptions = [
    { title: "All Experience Level", value: "session1" },
    { title: "45 Min Session", value: "session2" },
    { title: "60 Min Session", value: "session3" },
  ];
  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.filtersContainer,
            "flex flex-col gap-10 h-56"
          )}
        >
          <div
            className={classNames(
              "lg:w-6/12 md:w-7/12 sm:w-8/12 xs:w-9/12 w-full mx-auto relative my-auto"
            )}
          >
            <CustomAnimatedBorder
              gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
              animationSpeed="5s"
              borderRadius="6px"
            >
              <div className={classNames(styles.searchContainer, "m-1")}>
                <CustomInput
                  placeholder="Search for jobs.."
                  customInputContainer={classNames(styles.quoteInput)}
                />
                <span className="absolute right-3 top-4">
                  <Icons.Search />
                </span>
              </div>
            </CustomAnimatedBorder>
          </div>
          <div
            className={classNames(
              styles.filters,
              "grid grid-cols-12 gap-8 w-8/12 mx-auto"
            )}
          >
            <div className={classNames(styles.item, "col-span-4")}>
              <label htmlFor="">Experience Level</label>
              <CustomSelect
                defaultActiveItem="All Experience Level"
                // @ts-ignore
                options={categoryOptions}
                // label="Experience Level"
              />
            </div>{" "}
            <div className={classNames(styles.item, "col-span-3")}>
              <label htmlFor="">Location</label>
              <CustomSelect
                // @ts-ignore
                options={categoryOptions}
                defaultActiveItem="All Location"
                // label="Experience Level"
              />
            </div>{" "}
            <div className={classNames(styles.item, "col-span-3")}>
              <label htmlFor="">Categories</label>
              <CustomSelect
                // @ts-ignore
                options={categoryOptions}
                defaultActiveItem="All Categories"
                // label="Experience Level"
              />
            </div>{" "}
            <div
              className={classNames(styles.item, "col-span-2 flex items-end")}
            >
              <CustomButton
                containerStyle={classNames(styles.filterButton)}
                title="Available Jobs"
              />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            styles.contentWrapper,
            "grid grid-cols-2 gap-6 mt-12"
          )}
        >
          <div className={classNames(styles.jobsListContainer)}>
            <div
              className={classNames(
                styles.jobListItem,
                "flex flex-col items-start gap-5"
              )}
            >
              <h5>
                <span>Media Buyer (Meta, Google, Linkedin, TikTok, X)</span>
              </h5>
              <CustomBadge title="Mid-Level" />
              <p>
                Primary Responsibility:Designing and implementing user
                interfaces using HTML, CSS, and JavaScript frameworks like React
                or Angular. Building and maintaining server-side application
                logic, databases....
              </p>
            </div>
          </div>
          <div className={classNames(styles.jobsPreviewContainer)}></div>
          <CustomButton title="Get Started Today" />
        </div>
      </div>
    </section>
  );
};

export default Jobs;

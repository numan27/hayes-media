"use client";
import { useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import CustomInput from "components/common/customInput";
import { Icons } from "assets";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomSelect from "components/common/customSelect";
import CustomBadge from "components/common/customBadge";

interface Job {
  title: string;
  level: string;
  description: string;
  responsibilities: string[];
  specifications: string[];
  employmentType: string;
  workType: string;
  salary: string;
  experienceRequired: string;
  location: string;
}

const jobsData: Job[] = [
  {
    title: "Media Buyer (Meta, Google, Linkedin, TikTok, X)",
    level: "Mid-Level",
    description:
      "Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases.",
    responsibilities: [
      "Design and implement user interfaces.",
      "Maintain server-side logic and APIs.",
      "Optimize application performance.",
    ],
    specifications: [
      "Proficiency in HTML, CSS, JavaScript (React/Angular).",
      "Experience with Node.js, Python, or Ruby.",
      "Knowledge of security best practices.",
    ],
    employmentType: "Full-time",
    workType: "Hybrid",
    salary: "Commensurate with experience and skills",
    experienceRequired: "Minimum 3 Years",
    location: "Chennai, Madurai, Coimbatore",
  },
  {
    title: "Social Media Manager (All Platforms)",
    level: "Mid-Level",
    description:
      "Primary Responsibility:Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases....",
    responsibilities: [
      "Develop and implement social media strategies.",
      "Analyze and report social media performance.",
      "Collaborate with content creators.",
    ],
    specifications: [
      "Strong understanding of social media platforms.",
      "Experience with analytics tools.",
      "Excellent communication skills.",
    ],
    employmentType: "Full-time",
    workType: "Remote",
    salary: "Based on experience",
    experienceRequired: "2+ Years",
    location: "Remote",
  },
];

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobsData[0]);

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
  };

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
            "flex flex-col lg:gap-10 gap-8 h-56"
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
              "grid grid-cols-12 lg:gap-6 gap-3 xl:w-9/12 lg:10/12 mx-auto"
            )}
          >
            <div
              className={classNames(styles.item, "lg:col-span-4 col-span-6")}
            >
              <label htmlFor="">Experience Level</label>
              <CustomSelect
                defaultActiveItem="All Experience Level"
                // @ts-ignore
                options={categoryOptions}
                // label="Experience Level"
              />
            </div>{" "}
            <div
              className={classNames(styles.item, "lg:col-span-3 col-span-6")}
            >
              <label htmlFor="">Location</label>
              <CustomSelect
                // @ts-ignore
                options={categoryOptions}
                defaultActiveItem="All Location"
                // label="Experience Level"
              />
            </div>{" "}
            <div
              className={classNames(styles.item, "lg:col-span-3 col-span-6")}
            >
              <label htmlFor="">Categories</label>
              <CustomSelect
                // @ts-ignore
                options={categoryOptions}
                defaultActiveItem="All Categories"
                // label="Experience Level"
              />
            </div>{" "}
            <div
              className={classNames(
                styles.item,
                "lg:col-span-2 col-span-6 flex items-end"
              )}
            >
              <CustomButton
                containerStyle={classNames(styles.filterButton, "w-full")}
                title="Available Jobs"
              />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            styles.contentWrapper,
            "grid sm:grid-cols-2 grid-cols-1 gap-6 mt-12"
          )}
        >
          <div
            className={classNames(
              styles.jobsListContainer,
              "flex flex-col gap-5"
            )}
          >
            {jobsData.map((job, index) => (
              <div
                key={index}
                onClick={() => handleJobSelect(job)}
                className={classNames(
                  styles.jobListItem,
                  "flex flex-col items-start gap-5",
                  { [styles.active]: selectedJob?.title === job.title }
                )}
              >
                <h5>
                  <span>{job.title}</span>
                </h5>
                <CustomBadge title={job.level} />
                <p>{job.description}</p>
              </div>
            ))}
          </div>
          <div className={classNames(styles.jobsPreviewContainer)}>
            {selectedJob ? (
              <div
                className={classNames(
                  styles.jobPreview,
                  "flex flex-col items-start gap-6"
                )}
              >
                <div>
                  <h4 className="mb-3">{selectedJob.title}</h4>
                  <CustomBadge title={selectedJob.level} />
                </div>
                <p className="">{selectedJob.description}</p>{" "}
                <CustomButton
                  title="Apply Now"
                  containerStyle={classNames(
                    styles.applyButton,
                    "md-height-button"
                  )}
                />
              </div>
            ) : (
              <p>Select a job to see details.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;

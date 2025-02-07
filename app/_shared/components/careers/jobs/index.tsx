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
import { GoDotFill } from "react-icons/go";

interface Details {
  label: string;
  value: string;
}
interface Job {
  title: string;
  level: string;
  description: string;
  specifications: string[];
  details: Details[];
}

const jobsData: Job[] = [
  {
    title: "Media Buyer (Meta, Google, LinkedIn, TikTok, X)",
    level: "Mid-Level",
    description:
      "Develop and execute paid media strategies across multiple platforms, including Meta, Google, LinkedIn, TikTok, and X. Monitor campaign performance and optimize ads to maximize ROI. Analyze data trends to refine targeting and audience segmentation. Collaborate with creative teams to design compelling ad creatives and messaging. Stay updated with industry trends and platform changes to maintain campaign effectiveness.",
    specifications: [
      "Proven experience in media buying on digital platforms.",
      "Strong analytical skills and proficiency in Google Analytics, Meta Ads Manager, and similar tools.",
      "Understanding of PPC, CPM, and CPA bidding strategies.",
      "Ability to create and optimize ad creatives based on performance data.",
      "Experience with audience segmentation and A/B testing.",
      "Strong knowledge of tracking pixels and conversion tracking.",
      "Excellent communication and reporting skills.",
    ],
    details: [
      { label: "Employment Type", value: "Full-time" },
      { label: "Work Type", value: "Remote" },
      { label: "Salary", value: "$70,000 - $90,000 per year" },
      { label: "Experience Required", value: "Minimum 3 Years" },
      { label: "Location", value: "Texas, Louisiana, Oklahoma" },
    ],
  },
  {
    title: "Social Media Manager (All Platforms)",
    level: "Mid-Level",
    description:
      "Manage and grow social media presence across all major platforms. Develop engaging content strategies to increase brand awareness and engagement. Monitor trends, analyze performance metrics, and adjust strategies accordingly. Work closely with content creators, designers, and marketing teams to maintain a consistent brand voice. Stay updated with social media trends and algorithm updates to ensure optimal engagement.",
    specifications: [
      "Proficiency in managing Facebook, Instagram, LinkedIn, TikTok, and Twitter.",
      "Strong content planning and execution skills.",
      "Experience with social media analytics tools.",
      "Ability to run and optimize paid social media campaigns.",
      "Knowledge of influencer marketing strategies.",
      "Excellent communication and storytelling skills.",
      "Familiarity with community management best practices.",
    ],
    details: [
      { label: "Employment Type", value: "Part-time" },
      { label: "Work Type", value: "Hybrid" },
      { label: "Salary", value: "$50,000 - $75,000 per year" },
      { label: "Experience Required", value: "Minimum 2 Years" },
      { label: "Location", value: "Houston, Austin, Dallas" },
    ],
  },
  {
    title: "Video Editor/Motion Graphics Manager/Graphics Designer (Adobe)",
    level: "Mid-Level",
    description:
      "Create high-quality video content and motion graphics for marketing campaigns. Edit videos using Adobe Premiere Pro, After Effects, and other Adobe tools. Design eye-catching graphics for social media, ads, and branding materials. Work closely with marketing teams to ensure visuals align with brand identity. Stay updated with the latest design and animation trends.",
    specifications: [
      "Proficiency in Adobe Premiere Pro, After Effects, and Photoshop.",
      "Experience in motion graphics, video editing, and post-production.",
      "Strong understanding of color grading and video transitions.",
      "Ability to create engaging social media content.",
      "Knowledge of typography, composition, and visual storytelling.",
      "Experience in 2D/3D animation is a plus.",
      "Excellent attention to detail and creativity.",
    ],
    details: [
      { label: "Employment Type", value: "Freelance" },
      { label: "Work Type", value: "Remote" },
      { label: "Salary", value: "$60,000 - $80,000 per year" },
      { label: "Experience Required", value: "Minimum 2 Years" },
      { label: "Location", value: "Texas, Remote" },
    ],
  },
  {
    title: "UX/UI Designer (Figma, WordPress)",
    level: "Mid-Level",
    description:
      "Design intuitive user experiences and modern UI elements for web and mobile applications. Create wireframes, prototypes, and design systems using Figma. Collaborate with developers to ensure seamless implementation of designs. Optimize WordPress website designs for usability and performance. Conduct user research to improve engagement and conversion rates.",
    specifications: [
      "Proficiency in Figma and Adobe XD for UI/UX design.",
      "Experience with WordPress theme customization and design.",
      "Strong understanding of usability and accessibility principles.",
      "Ability to create wireframes, prototypes, and design systems.",
      "Knowledge of CSS and front-end frameworks is a plus.",
      "Experience conducting user research and usability testing.",
      "Attention to detail and ability to work with developers effectively.",
    ],
    details: [
      { label: "Employment Type", value: "Full-time" },
      { label: "Work Type", value: "On-site" },
      { label: "Salary", value: "$75,000 - $95,000 per year" },
      { label: "Experience Required", value: "Minimum 4 Years" },
      { label: "Location", value: "Houston, Dallas, San Antonio" },
    ],
  },
  {
    title: "Next.js Developer",
    level: "Mid-Level",
    description:
      "Develop scalable and high-performance applications using Next.js. Optimize web applications for speed, SEO, and responsiveness. Integrate APIs and third-party services to enhance functionality. Collaborate with designers and backend developers to build seamless user experiences. Stay updated with the latest trends in React and Next.js development.",
    specifications: [
      "Strong experience with Next.js and React.js.",
      "Proficiency in JavaScript, TypeScript, and modern ES6+ features.",
      "Understanding of SEO optimization in Next.js applications.",
      "Experience with SSR (Server-Side Rendering) and ISR (Incremental Static Regeneration).",
      "Knowledge of RESTful APIs and GraphQL.",
      "Familiarity with CI/CD and deployment strategies.",
      "Excellent debugging and performance optimization skills.",
    ],
    details: [
      { label: "Employment Type", value: "Full-time" },
      { label: "Work Type", value: "Hybrid" },
      { label: "Salary", value: "$85,000 - $110,000 per year" },
      { label: "Experience Required", value: "Minimum 3 Years" },
      { label: "Location", value: "Austin, Dallas, Remote" },
    ],
  },
  {
    title: "Brand & Brand Voice Marketer",
    level: "Mid-Level",
    description:
      "Develop and maintain a consistent brand voice across all marketing channels. Craft compelling messaging that resonates with the target audience. Work closely with content strategists and designers to align brand communication. Analyze market trends to refine brand positioning and messaging strategies. Ensure brand consistency across digital, print, and social media platforms.",
    specifications: [
      "Experience in brand marketing and voice development.",
      "Strong writing and storytelling skills.",
      "Ability to craft compelling messaging across various channels.",
      "Knowledge of audience segmentation and brand positioning.",
      "Experience with content strategy and digital marketing.",
      "Understanding of brand identity and visual communication.",
      "Proficiency in analyzing brand performance metrics.",
    ],
    details: [
      { label: "Employment Type", value: "Full-time" },
      { label: "Work Type", value: "Hybrid" },
      { label: "Salary", value: "$70,000 - $90,000 per year" },
      { label: "Experience Required", value: "Minimum 3 Years" },
      { label: "Location", value: "Houston, Austin, Dallas" },
    ],
  },
];

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobsData[0]);

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
  };

  const categoryOptions = [
    { title: "All Categories", value: "all" },
    { title: "IT & Software", value: "it_software" },
    { title: "Social Media Management", value: "social_media" },
    { title: "UI/UX Designer", value: "ui_ux" },
    { title: "Graphic Design", value: "graphic_design" },
    { title: "Content Writing", value: "content_writing" },
    { title: "Marketing & Advertising", value: "marketing_advertising" },
    { title: "Photography & Videography", value: "photography_videography" },
  ];

  const experienceOptions = [
    { title: "All Experience Levels", value: "all" },
    { title: "Entry Level (0-1 years)", value: "entry" },
    { title: "Mid Level (2-5 years)", value: "mid" },
    { title: "Senior Level (6+ years)", value: "senior" },
  ];

  const locationOptions = [
    { title: "All Locations", value: "all" },
    { title: "Austin, TX", value: "austin_tx" },
    { title: "Dallas, TX", value: "dallas_tx" },
    { title: "Houston, TX", value: "houston_tx" },
    { title: "San Antonio, TX", value: "san_antonio_tx" },
    { title: "Fort Worth, TX", value: "fort_worth_tx" },
    { title: "El Paso, TX", value: "el_paso_tx" },
    { title: "Plano, TX", value: "plano_tx" },
    { title: "Arlington, TX", value: "arlington_tx" },
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
                options={experienceOptions}
                // label="Experience Level"
              />
            </div>{" "}
            <div
              className={classNames(styles.item, "lg:col-span-3 col-span-6")}
            >
              <label htmlFor="">Location</label>
              <CustomSelect
                // @ts-ignore
                options={locationOptions}
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
                <p className={classNames(styles.jobListItemDesc)}>
                  <span className="font-medium">Primary Responsibility: </span>
                  {job.description}
                </p>
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
                  <h5 className="mb-3">{selectedJob.title}</h5>
                  <CustomBadge title={selectedJob.level} />
                </div>
                <div>
                  <span>Primary Responsibility:</span>
                  <p className="">{selectedJob.description}</p>{" "}
                </div>
                <div>
                  <span>Job Specification:</span>
                  <ul className="flex flex-col items-start gap-1.5 mt-2">
                    {selectedJob.specifications.map((items) => (
                      <li className="flex items-center gap-1.5">
                        <span>
                          <GoDotFill />
                        </span>
                        {items}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={classNames(
                    styles.details,
                    "flex flex-col items-start gap-3"
                  )}
                >
                  {selectedJob.details.map((data) => (
                    <div>
                      <span>{data.label}</span>
                      <p>{data.value}</p>
                    </div>
                  ))}
                </div>
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

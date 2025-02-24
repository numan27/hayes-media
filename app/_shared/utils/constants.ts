import { Images } from "assets";
import { routeConstant } from "routes/constants";

const headerLinks: SideBarItemPathType[] = [
  {
    path: routeConstant.home.path,
    title: routeConstant.home.title,
  },
  {
    path: routeConstant.about.path,
    title: routeConstant.about.title,
  },
  {
    path: "",
    title: routeConstant.services.title,
    children: [
      {
        path: routeConstant.advertisement.path,
        title: routeConstant.advertisement.title
      },
      {
        path: routeConstant.socialMedia.path,
        title: routeConstant.socialMedia.title
      },
      {
        path: routeConstant.webMobile.path,
        title: routeConstant.webMobile.title
      },
    ]
  },
  // {
  //   path: routeConstant.portfolio.path,
  //   title: routeConstant.portfolio.title,
  // },
  {
    path: routeConstant.careers.path,
    title: routeConstant.careers.title,
  },
  {
    path: routeConstant.contact.path,
    title: routeConstant.contact.title,
  },
];
interface Details {
  label: string;
  value: string;
}
interface Job {
  title: string;
  level: string;
  description: string;
  category: string;
  location: string;
  specifications: string[];
  details: Details[];
}

const jobsData: Job[] = [
  {
    title: "Media Buyer (Meta, Google, LinkedIn, TikTok, X)",
    level: "Mid-Level",
    category: "marketing_advertising",
    location: "austin_tx",
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
    category: "social_media",
    location: "houston_tx",
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
    category: "graphic_design",
    location: "dallas_tx",
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
    category: "ui_ux",
    location: "san_antonio_tx",
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
    category: "it_software",
    location: "austin_tx",
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
    category: "marketing_advertising",
    location: "dallas_tx",
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
const portfolioData = [
  {
    id: 101,
    date: "06 November, 2024",
    title: "Brochure Pamphlet Design 2024",
    desc: "Redesigned a retail app to improve navigation and user retention. Conducted research and usability testing, resulting in a 30% increase in user engagement.",
    img: Images.LongArrow,
    type: "picture",
  },
  {
    id: 102,
    date: "17 November, 2024",
    title: "Website Prototype",
    desc: "Created a responsive, accessible e-learning platform with features for screen readers and high-contrast themes, ensuring inclusivity for all users.",
    img: Images.LongArrow,
    type: "video",
  },
  {
    id: 103,
    date: "06 November, 2024",
    title: "Website Project",
    desc: "Designed a simple and interactive healthcare analytics dashboard. Focused on clarity and industry compliance, improving data accessibility for professionals.",
    img: Images.LongArrow,
    type: "pdf",
  },
  {
    id: 104,
    date: "29 October, 2024",
    title: "Mobile App Design",
    desc: "Designed a fitness app with gamified features like badges and leaderboards, boosting user engagement and satisfaction through interactive elements.",
    img: Images.LongArrow,
    type: "picture",
  },
  {
    id: 105,
    date: "24 October, 2024",
    title: "Business Card Design",
    desc: "Redesigned a nonprofit’s website for a younger audience, optimizing layouts, mobile usability, and messaging, resulting in better user engagement.",
    img: Images.LongArrow,
    type: "picture",
  },
  {
    id: 106,
    date: "03 October, 2024",
    title: "Logo Design",
    desc: "Optimized a travel booking app with dynamic pricing alerts and multi-destination planning, increasing user interaction and engagement.",
    img: Images.LongArrow,
    type: "video",
  },
];

// const chatsData = [
//   {
//     id: 101,
//     coachImg: Images.CoachProfile,
//     coachName: "Arlene McCoy",
//     pendingMessageCount: 2,
//     messages: [
//       {
//         sender: "me",
//         text: "Hi, How are you?",
//         timestamp: "4:32 AM",
//       },
//       {
//         sender: "me",
//         text: "How was your session yesterday? Were you able to attend it?",
//         timestamp: "4:35 AM",
//       },
//       {
//         sender: "other",
//         text: "I’m good, What about you?",
//         timestamp: "4:35 AM",
//       },
//       {
//         sender: "other",
//         text: "Yes, I was there, It was Awesome!!!",
//         timestamp: "4:36 AM",
//       },
//     ],
//   },
//   {
//     id: 102,
//     coachImg: Images.CoachProfile,
//     coachName: "Cody Fisher",
//     pendingMessageCount: 0,
//     messages: [
//       {
//         sender: "other",
//         text: "Hi Hanna, thank you for your support!",
//         timestamp: "4:32 AM",
//       },
//       {
//         sender: "me",
//         text: "I’m glad to help. How can I assist further?",
//         timestamp: "4:33 AM",
//       },
//       {
//         sender: "other",
//         text: "Just wanted to clarify something from yesterday’s session.",
//         timestamp: "4:34 AM",
//       },
//     ],
//   },
//   {
//     id: 103,
//     coachImg: Images.CoachProfile,
//     coachName: "Savannah Nguyen",
//     pendingMessageCount: 1,
//     messages: [
//       {
//         sender: "me",
//         text: "Hello Savannah, have you checked the new schedule?",
//         timestamp: "3:00 PM",
//       },
//       {
//         sender: "other",
//         text: "Not yet. Let me check and get back to you.",
//         timestamp: "3:15 PM",
//       },
//     ],
//   },
//   {
//     id: 104,
//     coachImg: Images.CoachProfile,
//     coachName: "Darlene Robertson",
//     pendingMessageCount: 0,
//     messages: [
//       {
//         sender: "me",
//         text: "Did you try the exercises we discussed last week?",
//         timestamp: "5:00 PM",
//       },
//       {
//         sender: "other",
//         text: "Yes, I’ve been practicing them every day.",
//         timestamp: "5:10 PM",
//       },
//     ],
//   },
//   {
//     id: 105,
//     coachImg: Images.CoachProfile,
//     coachName: "Jacob Jones",
//     pendingMessageCount: 4,
//     messages: [
//       {
//         sender: "other",
//         text: "Hey, I have some doubts about the technique.",
//         timestamp: "10:00 AM",
//       },
//       {
//         sender: "me",
//         text: "Sure, I can explain it to you. Can we discuss now?",
//         timestamp: "10:10 AM",
//       },
//     ],
//   },
//   {
//     id: 106,
//     coachImg: Images.CoachProfile,
//     coachName: "Jane Cooper",
//     pendingMessageCount: 0,
//     messages: [
//       {
//         sender: "other",
//         text: "Thank you for the detailed guidance!",
//         timestamp: "1:45 PM",
//       },
//       {
//         sender: "me",
//         text: "You’re welcome. Keep me updated on your progress.",
//         timestamp: "1:50 PM",
//       },
//     ],
//   },
//   {
//     id: 107,
//     coachImg: Images.CoachProfile,
//     coachName: "Esther Howard",
//     pendingMessageCount: 2,
//     messages: [
//       {
//         sender: "me",
//         text: "How are the preparations going for the event?",
//         timestamp: "8:00 AM",
//       },
//       {
//         sender: "other",
//         text: "They’re going well. Thanks for checking!",
//         timestamp: "8:15 AM",
//       },
//     ],
//   },
//   {
//     id: 108,
//     coachImg: Images.CoachProfile,
//     coachName: "Albert Flores",
//     pendingMessageCount: 0,
//     messages: [
//       {
//         sender: "other",
//         text: "Can we have a quick call tomorrow to discuss further?",
//         timestamp: "9:00 PM",
//       },
//       {
//         sender: "me",
//         text: "Sure, what time works best for you?",
//         timestamp: "9:05 PM",
//       },
//     ],
//   },
// ];

export {
  headerLinks,
  jobsData,
  portfolioData,
  // chatsData,
};

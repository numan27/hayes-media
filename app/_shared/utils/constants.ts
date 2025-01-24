import { Icons, Images } from "assets";
import { routeConstant } from "routes/constants";

const headerLinks: SideBarItemPathType[] = [
  {
    path: routeConstant.home.path,
    title: routeConstant.home.title,
  },
  // {
  //   path: routeConstant.about.path,
  //   title: routeConstant.about.title,
  //   children: [
  //     {
  //       path: routeConstant.aboutProgram.path,
  //       title: routeConstant.aboutProgram.title
  //     },
  //     {
  //       path: routeConstant.aboutApproach.path,
  //       title: routeConstant.aboutApproach.title
  //     },
  //     {
  //       path: routeConstant.aboutPartners.path,
  //       title: routeConstant.aboutPartners.title
  //     },
  //   ]
  // },
  {
    path: routeConstant.services.path,
    title: routeConstant.services.title,
  },
  {
    path: routeConstant.portfolio.path,
    title: routeConstant.portfolio.title,
  },
  {
    path: routeConstant.careers.path,
    title: routeConstant.careers.title,
  },
  {
    path: routeConstant.team.path,
    title: routeConstant.team.title,
  },
];


const jobsData = [
  {
    id: 1001,
    icon: Images.LongArrow,
    title: "Junior UI UX Designer",
    company: "Black Arrow Technologies",
    timeStamp: "8 hrs ago",
    desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model tex. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 1002,
    icon: Images.LongArrow,
    title: "Senior UI UX Designer",
    company: "Slack Technologies, LLC",
    timeStamp: "8 hrs ago",
    desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model tex. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 1003,
    icon: Images.LongArrow,
    title: "Senior UI UX Designer",
    company: "Slack Technologies, LLC",
    timeStamp: "8 hrs ago",
    desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model tex. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 1004,
    icon: Images.LongArrow,
    title: "Senior UI UX Designer",
    company: "Slack Technologies, LLC",
    timeStamp: "8 hrs ago",
    desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model tex. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 1005,
    icon: Images.LongArrow,
    title: "Senior UI UX Designer",
    company: "Slack Technologies, LLC",
    timeStamp: "8 hrs ago",
    desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model tex. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
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

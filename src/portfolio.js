/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "CHAILD",
  title: "Hi, Welcome to CHAILD",
  subTitle: emoji(
    "A UKRI research project defining and designing Children's agency in the age of AI"
  ),
  resumeLink: true,
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Skills Section

const skillsSection = {
  title: "What we do",
  subTitle: "Our missions",
  skills: [
    emoji(
      "⚡ Defining children’s critical agency in the digital context"
    ),
    emoji("⚡ Establishing approaches to assess the impact on agency"),
    emoji(
      "⚡ Developing design principles for agency"
    ),
    emoji(
      "⚡ Creating new guidelines for parental and educational support"
    ),
    emoji(
      "⚡ Formulating policy recommendations to prioritise children’s agency"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // 
  ],
  display: true // Set false to hide this section, defaults to true
};

const blogSection = {
  title: "News",
  subtitle:
    "Find out the latest news",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://oxfordccai.org/outreach/20-24-07-llm/",
      title: "Our new research study with children and genAI",
      description:
        "Support children's use of genAI and making better sense of genAI outputs"
    },
    {
      url: "./static/media/wp.653df15585af837b56f0.pdf",
      title: "Our first white paper",
      description:
        "Missions and challenges of the CHAILD project"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

export {
  illustration,
  greeting,
  splashScreen,
  skillsSection,
  blogSection
};

import React, { useEffect } from "react";
import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import Footer from "../components/footer/Footer";
import { StyleProvider } from "../contexts/StyleContext";
import { useDarkTheme } from "../hooks/useDarkTheme";
import "./Resources.scss";

// An index of AI literacy resources we recommend to teachers, gathered
// through our work with computing educators. Edit the categories and
// resources below as we find new ones.
const resourceCategories = [
  {
    title: "Getting started in the classroom",
    resources: [
      {
        name: "Experience AI",
        url: "https://experience-ai.org/",
        description:
          "Lesson plans, activities, and training from the Raspberry Pi Foundation, with learning objectives mapped to UNESCO's AI competency framework for students."
      },
      {
        name: "National Centre for Computing Education CPD",
        url: "https://teachcomputing.org/courses",
        description:
          "Free professional development for teachers in England, including on-demand courses about teaching generative AI."
      },
      {
        name: "Hello World magazine",
        url: "https://helloworld.cc/",
        description:
          "A free magazine for computing educators, regularly covering AI and how to teach it."
      }
    ]
  },
  {
    title: "Teaching critical AI use",
    resources: [
      {
        name: "Media literacy in the age of AI",
        url: "https://experience-ai.org/en/units/ai-safety/lessons/10",
        description:
          "A classroom lesson on recognising and critically evaluating AI-generated content."
      },
      {
        name: "Prompt a large language model",
        url: "https://projects.raspberrypi.org/en/projects/prompt-a-large-language-model",
        description:
          "A hands-on coding project where young people build and refine their own prompts."
      },
      {
        name: "Teachable Machine",
        url: "https://teachablemachine.withgoogle.com/",
        description:
          "Train simple machine learning models in the browser — a quick way to show how classifiers work, including how confidently they can be wrong."
      }
    ]
  },
  {
    title: "Frameworks, pedagogy, and research",
    resources: [
      {
        name: "UNESCO AI competency frameworks",
        url: "https://www.unesco.org/en/digital-education/ai-future-learning/competency-frameworks",
        description:
          "International frameworks describing the AI competencies students and teachers need."
      },
      {
        name: "PRIMM",
        url: "https://primmportal.com/",
        description:
          "A structured approach to teaching programming (Predict, Run, Investigate, Modify, Make) that adapts well to working with AI tools."
      },
      {
        name: "Teacher Inquiry in Computing Education (TICE)",
        url: "https://computingeducationresearch.org/projects/tice-2024-25/",
        description:
          "Reports from computing teachers carrying out their own classroom research, supported by the University of Cambridge and the Raspberry Pi Foundation."
      }
    ]
  }
];

export default function Resources() {
  const [isDark, toggleTheme] = useDarkTheme();

  useEffect(() => {
    document.title = "AI literacy resources | CHAILD";
  }, []);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: toggleTheme }}>
        <Header />
        <main id="main-content" className="resources-container fade-in-up">
          <h1 className={isDark ? "dark-mode resources-title" : "resources-title"}>
            AI literacy resources for teachers
          </h1>
          <p
            className={
              isDark ? "dark-mode resources-intro" : "subTitle resources-intro"
            }
          >
            Useful resources we have come across through our work with
            computing educators — for bringing AI into the classroom in a way
            that supports children's agency.
          </p>

          {resourceCategories.map((category) => (
            <section
              key={category.title}
              className="resources-category"
              aria-label={category.title}
            >
              <h2
                className={
                  isDark
                    ? "dark-mode resources-category-title"
                    : "resources-category-title"
                }
              >
                {category.title}
              </h2>
              <ul className="resources-list">
                {category.resources.map((resource) => (
                  <li
                    key={resource.name}
                    className={
                      isDark ? "dark-mode resource-item" : "resource-item"
                    }
                  >
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      className="resource-name"
                    >
                      {resource.name}
                    </a>
                    <p className="resource-description">
                      {resource.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <p className={isDark ? "dark-mode resources-outro" : "resources-outro"}>
            Know a resource that belongs here? We'd love to hear about it —
            find us via the links in the footer.
          </p>
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}

// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of projects to identify the adversarial risks in practical AI models and to build reliable intelligent systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-participated-in-neuips-24-safe-generative-ai-with-a-poster-presentation",
          title: 'I participated in NeuIPS’24 Safe Generative AI with a poster presentation.',
          description: "",
          section: "News",},{id: "news-the-first-author-paper-adversarial-vulnerabilities-in-large-language-models-for-time-series-forecasting-was-accepted-in-aistats-2025",
          title: 'The first-author paper, “Adversarial Vulnerabilities in Large Language Models for Time Series Forecasting”,...',
          description: "",
          section: "News",},{id: "news-i-was-glad-to-be-chosen-as-an-aistats-2025-best-reviewer-see",
          title: 'I was glad to be chosen as an AISTATS 2025 best reviewer. see...',
          description: "",
          section: "News",},{id: "news-i-graduated-with-my-ph-d-from-mcgill-university-fall-2025-convocation-is-awesome",
          title: 'I graduated with my Ph.D. from McGill University. Fall 2025 Convocation is awesome....',
          description: "",
          section: "News",},{id: "news-i-was-glad-to-be-selected-as-a-neurips-2025-top-reviewer-and-awarded-a-complimentary-registration",
          title: 'I was glad to be selected as a NeurIPS 2025 “Top Reviewer” and...',
          description: "",
          section: "News",},{id: "projects-attack-llms-in-ts",
          title: 'Attack LLMs in TS',
          description: "To expose the vulnerabilities of LLMs in time series forecasting by three distinct black-box adversarial attacks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-more-accurate-its",
          title: 'More Accurate ITS',
          description: "Two model-agnostic solutions to enhance deep learning–based traffic forecasting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-more-robust-its",
          title: 'More Robust ITS',
          description: "Adversarial attacks and defenses against deep learning–based traffic forecasting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

// ────────────────────────────────────────────────────────────────
// EVERYTHING ON THE SITE IS DRIVEN FROM THIS FILE.
// ────────────────────────────────────────────────────────────────

import project1 from "../assets/images/project1.jpg";
import profilePic from "../assets/images/profilePic.jpg";

const siteConfig = {
  meta: {
    name: "Minakshi Kumari",
    tagline: "Frontend Developer",
    shortHandle: "minakshi.dev",
  },

  profileImage: profilePic,

  resumeLink: import.meta.env.VITE_RESUME_LINK || "#",

  nav: [
    { title: "Minakshi.Kumari", path: "hero" },
    { title: "About", path: "about" },
    { title: "Work", path: "work" },
    { title: "Projects", path: "projects" },
    { title: "Contact", path: "contact" },
  ],

  hero: {
    titleLines: "Frontend Developer".split(" "),
    description:
      "Frontend Developer with 4 years of experience building responsive, high-performance web applications using React.js and Redux Toolkit. Passionate about creating scalable, accessible, and user-friendly digital experiences.",
  },

  about: {
    intro:
      "I'm a Frontend Developer based in Kolkata, India, with 4 years of experience developing modern web applications using React.js, Redux Toolkit, JavaScript, HTML, and CSS. I enjoy building clean, responsive interfaces that provide an excellent user experience.",

    focus:
      "My expertise includes developing reusable UI components, integrating RESTful APIs, optimizing application performance, ensuring cross-browser compatibility, and collaborating with Agile teams to deliver high-quality software.",

    facts: [
      { label: "Location", value: "Kolkata, India" },
      { label: "Experience", value: "4 Years" },
      { label: "Current Company", value: "TCS" },
      { label: "Role", value: "Frontend Developer" },
    ],
  },

  skillGroups: [
    {
      label: "Frontend",
      skills: [
        "React.js",
        "Redux Toolkit",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
      ],
    },
    {
      label: "Development",
      skills: [
        "Responsive Design",
        "REST API Integration",
        "Cross Browser Compatibility",
        "Reusable Components",
      ],
    },
    {
      label: "Tools",
      skills: [
        "Git",
        "NPM",
        "Cursor AI",
      ],
    },
  ],

  timeline: [
    {
      title: "Frontend Developer — Tata Consultancy Services",
      year: "Aug 2022 – Present",
      description:
        "Working as a Frontend Developer building enterprise web applications using React.js and Redux Toolkit.",
      type: "work",
    },
    {
      title: "Government e-Marketplace (GeM)",
      year: "Nov 2025 – Present",
      description:
        "Developed Demand Aggregation modules, reusable UI components, and integrated REST APIs while improving application performance.",
      type: "project",
    },
    {
      title: "Passport Seva",
      year: "Aug 2022 – Oct 2025",
      description:
        "Integrated e-Passport functionality, handled production support, defect triaging, and application maintenance.",
      type: "project",
    },
    {
      title: "B.Tech – Electrical Engineering",
      year: "2015 – 2019",
      description: "CGPA: 8.5",
      type: "education",
    },
  ],

  projects: [
    {
      title: "Personal Portfolio Website",
      description:
        "Responsive portfolio built using React.js with lazy loading, code splitting, SEO optimization, and a Google Lighthouse score above 95.",
      url: "#",
      image: project1,
    },
  ],

  contact: {
    address: "Kolkata, India",
    email: "minakshikumari603@gmail.com",

    emailjs: {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
    },
  },

  socials: {
    github: "#",
    linkedin: "#",
  },

  footer: {
    builtWithText: "Built with care by Minakshi Kumari",
  },
};

export default siteConfig;
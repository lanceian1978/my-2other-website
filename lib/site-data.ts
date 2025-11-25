export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  details: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  concept: string;
  stack: string[];
  url: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
};

export const certificatesList: string[] = [
  "CompTIA ITF+",
  "LEGO Robotics",
  "BASED BUILD PH",
  "CPU STEM Expo",
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "lanceianleanillo@gmail.com",
    href: "mailto:lanceianleanillo@gmail.com",
  },
  {
    label: "Phone",
    value: "+63 976 150 6616",
    href: "tel:+639761506616",
  },
  {
    label: "GitHub",
    value: "github.com/lanceian1978",
    href: "https://github.com/lanceian1978",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lance-leanillo",
    href: "https://www.linkedin.com/in/lance-leanillo",
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "2020",
    title: "LEGO Education Robotics Trainee",
    details: "Learned to design, build, and program robotic systems with practical applications.",
  },
  {
    period: "2025",
    title: "Based Build PH Participant",
    details: "Developed blockchain solutions and contributed to decentralized app + smart-contract implementations.",
  },
  {
    period: "Present",
    title: "B.S. Computer Science, CPU",
    details:
      "Specializing in software development, focusing on practical software solutions, web/app builds, and programming best practices.",
  },
];

export const featureBadges: string[] = [
  "Design Systems",
  "Rapid Prototyping",
  "Robotics",
  "Automation",
  "UI Engineering",
  "Community Work",
];

export const projectsData: ProjectItem[] = [
  {
    title: "My Cookbook Website",
    description:
      "Web app showcasing a curated collection of recipes with easy browsing and search features focused on discovering new dishes.",
    concept: "Recipe Library",
    stack: ["TypeScript", "Node.js", "JavaScript", "CSS"],
    url: "recipe-book-website-topaz.vercel.app",
  },
  {
    title: "Velvet Bean Cafe Website",
    description:
      "Website highlighting specialty coffee drinks, tasting flights, and café experiences designed to showcase the menu and atmosphere.",
    concept: "Café Experience Showcase",
    stack: ["Node.js", "CSS", "TypeScript"],
    url: "velvet-bean-cafe.vercel.app",
  },
  {
    title: "Website Calculator",
    description:
      "A simple and interactive web-based calculator for performing basic arithmetic operations quickly and efficiently.",
    concept: "Content Library",
    stack: ["TypeScript", "HTML", "JavaScript", "Node.js"],
    url: "calculator-website-liart.vercel.app",
  },
];

export const servicesData: ServiceItem[] = [
  {
    title: "Full-Stack Development",
    description:
      "Designing end-to-end web experiences from planning and wireframes to coding and deployment with modern tools.",
    bullets: [
      "Skills & Technologies:",
      "Frontend/Backend: Next.js, Node.js, HTML, CSS, JavaScript",
      "APIs: REST + basic GraphQL",
      "Rapid prototyping & MVP builds",
      "Design & UI: Tailwind CSS, responsive layouts",
      "Deployment & tools: Vercel, GitHub, Supabase",
    ],
  },
  {
    title: "Automation & Internal Tools (Campus Projects)",
    description:
      "Exploring scripts, dashboards, and collaborative tools that simplify workflows and improve efficiency.",
    bullets: [
      "Workflow automation concepts",
      "Dashboard experiments",
      "Collaboration tooling",
      "Continuous iteration with classmates and mentors",
    ],
  },
];

export const skillsList: string[] = [
  "Dart",
  "JavaScript",
  "HTML/CSS",
  "Python",
  "UI/UX",
  "Node.js",
  "Flutter",
];


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
  "CompTIA IT+",
  "CISCO",
  "BASED BUILD PH",
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
    url: "https://recipe-book-website-topaz.vercel.app",
  },
  {
    title: "Velvet Bean Cafe Website",
    description:
      "Website highlighting specialty coffee drinks, tasting flights, and café experiences designed to showcase the menu and atmosphere.",
    concept: "Café Experience Showcase",
    stack: ["Node.js", "CSS", "TypeScript"],
    url: "https://velvet-bean-cafe.vercel.app",
  },
  {
    title: "Website Calculator",
    description:
      "A simple and interactive web-based calculator for performing basic arithmetic operations quickly and efficiently.",
    concept: "Simple Calculator",
    stack: ["TypeScript", "HTML", "JavaScript", "Node.js"],
    url: "https://calculator-website-liart.vercel.app",
  },
];

export const servicesData: ServiceItem[] = [
  {
    title: "Full-Stack Skills",
    description:
      "Hands-on learning in web development, programming, networking, and UI/UX design using modern tools and platforms.",
    bullets: [
      "Skills & Technologies learned:",
      "Databases: SQL, FireBase",
      "Frontend/Backend: Next.js, Node.js, HTML, CSS, JavaScript",
      "Programming & Mobile: Dart, Python, Flutter",
      "Networking: Cisco basics",
      "Design: UI/UX with Figma",
      "Deployment & tools: Vercel, GitHub",
    ],
  },
  {
    title: "School Projects & Experiments",
    description:
      "Building practical projects and experimenting with tools to learn programming, automation, and collaboration in real-world scenarios.",
    bullets: [
      "Learning workflow automation",
      "Creating interactive dashboards",
      "Experimenting with collaboration tools",
      "Iterating and improving projects with peers and mentors",
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


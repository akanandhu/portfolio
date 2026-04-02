export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  detail?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
};

export type LanguageItem = {
  name: string;
  level: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  year: string;
};

export const profile = {
  name: "Ananthakrishnan A",
  title: "Software Development Engineer",
  summary:
    "3+ years of experience as a Full Stack Developer with a focus on Next.js, React-Native, and Node.js, helping startups and businesses build scalable MVPs in record time. Passionate about transforming ideas into high-performance web and mobile applications with clean, efficient code.",
  email: "akananthu11@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/akanandhu" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ananthakrishnan-ak/",
    },
    {
      label: "Blog",
      href: "https://ananthakrishnan.hashnode.dev/"
    }
  ] as const,
  note: "",
};

export const experience: ExperienceItem[] = [
  {
    role: "SDE",
    company: "NAVICATER",
    period: "2025 — Present",
    summary:
      "Leading scalable web, mobile, and API development for maritime platforms, improving system reliability, performance, and engineering velocity.",
  },
  {
    role: "Software Engineer",
    company: "MeraCars (Acquired)",
    period: "2024 — 2025",
    summary:
      "Built high-performance automobile platforms including car evaluation, auctions, and reporting systems with a focus on UX, scalability, and clean architecture.",
  },
  {
    role: "Associate Software Engineer",
    company: "Logidots",
    period: "2022 — 2024",
    summary:
      "Developed fintech and SaaS products with modern frontend technologies, delivering secure payment integrations and robust financial workflows.",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology - B.Tech, Computer Science",
    school: "APJ Abdul Kalam Technological University",
    period: "2018 — 2022",
    detail: "Focus: software engineering, systems, and databases.",
  },
];

export const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "System design",
  "APIs & integrations",
  "Testing & CI",
  "Cloud & infra basics",
] as const;

export const projects: ProjectItem[] = [
  {
    title: "Platform modernization",
    description:
      "Incremental migration to a modular architecture with zero-downtime releases.",
  },
  {
    title: "Design system & docs",
    description:
      "Reusable components, accessibility checks, and living documentation for product teams.",
  },
  {
    title: "Observability uplift",
    description:
      "Tracing, structured logging, and SLOs that made incidents shorter and rarer.",
  },
];

export const languages: LanguageItem[] = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Hindi", level: "Professional working proficiency" },
  { name: "Malayalam", level: "Native" },
  { name: "Tamil", level: "Limited working proficiency" },
  { name: "German", level: "Limited working proficiency" },
];

export const certifications: CertificationItem[] = [
  {
    name: "Cloud or platform certification (example)",
    issuer: "Issuer",
    year: "2023",
  },
];

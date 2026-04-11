export interface PipelineStage {
  number: string;
  title: string;
  description: string;
  duration: string;
  earning: string;
  color: string;
  accentColor?: string;
}

export interface EcosystemEntity {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  featured?: boolean;
  link?: string;
}

export interface EarningsStage {
  number: string;
  title: string;
  amount: string;
  unit: string;
  description: string;
  note: string;
  color: string;
  featured?: boolean;
}

export interface CourseTrack {
  id: string;
  number: string;
  title: string;
  badge: string;
  badgeType: string;
  gap: string;
  description: string;
  skills: string[];
  duration: string;
  outcome: string;
  filters: string[];
  featured?: boolean;
  fullWidth?: boolean;
}

export interface StatItem {
  number: string;
  label: string;
}

export const pipelineStages: PipelineStage[] = [
  {
    number: "01",
    title: "Trainee",
    description:
      "You enrol in one of BBT's seven course tracks. Instructor-led sessions, structured labs, and weekly project builds. Ends with a deployed capstone project on GitHub — not a certificate no one cares about.",
    duration: "8–16 weeks",
    earning: "Course Fee · PKR 55–75K",
    color: "var(--phase-student)",
    accentColor: "rgba(255,255,255,0.2)",
  },
  {
    number: "02",
    title: "Internee",
    description:
      "Top cohort graduates are selected into BBT's software house. You work on real client projects under the direct supervision of a Shadow. First verified commits. First client-facing work. First income.",
    duration: "6–10 weeks",
    earning: "Stipend · PKR 15–25K/month",
    color: "var(--phase-internee)",
    accentColor: "#a855f7",
  },
  {
    number: "03",
    title: "Shadow",
    description:
      "You work alongside an Expert on live client deliverables. You own complete project sub-systems, receive structured mentorship, and earn a full salary. This is where your professional portfolio is built.",
    duration: "3–6 months",
    earning: "Salary · PKR 40–80K/month",
    color: "var(--phase-shadow)",
    accentColor: "#60a5fa",
  },
  {
    number: "04",
    title: "Expert",
    description:
      "You are a verified, experienced professional. Join Big Binary Tech's software arm as a full contributor — or take your skills and career wherever you choose. BBT produces professionals, not dependencies.",
    duration: "Year 1 onwards",
    earning: "Professional Rates · Your Terms",
    color: "var(--phase-expert)",
    accentColor: "var(--amber)",
  },
];

export const ecosystemEntities: EcosystemEntity[] = [
  {
    number: "01",
    title: "BBT Education",
    subtitle: "Education Arm",
    description:
      "Runs the seven course tracks and manages the Trainee → Internee → Shadow progression. Every curriculum decision answers one question: does this produce someone a real client will pay for?",
    tag: "education-arm",
  },
  {
    number: "10",
    title: "Big Binary Tech",
    subtitle: "Software Arm",
    description:
      "Delivers client projects across AI engineering, ERP development, full-stack software, cybersecurity, and digital services. This is where BBT Experts are placed — working on real engagements, earning professional salaries, and building careers inside Pakistan.",
    tag: "software-arm",
    featured: true,
    link: "https://bigbinarytech.com",
  },
];

export const earningsStages: EarningsStage[] = [
  {
    number: "01",
    title: "Stage 01 · Trainee",
    amount: "PKR 0",
    unit: "Investment phase",
    description:
      "The course fee is the investment. The return begins at stage two and compounds at each subsequent stage of the pipeline.",
    note: "Course fee: PKR 55–75K",
    color: "rgba(255,255,255,0.2)",
  },
  {
    number: "02",
    title: "Stage 02 · Internee",
    amount: "PKR 20K",
    unit: "per month · stipend",
    description:
      "Compensated for supervised work on live client projects inside BBT's software house. 6–10 weeks. First verified work history established.",
    note: "",
    color: "#a855f7",
  },
  {
    number: "03",
    title: "Stage 03 · Shadow",
    amount: "PKR 60K",
    unit: "per month · average salary",
    description:
      "Full salary for working on client deliverables alongside an Expert mentor. 3–6 months. This stage produces a portfolio of real, shipped work.",
    note: "",
    color: "#60a5fa",
  },
  {
    number: "04",
    title: "Expert · Big Binary Tech",
    amount: "PKR 120–250K",
    unit: "per month · professional engagement",
    description:
      "Placed at Big Binary Tech as a professional contributor on client engagements. Salary based on track specialism, seniority, and project scope.",
    note: "bigbinarytech.com",
    color: "var(--amber)",
  },
  {
    number: "05",
    title: "Expert · Senior (Year 2+)",
    amount: "PKR 300–600K",
    unit: "per month · senior rates",
    description:
      "Experienced professionals with verified delivery history and a strong portfolio. Senior rate at Big Binary Tech or independent professional practice.",
    note: "2 years verified experience",
    color: "var(--amber)",
  },
  {
    number: "06",
    title: "Expert · Your Own Terms",
    amount: "You Decide.",
    unit: "Independent professional",
    description:
      "BBT produces professionals — not dependencies. Experts who want independent careers leave with verified experience, a strong portfolio, and a professional network already in place.",
    note: "BBT supports both paths equally",
    color: "rgba(13,13,46,0.4)",
    featured: true,
  },
];

export const courseTracks: CourseTrack[] = [
  {
    id: "track-01",
    number: "Track 01 · Flagship",
    title: "Generative AI + Agentic AI",
    badge: "Highest Demand",
    badgeType: "flag",
    gap: "10:1 demand-to-supply gap. The most sought-after engineering skill globally — and one of the least-taught in Pakistan.",
    description:
      "A 14-week programme covering LLM engineering, RAG systems, agentic workflows, fine-tuning open-source models, and LLMOps deployment pipelines. Ends with a production AI product with a live URL — the type of deliverable that demonstrates real capability to any evaluator.",
    skills: ["Python", "LangChain", "RAG", "Agentic AI", "Fine-tuning", "MLflow", "Docker", "HuggingFace", "FastAPI"],
    duration: "14 weeks · Advanced",
    outcome: "AI Expert at Big Binary Tech",
    filters: ["ai", "money", "build"],
    featured: true,
    fullWidth: true,
  },
  {
    id: "track-02",
    number: "Track 02",
    title: "Cloud + MLOps",
    badge: "Critical Gap",
    badgeType: "gap",
    gap: "Only 9% of engineers globally have real multi-cloud experience — the infrastructure layer that makes AI products survive production.",
    description:
      "AWS core services, Docker, Kubernetes, CI/CD pipelines, MLflow, model monitoring, and Terraform. Recommended as an advanced add-on following the AI track.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "MLflow", "Prometheus", "CI/CD"],
    duration: "12 weeks · Advanced add-on",
    outcome: "DevOps / AI Expert",
    filters: ["ai", "build", "money"],
  },
  {
    id: "track-03",
    number: "Track 03",
    title: "Odoo ERP Development",
    badge: "Niche · Low Competition",
    badgeType: "niche",
    gap: "Gulf and European businesses pay significant fees per ERP implementation. Almost no institution in Pakistan trains Odoo developers properly.",
    description:
      "Custom module development with Python ORM, QWeb templating, Owl JS frontend, ERP domain knowledge, and API integrations. Big Binary Tech has active Odoo client work — Internees contribute from day one.",
    skills: ["Python ORM", "QWeb", "Owl JS", "XML-RPC", "ERP Workflows", "REST APIs"],
    duration: "12 weeks",
    outcome: "Odoo Expert at Big Binary Tech",
    filters: ["build", "money"],
  },
  {
    id: "track-04",
    number: "Track 04",
    title: "AI-Integrated Full Stack",
    badge: "Industry-Aligned",
    badgeType: "gap",
    gap: "Not generic web development. React + Node.js + AI integration — the combination Big Binary Tech's clients actually require.",
    description:
      "React, Next.js, Node.js, PostgreSQL, REST APIs, and an AI integration layer using the OpenAI API. Deployed with Docker and CI/CD. 16 weeks ending with a live, production-grade product.",
    skills: ["Next.js", "React", "Node.js", "PostgreSQL", "OpenAI API", "Docker", "Auth"],
    duration: "16 weeks",
    outcome: "Full Stack Expert at Big Binary Tech",
    filters: ["build", "ai"],
  },
  {
    id: "track-05",
    number: "Track 05",
    title: "Cybersecurity",
    badge: "367% Role Growth",
    badgeType: "grow",
    gap: "AI-enabled threats are expanding faster than organisations can staff their defences. 367% projected international role growth.",
    description:
      "Ethical hacking, penetration testing, cloud security for AWS and Azure, AI-enabled threat detection, SOC automation, and incident response. Aligned to CEH and CompTIA Security+ benchmarks.",
    skills: ["Kali Linux", "Metasploit", "Cloud Security", "SIEM", "Zero Trust", "IR Playbooks"],
    duration: "14 weeks · CEH-aligned",
    outcome: "Cybersecurity Expert",
    filters: ["build", "money"],
  },
  {
    id: "track-06",
    number: "Track 06",
    title: "UI/UX + Brand Design",
    badge: "Redesigned Track",
    badgeType: "red",
    gap: "Generic graphic design is being automated. What clients pay for is Figma, UX research, and design systems — and every Big Binary Tech project needs one.",
    description:
      "Figma from foundations to design systems, UX research methodologies, interactive prototyping, brand identity development, and AI-assisted design tools. Graduates are absorbed into active BBT client work immediately.",
    skills: ["Figma", "UX Research", "Design Systems", "Prototyping", "Brand Identity", "Handoff"],
    duration: "10 weeks",
    outcome: "Design Expert at Big Binary Tech",
    filters: ["creative", "build", "fast"],
  },
  {
    id: "track-07",
    number: "Track 07",
    title: "AI-Powered Marketing + Sales",
    badge: "Sales Expert Pipeline",
    badgeType: "flag",
    gap: "Produces skilled digital marketers and trains BBT's own Sales Experts — the team that drives course enrolment and software house business development simultaneously.",
    description:
      "Digital marketing fundamentals, AI-assisted content creation, Meta Ads and Google Ads with live budgets, HubSpot CRM, outbound email sequences, LinkedIn outreach, tele-sales frameworks, and Shopify e-commerce marketing. The shortest track to a compensated role inside BBT.",
    skills: ["Meta Ads", "Google Ads", "HubSpot CRM", "AI Copywriting", "Cold Email", "LinkedIn Outreach", "Shopify Marketing", "Tele-Sales"],
    duration: "8 weeks · Fastest track to income",
    outcome: "Sales Expert · PKR 60–120K/mo + commission",
    filters: ["creative", "fast", "money"],
    featured: true,
    fullWidth: true,
  },
];

export const stats: StatItem[] = [
  {
    number: "10:1",
    label: "Demand-to-supply gap for AI engineers globally, 2026",
  },
  {
    number: "7",
    label: "Course tracks built around documented market supply gaps",
  },
  {
    number: "4",
    label: "Pipeline stages from enrolment to working professional",
  },
  {
    number: "367%",
    label: "Projected growth in cybersecurity roles internationally by 2030",
  },
  {
    number: "2",
    label: "Connected entities — BBT Education and Big Binary Tech Software",
  },
];

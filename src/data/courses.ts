export interface CourseModule {
  number: number;
  name: string;
  description: string;
  duration: string;
}

export interface CourseCareerStep {
  label: string;
  earning?: string;
  color: string;
}

export interface Course {
  id: string;
  position: number;
  track: string;
  type: string;
  weeks: number;
  name: string;
  badges: { text: string; type: "amber" | "green" | "purple" | "blue" }[];
  marketGap: string;
  description: string;
  duration: string;
  fee: { min: number; max: number; currency: string };
  modules: CourseModule[];
  skills: string[];
  careerPipeline: CourseCareerStep[];
  careerOutcome: string;
  filters: string[];
  seats: number;
  phone: string;
}

export const coursesData: Course[] = [
  {
    id: "ai",
    position: 1,
    track: "Track 01",
    type: "Flagship",
    weeks: 14,
    name: "Generative AI +\nAgentic AI",
    badges: [
      { text: "Highest Demand", type: "amber" },
      { text: "10:1 Gap", type: "green" },
      { text: "AI Expert Pipeline", type: "amber" }
    ],
    marketGap: "Pakistan's most undersupplied engineering skill. Generative AI job postings rose 170% in 2024 alone — and supply hasn't caught up.",
    description: "A 14-week programme covering LLM engineering, RAG systems, agentic workflows, fine-tuning open-source models, and LLMOps deployment pipelines. Ends with a production AI product with a live URL — the type of deliverable that demonstrates real capability to any evaluator. Feeds directly into the AI Expert track at Big Binary Tech.",
    duration: "14 weeks · Advanced",
    fee: { min: 55000, max: 75000, currency: "PKR" },
    modules: [
      {
        number: 1,
        name: "Python for AI (Production-Grade)",
        description: "Not beginner Python. OOP, type hints, async I/O, testing, clean architecture. The foundation everything else requires.",
        duration: "Weeks 1–2"
      },
      {
        number: 2,
        name: "LLM Fundamentals + Prompt Engineering",
        description: "How transformers work internally. Prompt patterns, system prompts, few-shot learning, and structured output evaluation.",
        duration: "Weeks 3–4"
      },
      {
        number: 3,
        name: "RAG Systems (Retrieval-Augmented Generation)",
        description: "Vector databases, LangChain, LlamaIndex, document Q&A pipelines, chunking strategies, hybrid search.",
        duration: "Weeks 5–6"
      },
      {
        number: 4,
        name: "Agentic AI — Tool Use + Multi-Agent Systems",
        description: "ReAct agents, function calling, AutoGen, CrewAI. Building systems where LLMs plan and execute multi-step tasks.",
        duration: "Weeks 7–8"
      },
      {
        number: 5,
        name: "Fine-Tuning + LoRA on Open-Source Models",
        description: "Fine-tuning Mistral/LLaMA on HuggingFace. PEFT, LoRA, RLHF basics. When to fine-tune vs RAG.",
        duration: "Weeks 9–10"
      },
      {
        number: 6,
        name: "LLMOps — Deployment + Monitoring",
        description: "FastAPI, Docker, MLflow, AWS Lambda, cost optimisation, model drift detection, production observability.",
        duration: "Weeks 11–12"
      },
      {
        number: 7,
        name: "Capstone: Deployed AI Product",
        description: "Ship a real LLM-powered application with a live URL, business framing, GitHub documentation, and performance benchmarks.",
        duration: "Weeks 13–14"
      }
    ],
    skills: [
      "Python", "LangChain", "LlamaIndex", "OpenAI API", "HuggingFace", "RAG", "Agents",
      "Fine-tuning", "PEFT/LoRA", "FastAPI", "MLflow", "Docker", "AWS Lambda", "Pinecone/FAISS"
    ],
    careerPipeline: [
      { label: "Trainee (this course)", color: "rgba(255,255,255,.2)" },
      { label: "Internee", earning: "PKR 15–25K/mo", color: "#a855f7" },
      { label: "Shadow", earning: "PKR 40–80K/mo", color: "#60a5fa" },
      { label: "AI Expert", earning: "PKR 120–300K/mo", color: "var(--amber)" }
    ],
    careerOutcome: "AI Expert at Big Binary Tech — or independent LLM Engineer billing $50–120/hr internationally.",
    filters: ["ai", "money", "build"],
    seats: 30,
    phone: "0326-0188811"
  },
  {
    id: "cloud",
    position: 2,
    track: "Track 02",
    type: "Advanced Add-On",
    weeks: 12,
    name: "Cloud +\nMLOps",
    badges: [
      { text: "Critical Gap", type: "green" },
      { text: "9% Have This Skill", type: "amber" }
    ],
    marketGap: "Only 9% of engineers globally have real multi-cloud experience. The infrastructure layer that makes AI products survive production.",
    description: "AWS core services, Docker, Kubernetes, CI/CD pipelines, MLflow, model monitoring, and Terraform. Recommended as an advanced add-on following the AI track. Direct pathway to DevOps/AI Expert roles at BBT and on international platforms.",
    duration: "12 weeks · Advanced",
    fee: { min: 55000, max: 75000, currency: "PKR" },
    modules: [
      {
        number: 1,
        name: "AWS Fundamentals",
        description: "EC2, S3, Lambda, RDS, IAM, VPC. Hands-on infrastructure from day one.",
        duration: "Weeks 1–2"
      },
      {
        number: 2,
        name: "Docker + Kubernetes",
        description: "Containerisation, orchestration, Helm charts, production cluster management.",
        duration: "Weeks 3–4"
      },
      {
        number: 3,
        name: "CI/CD Pipelines",
        description: "GitHub Actions, Jenkins, automated testing, build and deploy pipelines for ML models.",
        duration: "Weeks 5–6"
      },
      {
        number: 4,
        name: "ML Pipeline Automation",
        description: "MLflow experiment tracking, model registry, Kubeflow, automated retraining pipelines.",
        duration: "Weeks 7–8"
      },
      {
        number: 5,
        name: "Monitoring + Observability",
        description: "Prometheus, Grafana, AWS CloudWatch, model drift detection, alerting systems.",
        duration: "Weeks 9–10"
      },
      {
        number: 6,
        name: "Capstone: End-to-End MLOps System",
        description: "CI/CD pipeline for a real ML model, with full monitoring dashboard and automated retraining.",
        duration: "Weeks 11–12"
      }
    ],
    skills: [
      "AWS", "Docker", "Kubernetes", "Terraform", "MLflow", "Kubeflow", "Prometheus", "Grafana",
      "GitHub Actions", "CI/CD", "SageMaker"
    ],
    careerPipeline: [
      { label: "Trainee (this course)", color: "rgba(255,255,255,.2)" },
      { label: "Internee", earning: "PKR 15–25K/mo", color: "#a855f7" },
      { label: "Shadow", earning: "PKR 40–80K/mo", color: "#60a5fa" },
      { label: "DevOps/AI Expert", earning: "PKR 120–250K/mo", color: "var(--amber)" }
    ],
    careerOutcome: "DevOps or AI Expert at Big Binary Tech — or MLOps Engineer billing $60–100/hr on international platforms.",
    filters: ["ai", "build", "money"],
    seats: 30,
    phone: "0326-0188811"
  },
  {
    id: "odoo",
    position: 3,
    track: "Track 03",
    type: "Niche Specialist",
    weeks: 12,
    name: "Odoo ERP\nDevelopment",
    badges: [
      { text: "Niche · Very Low Competition", type: "purple" },
      { text: "$3K–15K Per Project", type: "amber" }
    ],
    marketGap: "Gulf and European businesses pay $3K–15K per ERP implementation. Almost no Pakistani institute trains Odoo developers properly.",
    description: "Custom module development with Python ORM, QWeb templating, Owl JS frontend, ERP domain knowledge, and API integrations. Big Binary Tech has active Odoo client work — Internees contribute from day one. The fastest track to client-facing, billable work inside BBT's software house.",
    duration: "12 weeks",
    fee: { min: 55000, max: 75000, currency: "PKR" },
    modules: [
      {
        number: 1,
        name: "Odoo Architecture + Python Backend",
        description: "Module system, ORM, model inheritance, security rules, computed fields, wizards.",
        duration: "Weeks 1–2"
      },
      {
        number: 2,
        name: "Custom Module Development",
        description: "Building business logic from scratch: models, views, actions, workflows, automated actions.",
        duration: "Weeks 3–4"
      },
      {
        number: 3,
        name: "Odoo JS Framework + QWeb Templates",
        description: "Frontend customisation, Owl JS components, UI widgets, custom dashboards.",
        duration: "Weeks 5–6"
      },
      {
        number: 4,
        name: "ERP Domain: Accounting, Inventory, HR",
        description: "Domain knowledge of Odoo's core modules — essential for understanding what clients actually need.",
        duration: "Weeks 7–8"
      },
      {
        number: 5,
        name: "Odoo Integrations (APIs + Webhooks)",
        description: "Connecting Odoo to external systems: REST APIs, XML-RPC, third-party SaaS integrations.",
        duration: "Weeks 9–10"
      },
      {
        number: 6,
        name: "Capstone: Full Client ERP Implementation",
        description: "Real-world scenario: configure, customise, and document an Odoo deployment for a defined business case.",
        duration: "Weeks 11–12"
      }
    ],
    skills: [
      "Python", "Odoo ORM", "QWeb", "Owl JS", "XML-RPC", "REST APIs", "PostgreSQL",
      "JavaScript", "ERP Workflows"
    ],
    careerPipeline: [
      { label: "Trainee (this course)", color: "rgba(255,255,255,.2)" },
      { label: "Internee", earning: "active BBT Odoo projects", color: "#a855f7" },
      { label: "Shadow", earning: "Odoo client delivery", color: "#60a5fa" },
      { label: "Odoo Expert", earning: "$3K–15K/project", color: "#a855f7" }
    ],
    careerOutcome: "Odoo Dev Expert at Big Binary Tech. Gulf / EU client project delivery. One of the scarcest skill sets in Pakistan's tech market.",
    filters: ["build", "money"],
    seats: 30,
    phone: "0326-0188811"
  },
  {
    id: "fullstack",
    position: 4,
    track: "Track 04",
    type: "Industry-Aligned",
    weeks: 16,
    name: "AI-Integrated\nFull Stack",
    badges: [
      { text: "Not Generic Web Dev", type: "green" },
      { text: "Andela Standard Stack", type: "amber" }
    ],
    marketGap: "React + Next.js + Node.js + AI integration — the combination Big Binary Tech's clients actually require. Not the generic web dev course Pakistan has thousands of.",
    description: "React, Next.js, Node.js, PostgreSQL, REST APIs, and an AI integration layer using the OpenAI API. Deployed with Docker and CI/CD. 16 weeks ending with a live, production-grade AI-powered web product.",
    duration: "16 weeks",
    fee: { min: 55000, max: 75000, currency: "PKR" },
    modules: [
      {
        number: 1,
        name: "HTML, CSS + Tailwind (Fast Track)",
        description: "Modern layout, responsive design, component thinking. Not from scratch — practical production approach.",
        duration: "Weeks 1–2"
      },
      {
        number: 2,
        name: "JavaScript + TypeScript",
        description: "Production JS, async/await, modern ES6+, TypeScript fundamentals for enterprise code.",
        duration: "Weeks 3–4"
      },
      {
        number: 3,
        name: "React + Next.js",
        description: "The Andela standard stack. Components, hooks, server-side rendering, App Router, API routes.",
        duration: "Weeks 5–7"
      },
      {
        number: 4,
        name: "Node.js + REST APIs + PostgreSQL",
        description: "Backend development, authentication (JWT/OAuth), database design, ORM with Prisma.",
        duration: "Weeks 8–10"
      },
      {
        number: 5,
        name: "AI Integration Layer",
        description: "OpenAI API integration, streaming responses, LangChain in web apps, AI-powered features.",
        duration: "Weeks 11–12"
      },
      {
        number: 6,
        name: "DevOps: Docker + CI/CD + Cloud Deploy",
        description: "Containerise and deploy real apps. GitHub Actions, Vercel, AWS. Not localhost demos.",
        duration: "Weeks 13–14"
      },
      {
        number: 7,
        name: "Capstone: AI-Powered Web Product",
        description: "Full-stack app with an LLM feature, deployed live, with authentication and real users.",
        duration: "Weeks 15–16"
      }
    ],
    skills: [
      "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "OpenAI API",
      "Docker", "Tailwind CSS", "GitHub Actions", "Vercel", "REST APIs"
    ],
    careerPipeline: [
      { label: "Trainee (this course)", color: "rgba(255,255,255,.2)" },
      { label: "Internee", earning: "PKR 15–25K/mo", color: "#a855f7" },
      { label: "Shadow", earning: "PKR 40–80K/mo", color: "#60a5fa" },
      { label: "Full Stack Expert", earning: "PKR 120–250K/mo", color: "var(--amber)" }
    ],
    careerOutcome: "Full Stack Expert at Big Binary Tech. AI-integrated web apps for international clients. Qualifies for Andela's standard stack placement.",
    filters: ["build", "ai"],
    seats: 30,
    phone: "0326-0188811"
  },
  {
    id: "cyber",
    position: 5,
    track: "Track 05",
    type: "CEH-Aligned",
    weeks: 14,
    name: "Cybersecurity",
    badges: [
      { text: "367% Role Growth", type: "amber" },
      { text: "AI-Enabled Threats", type: "green" }
    ],
    marketGap: "AI-enabled threats are expanding faster than organisations can staff their defences. 367% projected international role growth by 2030. The FBI reported $16.6B in cybercrime losses in 2024.",
    description: "Ethical hacking, penetration testing, cloud security for AWS and Azure, AI-enabled threat detection, SOC automation, and incident response. Aligned to CEH and CompTIA Security+ benchmarks so graduates can pursue international certifications after the course.",
    duration: "14 weeks · CEH-aligned",
    fee: { min: 55000, max: 75000, currency: "PKR" },
    modules: [
      {
        number: 1,
        name: "Networking Fundamentals + Linux",
        description: "TCP/IP, protocols, subnetting, Linux CLI — the foundation every other module requires.",
        duration: "Weeks 1–2"
      },
      {
        number: 2,
        name: "Ethical Hacking + Penetration Testing",
        description: "Kali Linux, Metasploit, Nmap, OWASP Top 10 exploits, web app pen testing.",
        duration: "Weeks 3–5"
      },
      {
        number: 3,
        name: "Cloud Security (AWS + Azure)",
        description: "IAM misconfigurations, S3 bucket exposure, cloud SIEM, container security, Zero Trust architecture.",
        duration: "Weeks 6–7"
      },
      {
        number: 4,
        name: "AI-Enabled Threat Detection",
        description: "Anomaly detection models, SIEM automation with ML, LLMs for SOC analysts, AI-powered attack simulation.",
        duration: "Weeks 8–9"
      },
      {
        number: 5,
        name: "Incident Response + Digital Forensics",
        description: "Real-world IR playbooks, memory forensics, log analysis, chain of custody, DFIR methodology.",
        duration: "Weeks 10–11"
      },
      {
        number: 6,
        name: "Certification Prep: CEH + CompTIA Security+",
        description: "Exam-aligned practice, mock assessments, lab environments. Graduates are ready to sit CEH or Security+.",
        duration: "Weeks 12–14"
      }
    ],
    skills: [
      "Kali Linux", "Metasploit", "Nmap", "Wireshark", "Cloud Security", "SIEM", "Zero Trust",
      "SOC Automation", "IR Playbooks", "Burp Suite"
    ],
    careerPipeline: [
      { label: "Trainee (this course)", color: "rgba(255,255,255,.2)" },
      { label: "Internee", earning: "PKR 15–25K/mo", color: "#a855f7" },
      { label: "Shadow", earning: "PKR 40–80K/mo", color: "#60a5fa" },
      { label: "Cybersecurity Expert", earning: "PKR 120–300K/mo", color: "var(--amber)" }
    ],
    careerOutcome: "Cybersecurity Expert at Big Binary Tech or independent consultant. CEH-ready. International demand growing at 367%.",
    filters: ["build", "money"],
    seats: 30,
    phone: "0326-0188811"
  },
  {
    id: "uiux",
    position: 6,
    track: "Track 06",
    type: "Redesigned Track",
    weeks: 10,
    name: "UI/UX +\nBrand Design",
    badges: [
      { text: "Replaces Graphics Design", type: "blue" },
      { text: "Software House Demand", type: "amber" }
    ],
    marketGap: "Generic graphic design is being automated by AI tools. What clients pay for is Figma, UX research, and design systems — and every Big Binary Tech project needs one.",
    description: "Figma from foundations to design systems, UX research methodologies, interactive prototyping, brand identity development, and AI-assisted design tools. Graduates are absorbed into active BBT client work immediately — every software project needs a designer.",
    duration: "10 weeks",
    fee: { min: 55000, max: 75000, currency: "PKR" },
    modules: [
      {
        number: 1,
        name: "Design Fundamentals + Typography",
        description: "Colour theory, grids, visual hierarchy, type systems. The craft foundation.",
        duration: "Week 1"
      },
      {
        number: 2,
        name: "Figma — UI Design + Prototyping",
        description: "Components, auto-layout, variants, interactive prototypes, advanced prototyping flows.",
        duration: "Weeks 2–3"
      },
      {
        number: 3,
        name: "UX Research + User Flows",
        description: "Wireframing, user journey mapping, persona development, usability testing methods.",
        duration: "Weeks 4–5"
      },
      {
        number: 4,
        name: "Design Systems + Handoff",
        description: "Token design, documentation, Figma-to-developer handoff, Storybook fundamentals.",
        duration: "Week 6"
      },
      {
        number: 5,
        name: "AI-Assisted Design Tools",
        description: "Midjourney, Adobe Firefly, Framer AI — acceleration tools, not replacements.",
        duration: "Week 7"
      },
      {
        number: 6,
        name: "Brand Identity Design",
        description: "Logo design process, brand guidelines, pitch deck design, presentation design systems.",
        duration: "Weeks 8–9"
      },
      {
        number: 7,
        name: "Capstone: Full Product UI + Brand",
        description: "Design a real product from brief to handoff — including brand identity, UX flows, and a Figma design system.",
        duration: "Week 10"
      }
    ],
    skills: [
      "Figma", "UX Research", "Design Systems", "Prototyping", "Brand Identity", "Midjourney",
      "Adobe Firefly", "Framer AI", "Developer Handoff"
    ],
    careerPipeline: [
      { label: "Trainee (this course)", color: "rgba(255,255,255,.2)" },
      { label: "Internee", earning: "design on BBT projects", color: "#a855f7" },
      { label: "Shadow", earning: "product UI delivery", color: "#60a5fa" },
      { label: "Design Expert", earning: "PKR 80–200K/mo", color: "var(--amber)" }
    ],
    careerOutcome: "Design Expert at Big Binary Tech. Every software project needs a designer. Every BBT client needs one.",
    filters: ["creative", "fast"],
    seats: 30,
    phone: "0326-0188811"
  },
  {
    id: "marketing",
    position: 7,
    track: "Track 07",
    type: "Fastest to Income",
    weeks: 8,
    name: "AI-Powered\nMarketing + Sales",
    badges: [
      { text: "Sales Expert Pipeline", type: "amber" },
      { text: "8 Weeks to Income", type: "green" }
    ],
    marketGap: "The shortest track to a compensated role inside BBT. Trains skilled digital marketers and BBT's own Sales Experts — simultaneously. Shopify is one module inside this track, not a standalone course.",
    description: "Digital marketing fundamentals, AI-assisted content creation, Meta Ads and Google Ads with live budgets, HubSpot CRM, outbound email sequences, LinkedIn outreach, tele-sales frameworks, and Shopify e-commerce marketing. The fastest track to a compensated role inside BBT.",
    duration: "8 weeks · Fastest track",
    fee: { min: 55000, max: 75000, currency: "PKR" },
    modules: [
      {
        number: 1,
        name: "Digital Marketing Fundamentals",
        description: "SEO, paid ads, email marketing, conversion funnels — the full marketing stack in one week.",
        duration: "Week 1"
      },
      {
        number: 2,
        name: "AI-Powered Content Creation",
        description: "ChatGPT for copywriting, Midjourney for creative, Canva AI for production-speed content at scale.",
        duration: "Week 2"
      },
      {
        number: 3,
        name: "Meta Ads + Google Ads (Hands-On)",
        description: "Live campaigns with real budgets. A/B testing, audience targeting, analytics interpretation, ROI tracking.",
        duration: "Weeks 3–4"
      },
      {
        number: 4,
        name: "HubSpot CRM + Outbound Automation",
        description: "Lead generation, cold email sequences, LinkedIn Sales Navigator, automated follow-up systems.",
        duration: "Week 5"
      },
      {
        number: 5,
        name: "Tele-Sales + Discovery Call Training",
        description: "Script frameworks, objection handling, closing techniques. The Sales Expert track curriculum — live.",
        duration: "Week 6"
      },
      {
        number: 6,
        name: "Shopify + E-Commerce Marketing",
        description: "Store setup, product page optimisation, paid traffic for Shopify, conversion rate optimisation.",
        duration: "Weeks 7–8"
      }
    ],
    skills: [
      "Meta Ads", "Google Ads", "HubSpot CRM", "ChatGPT", "Canva AI", "LinkedIn Outreach",
      "Cold Email", "Tele-Sales", "Shopify", "Google Analytics"
    ],
    careerPipeline: [
      { label: "Trainee (this course)", color: "rgba(255,255,255,.2)" },
      { label: "Internee", earning: "BBT marketing + BD", color: "#a855f7" },
      { label: "Shadow", earning: "client-facing sales", color: "#60a5fa" },
      { label: "Sales Expert", earning: "PKR 60–120K + commission", color: "var(--amber)" }
    ],
    careerOutcome: "Sales Expert at Big Binary Tech, earning base + commission. Or independent digital marketing consultant.",
    filters: ["creative", "fast", "money"],
    seats: 30,
    phone: "0326-0188811"
  }
];

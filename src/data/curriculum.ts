export interface CurriculumWeek {
  weekRange: string;
  title: string;
  description: string;
  skills: string[];
  isCapstone?: boolean;
}

export interface CurriculumOutcome {
  label: string;
  value: string;
  highlight?: string;
}

export interface CurriculumTrack {
  id: string;
  trackNumber: string;
  type: string;
  title: string;
  durationWeeks: number;
  price: string;
  meta: string[];
  weeks: CurriculumWeek[];
  outcomes: CurriculumOutcome[];
}

export const curriculumData: CurriculumTrack[] = [
  {
    id: "ai",
    trackNumber: "01",
    type: "Flagship",
    title: "Generative AI + Agentic AI",
    durationWeeks: 14,
    price: "",
    meta: ["14 Weeks", "AI Expert Pipeline", "10:1 Demand Gap"],
    weeks: [
      {
        weekRange: "Week 1–2",
        title: "Python for AI (Production-Grade)",
        description: "Not tutorial Python. OOP, type hints, async I/O, pytest, clean code architecture. The foundation everything else runs on.",
        skills: ["Python 3.12", "OOP", "pytest", "async/await"],
      },
      {
        weekRange: "Week 3–4",
        title: "LLM Fundamentals + Prompt Engineering",
        description: "How transformers work. Tokenisation, attention, system prompts, few-shot learning, chain-of-thought, structured output, evaluation frameworks.",
        skills: ["OpenAI API", "Anthropic API", "Prompt Patterns", "Evals"],
      },
      {
        weekRange: "Week 5–6",
        title: "RAG Systems",
        description: "Vector databases (Pinecone, FAISS, Chroma), document chunking strategies, embedding models, hybrid search, LangChain and LlamaIndex orchestration.",
        skills: ["LangChain", "LlamaIndex", "Pinecone", "FAISS", "Embeddings"],
      },
      {
        weekRange: "Week 7–8",
        title: "Agentic AI — Tool Use + Multi-Agent",
        description: "ReAct agents, function calling, AutoGen multi-agent systems, CrewAI, tool integration, memory systems for agents, agent evaluation.",
        skills: ["AutoGen", "CrewAI", "Function Calling", "ReAct"],
      },
      {
        weekRange: "Week 9–10",
        title: "Fine-Tuning + LoRA on Open-Source Models",
        description: "When to fine-tune vs RAG. Fine-tuning Mistral-7B and LLaMA-3 on HuggingFace. PEFT, LoRA, QLoRA. Weights & Biases for experiment tracking.",
        skills: ["HuggingFace", "PEFT", "LoRA", "W&B", "RLHF basics"],
      },
      {
        weekRange: "Week 11–12",
        title: "LLMOps — Deployment + Monitoring",
        description: "FastAPI serving, Docker containerisation, MLflow tracking, AWS Lambda deployment, cost optimisation, latency benchmarking, model drift detection.",
        skills: ["FastAPI", "Docker", "MLflow", "AWS Lambda", "CloudWatch"],
      },
      {
        weekRange: "Week 13–14 · Capstone",
        title: "Deployed AI Product with Live URL",
        description: "Ship a production LLM-powered application: live URL, GitHub repo with CI/CD, performance benchmarks, business case documentation. This is your portfolio centrepiece.",
        skills: ["Full Stack Deploy", "Live Demo", "Business Framing"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "AI Expert at Big Binary Tech" },
      { label: "International Path", value: "LLM Engineer via Andela/Toptal", highlight: "$50–120/hr" },
      { label: "Market Gap", value: "10:1 demand-to-supply ratio", highlight: "Andela training 15,000 — still not enough" },
    ],
  },

  {
    id: "cloud",
    trackNumber: "02",
    type: "Advanced Add-On",
    title: "Cloud + MLOps",
    durationWeeks: 12,
    price: "",
    meta: ["12 Weeks", "Critical Gap — 9% Coverage"],
    weeks: [
      {
        weekRange: "Week 1–2",
        title: "AWS Fundamentals",
        description: "EC2, S3, Lambda, RDS, IAM policies, VPC architecture, Route 53. Real hands-on infrastructure, not just theory.",
        skills: ["EC2", "S3", "Lambda", "IAM", "VPC"],
      },
      {
        weekRange: "Week 3–4",
        title: "Docker + Kubernetes",
        description: "Container fundamentals, Dockerfile authoring, docker-compose, Kubernetes clusters, Helm charts, production k8s patterns.",
        skills: ["Docker", "Kubernetes", "Helm", "docker-compose"],
      },
      {
        weekRange: "Week 5–6",
        title: "CI/CD Pipelines",
        description: "GitHub Actions workflows, automated testing, build pipelines for Python/Node projects, deployment gates, rollback strategies.",
        skills: ["GitHub Actions", "Jenkins", "ArgoCD", "Testing Automation"],
      },
      {
        weekRange: "Week 7–8",
        title: "ML Pipeline Automation",
        description: "MLflow experiment tracking and model registry, Kubeflow pipelines, automated retraining triggers, model versioning.",
        skills: ["MLflow", "Kubeflow", "Model Registry", "DVC"],
      },
      {
        weekRange: "Week 9–10",
        title: "Monitoring + Observability",
        description: "Prometheus metrics, Grafana dashboards, AWS CloudWatch, model drift detection algorithms, SLA alerting, incident runbooks.",
        skills: ["Prometheus", "Grafana", "CloudWatch", "Drift Detection"],
      },
      {
        weekRange: "Week 11–12 · Capstone",
        title: "End-to-End MLOps System",
        description: "CI/CD pipeline for a real ML model with automated testing, deployment to AWS, live monitoring dashboard, and automated retraining on data drift.",
        skills: ["Full MLOps Pipeline", "Live Dashboard", "Auto-Retrain"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "DevOps/AI Expert at Big Binary Tech" },
      { label: "International Path", value: "MLOps Engineer via Andela/Toptal", highlight: "$60–100/hr" },
      { label: "Market Gap", value: "Only 9% of engineers globally", highlight: "have real multi-cloud MLOps experience" },
    ],
  },

  {
    id: "odoo",
    trackNumber: "03",
    type: "Niche Specialist",
    title: "Odoo ERP Development",
    durationWeeks: 12,
    price: "",
    meta: ["12 Weeks", "Gulf + EU Client Demand"],
    weeks: [
      {
        weekRange: "Week 1–2",
        title: "Odoo Architecture + Python Backend",
        description: "Odoo module system, ORM models, computed fields, model inheritance patterns, security rules, automated actions, scheduled tasks.",
        skills: ["Python ORM", "Models", "Inheritance", "Security"],
      },
      {
        weekRange: "Week 3–4",
        title: "Custom Module Development",
        description: "Building complete business modules from scratch: models, views (tree/form/kanban), actions, menus, wizards, email templates.",
        skills: ["Module Scaffold", "Views", "Actions", "Wizards"],
      },
      {
        weekRange: "Week 5–6",
        title: "Odoo JS Framework + QWeb",
        description: "QWeb XML templating, Owl JS component framework, custom widgets, client actions, real-time dashboards.",
        skills: ["QWeb", "Owl JS", "Custom Widgets", "Client Actions"],
      },
      {
        weekRange: "Week 7–8",
        title: "ERP Domain Knowledge",
        description: "Accounting module (journal entries, reconciliation), inventory management (warehouses, routes), HR and payroll module workflows.",
        skills: ["Accounting", "Inventory", "HR", "Payroll"],
      },
      {
        weekRange: "Week 9–10",
        title: "Odoo API Integrations",
        description: "XML-RPC and JSON-RPC interfaces, REST API connectors, webhooks, connecting Odoo to Shopify, payment gateways, external SaaS tools.",
        skills: ["XML-RPC", "JSON-RPC", "Webhooks", "REST APIs"],
      },
      {
        weekRange: "Week 11–12 · Capstone",
        title: "Full Client ERP Implementation",
        description: "Real-world scenario: configure Odoo for a defined business (retail/manufacturing/services), develop custom modules, document the implementation and deliver a working demo.",
        skills: ["Full Implementation", "Custom Modules", "Client Delivery"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "Odoo Dev Expert at Big Binary Tech", highlight: "$3,000–15,000/project" },
      { label: "Niche Advantage", value: "Almost no Pakistani institutes", highlight: "teach Odoo development properly" },
      { label: "Live Work", value: "BBT has active Odoo client projects", highlight: "Internees contribute from day one" },
    ],
  },

  {
    id: "fullstack",
    trackNumber: "04",
    type: "Industry-Aligned",
    title: "AI-Integrated Full Stack",
    durationWeeks: 16,
    price: "",
    meta: ["16 Weeks", "React + Node + AI"],
    weeks: [
      {
        weekRange: "Week 1–2",
        title: "HTML, CSS + Tailwind",
        description: "Modern semantic HTML, CSS fundamentals, Tailwind CSS utility-first styling, responsive design patterns, component thinking.",
        skills: ["HTML5", "CSS3", "Tailwind CSS", "Responsive"],
      },
      {
        weekRange: "Week 3–4",
        title: "JavaScript + TypeScript",
        description: "Modern ES6+, async/await, modules, TypeScript fundamentals, type systems for enterprise-grade code.",
        skills: ["ES6+", "TypeScript", "async/await", "Modules"],
      },
      {
        weekRange: "Week 5–7",
        title: "React + Next.js",
        description: "React hooks, component architecture, Next.js App Router, server components, API routes, authentication integration.",
        skills: ["React", "Next.js 14", "App Router", "Server Components"],
      },
      {
        weekRange: "Week 8–10",
        title: "Node.js + REST APIs + PostgreSQL",
        description: "Express/Fastify backend, RESTful API design, PostgreSQL database design, Prisma ORM, JWT/OAuth authentication.",
        skills: ["Node.js", "PostgreSQL", "Prisma ORM", "JWT", "OAuth"],
      },
      {
        weekRange: "Week 11–12",
        title: "AI Integration Layer",
        description: "OpenAI API integration, streaming text responses, LangChain in web apps, AI-powered features (search, summarisation, chat).",
        skills: ["OpenAI API", "Streaming", "LangChain", "AI Search"],
      },
      {
        weekRange: "Week 13–14",
        title: "DevOps: Docker + CI/CD + Cloud Deploy",
        description: "Containerise applications, GitHub Actions workflows, deploy to Vercel and AWS. Not localhost — real production deployments.",
        skills: ["Docker", "GitHub Actions", "Vercel", "AWS EC2"],
      },
      {
        weekRange: "Week 15–16 · Capstone",
        title: "AI-Powered Web Product (Live)",
        description: "Full-stack web application with at least one AI feature, live deployed URL, authentication, real users, and deployment documentation.",
        skills: ["Live App", "AI Feature", "Real Users"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "Full Stack Expert at Big Binary Tech" },
      { label: "Platform Path", value: "Andela standard stack qualification", highlight: "React + Node + TypeScript" },
      { label: "Differentiator", value: "AI integration layer — not generic web dev", highlight: "commands 30–50% higher rates" },
    ],
  },

  {
    id: "cyber",
    trackNumber: "05",
    type: "CEH-Aligned",
    title: "Cybersecurity",
    durationWeeks: 14,
    price: "",
    meta: ["14 Weeks", "CEH + CompTIA Ready"],
    weeks: [
      {
        weekRange: "Week 1–2",
        title: "Networking Fundamentals + Linux",
        description: "TCP/IP model, OSI layers, routing, subnetting, firewalls, Linux command line, file permissions, user management.",
        skills: ["TCP/IP", "Linux CLI", "Networking", "Firewalls"],
      },
      {
        weekRange: "Week 3–5",
        title: "Ethical Hacking + Penetration Testing",
        description: "Reconnaissance, scanning, exploitation with Metasploit, web app testing with Burp Suite, OWASP Top 10 attacks and mitigations.",
        skills: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "OWASP"],
      },
      {
        weekRange: "Week 6–7",
        title: "Cloud Security (AWS + Azure)",
        description: "IAM policy misconfigurations, S3 bucket exposure, container security, Zero Trust architecture, AWS CloudTrail and SecurityHub.",
        skills: ["AWS Security", "Zero Trust", "IAM", "CloudTrail"],
      },
      {
        weekRange: "Week 8–9",
        title: "AI-Enabled Threat Detection",
        description: "ML-powered anomaly detection in SIEM, LLMs for log analysis and SOC automation, AI-generated phishing detection, adversarial AI attacks.",
        skills: ["SIEM", "ML Anomaly Detection", "SOC Automation", "LLM for Security"],
      },
      {
        weekRange: "Week 10–11",
        title: "Incident Response + Digital Forensics",
        description: "IR playbook design, memory forensics, log analysis and correlation, chain of custody, DFIR methodology, tabletop exercises.",
        skills: ["DFIR", "Memory Forensics", "Log Analysis", "IR Playbooks"],
      },
      {
        weekRange: "Week 12–14 · Cert Prep + Capstone",
        title: "CEH + CompTIA Security+ Prep",
        description: "Exam-aligned mock assessments, lab environments, practice scenarios. Graduates leave ready to sit CEH or CompTIA Security+ independently.",
        skills: ["CEH Practice", "Security+ Prep", "Lab Environments"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "Cybersecurity Expert at Big Binary Tech" },
      { label: "Certifications", value: "CEH and CompTIA Security+ ready", highlight: "sit exams after course completion" },
      { label: "Market Gap", value: "367% projected role growth", highlight: "$16.6B in cybercrime losses in 2024" },
    ],
  },

  {
    id: "uiux",
    trackNumber: "06",
    type: "Redesigned Track",
    title: "UI/UX + Brand Design",
    durationWeeks: 10,
    price: "",
    meta: ["10 Weeks", "Replaces Graphics Design"],
    weeks: [
      {
        weekRange: "Week 1",
        title: "Design Fundamentals + Typography",
        description: "Colour theory, 8pt grid systems, visual hierarchy, type systems, white space, the principles that separate professional from amateur design.",
        skills: ["Colour Theory", "Typography", "Grid Systems", "Visual Hierarchy"],
      },
      {
        weekRange: "Week 2–3",
        title: "Figma — UI Design + Prototyping",
        description: "Auto-layout, components, variants, design tokens, interactive prototyping, complex animation flows in Figma.",
        skills: ["Figma", "Auto-Layout", "Components", "Prototyping"],
      },
      {
        weekRange: "Week 4–5",
        title: "UX Research + User Flows",
        description: "Wireframing methodologies, user persona development, journey mapping, usability testing, heuristic evaluation, A/B test design.",
        skills: ["Wireframing", "User Testing", "Journey Maps", "Personas"],
      },
      {
        weekRange: "Week 6",
        title: "Design Systems + Developer Handoff",
        description: "Token design, component documentation, Figma Dev Mode, Storybook basics, design specification standards for engineering teams.",
        skills: ["Design Tokens", "Documentation", "Dev Handoff", "Storybook"],
      },
      {
        weekRange: "Week 7",
        title: "AI-Assisted Design Tools",
        description: "Midjourney for concept generation, Adobe Firefly for asset creation, Framer AI for prototyping, using AI to 10x output without losing craft.",
        skills: ["Midjourney", "Adobe Firefly", "Framer AI", "AI Workflows"],
      },
      {
        weekRange: "Week 8–9",
        title: "Brand Identity Design",
        description: "Logo design process, brand guidelines documentation, pitch deck design, social media systems — the deliverables BBT's software house clients actually commission.",
        skills: ["Logo Design", "Brand Guidelines", "Pitch Decks", "Social Systems"],
      },
      {
        weekRange: "Week 10 · Capstone",
        title: "Full Product UI + Brand Identity",
        description: "Design a complete product: brand identity, full UX flow, Figma design system, and handoff-ready specs. Real brief, real feedback, real portfolio piece.",
        skills: ["Complete Design System", "Full UX Flow", "Handoff Ready"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "Design Expert at Big Binary Tech" },
      { label: "Immediate Use", value: "Every BBT project needs a designer", highlight: "Internees work on live projects immediately" },
      { label: "Why Not Graphics Design", value: "Generic design is being automated", highlight: "Figma + UX = what clients actually pay for" },
    ],
  },

  {
    id: "marketing",
    trackNumber: "07",
    type: "Shortest Track",
    title: "AI-Powered Marketing + Sales",
    durationWeeks: 8,
    price: "",
    meta: ["8 Weeks", "Sales Expert Pipeline"],
    weeks: [
      {
        weekRange: "Week 1",
        title: "Digital Marketing Fundamentals",
        description: "The full marketing stack in one week: SEO basics, paid advertising overview, email marketing, conversion funnels, analytics basics.",
        skills: ["SEO", "Funnels", "Analytics", "Email Marketing"],
      },
      {
        weekRange: "Week 2",
        title: "AI-Powered Content Creation",
        description: "ChatGPT for long-form and short-form copywriting, Midjourney for visual content, Canva AI for production-speed creative at scale.",
        skills: ["ChatGPT Prompting", "Midjourney", "Canva AI", "Content Systems"],
      },
      {
        weekRange: "Week 3–4",
        title: "Meta Ads + Google Ads (Hands-On)",
        description: "Live campaigns with real budgets. Audience targeting, A/B testing creative, analytics interpretation, ROI tracking, scaling winning ads.",
        skills: ["Meta Ads Manager", "Google Ads", "A/B Testing", "ROI Tracking"],
      },
      {
        weekRange: "Week 5",
        title: "HubSpot CRM + Outbound Automation",
        description: "HubSpot setup and pipeline management, cold email sequences, LinkedIn Sales Navigator, automated follow-up systems, lead scoring.",
        skills: ["HubSpot", "Cold Email", "LinkedIn Sales Nav", "Automation"],
      },
      {
        weekRange: "Week 6",
        title: "Tele-Sales + Discovery Call Training",
        description: "Sales script frameworks, SPIN selling, objection handling, discovery call structure, closing techniques — the full Sales Expert curriculum.",
        skills: ["SPIN Selling", "Objection Handling", "Discovery Calls", "Closing"],
      },
      {
        weekRange: "Week 7–8 · Capstone",
        title: "Shopify + E-Commerce Marketing Campaign",
        description: "Set up a Shopify store, build a full marketing funnel, run a live paid campaign, and demonstrate measurable results. Real budget, real data.",
        skills: ["Shopify", "Live Campaign", "Real Results"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "Sales Expert at Big Binary Tech" },
      { label: "Shortest Track", value: "8 weeks · shortest track in the BBT programme" },
      { label: "Dual Purpose", value: "Trains digital marketers AND", highlight: "BBT's own internal BD team simultaneously" },
    ],
  },
];

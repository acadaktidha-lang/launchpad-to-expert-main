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
      { label: "International Path", value: "LLM Engineer via Andela/Toptal", highlight: "Global-ready. Remote-ready. In-demand." },
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
      { label: "International Path", value: "MLOps Engineer via Andela/Toptal", highlight: "One of the rarest skill sets in the world." },
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
      { label: "Expert Outcome", value: "Odoo Dev Expert at Big Binary Tech", highlight: "A niche most developers have never even heard of." },
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
      { label: "Differentiator", value: "AI integration layer — not generic web dev", highlight: "The skill gap clients actually pay a premium for." },
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
  {
    id: "python-dev",
    trackNumber: "08",
    type: "Flagship",
    title: "Python for Development",
    durationWeeks: 12,
    price: "",
    meta: ["12 Weeks", "FastAPI + PostgreSQL + GitHub", "Backend API Pipeline"],
    weeks: [
      {
        weekRange: "Week 1",
        title: "Python Basics",
        description: "Python setup and IDE, variables and data types (int, float, string, bool), input/output. Operators, type casting, and mini exercises to solidify fundamentals.",
        skills: ["Python 3", "Variables", "Data Types", "Operators"],
      },
      {
        weekRange: "Week 2",
        title: "Control Flow",
        description: "If/else/elif and nested conditions. For and while loops, break and continue. Structured practice problems to build logical thinking.",
        skills: ["If/Else", "Loops", "Break/Continue"],
      },
      {
        weekRange: "Week 3",
        title: "Data Structures",
        description: "Lists, indexing, slicing, and list methods. Tuples, sets, and dictionaries with real-world use cases and pattern recognition.",
        skills: ["Lists", "Tuples", "Dicts", "Sets"],
      },
      {
        weekRange: "Week 4",
        title: "Functions & Modules",
        description: "Functions, parameters, return values, default and keyword arguments. Modules and imports, built-in modules like math and random.",
        skills: ["Functions", "Modules", "math", "random"],
      },
      {
        weekRange: "Week 5",
        title: "Advanced Python Basics",
        description: "File handling (read/write) and exception handling with try/except. Intro to OOP with classes and objects. Mini project: CLI Student Manager.",
        skills: ["File I/O", "try/except", "OOP", "CLI App"],
      },
      {
        weekRange: "Week 6",
        title: "Git & GitHub",
        description: "Git basics — init, add, commit, branching. GitHub push, pull, clone, pull requests, and collaboration workflow for real team development.",
        skills: ["Git", "GitHub", "Branching", "PRs"],
      },
      {
        weekRange: "Week 7",
        title: "FastAPI Basics",
        description: "What is an API, REST concepts. FastAPI setup, first GET endpoint. Path parameters, query parameters, and request/response models.",
        skills: ["FastAPI", "REST", "GET", "Pydantic"],
      },
      {
        weekRange: "Week 8",
        title: "FastAPI Intermediate",
        description: "POST, PUT, DELETE endpoints with Pydantic model validation. Dependency injection and API structure with routers for production-ready code.",
        skills: ["CRUD", "Pydantic", "Routers", "DI"],
      },
      {
        weekRange: "Week 9",
        title: "Authentication & Middleware",
        description: "Basic authentication and JWT tokens. Middleware setup and error handling in FastAPI for secure, production-grade APIs.",
        skills: ["JWT", "Auth", "Middleware", "Error Handling"],
      },
      {
        weekRange: "Week 10",
        title: "PostgreSQL Basics",
        description: "Database fundamentals, SQL basics, tables, CRUD queries. Relationships, intro to PostgreSQL, and pgAdmin for database management.",
        skills: ["SQL", "PostgreSQL", "pgAdmin", "CRUD"],
      },
      {
        weekRange: "Week 11",
        title: "FastAPI + PostgreSQL",
        description: "ORM intro with SQLAlchemy, connect FastAPI to the database. Full CRUD APIs with persistent storage and clean project structure.",
        skills: ["SQLAlchemy", "ORM", "DB Integration"],
      },
      {
        weekRange: "Week 12 · Capstone",
        title: "Final Project + Deployment",
        description: "Build a user authentication system with full CRUD APIs (Task Manager / Student System). API testing, deployment basics, and final review.",
        skills: ["Full API Build", "Auth System", "Deployment"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "Python/Backend Developer at Big Binary Tech" },
      { label: "Tech Stack", value: "Python · FastAPI · PostgreSQL · GitHub", highlight: "Production-ready backend engineering skills" },
      { label: "Market Demand", value: "FastAPI is the fastest-growing Python framework", highlight: "Paired with PostgreSQL — the industry-standard stack" },
    ],
  },
  {
    id: "python-ds-ai",
    trackNumber: "09",
    type: "Advanced Add-On",
    title: "Python for Data Science & AI",
    durationWeeks: 12,
    price: "",
    meta: ["12 Weeks", "NumPy · Pandas · ML · Deep Learning", "AI/ML Foundation Track"],
    weeks: [
      {
        weekRange: "Week 1",
        title: "Python Basics",
        description: "Python setup and IDE, variables and data types, input/output. Operators, type casting, and mini exercises to build solid fundamentals.",
        skills: ["Python 3", "Variables", "Data Types", "Operators"],
      },
      {
        weekRange: "Week 2",
        title: "Control Flow",
        description: "If/else/elif and nested conditions. For and while loops, break and continue. Structured practice problems for logical reasoning.",
        skills: ["If/Else", "Loops", "Break/Continue"],
      },
      {
        weekRange: "Week 3",
        title: "Data Structures",
        description: "Lists, indexing, slicing, and list methods. Tuples, sets, and dictionaries with real-world use cases to cement understanding.",
        skills: ["Lists", "Tuples", "Dicts", "Sets"],
      },
      {
        weekRange: "Week 4",
        title: "Functions & Modules",
        description: "Functions, parameters, return values, default and keyword arguments. Modules and imports, built-in libraries like math and random.",
        skills: ["Functions", "Modules", "math", "random"],
      },
      {
        weekRange: "Week 5",
        title: "Advanced Python Basics",
        description: "File handling and exception handling with try/except. Intro to OOP with classes and objects. Mini project: CLI Student Manager app.",
        skills: ["File I/O", "try/except", "OOP", "CLI App"],
      },
      {
        weekRange: "Week 6",
        title: "Intro to Data Science + NumPy",
        description: "What is Data Science and AI with real-world examples. NumPy arrays (1D, 2D), indexing, slicing, and mathematical operations.",
        skills: ["NumPy", "Arrays", "Indexing", "Math Ops"],
      },
      {
        weekRange: "Week 7",
        title: "Pandas (Data Handling)",
        description: "Intro to Pandas: Series and DataFrames, reading CSV files. Data cleaning, filtering, sorting, and handling missing data.",
        skills: ["Pandas", "DataFrames", "CSV", "Data Cleaning"],
      },
      {
        weekRange: "Week 8",
        title: "Data Visualization",
        description: "Intro to Matplotlib — line, bar, scatter plots. Intro to Seaborn — heatmaps and distributions. Graph styling for professional output.",
        skills: ["Matplotlib", "Seaborn", "Heatmaps", "Plots"],
      },
      {
        weekRange: "Week 9",
        title: "Exploratory Data Analysis (EDA)",
        description: "Combining Pandas with visualization for real dataset analysis. Mini project: analyse a dataset (students/sales/weather) and extract insights.",
        skills: ["EDA", "Real Datasets", "Insights", "Pandas + Viz"],
      },
      {
        weekRange: "Week 10",
        title: "Machine Learning Basics",
        description: "What is machine learning, supervised vs unsupervised types. Intro to Scikit-learn, linear regression, train/test split, and model evaluation.",
        skills: ["Scikit-learn", "Linear Regression", "Train/Test Split"],
      },
      {
        weekRange: "Week 11",
        title: "Advanced ML + Projects",
        description: "Classification with Logistic Regression and KNN. Overfitting vs underfitting. Mini ML project: predict student marks or house prices.",
        skills: ["Classification", "Logistic Reg", "KNN", "Overfitting"],
      },
      {
        weekRange: "Week 12 · Capstone",
        title: "Deep Learning Introduction",
        description: "Neural networks basics, intro to TensorFlow — build a simple model. Intro to PyTorch, compare with TensorFlow. Final project overview and presentation.",
        skills: ["TensorFlow", "PyTorch", "Neural Nets", "Final Project"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "Data Science / AI Foundation Engineer at Big Binary Tech" },
      { label: "AI Track Gateway", value: "Direct pathway into the Generative AI + Agentic AI track", highlight: "Build the ML foundation before going LLM-native" },
      { label: "Stack Covered", value: "NumPy · Pandas · Scikit-learn · TensorFlow · PyTorch", highlight: "The complete Python AI/ML toolkit in 12 weeks" },
    ],
  },
  {
    id: "webdev-mern",
    trackNumber: "10",
    type: "Industry-Aligned",
    title: "Web Development Expert (MERN)",
    durationWeeks: 12,
    price: "",
    meta: ["12 Weeks", "Full-Stack MERN + Next.js", "PKR 70k–200k/mo", "Freelance: $15–$60/hr"],
    weeks: [
      {
        weekRange: "Week 1",
        title: "HTML5, CSS3 & Responsive Design",
        description: "Semantic HTML5, CSS3 Flexbox and Grid, responsive mobile-first design, media queries, CSS animations, custom properties, and cross-browser testing.",
        skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive"],
      },
      {
        weekRange: "Week 2",
        title: "JavaScript ES6+ & DOM",
        description: "Arrow functions, destructuring, async/await, Fetch API, array methods. DOM manipulation, local storage, debouncing, throttling, and event delegation.",
        skills: ["ES6+", "async/await", "DOM", "Fetch API"],
      },
      {
        weekRange: "Week 3",
        title: "Git, GitHub & Dev Workflow",
        description: "Git fundamentals, branching, pull requests, code review. Advanced Git: rebase, stash, cherry-pick, Gitflow. VS Code setup and team workflow simulation.",
        skills: ["Git", "GitHub", "Gitflow", "VS Code"],
      },
      {
        weekRange: "Week 4",
        title: "React.js Fundamentals",
        description: "Components, JSX, props, useState, useEffect, React Router v6. Component composition, controlled forms, error boundaries, and lazy loading with Suspense.",
        skills: ["React", "JSX", "Hooks", "React Router"],
      },
      {
        weekRange: "Week 5",
        title: "Advanced React — State & Hooks",
        description: "useContext, useReducer, custom hooks, React Query for server state. Optimistic updates, useMemo, useCallback, and re-render performance optimisation.",
        skills: ["useContext", "React Query", "Custom Hooks", "Performance"],
      },
      {
        weekRange: "Week 6",
        title: "Tailwind CSS & UI Libraries",
        description: "Tailwind utility classes, ShadCN/UI and Radix UI integration, accessible component systems. Storybook, dark mode implementation, ARIA and keyboard navigation.",
        skills: ["Tailwind CSS", "ShadCN/UI", "Storybook", "a11y"],
      },
      {
        weekRange: "Week 7",
        title: "Node.js & Express.js Backend",
        description: "Node runtime, npm ecosystem, Express routes, middleware, error handling, RESTful API design. Input validation with express-validator, file uploads with Multer.",
        skills: ["Node.js", "Express", "REST API", "Multer"],
      },
      {
        weekRange: "Week 8",
        title: "MongoDB & Mongoose ORM",
        description: "MongoDB Atlas, Mongoose schemas, models, population, embedded vs referenced documents. Aggregation pipeline, indexing, and full-text search with Atlas Search.",
        skills: ["MongoDB", "Mongoose", "Aggregation", "Atlas"],
      },
      {
        weekRange: "Week 9",
        title: "Authentication & Security",
        description: "JWT login/signup, bcrypt hashing, refresh tokens, Zod/Joi validation. Google OAuth 2.0 with Passport.js, RBAC, Helmet.js, and CORS configuration.",
        skills: ["JWT", "bcrypt", "OAuth", "RBAC", "Helmet.js"],
      },
      {
        weekRange: "Week 10",
        title: "Next.js 14 — Full-Stack React",
        description: "SSR, SSG, ISR, App Router, server vs client components, API routes, Server Actions. Image optimisation, middleware, i18n basics, and MDX blog with SEO metadata.",
        skills: ["Next.js 14", "App Router", "SSR/SSG", "Server Actions"],
      },
      {
        weekRange: "Week 11",
        title: "Deployment, CI/CD & Performance",
        description: "Vercel/Netlify for frontend, Railway/Render for Node apps, environment variables, GitHub Actions pipelines. Lighthouse audits, Core Web Vitals, DB connection pooling.",
        skills: ["Vercel", "GitHub Actions", "CI/CD", "Lighthouse"],
      },
      {
        weekRange: "Week 12 · Capstone",
        title: "Full-Stack SaaS App + Career Launch",
        description: "Build a complete full-stack SaaS app. Technical interview prep, DSA basics, Upwork/Fiverr profile setup. Final capstone presentation with mock technical interview.",
        skills: ["Full SaaS Build", "Live Deploy", "Interview Prep"],
        isCapstone: true,
      },
    ],
    outcomes: [
      { label: "Expert Outcome", value: "Full Stack MERN Developer at Big Binary Tech" },
      { label: "Certifications", value: "Cisco, PSEB, PSDA ready", highlight: "PKR 70,000–200,000/month · Freelance $15–$60/hr" },
      { label: "Stack", value: "HTML · CSS · JS · React · Node · MongoDB · Next.js", highlight: "Complete MERN stack — the most in-demand web stack globally" },
    ],
  },
];

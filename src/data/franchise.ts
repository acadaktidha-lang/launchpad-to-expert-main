export interface InvestmentTier {
  category: string;
  name: string;
  badge: string;
  fee: number;
  feeLabel: string;
  mouSigning: number;
  beforeOperations: number;
  monthlyRoyalty: number;
  featured?: boolean;
}

export interface FranchiseBenefit {
  number: string;
  title: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  details: string[];
}

export interface RevenueSchool {
  tracks: string;
  title: string;
  courses: Course[];
  featured?: boolean;
}

export interface RevenueStream {
  category: string;
  title: string;
  description: string;
}

export interface InstituteModel {
  number: string;
  title: string;
  description: string;
  featured?: boolean;
}

export const investmentTiers: InvestmentTier[] = [
  {
    category: "Category I",
    name: "Flagship Partner",
    badge: "First Unit",
    fee: 1500000,
    feeLabel: "PKR · Lifetime License · Non-refundable",
    mouSigning: 800000,
    beforeOperations: 700000,
    monthlyRoyalty: 10,
  },
  {
    category: "Category II",
    name: "Growth Partner",
    badge: "Second Unit",
    fee: 1200000,
    feeLabel: "PKR · Lifetime License · Non-refundable",
    mouSigning: 600000,
    beforeOperations: 600000,
    monthlyRoyalty: 10,
    featured: true,
  },
  {
    category: "Category III",
    name: "Scale Partner",
    badge: "3rd Unit +",
    fee: 1000000,
    feeLabel: "PKR · Lifetime License · Non-refundable",
    mouSigning: 500000,
    beforeOperations: 500000,
    monthlyRoyalty: 10,
  },
];

export const franchiseBenefits: FranchiseBenefit[] = [
  {
    number: "01",
    title: "Full Business Support",
    description:
      "End-to-end guidance from setup through daily operations. You don't need to figure out the system — we've already built it.",
  },
  {
    number: "02",
    title: "Proven Financial Model",
    description:
      "Transparent revenue structure with clear royalty terms and multiple income streams. Designed for scalability from the first unit.",
  },
  {
    number: "03",
    title: "Centralised Marketing",
    description:
      "Social media ad campaigns, organic promotion, lead generation, and brand management run centrally. You benefit without managing it yourself.",
  },
  {
    number: "04",
    title: "Comprehensive Training",
    description:
      "One month of master training for you and your team, plus ongoing staff development as the curriculum evolves.",
  },
  {
    number: "05",
    title: "Government Projects",
    description:
      "Access to NAVTTC, provincial government, and institutional project pipelines — additional revenue streams unavailable to independent institutes.",
  },
  {
    number: "06",
    title: "Student Job Placement",
    description:
      "Internship and job placement pipelines backed by Big Binary Tech's software house operations. Students leaving your campus have a path forward.",
  },
];

export const revenueSchools: RevenueSchool[] = [
  {
    tracks: "Track 01 · Flagship · 14 Weeks",
    title: "Generative AI + Agentic AI",
    courses: [
      {
        id: "gen-ai-01",
        title: "LLM Engineering + Prompt Architecture",
        duration: "Part of 14-week track",
        details: [],
      },
      {
        id: "gen-ai-02",
        title: "RAG Systems + Vector Databases",
        duration: "Part of 14-week track",
        details: [],
      },
      {
        id: "gen-ai-03",
        title: "Agentic AI — Tool Use + Multi-Agent",
        duration: "Part of 14-week track",
        details: [],
      },
      {
        id: "gen-ai-04",
        title: "Fine-Tuning + LoRA on Open-Source Models",
        duration: "Part of 14-week track",
        details: [],
      },
      {
        id: "gen-ai-05",
        title: "LLMOps — Deployment + Monitoring",
        duration: "Part of 14-week track",
        details: [],
      },
      {
        id: "gen-ai-06",
        title: "Capstone: Deployed AI Product with Live URL",
        duration: "Part of 14-week track",
        details: [],
      },
    ],
  },
  {
    tracks: "Track 02 + 03 · 12 Weeks Each",
    title: "Cloud + MLOps & Odoo ERP Dev",
    courses: [
      {
        id: "cloud-01",
        title: "AWS, Docker, Kubernetes, CI/CD, MLflow",
        duration: "Part of 12-week track",
        details: [],
      },
      {
        id: "cloud-02",
        title: "ML Pipeline Automation + Model Monitoring",
        duration: "Part of 12-week track",
        details: [],
      },
      {
        id: "odoo-01",
        title: "Odoo Python ORM + Custom Module Dev",
        duration: "Part of 12-week track",
        details: [],
      },
      {
        id: "odoo-02",
        title: "QWeb Templates + Owl JS Frontend",
        duration: "Part of 12-week track",
        details: [],
      },
      {
        id: "odoo-03",
        title: "ERP Domain: Accounting, Inventory, HR",
        duration: "Part of 12-week track",
        details: [],
      },
      {
        id: "odoo-04",
        title: "Odoo API Integrations + Client Implementation",
        duration: "Part of 12-week track",
        details: [],
      },
    ],
  },
  {
    tracks: "Tracks 04 · 05 · 06 · 07",
    title: "Full Stack, Cyber, UI/UX + Marketing",
    courses: [
      {
        id: "track-04",
        title: "AI-Integrated Full Stack — React, Next.js, Node.js",
        duration: "16 weeks",
        details: [],
      },
      {
        id: "track-05",
        title: "Cybersecurity — Ethical Hacking, Cloud Security, CEH-Aligned",
        duration: "14 weeks",
        details: [],
      },
      {
        id: "track-06",
        title: "UI/UX + Brand Design — Figma, UX Research, Design Systems",
        duration: "10 weeks",
        details: [],
      },
      {
        id: "track-07",
        title: "AI-Powered Marketing + Sales — Meta Ads, HubSpot, Tele-Sales",
        duration: "8 weeks",
        details: [],
      },
    ],
    featured: true,
  },
];

export const revenueStreams: RevenueStream[] = [
  {
    category: "Primary",
    title: "Course Fees",
    description:
      "Regular student enrolments across all three schools. Fee structures set per course, per cohort. Your share after BBT royalty is your core monthly income.",
  },
  {
    category: "Government",
    title: "NAVTTC + Institutional Projects",
    description:
      "Federal and provincial government-funded IT training programmes. BBT accesses these contracts centrally and routes them through franchise units.",
  },
  {
    category: "Corporate",
    title: "Customised Corporate Training",
    description:
      "B2B training packages for companies, government agencies, and school education boards. Higher per-batch value than individual enrolments.",
  },
  {
    category: "Software",
    title: "Software House JV / Partnerships",
    description:
      "Selected franchise locations can participate in BBT's software house joint venture model — extending revenue beyond education into service delivery.",
  },
];

export const instituteModels: InstituteModel[] = [
  {
    number: "Model A",
    title: "Training Institute",
    description:
      "Establish a new BBT-branded training institute from scratch. Full setup guidance, curriculum, and student placement support included.",
  },
  {
    number: "Model B",
    title: "Software & Consultancy",
    description:
      "A franchise combining education with software house and student consultancy operations. Wider revenue base, higher ceiling.",
  },
  {
    number: "Model C",
    title: "Hybrid Model",
    description:
      "Institute plus consultancy in one operation. The most comprehensive model — and the most capable of accessing every BBT revenue stream simultaneously.",
    featured: true,
  },
];

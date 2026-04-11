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
  durationWeeks: number;        // renamed from 'weeks'
  price: string;
  meta: string[];
  weeks: CurriculumWeek[];      // array of detailed weeks
  outcomes: CurriculumOutcome[];
}

export const curriculumData: CurriculumTrack[] = [
  {
    id: "ai",
    trackNumber: "01",
    type: "Flagship",
    title: "Generative AI + Agentic AI",
    durationWeeks: 14,
    price: "PKR 55–75K",
    meta: ["14 Weeks", "PKR 55–75K", "AI Expert Pipeline", "10:1 Demand Gap"],
    weeks: [
      {
        weekRange: "Week 1–2",
        title: "Python for AI (Production-Grade)",
        description:
          "Not tutorial Python. OOP, type hints, async I/O, pytest, clean code architecture. The foundation everything else runs on.",
        skills: ["Python 3.12", "OOP", "pytest", "async/await"],
      },
      {
        weekRange: "Week 3–4",
        title: "LLM Fundamentals + Prompt Engineering",
        description:
          "How transformers work. Tokenisation, attention, system prompts, few-shot learning, chain-of-thought, structured output, evaluation frameworks.",
        skills: ["OpenAI API", "Anthropic API", "Prompt Patterns", "Evals"],
      },
      {
        weekRange: "Week 5–6",
        title: "RAG Systems",
        description:
          "Vector databases (Pinecone, FAISS, Chroma), document chunking strategies, embedding models, hybrid search, LangChain and LlamaIndex orchestration.",
        skills: ["LangChain", "LlamaIndex", "Pinecone", "FAISS", "Embeddings"],
      },
      {
        weekRange: "Week 7–8",
        title: "Agentic AI — Tool Use + Multi-Agent",
        description:
          "ReAct agents, function calling, AutoGen multi-agent systems, CrewAI, tool integration, memory systems for agents, agent evaluation.",
        skills: ["AutoGen", "CrewAI", "Function Calling", "ReAct"],
      },
      {
        weekRange: "Week 9–10",
        title: "Fine-Tuning + LoRA on Open-Source Models",
        description:
          "When to fine-tune vs RAG. Fine-tuning Mistral-7B and LLaMA-3 on HuggingFace. PEFT, LoRA, QLoRA. Weights & Biases for experiment tracking.",
        skills: ["HuggingFace", "PEFT", "LoRA", "W&B", "RLHF basics"],
      },
      {
        weekRange: "Week 11–12",
        title: "LLMOps — Deployment + Monitoring",
        description:
          "FastAPI serving, Docker containerisation, MLflow tracking, AWS Lambda deployment, cost optimisation, latency benchmarking, model drift detection.",
        skills: ["FastAPI", "Docker", "MLflow", "AWS Lambda", "CloudWatch"],
      },
      {
        weekRange: "Week 13–14",
        title: "Deployed AI Product with Live URL",
        description:
          "Ship a production LLM-powered application: live URL, GitHub repo with CI/CD, performance benchmarks, business case documentation. This is your portfolio centrepiece.",
        skills: ["Full Stack Deploy", "Live Demo", "Business Framing"],
        isCapstone: true,
      },
    ],
    outcomes: [
      {
        label: "Expert Outcome",
        value: "AI Expert at Big Binary Tech",
        highlight: "PKR 120–300K/month",
      },
      {
        label: "International Path",
        value: "LLM Engineer via Andela/Toptal",
        highlight: "$50–120/hr",
      },
      {
        label: "Market Gap",
        value: "10:1 demand-to-supply ratio",
        highlight: "Andela training 15,000 — still not enough",
      },
    ],
  },

  // … repeat the same fix for other tracks: 'cloud', 'odoo', 'fullstack', 'cyber', 'uiux', 'marketing' …
];
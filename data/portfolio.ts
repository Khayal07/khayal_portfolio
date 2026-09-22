export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  category: ProjectCategory;
}

export type ProjectCategory = 
  | "AI & Agentic Systems" 
  | "AI Tools & Applications" 
  | "Machine Learning & Analytics";

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Capability {
  title: string;
  description: string;
  tech: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
  credentialUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  pdfUrl: string;
  verifyUrl: string;
  skills: string[];
}

export const portfolio = {
  identity: {
    name: "Khayal Ismayilzada",
    title: "AI Engineer",
    tagline:
      "Building intelligent systems, multi-agent architectures, and production-ready RAG pipelines.",
    email: "khayal.izada39@gmail.com",
    location: "Sumqayit, Azerbaijan",
    cvUrl: "/cv.pdf",
  },
  socials: {
    github: "https://github.com/Khayal07",
    linkedin: "https://www.linkedin.com/in/khayal-ismayilzada-891882338",
    hackerrank: "https://www.hackerrank.com/profile/khayal_izada39",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    status: "Available for AI Engineering projects & roles",
    primaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Get In Touch",
      href: "#contact",
    },
  },
  contact: {
    formAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
  },
  about: {
    paragraphs: [
      "I am an AI Engineer focused on bridging the gap between cutting-edge LLMs and production-ready software systems. My core expertise centers around Retrieval-Augmented Generation (RAG), multi-agent workflows, vector search pipelines, and practical AI integrations.",
      "I leverage modern Python frameworks, vector databases, and containerized architectures to deploy fast, reliable, and scalable intelligent solutions tailored to complex domain problems.",
    ],
  },
  education: [
    {
      institution: "Azerbaijan State Oil and Industry University (ASOIU)",
      degree: "B.Sc. in Computer Engineering",
      period: "2024 — Present (3rd Year)",
      description:
        "Focusing on computer architecture, machine learning fundamentals, algorithm design, and software engineering principles.",
    },
    {
      institution: "Div Academy",
      degree: "AI Engineering Professional Diploma",
      period: "2024 — 2025 (8-Month Intensive)",
      description:
        "Specialized hands-on program covering LLM architectures, RAG systems, multi-agent workflows, and end-to-end AI application engineering.",
      credentialUrl: "/diploma.pdf",
    },
  ] satisfies Education[],
  certifications: [
    {
      id: "hackerrank-sql-basic",
      title: "SQL (Basic) Certificate",
      issuer: "HackerRank",
      issueDate: "Sep 2026",
      credentialId: "16EB12093EF7",
      pdfUrl: "/certificates/hackerrank-sql-basic.pdf",
      verifyUrl: "https://www.hackerrank.com/certificates/16eb12093ef7",
      skills: ["SQL", "Relational Databases", "Data Querying"],
    },
    {
      id: "hackerrank-python-basic",
      title: "Python (Basic) Certificate",
      issuer: "HackerRank",
      issueDate: "Sep 2026",
      credentialId: "A46B41B62517",
      pdfUrl: "/certificates/hackerrank-python-basic.pdf",
      verifyUrl: "https://www.hackerrank.com/certificates/a46b41b62517",
      skills: ["Python", "Control Flow", "OOP", "Data Structures"]
    },
  ] satisfies Certification[],
  projects: [
    {
      title: "MemoryLens — AI Semantic Search Engine",
      description:
        "An AI-powered search system designed to retrieve movies, games, books, or media from vague, partial memory fragments (e.g., 'twelve people voting in one room') using vector search and confidence scoring.",
      tech: ["FastAPI", "React", "PostgreSQL", "Semantic Search", "Tailwind CSS", "Docker"],
      github: "https://github.com/Khayal07/MemoryLens",
      demo: "https://memory-lens-teal.vercel.app",
      category: "AI Tools & Applications",
    },
    {
      title: "Voyagent — AI Multi-Agent Travel Planner",
      description:
        "An AI travel orchestrator powered by 4 specialized agents (Interest, Budget, Logistics, Planner) that negotiate in real-time via Server-Sent Events (SSE) to generate optimized itineraries with interactive map visualization.",
      tech: ["FastAPI", "Multi-Agent Systems", "TypeScript", "SSE", "OpenStreetMap", "Docker"],
      github: "https://github.com/Khayal07/Voyagent-",
      category: "AI & Agentic Systems",
    },
    {
      title: "Study Cost Planner Agent",
      description:
        "An AI-powered multi-agent platform that estimates international education costs, discovers scholarship opportunities, and builds personalized study budgets grounded in verified, cited sources.",
      tech: ["FastAPI", "Next.js", "LangChain", "PostgreSQL", "pgvector", "Docker"],
      github: "https://github.com/Khayal07/study-cost-planner-agent",
      category: "AI & Agentic Systems",
    },
    {
      title: "Multi-Output Insurance Purchase Prediction Pipeline",
      description:
        "An end-to-end multi-output Machine Learning pipeline predicting customer policy choices across 7 distinct components simultaneously, featuring behavioral feature engineering and gradient boosting achieving 92.53% accuracy.",
      tech: ["Python", "Machine Learning", "Feature Engineering", "Ensemble Learning", "Jupyter"],
      github: "https://github.com/Khayal07/Insurance-Product-Purchase-Prediction-ML",
      category: "Machine Learning & Analytics",
    },
    {
      title: "Smart Git CLI",
      description:
        "A lightweight developer CLI tool that inspects local git diffs to automatically generate structured Conventional Commit messages and release notes using LLM automation.",
      tech: ["Python", "Typer", "OpenAI API", "Git", "CLI"],
      github: "https://github.com/Khayal07/Smart-Git-CLI",
      category: "AI Tools & Applications",
    },
    {
      title: "OmniSearch AI — Desktop Spotlight Overlay",
      description:
        "A lightweight, Raycast-inspired Windows search overlay triggered by a global hotkey (Alt + Space). Supports multi-provider AI streaming across OpenAI, Gemini, and local Ollama models.",
      tech: ["Python", "PySide6", "Qt6", "OpenAI API", "Gemini API", "Ollama"],
      github: "https://github.com/Khayal07/omnisearch-ai",
      category: "AI Tools & Applications",
    },
  ] satisfies Project[],
  skills: [
    {
      category: "AI & Machine Learning",
      skills: [
        "LangChain",
        "RAG Pipelines",
        "Multi-Agent Systems",
        "ChromaDB",
        "Vector Embeddings",
        "LLM APIs / Ollama",
      ],
    },
    {
      category: "Backend & Systems",
      skills: ["Python", "FastAPI", "PostgreSQL", "Docker", "SQL", "C/C++"],
    },
    {
      category: "Tools & Frameworks",
      skills: ["PySide6", "Streamlit", "Git", "Linux", "Next.js", "Tailwind CSS"],
    },
  ] satisfies SkillGroup[],
  capabilities: [
    {
      title: "RAG & Vector Search",
      description:
        "Designing context-aware retrieval architectures with advanced chunking, metadata filtering, and embedding optimization.",
      tech: ["LangChain", "ChromaDB", "Vector Embeddings"],
    },
    {
      title: "Multi-Agent Workflows",
      description:
        "Building autonomous agent graphs with custom tool usage, shared state management, and reliable decision routing.",
      tech: ["Agentic State", "Tool Calling", "Orchestration"],
    },
    {
      title: "AI API Microservices",
      description:
        "Packaging LLM workflows into containerized REST APIs with streaming endpoints and async task execution.",
      tech: ["FastAPI", "Docker", "PostgreSQL"],
    },
    {
      title: "Desktop AI Tools",
      description:
        "Developing responsive local desktop utilities and CLI agents with GUI integrations for seamless workflow automation.",
      tech: ["PySide6", "Typer", "Python"],
    },
  ] satisfies Capability[],
};

export const projectCategories: ProjectCategory[] = [
  "AI & Agentic Systems",
  "AI Tools & Applications",
  "Machine Learning & Analytics",
];
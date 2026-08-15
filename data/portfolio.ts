export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  category: ProjectCategory;
}

export type ProjectCategory = "AI / Agents" | "Backend & Apps";

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export const portfolio = {
  identity: {
    name: "Khayal",
    title: "AI Engineer",
    tagline:
      "Building intelligent systems, scalable backend architectures, and production-ready AI applications.",
    email: "khayal.izada39@gmail.com",
    location: "Baku, Azerbaijan",
  },
  socials: {
    github: "https://github.com/Khayal07",
    linkedin: "https://www.linkedin.com",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    status: "Available for projects & full-time roles",
    primaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Get In Touch",
      href: "#contact",
    },
  },
  about: {
    paragraphs: [
      "I am an AI Engineering student passionate about bridging the gap between cutting-edge machine learning research and functional software systems. My core focus lies in Retrieval-Augmented Generation (RAG), multi-agent architectures, robust API development, and data pipelines.",
      "I enjoy designing clean, scalable backend architectures with FastAPI, PostgreSQL, and Docker, while crafting intuitive client interfaces. Whether optimizing local models or deploying cloud services, I focus on building reliable and meaningful software.",
    ],
  },
  projects: [
    {
      title: "RAG Research Assistant",
      description:
        "Document Q&A system that chunks papers, indexes them into a vector store, and answers grounded questions with source citations.",
      tech: ["Python", "LangChain", "ChromaDB", "FastAPI", "Docker"],
      github: "#",
      demo: "#",
      category: "AI / Agents",
    },
    {
      title: "Local LLM Chat Client",
      description:
        "Desktop interface for running and switching between local open-source models, with streaming responses and custom prompts.",
      tech: ["Python", "PySide6", "Ollama", "Vector Embeddings"],
      github: "#",
      demo: "#",
      category: "AI / Agents",
    },
    {
      title: "Vector Search API",
      description:
        "REST service exposing semantic search over collections, with embedding generation, similarity scoring, and metadata filters.",
      tech: ["Python", "FastAPI", "ChromaDB", "LLM APIs", "Docker"],
      github: "#",
      demo: "#",
      category: "AI / Agents",
    },
    {
      title: "Agent Workflow Engine",
      description:
        "Orchestration layer that chains tool-using agents, manages conversation state, and routes tasks across multiple LLM backends.",
      tech: ["Python", "LangChain", "LLM APIs", "Docker"],
      github: "#",
      demo: "#",
      category: "AI / Agents",
    },
    {
      title: "Order Service Backend",
      description:
        "Production-style REST API with auth, pagination, async workers, and PostgreSQL persistence behind containerized deployment.",
      tech: ["FastAPI", "PostgreSQL", "Docker", "SQL"],
      github: "#",
      demo: "#",
      category: "Backend & Apps",
    },
    {
      title: "Data Pipeline Toolkit",
      description:
        "CLI and dashboard for scheduling ETL jobs, validating datasets, and visualizing pipeline health across environments.",
      tech: ["Python", "SQL", "C/C++", "Next.js", "Tailwind CSS"],
      github: "#",
      demo: "#",
      category: "Backend & Apps",
    },
  ] satisfies Project[],
  skills: [
    {
      category: "Programming & Backend",
      skills: ["Python", "FastAPI", "SQL", "Docker", "C/C++"],
    },
    {
      category: "AI & Data",
      skills: [
        "LangChain",
        "ChromaDB",
        "RAG Pipelines",
        "Vector Embeddings",
        "LLM APIs",
      ],
    },
    {
      category: "Frontend & Tools",
      skills: ["Next.js", "Tailwind CSS", "Git", "Linux"],
    },
  ] satisfies SkillGroup[],
};

export const projectCategories: ProjectCategory[] = [
  "AI / Agents",
  "Backend & Apps",
];
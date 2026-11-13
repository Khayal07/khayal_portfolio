export interface DiagramNode {
  id: string;
  label: string;
  /** Top-left corner in a 320x200 canvas; width defaults to the label length */
  x: number;
  y: number;
  w?: number;
  accent?: boolean;
}

export interface Diagram {
  nodes: DiagramNode[];
  edges: [string, string][];
  caption?: string;
}

export interface Project {
  /** URL segment for the detail page: /projects/<slug> */
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  /** Screenshots under public/projects/, 16:10 works best */
  images?: string[];
  /** Architecture sketch shown on the card's first tab */
  diagram?: Diagram;
  category: ProjectCategory;
}

export type ProjectCategory = 
  | "AI & Agentic Systems" 
  | "AI Tools & Applications" 
  | "Machine Learning & Analytics";

export interface NavItem {
  label: string;
  href: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
  credentialUrl?: string;
  /** Official site of the institution */
  website?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform: "HackerRank" | "Kaggle";
  issueDate: string;
  credentialId?: string;
  /** PDF path, or undefined when the credential is an image */
  pdfUrl?: string;
  /** Image path for image-based certificates (e.g. Kaggle PNG) */
  imageUrl?: string;
  verifyUrl: string;
  /** Optional third-party profile / repo link shown as an extra button */
  profileUrl?: string;
  /** Label for the profileUrl button */
  profileLabel?: string;
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
    siteUrl: "https://khayaliszade.vercel.app",
  },
  socials: {
    github: "https://github.com/Khayal07",
    linkedin: "https://www.linkedin.com/in/khayal-ismayilzada-891882338",
    hackerrank: "https://www.hackerrank.com/profile/khayal_izada39",
  },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Education", href: "/#education" },
    { label: "Certifications", href: "/#certifications" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavItem[],
  hero: {
    status: "Open to AI engineering roles & projects",
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
    studying: "B.Sc. Computer Engineering, ASOIU",
    focus: ["RAG Pipelines", "Multi-Agent Systems", "Semantic Search", "ML Pipelines"],
    stack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "pgvector", "ChromaDB", "Docker", "Next.js", "scikit-learn"],
    paragraphs: [
      "I'm a Computer Engineering student at ASOIU and a graduate of the Div Academy AI Engineering program. I build AI systems end to end: retrieval pipelines, multi-agent backends, and the APIs and interfaces around them.",
      "Recent work includes Voyagent, where four agents plan a trip together and stream their progress over SSE; Study Cost Planner, a multi-agent cost estimator grounded in cited sources; and MemoryLens, a semantic search engine that finds media from vague descriptions. My default stack is Python, FastAPI, PostgreSQL with pgvector, and Docker.",
      "Right now I'm strengthening the math behind machine learning at AI Academy and I'm open to AI engineering roles and projects.",
    ],
  },
  education: [
    {
      institution: "Azerbaijan State Oil and Industry University (ASOIU)",
      website: "https://asoiu.edu.az",
      degree: "B.Sc. in Computer Engineering",
      period: "2024 — Present (3rd Year)",
      description:
        "Focusing on computer architecture, machine learning fundamentals, algorithm design, and software engineering principles.",
    },
    {
      institution: "Div Academy",
      website: "https://div.edu.az",
      degree: "AI Engineering Professional Diploma",
      period: "Oct 2025 — 2026 (8-Month Intensive)",
      description:
        "Specialized hands-on program covering LLM architectures, RAG systems, multi-agent workflows, and end-to-end AI application engineering.",
      credentialUrl: "/diploma.pdf",
    },
    {
      institution: "AI Academy",
      website: "https://aiacademy.az",
      degree: "Artificial Intelligence Program",
      period: "2026 – Present",
      description:
        "Intensive 10-month program structured into 4 months of foundational mathematics for AI (linear algebra, calculus, probability & statistics) followed by 6 months of advanced engineering programming and AI systems development.",
    },
  ] satisfies Education[],
  certifications: [
    {
      id: "kaggle-intermediate-machine-learning",
      title: "Intermediate Machine Learning",
      issuer: "Kaggle",
      issueDate: "Oct 2026",
      platform: "Kaggle",
      imageUrl: "/certificates/kaggle-intermediate-machine-learning.png",
      verifyUrl: "https://www.kaggle.com/learn/certification/xyalsmaylzad/intermediate-machine-learning",
      profileUrl: "https://github.com/Khayal07/kaggle-ai-roadmap/tree/main/04_intermediate_machine_learning",
      profileLabel: "GitHub",
      skills: ["XGBoost", "Pipelines", "Cross-Validation", "Data Leakage", "Categorical Variables", "Missing Values"]
    },
    {
      id: "kaggle-intro-to-machine-learning",
      title: "Intro to Machine Learning",
      issuer: "Kaggle",
      issueDate: "Oct 2026",
      platform: "Kaggle",
      imageUrl: "/certificates/kaggle-intro-to-machine-learning.png",
      verifyUrl: "https://www.kaggle.com/learn/certification/xyalsmaylzad/intro-to-machine-learning",
      profileUrl: "https://github.com/Khayal07/kaggle-ai-roadmap/tree/main/03_machine_learning",
      profileLabel: "GitHub",
      skills: ["Machine Learning", "Decision Trees", "Random Forests", "Model Validation", "Scikit-Learn"]
    },
    {
      id: "kaggle-python",
      title: "Python Certificate",
      issuer: "Kaggle",
      platform: "Kaggle",
      issueDate: "Oct 2026",
      imageUrl: "/certificates/kaggle-python.png",
      verifyUrl: "https://www.kaggle.com/learn/certification/xyalsmaylzad/python",
      profileUrl: "https://github.com/Khayal07/kaggle-ai-roadmap/tree/main/01_python",
      profileLabel: "GitHub",
      skills: ["Python", "Data Structures", "Control Flow", "Functions", "External Libraries"],
    },
    {
      id: "hackerrank-sql-advanced",
      title: "SQL (Advanced) Certificate",
      issuer: "HackerRank",
      platform: "HackerRank",
      issueDate: "Sep 2026",
      credentialId: "CD7A6E1E202A",
      pdfUrl: "/certificates/hackerrank-sql-advanced.pdf",
      verifyUrl: "https://www.hackerrank.com/certificates/cd7a6e1e202a",
      skills: ["Query Optimization", "Data Modeling", "Database Indexing", "Window Functions", "SQL Performance Tuning"],
    },
    {
      id: "kaggle-pandas",
      title: "Pandas Certificate",
      issuer: "Kaggle",
      issueDate: "Oct 2026",
      platform: "Kaggle",
      imageUrl: "/certificates/kaggle-pandas.png",
      verifyUrl: "https://www.kaggle.com/learn/certification/xyalsmaylzad/pandas",
      profileUrl: "https://github.com/Khayal07/kaggle-ai-roadmap/tree/main/02_pandas",
      profileLabel: "GitHub",
      skills: ["Pandas", "Data Manipulation", "Data Cleaning", "Data Analysis", "Python"]
    },
    {
      id: "hackerrank-sql-intermediate",
      title: "SQL (Intermediate) Certificate",
      issuer: "HackerRank",
      platform: "HackerRank",
      issueDate: "Sep 2026",
      credentialId: "D0E4C7DFFC4B",
      pdfUrl: "/certificates/hackerrank-sql-intermediate.pdf",
      verifyUrl: "https://www.hackerrank.com/certificates/d0e4c7dffc4b",
      skills: ["Advanced SQL", "Complex Joins", "Subqueries", "Window Functions"],
    },
    {
      id: "hackerrank-python-basic",
      title: "Python (Basic) Certificate",
      issuer: "HackerRank",
      platform: "HackerRank",
      issueDate: "Sep 2026",
      credentialId: "A46B41B62517",
      pdfUrl: "/certificates/hackerrank-python-basic.pdf",
      verifyUrl: "https://www.hackerrank.com/certificates/a46b41b62517",
      skills: ["Python", "Control Flow", "OOP", "Data Structures"],
    },
    {
      id: "hackerrank-problem-solving-basic",
      title: "Problem Solving (Basic) Certificate",
      issuer: "HackerRank",
      platform: "HackerRank",
      issueDate: "Oct 2026",
      credentialId: "DBA8AB788B5B",
      pdfUrl: "/certificates/hackerrank-problem-solving-basic.pdf",
      verifyUrl: "https://www.hackerrank.com/certificates/dba8ab788b5b",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Time Complexity"],
    },
    {
      id: "kaggle-data-visualization",
      title: "Data Visualization",
      issuer: "Kaggle",
      issueDate: "Nov 2026",
      platform: "Kaggle",
      imageUrl: "/certificates/kaggle-data-visualization.png",
      verifyUrl: "https://www.kaggle.com/learn/certification/xyalsmaylzad/data-visualization",
      profileUrl: "https://github.com/Khayal07/kaggle-ai-roadmap/tree/main/05_data_visualization",
      profileLabel: "GitHub",
      skills: ["Data Visualization", "Seaborn", "Matplotlib", "Data Analysis", "Python"]
    },
    {
      id: "hackerrank-sql-basic",
      title: "SQL (Basic) Certificate",
      issuer: "HackerRank",
      platform: "HackerRank",
      issueDate: "Sep 2026",
      credentialId: "16EB12093EF7",
      pdfUrl: "/certificates/hackerrank-sql-basic.pdf",
      verifyUrl: "https://www.hackerrank.com/certificates/16eb12093ef7",
      skills: ["SQL", "Relational Databases", "Data Querying"],
    },
  ] satisfies Certification[],
  projects: [
    {
      slug: "cv-screening",
      title: "AI CV Screening — Explainable Match Scoring",
      description:
        "Compares a CV with a job description and returns a 0–100 match score with every point explained. Personal details are removed before any model call, the LLM only extracts structured data, and plain Python computes the score. Passes 33 of 34 labeled evaluation cases.",
      tech: ["FastAPI", "Python", "OpenAI API", "Pydantic", "pypdf", "Docker"],
      github: "https://github.com/Khayal07/ai-cv-screening",
      demo: "https://cv-screening-lpi1.onrender.com/",
      images: [
        "/projects/cv-screening-result.jpg",
        "/projects/cv-screening.jpg",
        "/projects/cv-screening-reasons.jpg",
        "/projects/cv-screening-eval.jpg",
      ],
      diagram: {
        nodes: [
          { id: "cv", label: "CV · PDF", x: 6, y: 26 },
          { id: "ck", label: "doc check", x: 78, y: 26 },
          { id: "an", label: "anonymize", x: 156, y: 26 },
          { id: "ex", label: "LLM extract", x: 236, y: 26, accent: true },
          { id: "jd", label: "job text", x: 150, y: 96 },
          { id: "sc", label: "Python scoring", x: 210, y: 150 },
          { id: "out", label: "score + reasons", x: 90, y: 150 },
        ],
        edges: [["cv", "ck"], ["ck", "an"], ["an", "ex"], ["jd", "ex"], ["ex", "sc"], ["sc", "out"]],
        caption: "33 / 34 eval cases pass · no model in the score",
      },
      category: "AI Tools & Applications",
    },
    {
      slug: "memorylens",
      title: "MemoryLens — AI Semantic Search Engine",
      description:
        "Finds movies, series, songs, books, games and actors from half-remembered fragments. Hybrid retrieval, cross-encoder reranking and LLM reasoning lift top-1 accuracy from 54% to 92% on a 48-query benchmark.",
      tech: ["FastAPI", "React", "PostgreSQL", "pgvector", "Redis", "sentence-transformers", "Docker"],
      github: "https://github.com/Khayal07/MemoryLens",
      diagram: {
        nodes: [
          { id: "q", label: "query", x: 6, y: 30 },
          { id: "u", label: "understand", x: 60, y: 30 },
          { id: "h", label: "hybrid retrieval", x: 141, y: 30, accent: true },
          { id: "db", label: "pgvector", x: 254, y: 30 },
          { id: "r", label: "cross-encoder", x: 158, y: 96 },
          { id: "l", label: "LLM reasoning", x: 60, y: 96 },
          { id: "c", label: "confidence", x: 68, y: 150 },
          { id: "m", label: "top match", x: 150, y: 150 },
        ],
        edges: [["q", "u"], ["u", "h"], ["h", "db"], ["h", "r"], ["r", "l"], ["l", "c"], ["c", "m"]],
        caption: "recall@1: 54% retrieval only → 92% full pipeline",
      },
      demo: "https://memory-lens-teal.vercel.app",
      images: [
        "/projects/memorylens.jpg",
        "/projects/memorylens-search.jpg",
        "/projects/memorylens-categories.jpg",
      ],
      category: "AI Tools & Applications",
    },
    {
      slug: "voyagent",
      title: "Voyagent — AI Multi-Agent Travel Planner",
      description:
        "Four agents plan a trip together: Interest proposes places, Budget and Logistics object when the plan breaks the budget or the schedule, and Planner builds the timed route. The negotiation streams live over SSE onto an interactive map.",
      tech: ["FastAPI", "React", "PostgreSQL", "SSE", "Leaflet", "OpenStreetMap", "Docker"],
      github: "https://github.com/Khayal07/Voyagent-",
      diagram: {
        nodes: [
          { id: "f", label: "trip form", x: 6, y: 89 },
          { id: "o", label: "orchestrator", x: 82, y: 89, accent: true },
          { id: "i", label: "interest · LLM", x: 176, y: 20 },
          { id: "b", label: "budget", x: 176, y: 72, w: 62 },
          { id: "l", label: "logistics", x: 250, y: 72 },
          { id: "p", label: "planner", x: 176, y: 124, w: 62 },
          { id: "s", label: "SSE → map", x: 82, y: 150 },
        ],
        edges: [["f", "o"], ["o", "i"], ["i", "b"], ["i", "l"], ["b", "p"], ["l", "p"], ["p", "s"]],
        caption: "objections loop back to interest · max 2 rounds",
      },
      category: "AI & Agentic Systems",
    },
    {
      slug: "study-cost-planner",
      title: "Study Cost Planner Agent",
      description:
        "Nine-agent platform that plans studying abroad end to end: total real cost, scholarship eligibility, net cost after aid and an application plan. The LLM handles language, Python handles every number, and each figure cites its source.",
      tech: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "fastembed", "Docker"],
      github: "https://github.com/Khayal07/study-cost-planner-agent",
      diagram: {
        nodes: [
          { id: "i", label: "intake", x: 6, y: 16 },
          { id: "r", label: "SQL+pgvector", x: 64, y: 16, accent: true },
          { id: "t", label: "tuition+living", x: 155, y: 16 },
          { id: "c", label: "currency", x: 257, y: 16 },
          { id: "s", label: "scenario", x: 257, y: 78 },
          { id: "b", label: "budget match", x: 165, y: 78 },
          { id: "h", label: "scholarships", x: 74, y: 78 },
          { id: "e", label: "eligibility", x: 74, y: 140 },
          { id: "n", label: "net value", x: 160, y: 140 },
          { id: "v", label: "verifier", x: 236, y: 140 },
        ],
        edges: [["i", "r"], ["r", "t"], ["t", "c"], ["c", "s"], ["s", "b"], ["b", "h"], ["h", "e"], ["e", "n"], ["n", "v"]],
        caption: "9 agents · LLM for language, Python for math",
      },
      category: "AI & Agentic Systems",
    },
    {
      slug: "insurance-prediction",
      title: "Multi-Output Insurance Purchase Prediction Pipeline",
      description:
        "End-to-end multi-output pipeline that predicts 7 insurance policy options at once from quote-journey logs. Benchmarked against the 92.48% last-quote baseline: tuned XGBoost reaches 92.54% and beats it on 6 of 7 options, with the biggest gain on the hardest target.",
      tech: ["Python", "XGBoost", "CatBoost", "scikit-learn", "SHAP", "Feature Engineering"],
      github: "https://github.com/Khayal07/Insurance-Product-Purchase-Prediction-ML",
      diagram: {
        nodes: [
          { id: "d", label: "quote logs", x: 6, y: 36 },
          { id: "f", label: "journey features", x: 87, y: 36 },
          { id: "m", label: "MultiOutput XGB", x: 201, y: 36, accent: true },
          { id: "o", label: "options A–G", x: 216, y: 110 },
          { id: "b", label: "last-quote baseline", x: 78, y: 110 },
        ],
        edges: [["d", "f"], ["f", "m"], ["m", "o"], ["b", "o"]],
        caption: "92.54% vs 92.48% baseline · biggest gain on target G",
      },
      category: "Machine Learning & Analytics",
    },
    {
      slug: "smart-git-cli",
      title: "Smart Git CLI",
      description:
        "A lightweight developer CLI tool that inspects local git diffs to automatically generate structured Conventional Commit messages and release notes using LLM automation.",
      tech: ["Python", "Typer", "OpenAI API", "Git", "CLI"],
      github: "https://github.com/Khayal07/Smart-Git-CLI",
      diagram: {
        nodes: [
          { id: "d", label: "staged diff", x: 6, y: 40 },
          { id: "l", label: "gpt-4o-mini", x: 92, y: 40, accent: true },
          { id: "p", label: "Y/n preview", x: 178, y: 40 },
          { id: "c", label: "commit", x: 264, y: 40 },
          { id: "t", label: "tag..HEAD", x: 6, y: 120 },
          { id: "n", label: "CHANGELOG.md", x: 178, y: 120 },
        ],
        edges: [["d", "l"], ["l", "p"], ["p", "c"], ["t", "l"], ["l", "n"]],
        caption: "smart-git commit · smart-git release",
      },
      category: "AI Tools & Applications",
    },
  ] satisfies Project[],
};

export const projectCategories: ProjectCategory[] = [
  "AI & Agentic Systems",
  "AI Tools & Applications",
  "Machine Learning & Analytics",
];
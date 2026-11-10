export type Locale = "en" | "az";

export const azContent: Record<string, string> = {
  "AI Engineer": "AI Mühəndis",
  "Building intelligent systems, multi-agent architectures, and production-ready RAG pipelines.":
    "İntellektual sistemlər, çox-agentli arxitekturalar və istehsalat səviyyəli RAG həlləri hazırlayıram.",
  "Available for AI Engineering projects & roles":
    "AI Mühəndisliyi layihələri və vakansiyaları üçün açıqdır",
  "View Projects": "Layihələrə Bax",
  "Get In Touch": "Əlaqə Saxla",
  "Download CV": "CV-ni Yüklə",
  "Sumqayit, Azerbaijan": "Sumqayıt, Azərbaycan",

  "I'm a Computer Engineering student at ASOIU and a graduate of the Div Academy AI Engineering program. I build AI systems end to end: retrieval pipelines, multi-agent backends, and the APIs and interfaces around them.":
    "ADNSU-da Kompüter Mühəndisliyi tələbəsiyəm və Div Academy-nin AI Engineering proqramını bitirmişəm. AI sistemlərini başdan sona qururam: retrieval pipeline-lar, çox-agentli backend-lər, onların ətrafındakı API və interfeyslər.",
  "Recent work includes Voyagent, where four agents plan a trip together and stream their progress over SSE; Study Cost Planner, a multi-agent cost estimator grounded in cited sources; and MemoryLens, a semantic search engine that finds media from vague descriptions. My default stack is Python, FastAPI, PostgreSQL with pgvector, and Docker.":
    "Son işlərimdən: Voyagent — dörd agentin birlikdə səyahət planladığı və gedişatı SSE ilə canlı ötürdüyü sistem; Study Cost Planner — istinad edilmiş mənbələrə əsaslanan çox-agentli xərc hesablayıcısı; MemoryLens — qeyri-dəqiq təsvirlərdən film, kitab və oyun tapan semantik axtarış mühərriki. Əsas stack-im Python, FastAPI, PostgreSQL + pgvector və Docker-dir.",
  "Right now I'm strengthening the math behind machine learning at AI Academy and I'm open to AI engineering roles and projects.":
    "Hazırda AI Academy-də maşın öyrənməsinin riyazi əsaslarını gücləndirirəm və AI mühəndisliyi üzrə vakansiya və layihələrə açığam.",
  about: "Haqqımda",
  "I build AI systems end to end.": "AI sistemlərini başdan sona qururam.",
  studying: "təhsil",
  focus: "yönüm",
  stack: "stack",
  "B.Sc. Computer Engineering, ASOIU": "Kompüter Mühəndisliyi (B.Sc.), ADNSU",
  "Semantic Search": "Semantik Axtarış",
  "ML Pipelines": "ML Pipeline-lar",
  "Multi-Agent Systems": "Multi-Agent Sistemlər",

  education: "Təhsil",
  Education: "Təhsil",
  "Formal and intensive training behind the engineering practice.":
    "Mühəndislik praktikasının arxasındakı formal və intensiv təlim.",
  "B.Sc. in Computer Engineering": "Kompüter Mühəndisliyi üzrə B.Sc.",
  "Focusing on computer architecture, machine learning fundamentals, algorithm design, and software engineering principles.":
    "Kompüter arxitekturası, maşın öyrənməsinin əsasları, alqoritm dizaynı və proqram mühəndisliyi prinsiplərinə fokuslanıram.",
  "2024 — Present (3rd Year)": "2024 — Hazırda (3-cü il)",
  "AI Engineering Professional Diploma":
    "AI Mühəndisliyi üzrə Peşəkar Diplom",
  "Specialized hands-on program covering LLM architectures, RAG systems, multi-agent workflows, and end-to-end AI application engineering.":
    "LLM arxitekturaları, RAG sistemləri, multi-agent iş axınları və tamdövrə AI tətbiq mühəndisliyini əhatə edən praktik xüsusi proqram.",
  "2024 — 2026 (8-Month Intensive)": "2024 — 2026 (8 aylıq intensiv)",
  "View Diploma": "Diploma Bax",

  certifications: "Sertifikatlar",
  Certifications: "Sertifikatlar",
  "Industry-recognized credentials validating core technical skills.":
    "Əsas texniki bacarıqları təsdiqləyən beynəlxalq tanınmış etimadnamələr.",
  "Credential ID": "Etimadnamə ID",
  "View PDF": "PDF-ə Bax",
  "View Certificate": "Sertifikata Bax",
  "Filter by platform": "Platforma üzrə filtrləyin",
  Verify: "Doğrula",
  "Show all": "Hamısını göstər",
  "Show less": "Daha az göstər",
  "Nov 2026": "Noy 2026",
  "SQL (Basic) Certificate": "SQL (Əsas) Sertifikatı",
  "Python Certificate": "Python Sertifikatı",
  "Sep 2026": "Sen 2026",
  "Oct 2026": "Okt 2026",
  Kaggle: "Kaggle",
  HackerRank: "HackerRank",

  projects: "Layihələr",
  "Selected works": "Seçilmiş işlər",
  "Systems built with intent, from retrieval pipelines to production services.":
    "Məqsədyönlü qurulmuş sistemlər — retrieval pipeline-lardan istehsal xidmətlərinə qədər.",
  All: "Bütün",
  "AI & Agentic Systems": "AI & Agentik Sistemlər",
  "AI Tools & Applications": "AI Alətləri & Tətbiqləri",
  "Machine Learning & Analytics": "Maşın Öyrənməsi & Analitika",
  "Live Demo": "Canlı Demo",

  "MemoryLens — AI Semantic Search Engine":
    "MemoryLens — AI Semantik Axtarış Mühərriki",
  "An AI-powered search system designed to retrieve movies, games, books, or media from vague, partial memory fragments (e.g., 'twelve people voting in one room') using vector search and confidence scoring.":
    "Qeyri-dəqiq, parça-parça yaddaş fraqmentlərindən (məs., 'bir otaqda on iki nəfər səs verir') vektor axtarışı və etimad skorlaması ilə filmlər, oyunlar, kitablar və ya media tapan AI axtarış sistemidir.",
  "Voyagent — AI Multi-Agent Travel Planner":
    "Voyagent — AI Multi-Agent Səyahət Planlayıcısı",
  "An AI travel orchestrator powered by 4 specialized agents (Interest, Budget, Logistics, Planner) that negotiate in real-time via Server-Sent Events (SSE) to generate optimized itineraries with interactive map visualization.":
    "Server-Sent Events (SSE) vasitəsilə real vaxtda qarşılıqlı işləyən 4 ixtisaslaşmış agent (Maraq, Büdcə, Logistika, Planlayıcı) ilə optimallaşdırılmış səyahət planları və interaktiv xəritə vizuallaşdırması hazırlayan AI orkestratorudur.",
  "Study Cost Planner Agent": "Təhsil Xərci Planlayıcı Agent",
  "An AI-powered multi-agent platform that estimates international education costs, discovers scholarship opportunities, and builds personalized study budgets grounded in verified, cited sources.":
    "Beynəlxalq təhsil xərclərini hesablayan, təqaüd imkanlarını aşkarlayan və təsdiqlənmiş, istinadlı mənbələrə əsaslanan fərdiləşdirilmiş təhsil büdcələri quran AI multi-agent platformasıdır.",
  "Multi-Output Insurance Purchase Prediction Pipeline":
    "Multi-Çıxışlı Sığorta Alış Proqnozu Pipeline-ı",
  "An end-to-end multi-output Machine Learning pipeline predicting customer policy choices across 7 distinct components simultaneously, featuring behavioral feature engineering and gradient boosting achieving 92.53% accuracy.":
    "Müştərilərin siyasət seçimlərini 7 fərqli komponent üzrə eyni anda proqnozlaşdıran, davranış xüsusiyyət mühəndisliyi və gradient boosting ilə 92.53% dəqiqliyə çatan end-to-end Machine Learning pipeline-ıdır.",
  "Smart Git CLI": "Smart Git CLI",
  "A lightweight developer CLI tool that inspects local git diffs to automatically generate structured Conventional Commit messages and release notes using LLM automation.":
    "Lokal git diff-lərini analiz edib LLM avtomatlaşdırması ilə strukturlaşdırılmış Conventional Commit mesajları və buraxılış qeydləri avtomatik yaradan yüngül developer CLI alətidir.",
  "OmniSearch AI — Desktop Spotlight Overlay":
    "OmniSearch AI — Desktop Spotlight Overlay",
  "A lightweight, Raycast-inspired Windows search overlay triggered by a global hotkey (Alt + Space). Supports multi-provider AI streaming across OpenAI, Gemini, and local Ollama models.":
    "Qlobal isti düymə (Alt + Space) ilə çağırılan, Raycast-dən ilhamlanan yüngül Windows axtarış overlay-i. OpenAI, Gemini və lokal Ollama modellərində multi-provayder AI streaming-i dəstəkləyir.",

  contact: "Əlaqə",
  "Let's build something together.": "Gəlin birlikdə bir şey quraq.",
  "Have a project in mind, or want to talk about RAG, multi-agent systems, or backend architecture? Reach out.":
    "Ağlınızda bir proyekt var, yoxsa RAG və agent sistemləri haqqında danışmaq istəyirsiniz? Mesaj yazın.",
  "Your name": "Adınız",
  "Your email": "E-poçt ünvanınız",
  "Your message": "Mesajınız",
  "Send Message": "Mesajı Göndər",
  "Sending...": "Göndərilir...",
  "Your message has been sent successfully!": "Mesajınız uğurla çatdırıldı!",
  "Something went wrong. Please try again later.":
    "Xəta baş verdi. Zəhmət olmasa bir az sonra yenidən cəhd edin.",
  "Contact form is not configured yet.":
    "Əlaqə formu hələ konfiqurasiya olunmayıb.",

  About: "Haqqımda",
  Projects: "Layihələr",
  Contact: "Əlaqə",
};

export function translate(locale: Locale, key: string): string {
  if (locale === "az") return azContent[key] ?? key;
  return key;
}
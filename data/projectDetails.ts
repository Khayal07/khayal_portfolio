export interface ProjectStep {
  title: string;
  text: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectDetails {
  tagline: string;
  problem: string;
  audience: string[];
  idea: string;
  steps: ProjectStep[];
  features: string[];
  metrics: ProjectMetric[];
  decisions: string[];
  /** Shell command shown in the "Run it locally" block */
  run?: string;
}

export const projectDetails: Record<string, ProjectDetails> = {
  "cv-screening": {
    tagline: "Explainable CV-to-job match scoring that a recruiter can check line by line.",
    problem:
      "Screening CVs by hand is slow and inconsistent, and most AI screening tools return a number with no explanation. A black-box score can hide bias, reward keyword stuffing and is hard to defend to a candidate or a hiring manager.",
    audience: [
      "Recruiters and HR teams shortlisting many applicants for one role",
      "Hiring managers who want an explained first pass before reading CVs",
      "Candidates checking how well their CV fits a specific job",
    ],
    idea:
      "Split the work. A language model only reads the CV and the job description and turns them into structured data. The score itself comes from plain, unit-tested Python rules, so every point traces back to a line in the reasons. Personal details are removed before any text leaves the service, and the result is decision support only: a person makes the call.",
    steps: [
      {
        title: "Document check",
        text: "Text that does not look like a CV, such as a pasted job posting, is rejected before any model call.",
      },
      {
        title: "Anonymization",
        text: "Name, date of birth, gender, photo references, contact details and referees are removed.",
      },
      {
        title: "Structured extraction",
        text: "The LLM turns the CV and the job into skills, dated roles, education and languages, validated with Pydantic.",
      },
      {
        title: "Deterministic scoring",
        text: "Weighted rules: required skills 50, nice-to-have 15, experience 20, education 10, languages 5.",
      },
      {
        title: "Explained result",
        text: "A 0–100 score with a per-component breakdown, matched and missing skills, reasons and warnings.",
      },
    ],
    features: [
      "Evidence-weighted skills: a skill used in a job counts more than one only listed in a skills section",
      "Experience computed from role dates, with overlapping roles merged",
      "A warning when the CV copies text from the job posting",
      "PDF upload or pasted text, with scanned PDFs detected",
      "Per-IP rate limits, a daily model-call cap and a disk cache to control cost",
      "Strict security headers; CV text is never written to disk or logged",
    ],
    metrics: [
      { value: "0–100", label: "explainable score" },
      { value: "33 / 34", label: "labeled cases pass" },
      { value: "6 / 6", label: "ranking checks pass" },
      { value: "≤ 2", label: "model calls per match" },
    ],
    decisions: [
      "The LLM only extracts data; Python computes every number, so the score is reproducible and unit-tested.",
      "Evaluation labels were written before any model output existed, and no label was changed to make a case pass.",
      "Skill matching uses whole tokens, so Java never matches JavaScript and Go never matches MongoDB.",
    ],
    run: "uvicorn app.main:app --reload",
  },

  memorylens: {
    tagline: "Find a movie, book, song or game from a half-remembered fragment.",
    problem:
      "Everyone has had a title on the tip of their tongue. Normal search needs keywords you no longer remember, and chatbots often invent titles that don't exist.",
    audience: [
      "People trying to recall a film, series, book, song, game or actor",
      "Readers and gamers who remember a scene or a feeling, not a name",
      "Anyone tired of chatbots confidently inventing titles",
    ],
    idea:
      "You pick a category and describe what you remember in plain language. MemoryLens searches a real catalog with hybrid retrieval, reranks the candidates and lets an LLM reason over the shortlist. Each match comes with a confidence score and an explanation. When the catalog has no confident match, it names the real title from model knowledge and labels it as such.",
    steps: [
      {
        title: "Understand the query",
        text: "The query is validated, cleaned and read inside the chosen category, which works as a hard filter.",
      },
      {
        title: "Hybrid retrieval",
        text: "Vector search in pgvector and keyword search run together and are fused with weighted RRF.",
      },
      {
        title: "Rerank",
        text: "A local cross-encoder reorders the candidates.",
      },
      {
        title: "LLM reasoning",
        text: "The model reorders the shortlist and explains why each title fits.",
      },
      {
        title: "Confidence and fallback",
        text: "Each result gets a confidence score; weak matches trigger a labeled world-knowledge answer.",
      },
    ],
    features: [
      "Six categories: movies, TV series, songs, books, games and actors",
      "Grounded in a real catalog, so titles are never made up",
      "A soft \"switch category?\" hint when a query clearly belongs elsewhere",
      "Accounts with search history, per-user rate limits and a daily quota",
      "Local embeddings and reranking; the LLM costs about $0.0003 per search",
      "Production setup with nginx, Redis caching, security headers and CI",
    ],
    metrics: [
      { value: "92%", label: "top-1 accuracy, full pipeline" },
      { value: "54%", label: "top-1, retrieval only" },
      { value: "48", label: "benchmark queries" },
      { value: "6", label: "categories" },
    ],
    decisions: [
      "Every stage was measured on a fixed 48-query benchmark instead of guessing which part helps.",
      "Retrieval mostly improves depth (recall@5); the LLM layer is what moves the top-1 answer.",
      "Embeddings and reranking run locally, so only the final reasoning step costs money.",
    ],
    run: "docker compose up --build",
  },

  voyagent: {
    tagline: "Four AI agents negotiate your trip, and you watch them do it.",
    problem:
      "Planning a trip means balancing interests, a budget and a realistic daily schedule at once. Single-prompt AI planners often ignore the budget or pack a day with places that are too far apart.",
    audience: [
      "Travelers planning a short city trip on a fixed budget",
      "Groups that need a plan that fits everyone's interests and wallets",
      "Anyone curious how multi-agent systems resolve conflicts",
    ],
    idea:
      "Give each concern its own agent. Interest proposes places, Budget and Logistics object when the plan breaks the budget or the schedule, and Planner turns the approved plan into a timed route. The whole negotiation streams live to the user, and the result is drawn on an interactive map.",
    steps: [
      {
        title: "Trip request",
        text: "City, dates (up to 5 days), budget, group size and interests.",
      },
      {
        title: "Interest proposes",
        text: "The LLM suggests real places and activities that match the interests.",
      },
      {
        title: "Budget and Logistics check",
        text: "Code checks the total cost and whether each day fits a realistic schedule, using OpenStreetMap coordinates.",
      },
      {
        title: "Negotiation",
        text: "On an objection, Interest proposes alternatives, for at most two rounds.",
      },
      {
        title: "Planner builds the route",
        text: "The approved plan becomes a timed daily schedule, streamed over SSE and shown on the map.",
      },
    ],
    features: [
      "Live agent chat with proposals, objections and approvals as they happen",
      "Each day's route on the map in its own colour, with a route animation",
      "Budget simulator with an A/B comparison of the current and a cheaper plan",
      "Drag-and-drop itinerary editing with automatic re-timing",
      "Read-only share links",
      "EN / AZ interface; agents reply in the selected language",
    ],
    metrics: [
      { value: "4", label: "agents" },
      { value: "2", label: "negotiation rounds max" },
      { value: "5", label: "days per trip" },
      { value: "3", label: "Docker services" },
    ],
    decisions: [
      "Cost and distance checks run in code; the LLM only writes proposals and short messages, which keeps token cost low.",
      "If OpenAI fails, the system switches to OpenRouter and says so openly in the agent chat.",
      "The budget simulator only trims approved stops and never invents new places.",
    ],
    run: "docker compose up --build",
  },

  "study-cost-planner": {
    tagline: "Plan studying abroad with numbers you can trace to a source.",
    problem:
      "Students compare universities by headline tuition, but the real cost includes living, insurance, visa and transport, and scholarships change the picture completely. The information is scattered, and AI tools often make figures up.",
    audience: [
      "Students planning a bachelor's or master's degree abroad",
      "Families budgeting for study costs and scholarships",
      "Advisors who need cited, reproducible estimates",
    ],
    idea:
      "Nine agents run as a deterministic pipeline over a shared planning context. Costs come from cited sources, every calculation is plain Python, and the LLM only handles language: understanding the request, narrating scenarios and writing summaries.",
    steps: [
      {
        title: "Intake",
        text: "A budget form or a chat message is turned into a structured profile.",
      },
      {
        title: "Retrieval",
        text: "Candidate universities and programs are found with SQL and pgvector.",
      },
      {
        title: "Cost and currency",
        text: "Tuition and living costs come from the database with sources; currencies are normalized with FX risk.",
      },
      {
        title: "Scenarios and budget",
        text: "Frugal, moderate and comfortable scenarios are matched against the budget.",
      },
      {
        title: "Scholarships and eligibility",
        text: "Applicable awards are gathered, and each gets an explainable eligibility verdict.",
      },
      {
        title: "Net value and verification",
        text: "Universities are ranked by cost after aid, and a verifier checks sources and calculations.",
      },
    ],
    features: [
      "Total real cost: tuition plus living, insurance, visa, transport and hidden costs",
      "Scholarship discovery with an eligible / likely / unknown / ineligible verdict",
      "Net-cost ranking after the best award you may qualify for",
      "Deadline-aware application plan and a personal tracker",
      "Cost radar, cash-flow Sankey and inflation forecast charts",
      "Downloadable PDF report with sources cited",
    ],
    metrics: [
      { value: "9", label: "planning agents" },
      { value: "93", label: "automated tests" },
      { value: "25", label: "API endpoints" },
      { value: "14", label: "database tables" },
    ],
    decisions: [
      "LLM for language, Python for math, so every number is reproducible and auditable.",
      "The system works end to end without an API key, using deterministic fallbacks.",
      "Each figure is labelled sourced or estimate, so nothing claims more certainty than it has.",
    ],
    run: "docker compose up --build",
  },

  "insurance-prediction": {
    tagline: "Predicting all 7 insurance policy options at once, measured against an honest baseline.",
    problem:
      "In an insurance quote funnel, knowing which options a customer will finally buy helps with pricing and cross-selling. On this data, simply predicting the last quote the customer viewed is already about 92.5% accurate, so a model's headline accuracy can look impressive while adding almost nothing.",
    audience: [
      "Insurance analytics and pricing teams",
      "Recommendation systems that need to know when a customer will change their mind",
      "ML practitioners interested in honest evaluation",
    ],
    idea:
      "Treat the 7 policy options as one multi-output classification problem, engineer features from each customer's quote journey, and judge every model against the last-quote baseline. The real question is whether a model can learn when a customer will move away from their last quote.",
    steps: [
      {
        title: "Exploratory analysis",
        text: "Profiling the quote sequences and finding how dominant the last-quote signal is.",
      },
      {
        title: "Journey features",
        text: "Cost statistics, price volatility and how often each option switched between quotes.",
      },
      {
        title: "Leakage-free preprocessing",
        text: "Imputation and encoding are fitted on the training split only.",
      },
      {
        title: "Multi-output models",
        text: "Random Forest, XGBoost and CatBoost inside MultiOutputClassifier, side by side with the baseline.",
      },
      {
        title: "Tuning and interpretation",
        text: "RandomizedSearchCV on the hardest target, cross-validation, a confusion matrix and SHAP.",
      },
    ],
    features: [
      "Seven targets (A–G) predicted by one model",
      "A baseline comparison for every option, not accuracy in a vacuum",
      "Per-target overfitting check: train–test gap of 1 point or less",
      "Deep dive on the hardest target with SHAP explanations",
      "Inference demo that decodes the full 7-option package",
    ],
    metrics: [
      { value: "92.54%", label: "model, average per option" },
      { value: "92.48%", label: "last-quote baseline" },
      { value: "6 / 7", label: "options beat the baseline" },
      { value: "19,402", label: "test customers" },
    ],
    decisions: [
      "The baseline is reported next to every result, even though it makes the gain look small.",
      "The model's value is concentrated where it matters: the hardest target and customers with unstable histories.",
      "Fitted preprocessing lives in the modeling notebook, so nothing leaks from the test set.",
    ],
    run: "pip install -r requirements.txt",
  },

  "smart-git-cli": {
    tagline: "Conventional Commit messages and release notes, written from your git diff.",
    problem:
      "Good commit messages and changelogs take time, so they are often skipped or vague. That makes history hard to read and releases hard to explain.",
    audience: [
      "Developers who want clean Conventional Commits without the effort",
      "Maintainers who need a changelog for each release",
      "Small teams keeping a readable git history",
    ],
    idea:
      "A small command-line tool reads the staged diff, asks gpt-4o-mini for a Conventional Commit message, shows a preview and commits only after you confirm. A second command turns the commits since the last tag into a changelog.",
    steps: [
      {
        title: "Read the diff",
        text: "Uses the staged diff, or the unstaged diff when nothing is staged.",
      },
      {
        title: "Generate the message",
        text: "gpt-4o-mini writes a Conventional Commit message from a short prompt.",
      },
      {
        title: "Confirm",
        text: "A preview with a [Y/n] prompt appears before anything is committed.",
      },
      {
        title: "Release notes",
        text: "smart-git release collects the commits from the last tag to HEAD into CHANGELOG.md.",
      },
    ],
    features: [
      "Works in any git repository after a single install",
      "Interactive confirmation before every commit",
      "Cost-aware: short prompts, a small token limit and a diff cap of about 6,000 characters",
      "Clear errors for a missing API key, a missing repository or an empty diff",
      "API key read from a git-ignored .env file",
    ],
    metrics: [
      { value: "2", label: "commands" },
      { value: "~6k", label: "characters of diff max" },
      { value: "MIT", label: "license" },
    ],
    decisions: [
      "Nothing is committed without an explicit yes from the user.",
      "The diff size is capped, so a huge change can't produce a huge bill.",
    ],
    run: "pip install git+https://github.com/Khayal07/Smart-Git-CLI.git",
  },
};

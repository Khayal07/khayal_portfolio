// Azerbaijani strings for project detail pages, keyed by the English text.
export const azProjectContent: Record<string, string> = {
  "Explainable CV-to-job match scoring that a recruiter can check line by line.":
    "İşə götürənin sətir-sətir yoxlaya biləcəyi, izahlı CV–vakansiya uyğunluq balı.",
  "Screening CVs by hand is slow and inconsistent, and most AI screening tools return a number with no explanation. A black-box score can hide bias, reward keyword stuffing and is hard to defend to a candidate or a hiring manager.":
    "CV-ləri əl ilə seçmək yavaş və qeyri-sabitdir, AI ilə seçim alətlərinin çoxu isə izahsız bir rəqəm qaytarır. Qara qutu kimi işləyən bal qərəzi gizlədə, açar söz yığınını mükafatlandıra bilər və onu namizədə və ya menecerə əsaslandırmaq çətindir.",
  "Split the work. A language model only reads the CV and the job description and turns them into structured data. The score itself comes from plain, unit-tested Python rules, so every point traces back to a line in the reasons. Personal details are removed before any text leaves the service, and the result is decision support only: a person makes the call.":
    "İşi bölmək. Dil modeli yalnız CV-ni və vakansiya təsvirini oxuyub strukturlaşdırılmış dataya çevirir. Balın özünü isə sadə, unit-testlə yoxlanılan Python qaydaları hesablayır, ona görə hər bal səbəblərdəki bir sətrə bağlanır. Mətn servisdən çıxmazdan əvvəl şəxsi məlumatlar silinir və nəticə yalnız qərara dəstəkdir: son qərarı insan verir.",
  "Recruiters and HR teams shortlisting many applicants for one role":
    "Bir vakansiyaya çoxlu namizəd seçən işə qəbul və HR komandaları",
  "Hiring managers who want an explained first pass before reading CVs":
    "CV-ləri oxumazdan əvvəl izahlı ilkin seçim istəyən menecerlər",
  "Candidates checking how well their CV fits a specific job":
    "CV-lərinin konkret vakansiyaya nə qədər uyğun olduğunu yoxlayan namizədlər",
  "Document check":
    "Sənəd yoxlaması",
  "Text that does not look like a CV, such as a pasted job posting, is rejected before any model call.":
    "CV-yə oxşamayan mətn, məsələn yapışdırılmış vakansiya elanı, heç bir model çağırışından əvvəl rədd edilir.",
  "Anonymization":
    "Anonimləşdirmə",
  "Name, date of birth, gender, photo references, contact details and referees are removed.":
    "Ad, doğum tarixi, cins, foto istinadları, əlaqə məlumatları və referanslar silinir.",
  "Structured extraction":
    "Strukturlaşdırılmış çıxarış",
  "The LLM turns the CV and the job into skills, dated roles, education and languages, validated with Pydantic.":
    "LLM CV-ni və vakansiyanı bacarıqlara, tarixli vəzifələrə, təhsilə və dillərə çevirir; nəticə Pydantic ilə yoxlanılır.",
  "Deterministic scoring":
    "Deterministik qiymətləndirmə",
  "Weighted rules: required skills 50, nice-to-have 15, experience 20, education 10, languages 5.":
    "Çəkili qaydalar: tələb olunan bacarıqlar 50, arzuolunan 15, təcrübə 20, təhsil 10, dillər 5.",
  "Explained result":
    "İzahlı nəticə",
  "A 0–100 score with a per-component breakdown, matched and missing skills, reasons and warnings.":
    "Komponentlər üzrə bölgüsü, uyğun və çatışmayan bacarıqları, səbəbləri və xəbərdarlıqları olan 0–100 bal.",
  "Evidence-weighted skills: a skill used in a job counts more than one only listed in a skills section":
    "Sübuta görə çəkilən bacarıqlar: işdə istifadə olunan bacarıq yalnız siyahıda yazılandan çox sayılır",
  "Experience computed from role dates, with overlapping roles merged":
    "Təcrübə vəzifə tarixlərindən hesablanır, üst-üstə düşən vəzifələr birləşdirilir",
  "A warning when the CV copies text from the job posting":
    "CV vakansiya elanından mətn köçürəndə xəbərdarlıq",
  "PDF upload or pasted text, with scanned PDFs detected":
    "PDF yükləmə və ya mətn yapışdırma; skan edilmiş PDF-lər tanınır",
  "Per-IP rate limits, a daily model-call cap and a disk cache to control cost":
    "Xərci idarə etmək üçün IP üzrə limitlər, gündəlik model çağırışı limiti və disk keşi",
  "Strict security headers; CV text is never written to disk or logged":
    "Sərt təhlükəsizlik başlıqları; CV mətni heç vaxt diskə yazılmır və loglanmır",
  "explainable score":
    "izahlı bal",
  "labeled cases pass":
    "etiketlənmiş hal keçir",
  "ranking checks pass":
    "sıralama yoxlaması keçir",
  "model calls per match":
    "bir uyğunlaşdırmada model çağırışı",
  "The LLM only extracts data; Python computes every number, so the score is reproducible and unit-tested.":
    "LLM yalnız data çıxarır; hər rəqəmi Python hesablayır, ona görə bal təkrarlana bilən və testlə yoxlanılandır.",
  "Evaluation labels were written before any model output existed, and no label was changed to make a case pass.":
    "Qiymətləndirmə etiketləri heç bir model nəticəsi olmadan əvvəl yazılıb və heç bir hal keçsin deyə etiket dəyişdirilməyib.",
  "Skill matching uses whole tokens, so Java never matches JavaScript and Go never matches MongoDB.":
    "Bacarıqlar tam sözlərlə müqayisə olunur, ona görə Java heç vaxt JavaScript-ə, Go isə MongoDB-yə uyğun sayılmır.",
  "Find a movie, book, song or game from a half-remembered fragment.":
    "Yarımçıq xatırladığın fraqmentdən film, kitab, mahnı və ya oyunu tap.",
  "Everyone has had a title on the tip of their tongue. Normal search needs keywords you no longer remember, and chatbots often invent titles that don't exist.":
    "Hamının dilinin ucunda qalan bir ad olub. Adi axtarış artıq yadında olmayan açar sözlər tələb edir, çatbotlar isə tez-tez mövcud olmayan adlar uydurur.",
  "You pick a category and describe what you remember in plain language. MemoryLens searches a real catalog with hybrid retrieval, reranks the candidates and lets an LLM reason over the shortlist. Each match comes with a confidence score and an explanation. When the catalog has no confident match, it names the real title from model knowledge and labels it as such.":
    "Kateqoriya seçirsən və xatırladığını adi dillə təsvir edirsən. MemoryLens real kataloqda hibrid axtarış aparır, namizədləri yenidən sıralayır və qısa siyahı üzərində LLM-ə düşünməyə imkan verir. Hər uyğunluq inam balı və izahla gəlir. Kataloqda inamlı uyğunluq olmayanda real adı modelin biliyindən deyir və bunu ayrıca qeyd edir.",
  "People trying to recall a film, series, book, song, game or actor":
    "Film, serial, kitab, mahnı, oyun və ya aktyoru xatırlamağa çalışan insanlar",
  "Readers and gamers who remember a scene or a feeling, not a name":
    "Adı yox, bir səhnəni və ya hissi xatırlayan oxucular və oyunçular",
  "Anyone tired of chatbots confidently inventing titles":
    "Çatbotların inamla uydurduğu adlardan bezənlər",
  "Understand the query":
    "Sorğunu anlamaq",
  "The query is validated, cleaned and read inside the chosen category, which works as a hard filter.":
    "Sorğu yoxlanılır, təmizlənir və seçilmiş kateqoriya daxilində oxunur; kateqoriya sərt filtr kimi işləyir.",
  "Hybrid retrieval":
    "Hibrid axtarış",
  "Vector search in pgvector and keyword search run together and are fused with weighted RRF.":
    "pgvector-da vektor axtarışı və açar söz axtarışı birlikdə işləyir və çəkili RRF ilə birləşdirilir.",
  "Rerank":
    "Yenidən sıralama",
  "A local cross-encoder reorders the candidates.":
    "Lokal cross-encoder namizədləri yenidən sıralayır.",
  "LLM reasoning":
    "LLM reasoning",
  "The model reorders the shortlist and explains why each title fits.":
    "Model qısa siyahını yenidən sıralayır və hər adın niyə uyğun olduğunu izah edir.",
  "Confidence and fallback":
    "İnam və ehtiyat cavab",
  "Each result gets a confidence score; weak matches trigger a labeled world-knowledge answer.":
    "Hər nəticə inam balı alır; zəif uyğunluqda ayrıca qeyd olunan, ümumi biliyə əsaslanan cavab verilir.",
  "Six categories: movies, TV series, songs, books, games and actors":
    "Altı kateqoriya: filmlər, seriallar, mahnılar, kitablar, oyunlar və aktyorlar",
  "Grounded in a real catalog, so titles are never made up":
    "Real kataloqa əsaslanır, adlar heç vaxt uydurulmur",
  "A soft \"switch category?\" hint when a query clearly belongs elsewhere":
    "Sorğu açıq-aydın başqa kateqoriyaya aid olanda yumşaq \"kateqoriyanı dəyiş?\" təklifi",
  "Accounts with search history, per-user rate limits and a daily quota":
    "Axtarış tarixçəsi olan hesablar, istifadəçi üzrə limitlər və gündəlik kvota",
  "Local embeddings and reranking; the LLM costs about $0.0003 per search":
    "Lokal embedding və reranking; LLM bir axtarış üçün təxminən $0.0003-a başa gəlir",
  "Production setup with nginx, Redis caching, security headers and CI":
    "nginx, Redis keşi, təhlükəsizlik başlıqları və CI ilə istehsalat quruluşu",
  "top-1 accuracy, full pipeline":
    "top-1 dəqiqlik, tam pipeline",
  "top-1, retrieval only":
    "top-1, yalnız axtarış",
  "benchmark queries":
    "benchmark sorğusu",
  "categories":
    "kateqoriya",
  "Every stage was measured on a fixed 48-query benchmark instead of guessing which part helps.":
    "Hansı hissənin kömək etdiyini təxmin etmək əvəzinə hər mərhələ sabit 48 sorğuluq benchmark-da ölçülüb.",
  "Retrieval mostly improves depth (recall@5); the LLM layer is what moves the top-1 answer.":
    "Axtarış əsasən dərinliyi yaxşılaşdırır (recall@5); birinci cavabı dəyişən LLM qatıdır.",
  "Embeddings and reranking run locally, so only the final reasoning step costs money.":
    "Embedding və reranking lokal işləyir, ona görə yalnız son reasoning addımı pula başa gəlir.",
  "Four AI agents negotiate your trip, and you watch them do it.":
    "Dörd AI agenti səyahətini müzakirə edir, sən də buna canlı baxırsan.",
  "Planning a trip means balancing interests, a budget and a realistic daily schedule at once. Single-prompt AI planners often ignore the budget or pack a day with places that are too far apart.":
    "Səyahət planlamaq maraqları, büdcəni və real gündəlik cədvəli eyni anda tarazlaşdırmaq deməkdir. Tək promptla işləyən AI planlayıcıları tez-tez büdcəni nəzərə almır və ya bir günə bir-birindən çox uzaq yerlər yığır.",
  "Give each concern its own agent. Interest proposes places, Budget and Logistics object when the plan breaks the budget or the schedule, and Planner turns the approved plan into a timed route. The whole negotiation streams live to the user, and the result is drawn on an interactive map.":
    "Hər məsələyə ayrıca agent vermək. Interest yerlər təklif edir, Budget və Logistics plan büdcəni və ya cədvəli pozanda etiraz edir, Planner isə təsdiqlənmiş planı vaxtı bölünmüş marşruta çevirir. Bütün müzakirə istifadəçiyə canlı ötürülür, nəticə interaktiv xəritədə çəkilir.",
  "Travelers planning a short city trip on a fixed budget":
    "Sabit büdcə ilə qısa şəhər səyahəti planlayanlar",
  "Groups that need a plan that fits everyone's interests and wallets":
    "Hamının maraqlarına və büdcəsinə uyğun plan lazım olan qruplar",
  "Anyone curious how multi-agent systems resolve conflicts":
    "Multi-agent sistemlərin münaqişələri necə həll etdiyi ilə maraqlananlar",
  "Trip request":
    "Səyahət sorğusu",
  "City, dates (up to 5 days), budget, group size and interests.":
    "Şəhər, tarixlər (5 günə qədər), büdcə, qrup ölçüsü və maraqlar.",
  "Interest proposes":
    "Interest təklif edir",
  "The LLM suggests real places and activities that match the interests.":
    "LLM maraqlara uyğun real yerlər və fəaliyyətlər təklif edir.",
  "Budget and Logistics check":
    "Budget və Logistics yoxlayır",
  "Code checks the total cost and whether each day fits a realistic schedule, using OpenStreetMap coordinates.":
    "Kod ümumi xərci və hər günün real cədvələ sığıb-sığmadığını OpenStreetMap koordinatları ilə yoxlayır.",
  "Negotiation":
    "Müzakirə",
  "On an objection, Interest proposes alternatives, for at most two rounds.":
    "Etiraz olanda Interest alternativlər təklif edir, ən çoxu iki raund.",
  "Planner builds the route":
    "Planner marşrutu qurur",
  "The approved plan becomes a timed daily schedule, streamed over SSE and shown on the map.":
    "Təsdiqlənmiş plan vaxtı bölünmüş gündəlik cədvələ çevrilir, SSE ilə ötürülür və xəritədə göstərilir.",
  "Live agent chat with proposals, objections and approvals as they happen":
    "Təkliflər, etirazlar və təsdiqlər baş verdiyi anda görünən canlı agent çatı",
  "Each day's route on the map in its own colour, with a route animation":
    "Xəritədə hər günün marşrutu öz rəngində, marşrut animasiyası ilə",
  "Budget simulator with an A/B comparison of the current and a cheaper plan":
    "Cari və daha ucuz planın A/B müqayisəsi olan büdcə simulyatoru",
  "Drag-and-drop itinerary editing with automatic re-timing":
    "Vaxtları avtomatik yenidən hesablayan drag-and-drop marşrut redaktəsi",
  "Read-only share links":
    "Yalnız baxış üçün paylaşma linkləri",
  "EN / AZ interface; agents reply in the selected language":
    "EN / AZ interfeys; agentlər seçilmiş dildə cavab verir",
  "agents":
    "agent",
  "negotiation rounds max":
    "maksimum müzakirə raundu",
  "days per trip":
    "səyahət günü",
  "Docker services":
    "Docker servisi",
  "Cost and distance checks run in code; the LLM only writes proposals and short messages, which keeps token cost low.":
    "Xərc və məsafə yoxlamaları kodda aparılır; LLM yalnız təkliflər və qısa mesajlar yazır, bu da token xərcini aşağı saxlayır.",
  "If OpenAI fails, the system switches to OpenRouter and says so openly in the agent chat.":
    "OpenAI işləməyəndə sistem OpenRouter-ə keçir və bunu agent çatında açıq deyir.",
  "The budget simulator only trims approved stops and never invents new places.":
    "Büdcə simulyatoru yalnız təsdiqlənmiş dayanacaqları çıxarır, heç vaxt yeni yer uydurmur.",
  "Plan studying abroad with numbers you can trace to a source.":
    "Xaricdə təhsili mənbəyinə qədər izlənə bilən rəqəmlərlə planla.",
  "Students compare universities by headline tuition, but the real cost includes living, insurance, visa and transport, and scholarships change the picture completely. The information is scattered, and AI tools often make figures up.":
    "Tələbələr universitetləri əsas təhsil haqqına görə müqayisə edir, amma real xərcə yaşayış, sığorta, viza və nəqliyyat da daxildir, təqaüdlər isə mənzərəni tamamilə dəyişir. Məlumat dağınıqdır, AI alətləri isə çox vaxt rəqəmləri uydurur.",
  "Nine agents run as a deterministic pipeline over a shared planning context. Costs come from cited sources, every calculation is plain Python, and the LLM only handles language: understanding the request, narrating scenarios and writing summaries.":
    "Doqquz agent ortaq planlama konteksti üzərində deterministik pipeline kimi işləyir. Xərclər istinad edilmiş mənbələrdən gəlir, hər hesablama sadə Python-dur, LLM isə yalnız dil işini görür: sorğunu anlamaq, ssenariləri danışmaq və xülasələr yazmaq.",
  "Students planning a bachelor's or master's degree abroad":
    "Xaricdə bakalavr və ya magistr təhsili planlayan tələbələr",
  "Families budgeting for study costs and scholarships":
    "Təhsil xərclərini və təqaüdləri hesablayan ailələr",
  "Advisors who need cited, reproducible estimates":
    "İstinadlı, təkrarlana bilən hesablamalar lazım olan məsləhətçilər",
  "Intake":
    "Qəbul",
  "A budget form or a chat message is turned into a structured profile.":
    "Büdcə forması və ya çat mesajı strukturlaşdırılmış profilə çevrilir.",
  "Retrieval":
    "Axtarış",
  "Candidate universities and programs are found with SQL and pgvector.":
    "Namizəd universitetlər və proqramlar SQL və pgvector ilə tapılır.",
  "Cost and currency":
    "Xərc və valyuta",
  "Tuition and living costs come from the database with sources; currencies are normalized with FX risk.":
    "Təhsil və yaşayış xərcləri mənbələri ilə bazadan gəlir; valyutalar məzənnə riski nəzərə alınaraq normallaşdırılır.",
  "Scenarios and budget":
    "Ssenarilər və büdcə",
  "Frugal, moderate and comfortable scenarios are matched against the budget.":
    "Qənaətcil, orta və rahat ssenarilər büdcə ilə müqayisə olunur.",
  "Scholarships and eligibility":
    "Təqaüdlər və uyğunluq",
  "Applicable awards are gathered, and each gets an explainable eligibility verdict.":
    "Uyğun təqaüdlər toplanır və hər birinə izahlı uyğunluq qərarı verilir.",
  "Net value and verification":
    "Xalis dəyər və yoxlama",
  "Universities are ranked by cost after aid, and a verifier checks sources and calculations.":
    "Universitetlər yardımdan sonrakı xərcə görə sıralanır, yoxlayıcı agent mənbələri və hesablamaları yoxlayır.",
  "Total real cost: tuition plus living, insurance, visa, transport and hidden costs":
    "Real ümumi xərc: təhsil haqqı üstəgəl yaşayış, sığorta, viza, nəqliyyat və gizli xərclər",
  "Scholarship discovery with an eligible / likely / unknown / ineligible verdict":
    "Uyğun / ehtimal / naməlum / uyğun deyil qərarı ilə təqaüd axtarışı",
  "Net-cost ranking after the best award you may qualify for":
    "Ala biləcəyin ən yaxşı təqaüddən sonra xalis xərcə görə sıralama",
  "Deadline-aware application plan and a personal tracker":
    "Son tarixləri nəzərə alan müraciət planı və şəxsi izləyici",
  "Cost radar, cash-flow Sankey and inflation forecast charts":
    "Xərc radarı, pul axını Sankey diaqramı və inflyasiya proqnozu qrafikləri",
  "Downloadable PDF report with sources cited":
    "Mənbələri göstərilmiş, yüklənə bilən PDF hesabat",
  "planning agents":
    "planlama agenti",
  "automated tests":
    "avtomatik test",
  "API endpoints":
    "API endpoint",
  "database tables":
    "verilənlər bazası cədvəli",
  "LLM for language, Python for math, so every number is reproducible and auditable.":
    "Dil üçün LLM, riyaziyyat üçün Python; ona görə hər rəqəm təkrarlana və yoxlana bilir.",
  "The system works end to end without an API key, using deterministic fallbacks.":
    "Sistem API açarı olmadan da deterministik ehtiyat həllərlə başdan sona işləyir.",
  "Each figure is labelled sourced or estimate, so nothing claims more certainty than it has.":
    "Hər rəqəm \"mənbəli\" və ya \"təxmini\" kimi işarələnir, heç nə olduğundan daha dəqiq görünmür.",
  "Predicting all 7 insurance policy options at once, measured against an honest baseline.":
    "7 sığorta polis seçiminin hamısını eyni anda proqnozlaşdırmaq və dürüst baseline ilə ölçmək.",
  "In an insurance quote funnel, knowing which options a customer will finally buy helps with pricing and cross-selling. On this data, simply predicting the last quote the customer viewed is already about 92.5% accurate, so a model's headline accuracy can look impressive while adding almost nothing.":
    "Sığorta təklifləri prosesində müştərinin sonda hansı seçimləri alacağını bilmək qiymətləndirmə və əlavə satış üçün faydalıdır. Bu datada isə müştərinin baxdığı son təklifi proqnoz kimi götürmək artıq təxminən 92.5% dəqiqdir, ona görə modelin əsas dəqiqlik rəqəmi təsirli görünə bilər, amma demək olar ki heç nə əlavə etməyə bilər.",
  "Treat the 7 policy options as one multi-output classification problem, engineer features from each customer's quote journey, and judge every model against the last-quote baseline. The real question is whether a model can learn when a customer will move away from their last quote.":
    "7 polis seçimini bir multi-output təsnifat problemi kimi qəbul etmək, hər müştərinin təklif yolundan xüsusiyyətlər çıxarmaq və hər modeli son-təklif baseline-ı ilə müqayisə etmək. Əsl sual budur: model müştərinin son təklifdən nə vaxt uzaqlaşacağını öyrənə bilərmi?",
  "Insurance analytics and pricing teams":
    "Sığorta analitikası və qiymətləndirmə komandaları",
  "Recommendation systems that need to know when a customer will change their mind":
    "Müştərinin fikrini nə vaxt dəyişəcəyini bilməli olan tövsiyə sistemləri",
  "ML practitioners interested in honest evaluation":
    "Dürüst qiymətləndirmə ilə maraqlanan ML mütəxəssisləri",
  "Exploratory analysis":
    "Kəşfiyyat analizi",
  "Profiling the quote sequences and finding how dominant the last-quote signal is.":
    "Təklif ardıcıllıqlarını təhlil etmək və son-təklif siqnalının nə qədər güclü olduğunu tapmaq.",
  "Journey features":
    "Yol xüsusiyyətləri",
  "Cost statistics, price volatility and how often each option switched between quotes.":
    "Xərc statistikası, qiymət dəyişkənliyi və hər seçimin təkliflər arasında neçə dəfə dəyişdiyi.",
  "Leakage-free preprocessing":
    "Sızmasız ilkin emal",
  "Imputation and encoding are fitted on the training split only.":
    "İmputasiya və kodlaşdırma yalnız təlim hissəsi üzərində öyrədilir.",
  "Multi-output models":
    "Multi-output modellər",
  "Random Forest, XGBoost and CatBoost inside MultiOutputClassifier, side by side with the baseline.":
    "MultiOutputClassifier daxilində Random Forest, XGBoost və CatBoost, baseline ilə yan-yana.",
  "Tuning and interpretation":
    "Tənzimləmə və şərh",
  "RandomizedSearchCV on the hardest target, cross-validation, a confusion matrix and SHAP.":
    "Ən çətin hədəf üzrə RandomizedSearchCV, cross-validation, confusion matrix və SHAP.",
  "Seven targets (A–G) predicted by one model":
    "Yeddi hədəf (A–G) bir modellə proqnozlaşdırılır",
  "A baseline comparison for every option, not accuracy in a vacuum":
    "Hər seçim üçün baseline müqayisəsi, kontekstsiz dəqiqlik yox",
  "Per-target overfitting check: train–test gap of 1 point or less":
    "Hər hədəf üzrə overfitting yoxlaması: təlim–test fərqi 1 bal və ya az",
  "Deep dive on the hardest target with SHAP explanations":
    "Ən çətin hədəfə SHAP izahları ilə dərin baxış",
  "Inference demo that decodes the full 7-option package":
    "Tam 7 seçimlik paketi deşifrə edən proqnoz nümunəsi",
  "model, average per option":
    "model, seçim üzrə orta",
  "last-quote baseline":
    "son-təklif baseline",
  "options beat the baseline":
    "seçimdə baseline keçilir",
  "test customers":
    "test müştərisi",
  "The baseline is reported next to every result, even though it makes the gain look small.":
    "Baseline hər nəticənin yanında göstərilir, qazancı kiçik göstərsə belə.",
  "The model's value is concentrated where it matters: the hardest target and customers with unstable histories.":
    "Modelin dəyəri ən vacib yerdə cəmlənib: ən çətin hədəfdə və tarixçəsi qeyri-sabit müştərilərdə.",
  "Fitted preprocessing lives in the modeling notebook, so nothing leaks from the test set.":
    "Öyrədilən ilkin emal modelləşdirmə notebook-undadır, ona görə test datasından heç nə sızmır.",
  "Conventional Commit messages and release notes, written from your git diff.":
    "git diff-dən yazılan Conventional Commit mesajları və buraxılış qeydləri.",
  "Good commit messages and changelogs take time, so they are often skipped or vague. That makes history hard to read and releases hard to explain.":
    "Yaxşı commit mesajları və changelog yazmaq vaxt aparır, ona görə çox vaxt ya yazılmır, ya da qeyri-müəyyən olur. Bu da tarixçəni oxumağı və buraxılışları izah etməyi çətinləşdirir.",
  "A small command-line tool reads the staged diff, asks gpt-4o-mini for a Conventional Commit message, shows a preview and commits only after you confirm. A second command turns the commits since the last tag into a changelog.":
    "Kiçik komanda sətri aləti staged diff-i oxuyur, gpt-4o-mini-dən Conventional Commit mesajı istəyir, önizləmə göstərir və yalnız sən təsdiqləyəndən sonra commit edir. İkinci komanda son tag-dan bəri olan commitləri changelog-a çevirir.",
  "Developers who want clean Conventional Commits without the effort":
    "Əziyyət çəkmədən səliqəli Conventional Commits istəyən developerlər",
  "Maintainers who need a changelog for each release":
    "Hər buraxılış üçün changelog lazım olan maintainer-lər",
  "Small teams keeping a readable git history":
    "Oxunaqlı git tarixçəsi saxlayan kiçik komandalar",
  "Read the diff":
    "Diff-i oxumaq",
  "Uses the staged diff, or the unstaged diff when nothing is staged.":
    "Staged diff-dən, heç nə staged deyilsə, unstaged diff-dən istifadə edir.",
  "Generate the message":
    "Mesajı yaratmaq",
  "gpt-4o-mini writes a Conventional Commit message from a short prompt.":
    "gpt-4o-mini qısa promptdan Conventional Commit mesajı yazır.",
  "Confirm":
    "Təsdiq",
  "A preview with a [Y/n] prompt appears before anything is committed.":
    "Heç nə commit olunmazdan əvvəl [Y/n] sualı ilə önizləmə göstərilir.",
  "Release notes":
    "Buraxılış qeydləri",
  "smart-git release collects the commits from the last tag to HEAD into CHANGELOG.md.":
    "smart-git release son tag-dan HEAD-ə qədər olan commitləri CHANGELOG.md-yə yığır.",
  "Works in any git repository after a single install":
    "Bir dəfə quraşdırandan sonra istənilən git reposunda işləyir",
  "Interactive confirmation before every commit":
    "Hər commitdən əvvəl interaktiv təsdiq",
  "Cost-aware: short prompts, a small token limit and a diff cap of about 6,000 characters":
    "Xərcə qənaət: qısa promptlar, kiçik token limiti və təxminən 6000 simvolluq diff limiti",
  "Clear errors for a missing API key, a missing repository or an empty diff":
    "API açarı, repo və ya diff olmayanda aydın xəta mesajları",
  "API key read from a git-ignored .env file":
    "API açarı git-ə düşməyən .env faylından oxunur",
  "commands":
    "komanda",
  "characters of diff max":
    "maksimum diff simvolu",
  "license":
    "lisenziya",
  "Nothing is committed without an explicit yes from the user.":
    "İstifadəçinin açıq \"hə\"-si olmadan heç nə commit olunmur.",
  "The diff size is capped, so a huge change can't produce a huge bill.":
    "Diff ölçüsü məhdudlaşdırılıb, ona görə böyük dəyişiklik böyük hesab yaratmır.",
  "Explore project":
    "Layihəyə bax",
  "Back to projects":
    "Layihələrə qayıt",
  "The problem":
    "Problem",
  "The problem and the idea":
    "Problem və ideya",
  "The idea":
    "İdeya",
  "Who it's for":
    "Kimin üçündür",
  "How it works":
    "Necə işləyir",
  "Architecture":
    "Arxitektura",
  "Screenshots":
    "Ekran görüntüləri",
  "Key features":
    "Əsas imkanlar",
  "Design decisions":
    "Mühəndislik qərarları",
  "Built with":
    "Texnologiyalar",
  "Run it locally":
    "Lokal işə sal",
  "Previous project":
    "Əvvəlki layihə",
  "Next project":
    "Növbəti layihə",
  "At a glance":
    "Qısaca",
  "Copy":
    "Kopyala",
  "Copied":
    "Kopyalandı",
  "Open the diagram full screen":
    "Sxemi tam ekranda aç",
  "View source on GitHub":
    "GitHub-da koda bax",
  "Try the live demo":
    "Canlı demonu yoxla",
  "Project not found":
    "Layihə tapılmadı",
  "Enlarge screenshot":
    "Şəkli böyüt",
  "Previous screenshot":
    "Əvvəlki şəkil",
  "Next screenshot":
    "Növbəti şəkil",
};

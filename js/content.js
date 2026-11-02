/* =====================================================================
   SITE CONTENT — edit everything about you in this one file.
   ---------------------------------------------------------------------
   - Replace the placeholder text in quotes with your own details.
   - Delete any item you don't need, or copy an item to add more.
   - Keep the commas between items, and the quotes around text.
   - Blog post bodies live in /posts/<slug>.md (plain Markdown).
   ===================================================================== */

window.SITE = {
  /* ---------- Basics ---------- */
  profile: {
    name: "Akhil Dev Ravindran",
    initials: "AR",                    // shown when no photo is set
    photo: "",                         // e.g. "assets/me.jpg" (leave "" for initials)
    role: "Senior AI Engineering Lead",
    location: "Lucan, Dublin",
    availability: "",                  // short status line like "Open to opportunities", or "" to hide
    tagline: "Designing and shipping production AI systems in enterprise environments, with governance baked in.",
    intro:
      "Senior AI Engineering Lead with 7+ years of experience designing and shipping production AI systems in enterprise environments.",
    email: "akhildevvr@gmail.com",
    resumeFile: "assets/resume.pdf",   // drop your PDF into /assets with this name
    // The little code card in the hero
    card: {
      focus: "production AI systems",
      stack: ["LangGraph", "Azure OpenAI", "Snowflake"],
      building: ["production RAG systems", "multi-agent LLM pipelines", "LLMOps frameworks"], // rotates with a typing effect
    },
  },

  /* ---------- Social links (delete any you don't use) ---------- */
  socials: [
    { label: "GitHub", url: "https://github.com/akhildevvr" },
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
    { label: "Email",  url: "mailto:akhildevvr@gmail.com" },
  ],

  /* ---------- About ---------- */
  about: {
    paragraphs: [
      "I've spent the last two and a half years at Autodesk Ireland working closely with ML scientists, data scientists, analysts, and sales teams to build AI infrastructure, that people actually use at scale and with governance baked in.",
      "I've led the design and delivery of production RAG systems, multi-agent LLM pipelines, and LLMOps frameworks across regulated enterprise contexts, with strong experience in data governance, compliance, and responsible AI deployment.",
      "I'm comfortable working across technical and non-technical stakeholders, and I take mentoring seriously, helping engineers grow is one of the parts of the job I find most rewarding.",
    ],
    // Quick numbers shown as animated counters
    stats: [
      { value: 7,   suffix: "+", label: "Years of experience" },
      { value: 500, suffix: "+", label: "Enterprise tables exposed to AI assistants via MCP" },
      { value: 7,   suffix: "",  label: "LLM quality metrics in the guardrails framework" },
    ],
  },

  /* ---------- Skills ----------
     Each item can be plain text ("Python") or { name: "Python", level: 4 } to show a 1–5 meter.
     "note" is optional extra text under the group. */
  skills: [
    {
      group: "AI & Agent Systems",
      items: ["Generative AI", "RAG", "LangChain", "LangGraph", "Multi-agent orchestration", "Vector databases",
        "Azure AI Search (vector indexing)", "Text-to-SQL agents", "Human-in-the-loop workflows", "MCP",
        "A2A (Agent-to-Agent) protocols", "Azure OpenAI", "Anthropic", "Hugging Face", "FAISS", "PGVector", "Agentic AI"],
    },
    {
      group: "LLMOps & AI Observability",
      title: "LLMOps, Model Validation & AI Observability",
      items: ["AI guardrails", "LLM monitoring", "DeepEval", "RAGAS", "DsPy", "Monitoring dashboards",
        "AI observability (Opik)", "Automated pre-deployment quality gates"],
    },
    {
      group: "Data Engineering",
      items: ["Production-grade ELT/ETL pipelines", "Orchestration and automation", "CI/CD", "Data modelling",
        "Advanced SQL", "Streamlit", "PowerBI", "Airflow"],
    },
    {
      group: "Data Governance",
      title: "Data Governance & Compliance",
      items: ["Data lifecycle management", "Business definitions", "Data dictionaries", "Lineage tracking", "RBAC", "Auditability"],
      note: "Aligned to enterprise regulatory and security requirements.",
    },
    {
      group: "Cloud & Tools",
      items: ["Snowflake", "Snowflake AI", "Snowpark Container Services", "AWS Lambda", "SQS", "S3",
        "Elastic Beanstalk", "Glue", "Azure", "Python", "SQL", "Jenkins", "Docker", "GitHub"],
    },
    {
      group: "Ways of Working",
      items: ["Agile/Scrum", "Cross-functional team leadership", "Stakeholder management", "Technical mentoring"],
    },
  ],

  /* ---------- Experience (newest first) ----------
     Use "roles" for several titles at one company, and "sections" to group highlights under headings.
     Wrap words in **double asterisks** to make them bold. */
  experience: [
    {
      company: "Autodesk Ireland Limited",
      location: "Dublin",
      roles: [
        { title: "Engineering Lead", period: "Feb 2024 – Present" },
        { title: "Data Engineer Tech Lead", period: "Apr 2022 – Feb 2024" },
      ],
      sections: [
        {
          heading: "Technical Leadership & Strategy",
          items: [
            "Led a cross-functional AI and engineering team as the primary technical partner for ML scientists, data scientists, analysts, and sales — setting technical standards, defining the AI engineering roadmap, and translating ambiguous business problems into production-ready systems built to last.",
            "Defined and standardised prompt engineering and context engineering conventions across AI teams, including system prompt design, few-shot structuring, context window management, and chain-of-thought patterns — establishing reusable templates adopted across multiple live AI applications, and mentoring junior engineers on the same practices.",
            "Built a reusable AI safety and guardrails framework using **DeepEval** and **RAGAS** with **Azure OpenAI** as LLM-as-judge, measuring seven performance metrics (faithfulness, context precision, factual accuracy, response relevancy) with synthetic dataset generation — surfacing results into **Opik** for real-time LLM monitoring, tracing, and observability. This became the organisation's standard for automated pre-deployment quality gates and continuous production monitoring.",
            "Designed and delivered an Autodesk-wide workshop series on responsible AI adoption, covering agentic development workflows, custom tooling conventions, and prompt best practices — upskilling engineering and analyst teams and establishing internal standards that were rolled out broadly.",
          ],
        },
        {
          heading: "Generative AI & Advanced Analytics",
          items: [
            "Owned, architected, and shipped a production agentic RAG system using **LangChain**, **Azure OpenAI**, and **Azure AI Search (vector indexing)**, enabling natural-language querying of enterprise datasets — removing the SQL bottleneck for non-technical users across multiple business teams.",
            "Designed and deployed a production multi-agent text-to-SQL system using **LangGraph** orchestration and **asyncio** for concurrent agent execution. Integrated independently developed agents from cross-functional teams via **Agent-to-Agent (A2A)** protocol, composing them into a unified end-to-end pipeline with built-in validation logic, error-handling loops, and human-in-the-loop gates.",
            "Architected and deployed a production **Model Context Protocol (MCP)** server on **AWS Elastic Beanstalk**, exposing a Snowflake knowledge graph of 500+ enterprise data tables to AI coding assistants — the organisation's first production MCP deployment, enabling agentic developer workflows at scale.",
            "Co-architected a Sales Research RAG application using **LangChain**, **Azure OpenAI**, and **Azure AI Search** over Snowflake CRM data, enabling sales teams to surface prospects through natural language, with a real-time Snowflake feedback loop for continuous improvement.",
            "Designed and deployed a production **LangGraph** document review agent with automated validation guardrails — ingesting and quality-scoring analytics documents before indexing into **Azure AI Search**, ensuring only verified content reaches the enterprise knowledge base.",
            "Built an unstructured-to-structured data extraction pipeline from sales call transcripts, web-scraped data, and Salesforce notes using **DsPy**, feeding clean structured outputs into ML workflows for global sales Go-To-Market initiatives.",
          ],
        },
        {
          heading: "Data & Pipeline Engineering",
          items: [
            "Built a CI/CD pull request validation system for ELT pipelines using GitHub, Docker, Jenkins, and SQLFluff — replacing slow manual code reviews with instant feedback on SQL style and model correctness.",
            "Designed AWS Lambda-triggered Glue jobs to extract parquet files from S3 for enterprise product usage chargeback reporting — a project that directly contributed to an EBA contract renewal with a key enterprise customer.",
            "Automated Streamlit app deployments into Snowflake using Python, Airflow, and Jenkins, including warehouse strategy and a staging environment for safe pre-production testing.",
          ],
        },
      ],
      tags: ["LangChain", "LangGraph", "Azure OpenAI", "Azure AI Search", "MCP", "A2A", "DeepEval", "RAGAS", "Opik", "DsPy", "Snowflake", "AWS", "Airflow", "Jenkins", "Docker"],
    },
  ],

  /* ---------- Education & certifications (leave empty [] to hide) ---------- */
  education: [],

  /* ---------- Projects ----------
     links: add any of { live, code, article } — or leave empty.
     featured: true makes the card span wider. */
  projects: [
    {
      title: "Project One",
      description: "A short description of the project, the problem it solves and your role in it.",
      tags: ["Tag A", "Tag B"],
      links: { live: "", code: "https://github.com/your-username/project-one" },
      featured: true,
    },
    {
      title: "Project Two",
      description: "A short description of the project.",
      tags: ["Tag B"],
      links: { code: "" },
    },
    {
      title: "Project Three",
      description: "A short description of the project.",
      tags: ["Tag C"],
      links: { live: "" },
    },
  ],

  /* ---------- Blog ----------
     1. Write a Markdown file in /posts, e.g. posts/my-first-post.md
     2. Add an entry below with the same slug.
     Newest posts can go anywhere — they're sorted by date automatically. */
  posts: [
    {
      slug: "welcome",
      title: "How to write a post on this site",
      date: "2026-11-02",
      tags: ["Guide"],
      summary: "A sample post explaining how the blog works. Replace or delete it once you've written your own.",
    },
  ],

  /* ---------- Footer ---------- */
  footerNote: "Built with plain HTML, CSS and JavaScript. Hosted for free.",
};

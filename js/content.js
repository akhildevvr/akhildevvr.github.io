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
    name: "Your Name",
    initials: "YN",                    // shown when no photo is set
    photo: "",                         // e.g. "assets/me.jpg" (leave "" for initials)
    role: "Your Job Title",
    location: "Your City, Country",
    availability: "Open to opportunities", // short status line, or "" to hide
    tagline: "A one-line headline about what you do and what you care about.",
    intro:
      "Write two or three sentences introducing yourself here. What you build, the kind of problems you enjoy, and what you're focused on right now.",
    email: "you@example.com",
    resumeFile: "assets/resume.pdf",   // drop your PDF into /assets with this name
    // The little code card in the hero
    card: {
      focus: "your main focus area",
      stack: ["tool one", "tool two", "tool three"],
      learning: ["something new", "another topic", "a third topic"], // rotates with a typing effect
    },
  },

  /* ---------- Social links (delete any you don't use) ---------- */
  socials: [
    { label: "GitHub",   url: "https://github.com/your-username" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
    { label: "Email",    url: "mailto:you@example.com" },
  ],

  /* ---------- About ---------- */
  about: {
    paragraphs: [
      "A longer paragraph about your background. Where you started, what you've worked on, and how you like to work.",
      "A second paragraph about what drives you — the topics you're learning, the teams you enjoy being part of, or anything else you want people to know.",
    ],
    // Quick numbers shown as animated counters
    stats: [
      { value: 5, suffix: "+", label: "Years of experience" },
      { value: 10, suffix: "",  label: "Projects shipped" },
      { value: 0, suffix: "",  label: "Blog posts" , auto: "posts" }, // auto-counts your posts
    ],
  },

  /* ---------- Skills ----------
     level: 1–5 (shown as a small meter). Add as many groups as you like. */
  skills: [
    {
      group: "Category One",
      items: [
        { name: "Skill A", level: 5 },
        { name: "Skill B", level: 4 },
        { name: "Skill C", level: 3 },
      ],
    },
    {
      group: "Category Two",
      items: [
        { name: "Skill D", level: 4 },
        { name: "Skill E", level: 3 },
      ],
    },
    {
      group: "Category Three",
      items: [
        { name: "Skill F", level: 4 },
        { name: "Skill G", level: 2 },
      ],
    },
  ],

  /* ---------- Experience (newest first) ---------- */
  experience: [
    {
      role: "Job Title",
      company: "Company Name",
      period: "2024 — Present",
      location: "City",
      summary: "One-line summary of the role.",
      highlights: [
        "An achievement or responsibility, ideally with a measurable result.",
        "Another highlight.",
      ],
      tags: ["Tool", "Tool"],
    },
    {
      role: "Previous Job Title",
      company: "Previous Company",
      period: "2020 — 2024",
      location: "City",
      summary: "One-line summary of the role.",
      highlights: ["A highlight from this role."],
      tags: ["Tool"],
    },
  ],

  /* ---------- Education & certifications ---------- */
  education: [
    { title: "Degree or Certification", org: "Institution", period: "Year" },
  ],

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

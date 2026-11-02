/* Site engine — you shouldn't need to edit this file.
   All your content lives in js/content.js and /posts/*.md */
(function () {
  "use strict";
  document.documentElement.classList.add("js");
  const S = window.SITE || {};
  const P = S.profile || {};
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const posts = (S.posts || []).slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1"/><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/></svg>',
  };
  const iconFor = (label) => ICONS[String(label).toLowerCase()] || ICONS.link;
  const fmtDate = (d) => {
    const t = new Date(d + "T00:00:00");
    return isNaN(t) ? esc(d) : t.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  };

  /* ---------- Static text ---------- */
  document.title = `${P.name || "Portfolio"} — ${P.role || "Portfolio"}`;
  $("#brandName").textContent = P.name || "";
  $("#heroName").textContent = P.name || "";
  $("#heroRole").textContent = [P.role, P.location].filter(Boolean).join("  ·  ");
  $("#heroTagline").textContent = P.tagline || "";
  if (P.availability) $("#heroStatus span:last-child").textContent = P.availability;
  else $("#heroStatus").remove();
  $("#cardName").textContent = P.name || "";
  $("#cardRole").textContent = P.role || "";
  $("#cardLoc").textContent = P.location || "";
  $("#avatar").innerHTML = P.photo ? `<img src="${esc(P.photo)}" alt="${esc(P.name)}" />` : esc(P.initials || "");
  const card = P.card || {};
  $("#termFocus").textContent = `"${card.focus || ""}"`;
  $("#termStack").textContent = (card.stack || []).map((s) => `"${s}"`).join(", ");
  const resume = $("#resumeBtn");
  if (P.resumeFile) {
    resume.href = P.resumeFile;
    fetch(P.resumeFile, { method: "HEAD" }).then((r) => { if (!r.ok) throw 0; }).catch(() => {
      resume.removeAttribute("download");
      resume.addEventListener("click", (e) => { e.preventDefault(); toast(`Add your PDF at ${P.resumeFile}`); });
    });
  } else resume.remove();
  $("#footName").textContent = P.name || "";
  $("#year").textContent = new Date().getFullYear();
  $("#footNote").textContent = S.footerNote || "";
  const mail = P.email ? `mailto:${P.email}` : "#";
  $("#mailBtn").href = mail;

  const socialsHTML = (S.socials || []).map((s) =>
    `<li><a href="${esc(s.url)}" ${s.url.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'}>${iconFor(s.label)}${esc(s.label)}</a></li>`).join("");
  $("#heroSocials").innerHTML = socialsHTML;
  $("#contactSocials").innerHTML = socialsHTML;

  /* Typing effect */
  (function typer() {
    const el = $("#termTyped"), words = (card.building || card.learning || []).filter(Boolean);
    if (!words.length) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = `"${words[0]}"`; return; }
    let w = 0, i = 0, del = false;
    (function tick() {
      const word = `"${words[w]}"`;
      i += del ? -1 : 1;
      el.textContent = word.slice(0, i);
      let d = del ? 35 : 75;
      if (!del && i === word.length) { del = true; d = 1800; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; d = 300; }
      setTimeout(tick, d);
    })();
  })();

  /* ---------- About ---------- */
  const A = S.about || {};
  $("#aboutBody").innerHTML = [P.intro, ...(A.paragraphs || [])].filter(Boolean).map((p) => `<p>${esc(p)}</p>`).join("");
  $("#stats").innerHTML = (A.stats || []).map((s) => {
    const v = s.auto === "posts" ? posts.length : Number(s.value) || 0;
    return `<div class="stat"><div class="stat__num" data-count="${v}" data-suffix="${esc(s.suffix || "")}">0${esc(s.suffix || "")}</div><div class="stat__label">${esc(s.label)}</div></div>`;
  }).join("");

  /* ---------- Skills ---------- */
  const groups = S.skills || [];
  const tabs = $("#skillTabs"), grid = $("#skillGrid");
  const tabNames = ["All", ...groups.map((g) => g.group)];
  tabs.innerHTML = tabNames.map((n, i) => `<button class="tab" role="tab" aria-selected="${i === 0}" data-g="${esc(n)}">${esc(n)}</button>`).join("");
  const bold = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const skillItem = (it, i) => {
    const o = typeof it === "string" ? { name: it } : it;
    const lvl = Math.max(0, Math.min(5, Number(o.level) || 0));
    const dots = lvl ? `<span class="chip__lvl" aria-label="${lvl} out of 5">${Array.from({ length: 5 }, (_, k) => `<i class="${k < lvl ? "on" : ""}"></i>`).join("")}</span>` : "";
    return `<li class="chip" style="animation-delay:${i * 18}ms">${esc(o.name)}${dots}</li>`;
  };
  function renderSkills(g) {
    const list = groups.filter((x) => g === "All" || x.group === g);
    grid.classList.toggle("skills--single", g !== "All");
    grid.innerHTML = list.map((x, gi) => `
      <div class="skill-group" style="animation-delay:${gi * 60}ms">
        <div class="skill-group__head"><h3>${esc(x.title || x.group)}</h3><span class="mono">${String((x.items || []).length).padStart(2, "0")}</span></div>
        <ul class="chips">${(x.items || []).map(skillItem).join("")}</ul>
        ${x.note ? `<p class="skill-group__note">${esc(x.note)}</p>` : ""}
      </div>`).join("") || `<div class="empty">Add skills in js/content.js</div>`;
  }
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest(".tab"); if (!b) return;
    tabs.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", t === b));
    renderSkills(b.dataset.g);
  });
  renderSkills("All");

  /* ---------- Experience ---------- */
  const chev = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>';
  $("#timeline").innerHTML = (S.experience || []).map((j, i) => {
    const roles = j.roles || [{ title: j.role, period: j.period }];
    const sections = j.sections || [{ items: j.highlights || [] }];
    return `
    <li class="job reveal ${i === 0 ? "is-open" : ""}">
      <button class="job__btn" aria-expanded="${i === 0}" aria-controls="job-${i}">
        <span class="job__main">
          <span class="job__co-line"><span class="job__co">${esc(j.company)}</span>${j.location ? `<span class="muted"> · ${esc(j.location)}</span>` : ""}</span>
          ${roles.map((r) => `<span class="job__roleline"><span class="job__role">${esc(r.title)}</span><span class="job__period">${esc(r.period)}</span></span>`).join("")}
        </span>
        <span class="job__chev" aria-hidden="true">${chev}</span>
        ${j.summary ? `<span class="job__sum">${esc(j.summary)}</span>` : ""}
      </button>
      <div class="job__panel" id="job-${i}"><div><div class="job__content">
        ${sections.map((sec) => `${sec.heading ? `<h4 class="job__h">${esc(sec.heading)}</h4>` : ""}<ul>${(sec.items || []).map((h) => `<li>${bold(h)}</li>`).join("")}</ul>`).join("")}
        <div class="tags">${(j.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div></div></div>
    </li>`;
  }).join("");
  $("#timeline").addEventListener("click", (e) => {
    const b = e.target.closest(".job__btn"); if (!b) return;
    const li = b.parentElement, open = !li.classList.contains("is-open");
    li.classList.toggle("is-open", open); b.setAttribute("aria-expanded", open);
  });
  if (!(S.education || []).length) $("#education").remove();
  else $("#education").innerHTML = (S.education || []).map((e) =>
    `<div class="edu__item"><strong>${esc(e.title)}</strong><span>${esc(e.org)}${e.period ? " · " + esc(e.period) : ""}</span></div>`).join("");

  /* ---------- Projects ---------- */
  const projects = S.projects || [];
  const pTags = ["All", ...new Set(projects.flatMap((p) => p.tags || []))];
  const pf = $("#projectFilters");
  pf.innerHTML = pTags.map((t, i) => `<button class="chip-filter" aria-pressed="${i === 0}" data-t="${esc(t)}">${esc(t)}</button>`).join("");
  const LINK_LABELS = { live: "Live demo ↗", code: "Source code ↗", article: "Write-up ↗" };
  function renderProjects(tag) {
    const list = projects.filter((p) => tag === "All" || (p.tags || []).includes(tag));
    $("#projectGrid").innerHTML = list.map((p, i) => {
      const links = Object.entries(p.links || {}).map(([k, url]) =>
        url ? `<a class="plink" href="${esc(url)}" target="_blank" rel="noopener">${esc(LINK_LABELS[k] || k + " ↗")}</a>`
            : `<span class="plink plink--off" title="Add a URL in content.js">${esc((LINK_LABELS[k] || k).replace(" ↗", ""))} · add link</span>`).join("");
      return `<article class="project ${p.featured && tag === "All" ? "project--featured" : ""}" style="animation-delay:${i * 50}ms">
        <div class="project__icon mono" aria-hidden="true">${String(i + 1).padStart(2, "0")}</div>
        <h3 class="project__title">${esc(p.title)}</h3>
        <p class="project__desc">${esc(p.description)}</p>
        <div class="tags">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        ${links ? `<div class="project__links">${links}</div>` : ""}
      </article>`;
    }).join("") || `<div class="empty">No projects with this tag yet.</div>`;
  }
  pf.addEventListener("click", (e) => {
    const b = e.target.closest(".chip-filter"); if (!b) return;
    pf.querySelectorAll(".chip-filter").forEach((x) => x.setAttribute("aria-pressed", x === b));
    renderProjects(b.dataset.t);
  });
  $("#projectGrid").addEventListener("pointermove", (e) => {
    const c = e.target.closest(".project"); if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", `${e.clientX - r.left}px`); c.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
  renderProjects("All");

  /* ---------- Blog ---------- */
  const postCard = (p, i) => `
    <a class="post-card" href="#/blog/${encodeURIComponent(p.slug)}" style="animation-delay:${i * 50}ms">
      <span class="post-card__meta">${fmtDate(p.date)}</span>
      <span class="post-card__body" style="display:contents">
        <span class="post-card__title">${esc(p.title)}</span>
        <span class="post-card__sum">${esc(p.summary)}</span>
        <span class="tags">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</span>
      </span>
    </a>`;
  const noPosts = `<div class="empty">No posts yet. Add one in <code>js/content.js</code> and <code>/posts</code>.</div>`;
  $("#latestPosts").innerHTML = posts.slice(0, 3).map(postCard).join("") || noPosts;

  const postTags = ["All", ...new Set(posts.flatMap((p) => p.tags || []))];
  const fbox = $("#postFilters");
  fbox.innerHTML = postTags.map((t, i) => `<button class="chip-filter" aria-pressed="${i === 0}" data-t="${esc(t)}">${esc(t)}</button>`).join("");
  let activeTag = "All";
  function renderAllPosts() {
    const q = $("#postSearch").value.trim().toLowerCase();
    const list = posts.filter((p) => (activeTag === "All" || (p.tags || []).includes(activeTag)) &&
      (!q || [p.title, p.summary, ...(p.tags || [])].join(" ").toLowerCase().includes(q)));
    $("#allPosts").innerHTML = list.map(postCard).join("").replaceAll('style="display:contents"', "") ||
      (posts.length ? `<div class="empty">No posts match your search.</div>` : noPosts);
  }
  fbox.addEventListener("click", (e) => {
    const b = e.target.closest(".chip-filter"); if (!b) return;
    fbox.querySelectorAll(".chip-filter").forEach((x) => x.setAttribute("aria-pressed", x === b));
    activeTag = b.dataset.t; renderAllPosts();
  });
  $("#postSearch").addEventListener("input", renderAllPosts);
  renderAllPosts();

  const mdCache = {};
  async function showPost(slug) {
    const i = posts.findIndex((p) => p.slug === slug);
    const p = posts[i];
    const body = $("#postBody");
    if (!p) {
      $("#postTitle").textContent = "Post not found";
      $("#postMeta").textContent = ""; $("#postTags").innerHTML = ""; $("#postNav").innerHTML = "";
      body.innerHTML = `<p>This post doesn't exist. <a href="#/blog">Back to all posts</a>.</p>`;
      return;
    }
    document.title = `${p.title} — ${P.name || "Blog"}`;
    $("#postTitle").textContent = p.title;
    $("#postTags").innerHTML = (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    body.innerHTML = `<p class="muted">Loading…</p>`;
    try {
      const md = mdCache[slug] ?? (mdCache[slug] = await fetch(`posts/${encodeURIComponent(slug)}.md`, { cache: "no-cache" }).then((r) => { if (!r.ok) throw 0; return r.text(); }));
      const words = md.split(/\s+/).filter(Boolean).length;
      $("#postMeta").textContent = `${fmtDate(p.date)}  ·  ${Math.max(1, Math.round(words / 220))} min read`;
      body.innerHTML = window.marked ? window.marked.parse(md) : `<pre>${esc(md)}</pre>`;
      body.querySelectorAll("a[href^='http']").forEach((a) => { a.target = "_blank"; a.rel = "noopener"; });
    } catch {
      $("#postMeta").textContent = fmtDate(p.date);
      body.innerHTML = `<div class="empty">Couldn't load <code>posts/${esc(slug)}.md</code>. Check the file exists and the slug matches.</div>`;
    }
    const newer = posts[i - 1], older = posts[i + 1];
    $("#postNav").innerHTML =
      (older ? `<a href="#/blog/${encodeURIComponent(older.slug)}"><small>← Older</small><strong>${esc(older.title)}</strong></a>` : "") +
      (newer ? `<a class="next" href="#/blog/${encodeURIComponent(newer.slug)}"><small>Newer →</small><strong>${esc(newer.title)}</strong></a>` : "");
  }

  /* ---------- Router (hash-based, works on any static host) ---------- */
  const views = { home: $("#view-home"), blog: $("#view-blog"), post: $("#view-post") };
  const nav = $("#nav");
  function show(v) { Object.entries(views).forEach(([k, el]) => (el.hidden = k !== v)); }
  function setActive(key) {
    document.querySelectorAll("#navLinks a").forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#/${key}`));
  }
  function route() {
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/").map(decodeURIComponent);
    nav.classList.remove("is-open"); $("#navToggle").setAttribute("aria-expanded", "false");
    if (parts[0] === "blog" && parts[1]) { show("post"); setActive("blog"); showPost(parts[1]); window.scrollTo(0, 0); return; }
    if (parts[0] === "blog") { show("blog"); setActive("blog"); document.title = `Blog — ${P.name || ""}`; window.scrollTo(0, 0); return; }
    show("home"); document.title = `${P.name || "Portfolio"} — ${P.role || ""}`;
    const target = parts[0] && document.getElementById(parts[0]);
    setActive(parts[0] || "");
    requestAnimationFrame(() => target ? target.scrollIntoView({ behavior: "smooth" }) : window.scrollTo({ top: 0, behavior: "smooth" }));
    observeReveals();
  }
  window.addEventListener("hashchange", route);

  $("#navToggle").addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open); $("#navToggle").setAttribute("aria-expanded", open);
  });
  // Re-clicking the same section link should still scroll
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#/']");
    if (a && a.getAttribute("href") === location.hash) { e.preventDefault(); route(); }
  });
  addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 8), { passive: true });

  /* ---------- Scroll reveal + counters ---------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("is-in"); io.unobserve(en.target);
      en.target.querySelectorAll("[data-count]").forEach(countUp);
    });
  }, { threshold: 0.12 }) : null;
  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io ? io.observe(el) : el.classList.add("is-in"));
    if (!io) document.querySelectorAll("[data-count]").forEach(countUp);
  }
  function countUp(el) {
    const end = Number(el.dataset.count) || 0, suf = el.dataset.suffix || "", t0 = performance.now(), dur = 1200;
    (function f(t) {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(end * e) + suf;
      if (k < 1) requestAnimationFrame(f);
    })(t0);
  }

  // Copy email
  $("#copyBtn").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(P.email || ""); toast("Email copied"); }
    catch { toast(P.email || "No email set"); }
  });
  let tt; function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("is-show"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("is-show"), 2200); }

  route();
})();

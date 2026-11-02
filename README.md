# Personal portfolio — résumé, projects & blog

A light, modern personal site built with plain HTML, CSS and JavaScript. No build step, no framework, no paid services.

## Where to edit things

| What | Where |
| --- | --- |
| Name, role, intro, email, socials, stats | `js/content.js` → `profile`, `socials`, `about` |
| Skills (grouped, with a 1–5 level) | `js/content.js` → `skills` |
| Work experience & education | `js/content.js` → `experience`, `education` |
| Projects and their links | `js/content.js` → `projects` |
| Blog post list | `js/content.js` → `posts` |
| Blog post text | `posts/<slug>.md` (Markdown) |
| Profile photo | put `me.jpg` in `assets/`, set `photo: "assets/me.jpg"` |
| Résumé PDF | put `resume.pdf` in `assets/` |
| Colours & fonts | top of `css/style.css` (`:root` variables) |

## Add a blog post

1. Create `posts/my-post.md` and write in Markdown.
2. Add `{ slug: "my-post", title: "...", date: "YYYY-MM-DD", tags: ["..."], summary: "..." }` to `posts` in `js/content.js`.
3. Commit and push. Posts are sorted by date automatically.

## Preview locally

Blog posts are loaded with `fetch`, so open the site through a tiny local server rather than double-clicking the file:

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Host it for free (GitHub Pages)

1. Create a new public repo on GitHub (e.g. `your-username.github.io` for a root URL).
2. Push this folder to it:
   ```bash
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```
3. Repo → Settings → Pages → Source: `Deploy from a branch` → `main` / root → Save.
4. Your site goes live at `https://your-username.github.io` within a minute or two.

Other free options that work the same way: Netlify, Cloudflare Pages or Vercel — connect the repo and deploy with no build command, publish directory `/`.

## Free tools used

- Fonts: [Fontshare](https://www.fontshare.com) (Cabinet Grotesk, Satoshi) and Google Fonts (JetBrains Mono)
- Markdown rendering: [marked](https://marked.js.org) via jsDelivr CDN
- Hosting: GitHub Pages

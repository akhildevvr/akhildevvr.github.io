This is a sample post. It shows how the blog works so you can delete it once your first real post is live.

## Writing a new post

1. Create a new file in the `posts` folder, for example `posts/my-first-post.md`.
2. Write your post in **Markdown** — plain text with simple formatting.
3. Open `js/content.js` and add an entry to the `posts` list:

```js
{
  slug: "my-first-post",          // must match the file name
  title: "My first post",
  date: "2026-11-15",             // YYYY-MM-DD, used for sorting
  tags: ["Topic"],
  summary: "One or two sentences shown on the blog list.",
},
```

That's it. Commit and push, and the post appears on the blog page, on the home page (if it's one of the latest three), and in the tag filters.

## Formatting cheatsheet

- `## Heading` for section headings
- `**bold**` and `*italic*`
- `[link text](https://example.com)` for links
- `![alt text](assets/image.png)` for images — put images in `/assets`
- Wrap code in triple backticks for code blocks

> Quotes look like this — start a line with `>`.

| Column | Another |
| ------ | ------- |
| Tables | work too |

Happy writing.

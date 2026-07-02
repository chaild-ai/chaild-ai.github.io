# chaild-ai.github.io

Website for the CHAILD project, hosted at [chaild.org](https://chaild.org).

The site is a React single-page app built with [Create React App](https://create-react-app.dev/), based on the [DeveloperFolio](https://github.com/saadpasta/developerFolio) template. Source code lives on the `main` branch; the built site is published from the `gh-pages` branch (no Jekyll).

## Prerequisites

- [Node.js](https://nodejs.org/) and npm

## Local development

```bash
npm install
npm start
```

`npm start` serves the site at http://localhost:3000 with hot reloading.

Other useful commands:

```bash
npm run build     # production build into ./build
npm test          # run tests
npm run format    # format code with Prettier
```

## Adding content (news posts)

News posts are markdown files served from `public/content/blog/`.

1. Create `public/content/blog/<slug>.md` (the filename without `.md` is the slug, used in the URL `/blog/<slug>`).
2. Start the file with YAML frontmatter:

   ```markdown
   ---
   title: "Post title"
   description: "One-line summary"
   tags: ["tag one", "tag two"]
   date: "2026-07-02"
   url: "/static/media/some-document.pdf"
   image: "/content/blog/images/some-image.png"
   ---

   Post body in markdown...
   ```

   - `title`, `description`, `tags`, and `date` are expected on every post. The `description` is shown as the subtitle on the news card (homepage and `/blog` list) but not on the expanded post view. `tags` power the filter on the `/blog` page.
   - `url` is optional: a "read more" link shown at the bottom of the post — either an external `https://` link or a site-relative path (e.g. a PDF).
   - `image` is optional: a thumbnail shown on the news card.

3. Add the slug to the `blogSlugs` array in `src/portfolio.js`. Posts appear in the array's order, so put new posts first.
4. Put any images in `public/content/blog/images/` (reference them as `/content/blog/images/<name>`) and PDFs or other documents in `public/static/media/` (reference them as `/static/media/<name>`). Use descriptive filenames, e.g. `CHAILD-white-paper-2026.pdf`.
5. Preview locally with `npm start`, then commit and deploy (below).

Other site content (homepage sections, team members, social links, etc.) is configured in `src/portfolio.js`.

## Deployment

```bash
npm run deploy
```

This builds the site, copies `index.html` to `404.html` (so client-side routes work on GitHub Pages), and pushes the `build/` directory to the `gh-pages` branch, which GitHub Pages serves at chaild.org. The `CNAME` file comes from `public/`, so it is included automatically.

**Remember to also commit and push your source changes to `main`** — deploying only updates the published site, not the source branch.

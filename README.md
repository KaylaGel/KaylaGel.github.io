# Personal portfolio

A responsive, accessible static portfolio for GitHub Pages. No build tools or installation required.

## Update your portfolio

Edit `index.html` to update your bio, projects, experience, and profile links. The current content reflects the details Kayla supplied. Decorative illustrations use CSS rather than project screenshots.

Change colours in the `:root` variables at the top of `styles.css`. Fonts load from Google Fonts with system fallbacks. There are no runtime JavaScript dependencies.

## Preview locally

Open `index.html` in your browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Publish with GitHub Pages

1. Create a GitHub repository and push these files to its `main` branch. Use a public repository for GitHub Free.
2. In the repository, open **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow** (or push a new change to `main`).
4. After deployment, the workflow summary and Settings → Pages show your website URL.

A repository called `KaylaGel.github.io` publishes at `https://KaylaGel.github.io/`. Other repository names publish at `https://KaylaGel.github.io/REPOSITORY-NAME/`. Relative asset paths support both.

If your default branch has a different name, update `branches: [main]` in `.github/workflows/pages.yml`.

Only `index.html`, `styles.css`, and `.nojekyll` are included in the published artifact. If you add images or a CV, copy those files in the workflow's “Prepare website files” step too. Everything published through this site is public.

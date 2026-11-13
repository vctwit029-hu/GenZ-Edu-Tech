# GenZ Edu Tech — updated website source

## What's included
- Existing GenZ Edu Tech branding and homepage sections retained.
- Course cards now display the agreed duration, fee, and theory/practical day split.
- Each course has a separate syllabus view opened by **Explore Syllabus**.
- Syllabuses progress from Foundation to Core Skills to Advanced Practice.
- Frontend-only React + Vite project; no backend, database, login, or API has been added.

## Deploy with GitHub + Vercel
1. Download/extract this ZIP.
2. Upload the **contents** of this ZIP to the root of the GitHub repository connected to your Vercel project (include `package.json`, `src`, `public`, `index.html`, `vite.config.js`, and `vercel.json`).
3. In Vercel, open **Project → Settings → Build and Deployment**.
4. Ensure the Root Directory is the repository root, Framework Preset is **Vite** (or Other with the same commands), Build Command is `npm run build`, and Output Directory is `dist`.
5. Redeploy from the latest GitHub commit.

## Local preview
Run `npm install`, then `npm run dev`. To verify a production build, run `npm run build`.

## Course fees and durations included
- Digital Marketing — 30 days — ₹2,999 (9 theory / 21 practical days)
- Social Media Management — 30 days — ₹2,499 (9 / 21)
- Content Writing — 20 days — ₹1,999 (6 / 14)
- AI Tools & Applications — 30 days — ₹2,999 (9 / 21)
- Freelancing & Client Acquisition — 20 days — ₹2,499 (6 / 14)
- Python Programming — 45 days — ₹4,999 (30 / 15)
- Java Programming — 45 days — ₹4,499 (30 / 15)
- HTML & CSS Web Development — 30 days — ₹3,999 (20 / 10)
- Quantitative Aptitude — 20 days — ₹1,999 (6 / 14)
- Verbal Ability — 20 days — ₹1,499 (6 / 14)
- Placement Training — 30 days — ₹2,999 (9 / 21)
- Career Awareness — 7 days — ₹499 (2 / 5)

Please preview the pages and confirm all contact details and commercial claims before publishing.


## Website update: Personalised AI Solutions
- Added a dedicated `/ai-solutions` page for personalised business AI assistants.
- Added a Personalised AI feature section to the homepage.
- Kept the site header and footer shared across the homepage and AI Solutions page, so navigation remains visible on both.
- Navigation links from the AI Solutions page return to the matching homepage sections.
- Added `vercel.json` SPA rewrite so direct visits and refreshes on `/ai-solutions` load the React application.
- The site navigation is sticky; the site wrapper uses `overflow: clip` so the sticky header can remain attached to the viewport.

## Deploying this update
1. Back up your currently deployed source/repository before replacing files.
2. Upload the updated project files to the existing GitHub repository connected to your original Vercel project.
3. Keep `package.json`, `App.tsx`, `index.css`, `index.html`, `main.tsx`, `assets/`, `public/`, and `vercel.json` in the repository root.
4. Vercel should build with `npm install` and `npm run build`, outputting `dist`.
5. After deployment, test both `/` and `/ai-solutions`, including refreshing the AI Solutions URL directly and checking the mobile menu.

The AI service copy describes capabilities as configurable possibilities; actual integrations, automations and multilingual support depend on the final project scope and connected services.

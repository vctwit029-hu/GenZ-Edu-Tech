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

## Updated course fees and durations
- Digital Marketing — 30 days — ₹4,999
- Social Media Management — 30 days — ₹4,499
- Content Writing — 20 days — ₹3,999
- AI Tools & Applications — 30 days — ₹14,999
- Freelancing & Client Acquisition — 20 days — ₹4,499
- Python Programming — 45 days — ₹6,999
- Java Programming — 45 days — ₹6,499
- HTML & CSS Web Development — 30 days — ₹5,999
- Quantitative Aptitude — 20 days — ₹3,999
- Verbal Ability — 20 days — ₹3,499
- Placement Training — 30 days — ₹4,999
- Career Awareness — 7 days — ₹2,499

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

## AI Solutions pricing
- Website AI Chat — ₹14,999 one-time setup
- AI Business Assistant — ₹29,999 one-time setup
- Custom AI Workflow Solution — from ₹49,999

Setup fees include planning, development labour, AI tool configuration, integration, testing and launch. AI/API usage, hosting and paid third-party subscriptions are separate ongoing costs.

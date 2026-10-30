# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring teams conducting a technical screen of Brahian for full-time or contract developer roles. They arrive from a job application or outreach and are deciding, quickly, whether stack fit, seniority, and a real delivery track record are established.

## Product Purpose

A personal portfolio that wins development opportunities by proving capability through real, runnable work instead of claims. Success means a recruiter or hiring manager leaves convinced of stack fit (React / React Native + Expo, Node, Python, PostgreSQL), seniority, and delivery track record — and initiates contact.

## Positioning

The proof is executable: every featured project is a real application with a live deployment the visitor can open and use, presented with interactive in-page previews rather than screenshots alone, backed by named institutional experience (Ayudas Diagnósticas Sura, Universidad de Antioquia), a systems-engineering degree from UdeA, and B2 English. Positioning is honestly junior — the owner's explicit decision is to never present as senior/fullstack ("nadie va a creer que un junior sea fullstack"); the proof carries the pitch, not the title. A neighboring candidate's portfolio cannot copy the live deployments, the code behind them, or that track record.

## Operating Context

- Single-page static site built with Vite; no backend, no CMS, no analytics. Production build output in `dist/`.
- Content is code-owned: copy lives in `index.html`, project data and preview rendering in `src/main.js`, imagery in `src/images/`. Adding or updating a project means editing these files.
- Workflow commands: `npm run dev` / `npm run start` (dev server with HMR), `npm run build`, `npm run preview`. Both `bun.lock` and `package-lock.json` are present.
- Language today is Spanish only; bilingual shipping (es + en) is a confirmed requirement going forward (see Capabilities and Constraints).

## Capabilities and Constraints

- Four featured projects, all real, data owned in `src/main.js`:
  - **Inventory Management** — React/Vite frontend, FastAPI API, PostgreSQL; live web demo.
  - **Pixel Draw** — React Native + Expo + Supabase + Node/Express; universal web/Android.
  - **Mi Cultivo** — React Native + Expo + Firebase Realtime Database + ESP32 IoT backend; live preview deployment.
  - **Gerardo App** — React Native + Expo + Supabase + SendGrid; tested with an assisted-living center affiliated with UPB.
- Project previews are heterogeneous by design: framed web screenshot, custom in-page pixel-art mock, and paired mobile screenshots.
- Content source of truth: `CV.pdf` at the repo root. The Sobre mí view (experience, skills, education, languages) is transcribed from it: Ayudas Diagnósticas Sura — Ingeniero de Datos Junior (feb–ago 2026); Universidad de Antioquia, Escuela de Idiomas — Desarrollador Web (jul 2025–oct 2026); Ingeniería de Sistemas UdeA (2020–2026); Tecnología en Desarrollo de Software SENA (2018–2019); English B2 — the earlier C1 claim was wrong and is retracted.
- **Dark-only theme (owner decision):** light mode and the theme toggle were removed; the site ships one dark theme and no `[data-theme]` machinery remains.
- **Contact form (static, no backend):** fields are nombre, email, motivo (oferta de trabajo / proyecto freelance / colaboración / otra consulta), and mensaje. Submit composes the message and opens Gmail compose addressed to brahian.carrera@udea.edu.co, with a copy-to-clipboard fallback and a direct mailto link. Open decision: whether to move to a real endpoint (e.g. Formspree) so delivery does not depend on the visitor's mail setup.
- **Bilingual requirement (confirmed):** English joins Spanish as a shipping language. All future copy must be translatable and the site must gain an English version. The current site is Spanish-only — an open implementation gap, not a settled decision.
- **Resolved:** availability now surfaces in the Contacto view lead ("Estoy disponible para oportunidades junior y proyectos freelance"). Modality and city remain undesigned.
- **Open decision:** Pixel Draw's Expo Snack embed URL is a literal placeholder (`[SNACK_URL_PIXEL_DRAW]`); it has no live web demo beyond its Vercel preview link.
- **Open decision:** the hosting/deploy target for the portfolio itself is not established in the repo.
- Copy defect resolved: the hero role line now reads "Desarrollador Junior · Ingeniero de Sistemas" (typo fixed, junior positioning added); the hero eyebrow chip was removed in the same pass.
- Incumbent content convention: accents are stripped in most project-data strings while `index.html` copy keeps them — mixed today.

## Brand Commitments

- Identity: Brahian Carrera Rodriguez, Junior Developer (web + mobile), presented as "Desarrollador Junior · Ingeniero de Sistemas". Never present as fullstack/senior (owner decision).
- Brand asset: a pixel-art wizard-at-a-laptop illustration used as the nav brand mark (`src/images/logo.png`) and favicon (`src/images/logo.ico`). Existing asset in active use; future work preserves it or replaces it only by explicit decision.
- Voice: first-person, direct, technical Spanish ("Construyo aplicaciones web y móviles con React y Expo…"); factual, no hype.
- Contact identity: GitHub (github.com/BrahianCarrera), LinkedIn profile, university email (brahian.carrera@udea.edu.co).
- Availability is an approved product surface going forward; its presentation is open.

## Evidence on Hand

- Four real project write-ups with live Vercel deployment URLs (`src/main.js`).
- Real screenshots: `src/images/inventory.png`, `cultivo.png`, `cultivo2.png`, `gerardo.png`, `gerardo-2.png`.
- Unused portrait assets exist: `src/images/face.png`, `face.webp` — referenced by no current code (an `.about-avatar` CSS rule also exists with no element using it).
- `CV.pdf` at the repo root documents (self-reported, owner-supplied): experience at Ayudas Diagnósticas Sura and Universidad de Antioquia; education at UdeA and SENA; grouped skills; English B2. Gerardo App tested with a UPB-affiliated care center remains site-copy-only.
- Absences future work must not fabricate: no testimonials, no client or employer logos, no quantified outcomes or metrics, no case studies, no press, no headshot in use.

## Product Principles

1. Proof over claims: the work speaks through runnable deployments and real screenshots; adjectives never substitute for evidence.
2. Only real things appear: real projects, real stacks, real institutions, real links. No filler, no invented metrics, no aspirational clients.
3. Bilingual by default: English and Spanish are both first-class from here; no copy ships that cannot exist in both.
4. Hiring-first clarity: a technical screener finds stack, role, and evidence within seconds of scanning.
5. Owner-maintainable: content updates stay possible by editing plain files — no infrastructure the owner must operate.

## Accessibility & Inclusion

- The site declares `lang="es"`; the confirmed bilingual requirement means each language version must carry its own correct `lang` attribute.
- No formal accessibility standard has been committed. Open decision: whether WCAG 2.1 AA is a requirement for this portfolio.

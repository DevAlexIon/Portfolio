<div align="center">

# Alexandru Ion · Portfolio

**Frontend Engineer** — personal site showcasing work, stack, and contact.

[![Live Demo](https://img.shields.io/badge/Live_Demo-portfolio--wvvx.onrender.com-2EC4B6?style=flat-square&logo=render&logoColor=white)](https://portfolio-wvvx.onrender.com/)
[![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Live site](https://portfolio-wvvx.onrender.com/) · [LinkedIn](https://www.linkedin.com/in/devalexion/) · [GitHub](https://github.com/DevAlexIon) · [Email](mailto:mr_alexandruion@icloud.com)

</div>

---

## Overview

Portfolio site for **Alexandru Ion**, a frontend engineer focused on performant React applications, clean architecture, and polished UI.

The site is a single-page experience with scroll-driven motion, a teal dark visual system, featured work, capabilities, and a working contact form.

**Live:** [https://portfolio-wvvx.onrender.com/](https://portfolio-wvvx.onrender.com/)

## Features

- Hero with clear positioning and CTAs (email, CV, work)
- Interactive capability cards and sticky protocol section
- Featured projects (UseRepurposer, Ledger web + mobile)
- Skills / stack section aligned with real production work
- Contact form via [Web3Forms](https://web3forms.com/)
- CV download from `/Alexandru_Ion_CV.pdf`
- GSAP scroll reveals with `prefers-reduced-motion` support
- Responsive layout for desktop and mobile

## Tech stack

### Site (this repo)

| Layer | Choice |
| --- | --- |
| UI | React 19 |
| Build | Vite 8 |
| Styling | Tailwind CSS 3 |
| Motion | GSAP |
| Icons | lucide-react |
| Routing | react-router-dom |
| Forms | Web3Forms |
| Lint | Oxlint |
| Hosting | Render (Static Site) |

### Skills highlighted on the site

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![RTK Query](https://img.shields.io/badge/RTK_Query-764ABC?style=flat-square&logo=redux&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=black)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/Git_/_CI-F05032?style=flat-square&logo=git&logoColor=white)

## Project structure

```text
.
├── public/                 # Static assets (CV, favicon)
├── src/
│   ├── App.jsx             # Sections, animations, contact form
│   ├── index.css           # Design tokens & global styles
│   └── main.jsx
├── .env.example            # Env template (no secrets)
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Getting started

### Prerequisites

- Node.js 20+ (recommended)
- npm (lockfile included)

### Install & run

```bash
git clone https://github.com/DevAlexIon/Portfolio.git
cd Portfolio
npm install
cp .env.example .env
npm run dev
```

App runs at `http://localhost:5173`.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Oxlint |

## Environment variables

Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_WEB3FORMS_ACCESS_KEY` | Yes (for contact) | Public access key from [Web3Forms](https://web3forms.com/) |

> Never commit `.env`. Only `.env.example` belongs in git.

On Render (or any host), add the same variable in the service **Environment** settings, then redeploy.

## Deploy (Render Static Site)

| Setting | Value |
| --- | --- |
| Branch | `main` |
| Build command | `npm install; npm run build` |
| Publish directory | `dist` |
| Env | `VITE_WEB3FORMS_ACCESS_KEY` |

Also allow your live domain in the Web3Forms dashboard so submissions work in production.

## Contact

- **Email:** [mr_alexandruion@icloud.com](mailto:mr_alexandruion@icloud.com)
- **LinkedIn:** [linkedin.com/in/devalexion](https://www.linkedin.com/in/devalexion/)
- **GitHub:** [github.com/DevAlexIon](https://github.com/DevAlexIon)
- **Portfolio:** [portfolio-wvvx.onrender.com](https://portfolio-wvvx.onrender.com/)

---

<div align="center">

Built with React · Vite · Tailwind · GSAP

</div>

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Code2,
  Menu,
  X,
  Braces,
  Layers,
  Zap,
  ExternalLink,
  FileDown,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { name: "React", level: "Core" },
  { name: "TypeScript", level: "Core" },
  { name: "Redux Toolkit", level: "Core" },
  { name: "Tailwind CSS", level: "Core" },
  { name: "RTK Query", level: "Daily" },
  { name: "Node.js", level: "Daily" },
  { name: "Express", level: "Daily" },
  { name: "Supabase", level: "Daily" },
  { name: "Stripe", level: "Used" },
  { name: "React Native", level: "Used" },
  { name: "Vite", level: "Daily" },
  { name: "Git / CI", level: "Daily" },
];

const EXPERIENCE = [
  {
    role: "Frontend Engineer",
    company: "Bobnet",
    period: "Present",
    points: [
      "Built React + Redux interfaces for smart vending touchscreens, cutting operator error rate by ~30%.",
      "Optimized backoffice dashboards with Redux Toolkit and rendering strategies, reducing load times by ~40%.",
      "Shipped pixel-accurate layouts with Tailwind and a reusable React Native component library.",
    ],
  },
];

const PROJECTS = [
  {
    name: "UseRepurposer",
    tag: "Indie SaaS",
    description:
      "Paste a URL or transcript and get LinkedIn, X, newsletter, and TikTok drafts in about a minute. Built end-to-end: React, Express, Groq, Stripe, Supabase.",
    href: "https://userepurposer.com",
    stack: ["React", "TypeScript", "Express", "Groq", "Stripe"],
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4 sm:px-6 pt-4">
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-full px-4 sm:px-5 py-2.5 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-semibold tracking-tight text-ink"
        >
          Alexandru<span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className="px-3 py-1.5 text-sm text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Alexandru_Ion_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn ml-2 inline-flex items-center gap-1.5 rounded-full bg-primary text-deep px-4 py-2 text-sm font-semibold shadow-lg shadow-primary/25"
          >
            Download CV
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-ink"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-2 mx-auto max-w-6xl glass-dark rounded-3xl p-4 flex flex-col gap-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setOpen(false);
                scrollToId(item.id);
              }}
              className="text-left px-3 py-3 text-ink/90"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Alexandru_Ion_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-deep px-4 py-3 text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Download CV
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}

function CodeSignature() {
  return (
    <div className="relative w-28 h-28 sm:w-36 sm:h-36" aria-hidden>
      <div className="absolute inset-0 rounded-3xl border border-primary/25 bg-surface/60 grid-bg" />
      <Braces className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70 bracket-pulse h-8 w-8 sm:h-10 sm:w-10" />
      <Braces className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/70 bracket-pulse h-8 w-8 sm:h-10 sm:w-10 rotate-180" style={{ animationDelay: "0.4s" }} />
      <div className="absolute left-1/2 top-4 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent scan-dot shadow-[0_0_12px_rgba(255,107,74,0.8)]" />
      <div className="absolute left-[42%] top-4 w-1.5 h-1.5 rounded-full bg-primary scan-dot" style={{ animationDelay: "0.8s" }} />
    </div>
  );
}

function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-dvh flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pt-28 pb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
        <div className="max-w-2xl">
          <p className="hero-anim font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-5">
            Frontend Engineer · Romania
          </p>
          <h1 className="hero-anim font-display text-5xl sm:text-7xl lg:text-8xl tracking-tighter font-semibold leading-[0.95] text-ink">
            Alexandru Ion
          </h1>
          <p className="hero-anim mt-4 font-serif italic text-xl sm:text-2xl text-primary-light/90">
            Interfaces that feel fast, clear, and intentional.
          </p>
          <p className="hero-anim mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            I build polished React products end to end — from interaction design
            to production performance. Currently at Bobnet. On the side I ship
            UseRepurposer.
          </p>
          <div className="hero-anim mt-8 flex flex-wrap gap-3">
            <a
              href="/Alexandru_Ion_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary text-deep px-6 py-3 font-semibold shadow-lg shadow-primary/30"
            >
              Download CV
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => scrollToId("projects")}
              className="magnetic-btn inline-flex items-center gap-2 rounded-full glass-dark text-ink px-6 py-3 font-semibold"
            >
              See projects
            </button>
          </div>
        </div>
        <div className="hero-anim self-start lg:self-end">
          <CodeSignature />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-4">
          About
        </p>
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start">
          <h2 className="font-display text-3xl sm:text-5xl tracking-tighter font-semibold text-ink leading-tight">
            Frontend-focused. Product-minded. Comfortable owning the full path
            from idea to deploy.
          </h2>
          <div className="space-y-4 text-muted text-base sm:text-lg leading-relaxed">
            <p>
              I care about clean state, responsive UI, and interfaces people
              can trust under pressure — whether that is a backoffice dashboard
              or a consumer SaaS flow.
            </p>
            <p>
              Outside of work I build tools I actually want to use. UseRepurposer
              started from rewriting content by hand one too many times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-deep relative">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-10">
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-4">
          Skills
        </p>
        <h2 className="font-display text-3xl sm:text-5xl tracking-tighter font-semibold mb-10">
          Stack I ship with
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-divider rounded-3xl overflow-hidden border border-divider">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="bg-surface p-5 sm:p-6 hover:bg-white/[0.04] transition-colors"
            >
              <div className="font-display font-semibold text-ink">
                {skill.name}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {skill.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-4">
          Experience
        </p>
        <h2 className="font-display text-3xl sm:text-5xl tracking-tighter font-semibold mb-12">
          Where I work
        </h2>
        <div className="space-y-6">
          {EXPERIENCE.map((job) => (
            <article
              key={job.company}
              className="rounded-3xl border border-divider bg-surface/60 p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold">
                    {job.role}
                  </h3>
                  <p className="text-primary font-medium mt-1">{job.company}</p>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-3 text-muted leading-relaxed">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-deep">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-4">
          Projects
        </p>
        <h2 className="font-display text-3xl sm:text-5xl tracking-tighter font-semibold mb-12">
          Things I built
        </h2>
        <div className="grid gap-6">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-divider bg-surface p-6 sm:p-8 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary mb-2">
                    {project.tag}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>
                <ExternalLink className="h-5 w-5 text-muted group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
              <p className="mt-4 text-muted leading-relaxed max-w-2xl">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-divider px-3 py-1 text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const stats = [
    { icon: Code2, label: "Years shipping UI", value: 4, suffix: "+" },
    { icon: Layers, label: "Focus", value: "React", suffix: "" },
    { icon: Zap, label: "Side product", value: "1", suffix: " live" },
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShown(true);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 sm:py-28 border-y border-divider">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 grid sm:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`transition-all duration-700 ${
              shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <stat.icon className="h-5 w-5 text-primary mb-4" />
            <div className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              {stat.value}
              <span className="text-primary">{stat.suffix}</span>
            </div>
            <div className="mt-2 text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-4">
          Contact
        </p>
        <h2 className="font-display text-3xl sm:text-5xl tracking-tighter font-semibold max-w-2xl leading-tight">
          Let&apos;s talk about frontend work, products, or feedback on what
          I&apos;m building.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/devalexion/"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary text-deep px-6 py-3 font-semibold shadow-lg shadow-primary/25"
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/DevAlexIon"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full glass text-ink px-6 py-3 font-semibold"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="/Alexandru_Ion_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full glass text-ink px-6 py-3 font-semibold"
          >
            <FileDown className="h-4 w-4" />
            Open CV
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-divider bg-deep py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="font-display font-semibold">
            Alexandru Ion<span className="text-primary">.</span>
          </div>
          <p className="text-sm text-muted mt-1">
            Frontend engineer · Building in public when it matters.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted font-mono">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for interesting frontend work
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

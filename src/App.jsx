import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Code2,
  Menu,
  X,
  Mail,
  FileDown,
  Cpu,
  Layers,
  Zap,
  Cloud,
  GitBranch,
  Terminal,
  CheckCircle2,
  Send,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EMAIL = "mr_alexandruion@icloud.com";
const LINKEDIN = "https://www.linkedin.com/in/devalexion/";
const GITHUB = "https://github.com/DevAlexIon";
const CV_HREF = "/Alexandru_Ion_CV.pdf";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** One-shot scroll reveal — transform/opacity only, GPU-friendly */
function useScrollReveal(ref, selector, { y = 28, stagger = 0.1, duration = 0.7, start = "top 88%" } = {}) {
  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector, root);
      if (!targets.length) return;

      gsap.from(targets, {
        scrollTrigger: {
          trigger: root,
          start,
          once: true,
        },
        y,
        opacity: 0,
        duration,
        stagger,
        ease: "power3.out",
        force3D: true,
      });
    }, root);

    return () => ctx.revert();
  }, [ref, selector, y, stagger, duration, start]);
}

/** Pause heavy loops when the element is off-screen */
function useInView(ref, { threshold = 0.15 } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin: "80px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);

  return inView;
}

const NAV_LINKS = [
  { label: "Approach", href: "#approach" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Code2,
    title: "React Interfaces",
    text: "Component systems, interaction polish, and production-grade UI that stays maintainable under pressure.",
  },
  {
    icon: Layers,
    title: "State & Data",
    text: "Redux Toolkit, RTK Query, and clear data flows so dashboards and apps stay fast and predictable.",
  },
  {
    icon: Zap,
    title: "Performance",
    text: "Rendering strategy, lazy loading, and profiling that cut load times without hurting UX.",
  },
  {
    icon: Cloud,
    title: "Full-stack Products",
    text: "From idea to deploy: Express APIs, Supabase, Stripe, and shipping indie SaaS end to end.",
  },
  {
    icon: Cpu,
    title: "AI Integrations",
    text: "Practical LLM features in real product flows. Tools people use, not demos.",
  },
  {
    icon: GitBranch,
    title: "Mobile & Design Systems",
    text: "Reusable React Native libraries and design tokens that keep web and mobile in sync.",
  },
];

function scrollToHash(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function LinkedinIcon({ className, strokeWidth = 2 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
        <nav
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
            scrolled ? "glass shadow-lg shadow-black/40" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <Terminal className="h-4 w-4 text-white" strokeWidth={2.4} />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/50 transition" />
            </span>
            <span className="font-display font-bold tracking-tight text-lg text-ink">
              Alexandru<span className="text-primary">.</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(link.href);
                }}
                className="lift-on-hover px-3 py-1.5 text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CV_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn ml-2 inline-flex items-center gap-1.5 rounded-full bg-primary text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-primary/30"
            >
              Download CV
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-ink"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden bg-deep/90 backdrop-blur-2xl pt-24 px-6">
          <div className="flex flex-col gap-2 max-w-lg mx-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  scrollToHash(link.href);
                }}
                className="font-display text-2xl font-semibold text-ink py-3 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CV_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3.5 font-semibold"
              onClick={() => setOpen(false)}
            >
              Download CV
              <FileDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-line-1", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
        force3D: true,
      });
      gsap.from(".hero-line-2", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.35,
        ease: "power3.out",
        force3D: true,
      });
      gsap.from(".hero-cta, .hero-meta", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.55,
        stagger: 0.1,
        ease: "power3.out",
        force3D: true,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-[100dvh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover brightness-[0.35]"
        style={{ objectPosition: 'center 40%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-deep/90 via-deep/55 to-primary/20" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />

      {/* Floating particles */}
      <div className="absolute top-28 right-10 sm:right-24 pointer-events-none" aria-hidden>
        <span className="absolute h-2 w-2 rounded-full bg-primary animate-float shadow-[0_0_16px_rgba(46,196,182,0.85)]" />
        <span
          className="absolute top-8 left-10 h-1.5 w-1.5 rounded-full bg-accent animate-float"
          style={{ animationDelay: "1.2s" }}
        />
        <span
          className="absolute top-16 left-3 h-2.5 w-2.5 rounded-full bg-primary-light/70 animate-float"
          style={{ animationDelay: "2.4s" }}
        />
        <span
          className="absolute top-4 left-20 h-1 w-1 rounded-full bg-white/60 animate-float"
          style={{ animationDelay: "0.6s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 min-h-[100dvh] flex flex-col justify-end">
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.95] max-w-5xl">
          <span className="hero-line-1 block">Alexandru Ion</span>
          <span className="hero-line-2 block font-medium text-primary-light mt-2 text-2xl sm:text-3xl lg:text-4xl tracking-tight">
            Frontend Engineer
          </span>
        </h1>
        <p className="hero-meta mt-8 max-w-xl text-white/70 text-base sm:text-lg leading-relaxed">
          Building performant, scalable React applications with TypeScript.
          Focused on clean code, usability, and continuous learning.
        </p>
        <div className="hero-cta mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/30"
          >
            <Mail className="h-4 w-4" />
            Email me
          </a>
          <a
            href={CV_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-full font-semibold border border-white/15"
          >
            <FileDown className="h-4 w-4" />
            Download CV
          </a>
          <button
            type="button"
            onClick={() => scrollToHash("#work")}
            className="magnetic-btn inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-full font-semibold border border-white/15"
          >
            See work
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="hero-meta mt-16 flex flex-col items-center gap-2 self-center sm:self-start">
          <span className="text-[11px] font-medium tracking-wide text-white/40 uppercase">
            Scroll
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Feature demos
---------------------------------------------------------------- */
function FocusShuffler() {
  const rootRef = useRef(null);
  const inView = useInView(rootRef);
  const items = [
    { tag: "Clarity", label: "Dense data made obvious in one glance", meta: "UI" },
    { tag: "Speed", label: "Interactions that feel instant on real devices", meta: "Perf" },
    { tag: "Product", label: "From blank repo to something people pay for", meta: "Ship" },
  ];
  const [stack, setStack] = useState(items);

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={rootRef} className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i;
        const total = stack.length;
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1 - offset * 0.25,
              transition:
                "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease",
            }}
            className="absolute inset-0 bg-surface border border-divider rounded-3xl p-5 shadow-md shadow-black/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium tracking-wide text-primary-light bg-primary/15 px-2.5 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="text-xs text-muted font-medium">{item.meta}</span>
            </div>
            <div className="mt-4 font-display text-lg font-semibold text-ink leading-tight">
              {item.label}
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-1 w-1 rounded-full"
                  style={{
                    background: idx < 24 - offset * 6 ? "#2EC4B6" : "#1C2423",
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DeployRain() {
  const rootRef = useRef(null);
  const inView = useInView(rootRef);
  const [statusIdx, setStatusIdx] = useState(0);
  const [count, setCount] = useState(12);

  const statuses = [
    { text: "All systems nominal", label: "Stable", tone: "primary" },
    { text: "Deploying to production", label: "Deploy", tone: "accent" },
    { text: "Tests passing", label: "CI", tone: "primary" },
    { text: "Shipped · live for users", label: "Done", tone: "primary" },
  ];

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length;
        if (statuses[next].label === "Done") setCount((c) => c + 1);
        return next;
      });
    }, 2300);
    return () => clearInterval(interval);
  }, [inView]);

  const drops = [
    { left: "15%", delay: "0.0s", dur: "2.6s", size: 16 },
    { left: "25%", delay: "1.3s", dur: "3.0s", size: 13 },
    { left: "38%", delay: "0.6s", dur: "2.8s", size: 18 },
    { left: "50%", delay: "1.8s", dur: "2.4s", size: 14 },
    { left: "62%", delay: "0.9s", dur: "3.1s", size: 17 },
    { left: "74%", delay: "2.0s", dur: "2.7s", size: 13 },
    { left: "85%", delay: "0.4s", dur: "2.9s", size: 16 },
  ];

  const ripples = [
    { left: "22%", delay: "0.2s" },
    { left: "48%", delay: "1.0s" },
    { left: "76%", delay: "1.8s" },
  ];

  const status = statuses[statusIdx];
  const toneText =
    status.tone === "accent" ? "text-accent" : "text-primary-light";
  const toneDot =
    status.tone === "accent" ? "bg-accent" : "bg-primary";

  return (
    <div
      ref={rootRef}
      data-paused={inView ? undefined : "true"}
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/20 demo-loop"
      style={{
        background: "linear-gradient(180deg, #0E1615 0%, #0B1211 70%, #080E0D 100%)",
      }}
    >
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-primary/20 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-accent/10 blur-xl" />

      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-primary-light" strokeWidth={2.2} />
          <span className="text-[11px] font-semibold tracking-wide text-primary-light uppercase">
            Deploy watch
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">
            {String(count).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-medium tracking-wide text-muted uppercase">
            ships
          </span>
        </div>
      </div>

      {/* Server rack source */}
      <svg
        className="absolute left-3 right-3 top-9 h-5"
        viewBox="0 0 400 20"
        preserveAspectRatio="none"
      >
        <rect x="0" y="4" width="400" height="12" rx="2" fill="#2EC4B6" fillOpacity="0.15" />
        {[40, 120, 200, 280, 360].map((x) => (
          <g key={x}>
            <rect x={x} y="6" width="28" height="8" rx="1" fill="#2EC4B6" fillOpacity="0.35" />
            <circle cx={x + 6} cy="10" r="1.5" fill="#7EE0D6" />
            <circle cx={x + 12} cy="10" r="1.5" fill="#2EC4B6" />
          </g>
        ))}
      </svg>

      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {drops.map((d, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: d.left,
              width: `${d.size}px`,
              height: `${Math.round(d.size * 1.2)}px`,
              animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
              filter: "drop-shadow(0 0 4px rgba(46,196,182,0.55))",
              transform: "translateX(-50%)",
            }}
            viewBox="0 0 24 28"
          >
            <defs>
              <linearGradient id={`scan-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#5ED4C8" />
                <stop offset="100%" stopColor="#24A99D" />
              </linearGradient>
            </defs>
            {/* Code bracket particle */}
            <path
              d="M8 4 L3 14 L8 24 M16 4 L21 14 L16 24"
              fill="none"
              stroke={`url(#scan-${i})`}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>

      <svg
        className="absolute bottom-9 left-3 right-3 h-3"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,6 L 200,6"
          fill="none"
          stroke="#2EC4B6"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
      </svg>

      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-accent/50"
            style={{
              left: r.left,
              width: "4px",
              height: "4px",
              animation: `rain-ripple 2.4s ease-out ${r.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full ${toneDot}`}>
            {status.tone === "accent" && (
              <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />
            )}
          </span>
          <span
            key={status.text}
            className={`text-xs truncate ${toneText}`}
            style={{ animation: "rain-fadein 0.35s ease-out" }}
          >
            {status.text}
          </span>
        </div>
        <span
          className={`text-[11px] font-semibold tracking-wide whitespace-nowrap pl-2 ${toneText}`}
        >
          {status.label}
        </span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function SprintScheduler() {
  const rootRef = useRef(null);
  const inView = useInView(rootRef);
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const [step, setStep] = useState(0);
  const activeDay = 3;

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 1400);
    return () => clearInterval(interval);
  }, [inView]);

  const cursorPos = (() => {
    switch (step) {
      case 0:
        return { x: 8, y: 110, opacity: 0 };
      case 1:
        return { x: 60, y: 60, opacity: 1 };
      case 2:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 };
      case 3:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 };
      case 4:
        return { x: 130, y: 130, opacity: 1 };
      default:
        return { x: 8, y: 110, opacity: 0 };
    }
  })();

  return (
    <div ref={rootRef} className="relative h-44 w-full bg-surface border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold tracking-wide text-muted">
          Sprint · Week 14
        </span>
        <span className="text-[11px] font-semibold tracking-wide text-primary-light bg-primary/15 px-2 py-0.5 rounded-full">
          Ship
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay
                ? "bg-primary text-white scale-110 shadow-lg shadow-primary/30"
                : "bg-background text-ink"
            }`}
          >
            <span className="text-[10px] font-medium text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 7}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4
            ? "bg-accent text-deep scale-[1.02] shadow-md shadow-accent/30"
            : "bg-divider/60 text-muted"
        }`}
      >
        {step >= 3 ? "✓ Release locked" : "Pick ship day"}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: cursorPos.opacity,
          transform: step === 3 ? "scale(0.85)" : "scale(1)",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 3L19 12L12 13L9 20L5 3Z"
            fill="#FAFAFA"
            stroke="#0F0F10"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function Features() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, ".feature-heading > *", { y: 24, stagger: 0.08, duration: 0.65 });
  useScrollReveal(sectionRef, ".feature-card", { y: 40, stagger: 0.14, duration: 0.75, start: "top 82%" });

  const cards = [
    {
      eyebrow: "01",
      heading: "Interfaces that hold up",
      sub: "When the screen is busy and the stakes are real",
      bullets: [
        "Complex flows reduced to decisions people can make in seconds",
        "Layouts that stay readable on every device, not just the design file",
      ],
      Component: FocusShuffler,
    },
    {
      eyebrow: "02",
      heading: "Craft that ships",
      sub: "From pull request to production without drama",
      bullets: [
        "State, performance, and polish treated as part of the feature",
        "Code that stays alive after launch, not a demo that dies in staging",
      ],
      Component: DeployRain,
    },
    {
      eyebrow: "03",
      heading: "Delivery with rhythm",
      sub: "Scope tight, release often, learn fast",
      bullets: [
        "Clear milestones so progress is visible every week",
        "Feedback loops that improve the product after it is live",
      ],
      Component: SprintScheduler,
    },
  ];

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs font-semibold tracking-wide text-primary-light uppercase">
            How I work
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Focus areas
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-xl leading-relaxed">
            The parts of frontend work I obsess over, and hold every project to.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold tracking-wide text-muted">
                  {card.eyebrow}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-ink/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={1.8}
                />
              </div>
              <card.Component />
              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">
                  {card.heading}
                </h3>
                <p className="text-muted text-sm mt-2 leading-relaxed">
                  {card.sub}
                </p>
                <ul className="mt-4 space-y-2.5 text-muted text-[15px] leading-relaxed">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Pillars — principles, not vanity metrics
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null);
  useScrollReveal(ref, ".pillar-item", { y: 24, stagger: 0.12, duration: 0.7 });

  const pillars = [
    {
      title: "Clarity first",
      text: "Dense screens reduced to decisions people can make without guessing.",
    },
    {
      title: "Feels fast",
      text: "Interactions tuned until waiting stops being part of the product.",
    },
    {
      title: "Ships clean",
      text: "From first commit to production with craft that still holds up later.",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden border-y border-divider">
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-3 lg:divide-x divide-divider gap-12 lg:gap-0">
          {pillars.map((p) => (
            <div key={p.title} className="pillar-item lg:px-10 first:lg:pl-0 last:lg:pr-0">
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight gradient-text">
                {p.title}
              </h3>
              <div className="mt-4 h-px w-full overflow-hidden">
                <div
                  className="pillar-sweep-line h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </div>
              <p className="mt-4 text-muted text-sm sm:text-base leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Selected work — current role + side project
---------------------------------------------------------------- */
function Work() {
  const ref = useRef(null);
  useScrollReveal(ref, ".work-heading > *", { y: 20, stagger: 0.08, duration: 0.6 });
  useScrollReveal(ref, ".work-card", { y: 36, stagger: 0.14, duration: 0.75, start: "top 85%" });

  return (
    <section id="work" ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="work-heading">
          <span className="text-xs font-semibold tracking-wide text-primary-light uppercase">
            Selected work
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
            What I ship
          </h2>
        </div>

        <div className="mt-16 grid gap-6">
          <article className="work-card rounded-5xl border border-divider bg-surface p-8 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-wide text-primary-light uppercase">
                  Present
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2">
                  Frontend Engineer
                </h3>
                <p className="text-primary-light font-medium mt-1">Bobnet</p>
              </div>
              <span className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                <Layers className="h-5 w-5 text-primary" />
              </span>
            </div>
            <ul className="mt-8 space-y-4 text-muted leading-relaxed">
              {[
                "Shipping production React and TypeScript interfaces used daily by real teams.",
                "Improving performance, state management, and UX across complex product flows.",
                "Building reusable UI systems shared between web and React Native.",
              ].map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="grid lg:grid-cols-2 gap-6">
            <a
              href="https://userepurposer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card group rounded-5xl border border-divider bg-deep p-8 sm:p-10 hover:border-primary/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                      Indie SaaS
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 group-hover:text-primary transition-colors">
                      UseRepurposer
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-primary transition-colors" />
                </div>
                <p className="mt-6 text-muted leading-relaxed">
                  Turn a URL or transcript into LinkedIn, X, newsletter, and TikTok
                  drafts in about a minute. Built end to end: UI, API, AI, and payments.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "TypeScript", "Express", "Groq", "Stripe", "Supabase"].map(
                    (s) => (
                      <span
                        key={s}
                        className="rounded-full border border-divider px-3 py-1 text-xs text-muted"
                      >
                        {s}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </a>

            <a
              href="https://expense-web-app-a1h2.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card group rounded-5xl border border-divider bg-deep p-8 sm:p-10 hover:border-primary/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                      Personal product
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 group-hover:text-primary transition-colors">
                      Ledger
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-primary transition-colors" />
                </div>
                <p className="mt-6 text-muted leading-relaxed">
                  A polished expense tracker with dashboard analytics, reports, and
                  auth, React frontend paired with a Node API.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Redux Toolkit",
                    "Express",
                    "MongoDB",
                    "Swagger",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-divider px-3 py-1 text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Protocol — sticky stack
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".protocol-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        // No blur filter — expensive; scale + opacity only
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top top+=100",
            endTrigger: cards[cards.length - 1],
            end: "top top+=120",
            scrub: 0.6,
          },
          scale: 0.94,
          opacity: 0.55,
          ease: "none",
          force3D: true,
        });
      });

      gsap.from(".protocol-heading > *", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        y: 24,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        force3D: true,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Understand",
      tagline: "Listen before code",
      text: "Clarify goals, constraints, and the real user job. Map flows, edge cases, and success metrics before committing to UI.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      alt: "Team collaborating",
      meta: "Step 1 · Discover",
    },
    {
      num: "02",
      title: "Build",
      tagline: "Craft with intent",
      text: "Ship clean React architecture: typed components, solid state, and interaction design that feels fast and obvious.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      alt: "Laptop with code",
      meta: "Step 2 · Engineer",
    },
    {
      num: "03",
      title: "Ship",
      tagline: "Measure and iterate",
      text: "Deploy, profile, and refine. Performance budgets, CI, and feedback loops keep the product improving after launch.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      alt: "Product team reviewing work",
      meta: "Step 3 · Release",
    },
  ];

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="protocol-heading max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="text-xs font-semibold tracking-wide text-primary-light uppercase">
          Process
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          How a project moves
          <span className="block font-medium text-primary-light mt-2 text-2xl sm:text-3xl tracking-tight">
            Understand, build, ship
          </span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide text-muted uppercase">
                    {step.meta}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide text-primary-light bg-primary/15 px-2.5 py-1 rounded-full">
                    Process
                  </span>
                </div>

                <div className="my-12">
                  <span className="font-display font-extrabold text-[7rem] sm:text-[10rem] leading-none text-primary/15 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-primary-light text-xl sm:text-2xl mt-3 font-medium">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">
                  {step.text}
                </p>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full bg-deep">
                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/15" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-[11px] font-semibold tracking-wide text-deep uppercase">
                    Step {step.num}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Services / Stack grid
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null);
  useScrollReveal(ref, ".stack-heading > *", { y: 20, stagger: 0.08, duration: 0.6 });
  useScrollReveal(ref, ".svc-tile", { y: 28, stagger: 0.07, duration: 0.65, start: "top 85%" });
  useScrollReveal(ref, ".stack-chip", { y: 12, stagger: 0.03, duration: 0.45, start: "top 90%" });

  return (
    <section id="stack" ref={ref} className="bg-deep text-white py-28 sm:py-32">
      <div className="stack-heading max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-14">
        <span className="text-xs font-semibold tracking-wide text-primary-light uppercase">
          Capabilities
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
          Stack I ship with.
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="svc-tile bg-deep p-8 sm:p-10 hover:bg-white/[0.03] transition-colors group"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 border border-primary/20 mb-5 group-hover:scale-110 transition-transform">
                <svc.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </span>
              <h3 className="font-display text-xl font-bold">{svc.title}</h3>
              <p className="mt-3 text-white/60 text-sm leading-relaxed">{svc.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "React",
            "TypeScript",
            "Redux Toolkit",
            "RTK Query",
            "Tailwind",
            "Node.js",
            "Express",
            "Supabase",
            "Stripe",
            "React Native",
            "Vite",
            "Git / CI",
          ].map((skill) => (
            <span
              key={skill}
              className="stack-chip rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-white/70 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Contact
---------------------------------------------------------------- */
function Field({ label, type = "text", required, value, onChange }) {
  return (
    <div>
      <label className="text-[11px] font-semibold tracking-wide uppercase text-muted mb-2 block">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body"
      />
    </div>
  );
}

function ContactForm() {
  const ref = useRef(null);
  useScrollReveal(ref, ".contact-copy > *", { y: 22, stagger: 0.07, duration: 0.65 });
  useScrollReveal(ref, ".contact-panel", { y: 32, duration: 0.75, start: "top 88%" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "your_access_key_here") {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio message from ${form.name}`,
          from_name: "Alexandru Ion Portfolio",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setForm({ name: "", email: "", message: "" });
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="contact-copy lg:col-span-5">
            <span className="text-xs font-semibold tracking-wide text-primary-light uppercase">
              Contact
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              Let&apos;s talk
              <span className="block font-medium text-primary-light mt-2 text-2xl sm:text-3xl tracking-tight">
                Frontend work and products
              </span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-md">
              Roles, products, or feedback on what I&apos;m building. Send a note or
              grab the CV.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="lift-on-hover flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center group-hover:bg-primary transition">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white transition" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold tracking-wide uppercase text-muted">
                    Email
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">
                    {EMAIL}
                  </span>
                </span>
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="lift-on-hover flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center group-hover:bg-primary transition">
                  <LinkedinIcon className="h-5 w-5 text-primary group-hover:text-white transition" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold tracking-wide uppercase text-muted">
                    LinkedIn
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">
                    /in/devalexion
                  </span>
                </span>
              </a>

              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="lift-on-hover flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center group-hover:bg-primary transition">
                  <GithubIcon className="h-5 w-5 text-primary group-hover:text-white transition" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold tracking-wide uppercase text-muted">
                    GitHub
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">
                    DevAlexIon
                  </span>
                </span>
              </a>

              <a
                href={CV_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="lift-on-hover flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center group-hover:bg-primary transition">
                  <FileDown className="h-5 w-5 text-primary group-hover:text-white transition" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold tracking-wide uppercase text-muted">
                    Resume
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">
                    Download CV
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 pt-2">
                <span className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold tracking-wide uppercase text-muted">
                    Based in
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">
                    Bucharest · Romania
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="contact-panel bg-surface border border-divider rounded-5xl p-7 sm:p-10 shadow-xl shadow-primary/5"
            >
              {status !== "sent" ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Name"
                      required
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <Field
                      label="Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                  </div>
                  <div className="mt-5">
                    <label className="text-[11px] font-semibold tracking-wide uppercase text-muted mb-2 block">
                      Message *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Tell me about the role, product, or idea..."
                      className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="magnetic-btn mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3.5 font-semibold shadow-lg shadow-primary/30 disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      "Sending…"
                    ) : (
                      <>
                        Send message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="mt-4 text-sm text-primary-light text-center">
                      Couldn&apos;t send right now. Email me at{" "}
                      <a href={`mailto:${EMAIL}`} className="underline">
                        {EMAIL}
                      </a>
                      .
                    </p>
                  )}
                </>
              ) : (
                <div className="py-16 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold">Message sent</h3>
                  <p className="text-muted mt-2">
                    Thanks. I&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-primary-light font-medium"
                  >
                    Send another
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Footer — stacked minimal (portfolio pattern)
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="bg-deep text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="py-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 border-b border-white/5">
          <div className="max-w-md">
            <div className="font-display font-bold text-xl">
              Alexandru Ion<span className="text-primary">.</span>
            </div>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              Frontend Engineer building performant, scalable, and responsive web
              applications with React and TypeScript.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(l.href);
                }}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/55">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href={CV_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Download CV
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
              Email
            </a>
          </div>
          <p className="text-xs text-white/35">© {new Date().getFullYear()} Alexandru Ion</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    if (prefersReducedMotion()) {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      return;
    }
    const id = setTimeout(() => ScrollTrigger.refresh(), 200);
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      clearTimeout(id);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ServicesGrid />
        <Pillars />
        <Work />
        <Protocol />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

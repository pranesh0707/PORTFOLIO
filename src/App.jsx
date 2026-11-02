import { useState, useEffect } from "react";

/* =========================================================================
   DEVELOPER PROFILE DATA — PRANESH U S
========================================================================= */
const PROFILE = {
  name: "Pranesh U S",
  monogram: "PS",
  college: "Sri Krishna College of Engineering and Technology (SKCET)",
  degree: "B.Tech in Computer Science and Business Systems (2024 – 2028)",
  cgpa: "8.21",
  roleLines: ["Distributed Systems", "Zero-Trust Security", "Cloud Scalability", "High Throughput"],
  bio: "Third-year CSBS engineer at SKCET focused on building resilient backend architectures, zero-trust security layers, and asynchronous event streams. Interned at Infosys Springboard & Pinnacle Lab with hands-on deployments in Spring Boot, Kafka, Redis, and AWS.",
  phone: "+91 8098046759",
  email: "mailto:praneshsekar07@gmail.com",
  emailDisplay: "praneshsekar07@gmail.com",
  github: "https://github.com/pranesh0707",
  linkedin: "https://www.linkedin.com/in/pranesh-sekar-0a594432b/",
  resumePdf: "/resume.pdf",
};

/* =========================================================================
   16 TOOL ICONS (ALL INLINE & FAIL-SAFE)
========================================================================= */
const ICONS = {
  Java: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-8 h-8 object-contain" />,
  SpringBoot: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-8 h-8 object-contain" />,
  SpringSecurity: () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path d="M64 4L16 26v40c0 32 20 54 48 58 28-4 48-26 48-58V26L64 4z" fill="#6DB33F" />
      <path d="M64 22L28 38v28c0 22 14 38 36 42 22-4 36-20 36-42V38L64 22z" fill="#ffffff" />
      <path d="M64 34l-20 9v19c0 14 9 24 20 28 11-4 20-14 20-28V43l-20-9z" fill="#6DB33F" />
    </svg>
  ),
  SpringCloud: () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path d="M96 46c-2-16-16-28-32-28-14 0-26 9-30 22-2 0-4-1-6-1-14 0-26 12-26 26s12 26 26 26h68c14 0 26-12 26-26 0-12-9-23-20-25z" fill="#2496ED" />
      <path d="M64 36c12 0 22 10 22 22 0 2 0 4-1 6h-42c-1-2-1-4-1-6 0-12 10-22 22-22z" fill="#6DB33F" />
    </svg>
  ),
  Keycloak: () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <circle cx="64" cy="64" r="60" fill="#0088CE" />
      <path d="M44 40h40v48H44z" fill="#ffffff" />
      <circle cx="64" cy="56" r="10" fill="#0088CE" />
      <path d="M60 62h8l4 18H56z" fill="#0088CE" />
    </svg>
  ),
  Kafka: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt="Kafka" className="w-8 h-8 object-contain" />,
  Redis: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-8 h-8 object-contain" />,
  Microservices: () => (
    <svg viewBox="0 0 64 64" className="w-8 h-8">
      <circle cx="32" cy="14" r="8" fill="#ff3b1d" />
      <circle cx="16" cy="46" r="8" fill="#3b82f6" />
      <circle cx="48" cy="46" r="8" fill="#10b981" />
      <path d="M32 22v12M22 42l10-8M42 42l-10-8" stroke="#ff3b1d" strokeWidth="2.5" strokeDasharray="3 3" />
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <path d="M36 78c-10 0-18-5-18-15s8-15 18-15c6 0 12 2 16 6v-18H62v42H52v-6c-4 4-10 6-16 6zm4-10c5 0 10-3 12-8v-2c-2-5-7-8-12-8-5 0-9 4-9 9s4 9 9 9z" fill="#FF9900" />
      <path d="M20 95c32 15 72 15 96-6 3-2 1-5-2-4-22 14-60 17-94 10z" fill="#FF9900" />
      <path d="M116 85c2 4 6 12 7 14 1 2-1 3-3 2-6-3-15-8-17-9-2-1 0-3 2-2 5 2 9 4 11-5z" fill="#FF9900" />
    </svg>
  ),
  Docker: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8 object-contain" />,
  Postgres: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8 object-contain" />,
  MySQL: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-8 h-8 object-contain" />,
  Python: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8 object-contain" />,
  ReactIcon: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 object-contain" />,
  Postman: () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <circle cx="64" cy="64" r="60" fill="#FF6C37" />
      <path d="M40 76l36-36M40 76l44-12M40 76l12-44" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
    </svg>
  ),
  Swagger: () => (
    <svg viewBox="0 0 128 128" className="w-8 h-8">
      <circle cx="64" cy="64" r="60" fill="#85EA2D" />
      <path d="M40 46c0-7 5-12 12-12h24c7 0 12 5 12 12v36c0 7-5 12-12 12H52c-7 0-12-5-12-12V46z" fill="#000000" />
      <circle cx="64" cy="64" r="8" fill="#85EA2D" />
    </svg>
  ),
};

const INNER_ORBIT = [
  { name: "Java", role: "OOP & Concurrency", Icon: ICONS.Java },
  { name: "Spring Boot", role: "Microservice Core", Icon: ICONS.SpringBoot },
  { name: "Spring Security", role: "RBAC & Filter Chains", Icon: ICONS.SpringSecurity },
  { name: "Spring Cloud", role: "Gateway & Service Mesh", Icon: ICONS.SpringCloud },
  { name: "Keycloak", role: "OAuth2 & OIDC Identity", Icon: ICONS.Keycloak },
  { name: "Apache Kafka", role: "Event Streaming Engine", Icon: ICONS.Kafka },
  { name: "Redis", role: "In-Memory Caching & Locks", Icon: ICONS.Redis },
  { name: "Microservices", role: "Decoupled Architecture", Icon: ICONS.Microservices },
];

const OUTER_ORBIT = [
  { name: "AWS", role: "VPC, EC2, IAM & S3", Icon: ICONS.AWS },
  { name: "Docker", role: "Container Isolation", Icon: ICONS.Docker },
  { name: "PostgreSQL", role: "ACID Relational Data", Icon: ICONS.Postgres },
  { name: "MySQL", role: "Optimized Query Latency", Icon: ICONS.MySQL },
  { name: "Python", role: "AST Parsing & ML Pipelines", Icon: ICONS.Python },
  { name: "React", role: "Frontend UI & Vite", Icon: ICONS.ReactIcon },
  { name: "Postman", role: "API Testing & Automation", Icon: ICONS.Postman },
  { name: "Swagger", role: "OpenAPI Documentation", Icon: ICONS.Swagger },
];

const PROJECTS = [
  {
    id: "vpc-native-ai-gateway",
    name: "VPC-Native AI Gateway",
    category: "Cloud Security & AI Routing",
    year: "2026",
    outcome: "Production-Grade AI Proxy",
    githubUrl: "https://github.com/pranesh0707/VPC_AI_GATEWAY",
    summary: "Engineered a secure, VPC-native AI gateway for BPOs, integrating Microsoft Presidio for task-aware PII masking, Shannon entropy-based smart model routing, and SHA-256 blockchain audit logs.",
    tags: ["Java", "Spring Boot", "React.js", "Redis", "Kafka", "Presidio", "AWS VPC"],
    highlights: ["Microsoft Presidio", "Zero-Trust", "Shannon Entropy", "SHA-256 Audit", "Kafka Streaming", "40% Cost Cut"],
    deepDive: {
      problem: "Enterprise LLM interactions expose sensitive customer PII to external APIs, risking compliance breaches under the DPDP Act and ballooning API invocation costs.",
      solution: "Engineered an in-VPC gateway terminating requests via mTLS. Automatically redacts PII with Microsoft Presidio, routes simple vs. complex queries using Shannon entropy algorithms, and maintains a tamper-proof SHA-256 audit ledger over Kafka.",
      architecture: [
        "Microsoft Presidio filter intercepting prompts to tokenize names, credit cards, and Aadhaar identifiers before external egress.",
        "Shannon Entropy model router reducing enterprise AI token expenses by 40% by redirecting low-complexity tasks to smaller models.",
        "Asynchronous Kafka pipeline feeding an append-only SHA-256 blockchain audit ledger for regulatory compliance."
      ],
    }
  },
  {
    id: "distributed-state-guardian",
    name: "Project Chronos: State Guardian",
    category: "Distributed Systems & Tooling",
    year: "2026",
    outcome: "OSS · Time-Travel Debugger",
    githubUrl: "https://github.com/pranesh0707/Distributed-State-Guardian-Time-Travel-Debugger",
    summary: "Distributed debugging infrastructure tool capturing and visualizing exact microservice states at transaction boundaries to eliminate zombie states and silent distributed corruptions.",
    tags: ["Java", "Spring Boot", "Spring AOP", "Apache Kafka", "Redis", "React", "PostgreSQL", "SHA-256"],
    highlights: ["Spring Boot AOP", "P99 <5ms", "Time-Travel Rollback", "95% Debug Speedup", "Zero-Intrusion"],
    deepDive: {
      problem: "Debugging microservices across decoupled Kafka consumers requires hours of log correlation and fails to reproduce intermittent, non-deterministic race conditions.",
      solution: "Constructed zero-intrusion AOP interceptors capturing stateBefore and stateAfter microservice payloads with cryptographic hashes, streaming to Kafka with <5ms overhead.",
      architecture: [
        "Spring AOP pointcuts capturing method invocation states without changing existing business logic.",
        "Zero-data-loss Kafka event pipeline maintaining full causal ordering across distributed nodes.",
        "Millisecond Redis timeline retrieval cutting distributed debugging time by 95% (4 hours to 30 seconds)."
      ],
    }
  },
  {
    id: "spring-ai-audio-transcriber",
    name: "Audio Transcriber AI",
    category: "Full-Stack Speech-to-Text",
    year: "2025",
    outcome: "Shipped · AI Pipeline",
    githubUrl: "https://github.com/pranesh0707/SPRING_AI_AUDIO_TRANSCRIBER",
    summary: "Full-stack speech-to-text platform enabling browser recording via native MediaRecorder API, streaming through Spring Boot gateway to a faster-whisper service with word-by-word reveal.",
    tags: ["React Vite", "Spring Boot", "Python Flask", "faster-whisper", "MediaRecorder API"],
    highlights: ["MediaRecorder API", "faster-whisper", "VAD Silence Filter", "Word-by-Word Reveal", "Zero External Libs"],
    deepDive: {
      problem: "Standard browser transcription interfaces freeze on large audio uploads and lack real-time feedback, failing silently when audio codecs mismatch.",
      solution: "Built a non-blocking audio pipeline pairing native browser MediaRecorder chunks with a Spring Boot RestTemplate proxy and Python Flask faster-whisper backend tuned with VAD filtering.",
      architecture: [
        "Native browser MediaRecorder recording audio without heavy external client libraries.",
        "Transcription tuning: beam search decoding, deterministic temperature, and VAD silence filtering.",
        "Word-by-word staggered reveal animation with multi-language hint support (English, Hindi, Spanish)."
      ],
    }
  },
  {
    id: "med-vault",
    name: "MedVault & AuthForge",
    category: "Application Security & RBAC",
    year: "2026",
    outcome: "Infosys Springboard Deployed",
    githubUrl: "https://github.com/pranesh0707/MED_VAULT",
    summary: "Fortified healthcare data platform with dual-layer security, Spring Security JWT access/refresh token rotation, blacklist-based logout, and normalized schema querying.",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "PostgreSQL", "RBAC"],
    highlights: ["JWT Token Blacklist", "90% Vulnerability Drop", "Normalized Schemas", "30% Lower Latency", "RBAC Isolation"],
    deepDive: {
      problem: "Healthcare platforms face strict regulatory vulnerability mandates: stale access tokens and unindexed schemas leak sensitive patient data during concurrent queries.",
      solution: "Engineered AuthForge: a reusable Spring Security authentication framework featuring JWT refresh-token rotation, an in-memory token blacklist for immediate revocation, and normalized MySQL schemas.",
      architecture: [
        "Blacklist-based logout interceptor reducing unauthorized token reuse by 90%.",
        "Normalized MySQL schema cutting query response latency by 30% across 10,000+ patient records.",
        "Role-Based Access Control (RBAC) isolating Doctor, Patient, and Admin security boundaries."
      ],
    }
  }
];

const TIMELINE = [
  {
    type: "WORK",
    role: "Software Engineering Intern",
    company: "Infosys Springboard",
    duration: "Jan 2026 – Mar 2026",
    tag: "Security & Database",
    bullets: [
      "Fortified MedVault healthcare platform integrating Spring Security, JWT, and RBAC to secure REST APIs.",
      "Architected refresh-token authentication flow with blacklist-based logout, reducing unauthorized access vulnerabilities by 90%.",
      "Streamlined secure patient record retrieval by designing normalized MySQL schemas, cutting query latency by 30% for 10,000+ records."
    ]
  },
  {
    type: "WORK",
    role: "Java Development Intern",
    company: "Pinnacle Lab (Remote)",
    duration: "Jun 2025 – Aug 2025",
    tag: "Backend & Automation",
    bullets: [
      "Architected Flight Booking and Library Management systems utilizing Java OOP principles, improving code reusability by 40%.",
      "Deployed SeedCart, a Spring Boot backend automating dynamic database seeding for 50+ test scenarios, cutting setup time by 60%.",
      "Optimized REST API endpoints ensuring scalable data handling for high-traffic modules."
    ]
  },
  {
    type: "EDUCATION",
    role: "B.Tech in Computer Science and Business Systems",
    company: "Sri Krishna College of Engineering and Technology (SKCET)",
    duration: "2024 – 2028",
    tag: "CGPA: 8.21",
    bullets: [
      "Strong foundation in Data Structures, Algorithms, Distributed Architecture, and Zero-Trust System Design.",
      "Regular competitive problem-solving in Java with continuous focus on time and space complexity optimization."
    ]
  },
  {
    type: "CERTIFICATION",
    role: "Verified Industry Certifications",
    company: "Global Tech Leaders",
    duration: "2025 – 2026",
    tag: "Continuous Learning",
    bullets: [
      "Claude Code in Action (Anthropic, 2026)",
      "Intro to LLMs (Google Cloud, May 2025)",
      "Python for Data Science (IBM, Aug 2025)",
      "Software Engineering & DB/SQL (Infosys, 2026)",
      "Networking Basics (Cisco, Jan 2025)"
    ]
  }
];

/* =========================================================================
  IMAGE AVATAR WITH 3D PARALLAX, DEPTH SHADOWS & MOUSE-TRACKING SHEEN
========================================================================= */
function RealPixarAvatar({ mousePos, isDark, size = "w-[280px] h-[340px] sm:w-[400px] sm:h-[460px]" }) {

  // Parallax angles
  const rotY = mousePos.x * 22;
  const rotX = -mousePos.y * 18;

  return (
    <div
      className={`relative ${size} flex items-center justify-center select-none cursor-pointer transition-transform duration-75 ease-out`}
      style={{
        transform: `perspective(1200px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateZ(40px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Local avatar asset presented as a lightweight 3D surface. */}
      <img
        src="/avatar.png"
        alt="Pranesh U S - 3D Pixar Character"
        className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(255,59,29,0.5)]"
        style={{
          mixBlendMode: isDark ? "normal" : "darken",
          maskImage: "radial-gradient(ellipse at center, black 68%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 68%, transparent 100%)",
        }}
      />

      {/* Dynamic 3D lighting sheen tracking cursor */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none mix-blend-overlay opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + rotY * 1.5}% ${50 - rotX * 1.5}%, rgba(255,255,255,0.9), transparent 60%)`,
        }}
      />
    </div>
  );
}

/* =========================================================================
   SKY-DROP NAME (MASSIVE ACCENT RED TYPOGRAPHY PLUNGING FROM ABOVE)
========================================================================= */
const EXTRUDE_RED = Array.from({ length: 9 }, (_, i) => `${i + 1}px ${i + 1}px 0 #8c1200`).join(",") + ", 0 15px 40px rgba(255, 59, 29, 0.6)";

function RedDroppingName({ text = "PRANESH U S" }) {
  const letters = [...text];

  return (
    <div className="relative w-full flex flex-col items-center select-none pointer-events-none pb-2">
      <div
        className="relative flex flex-nowrap justify-center whitespace-nowrap leading-[0.8]"
        style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(3.8rem, 14vw, 15.5rem)",
          color: "#ff3b1d",
          textShadow: EXTRUDE_RED,
          letterSpacing: "-0.015em",
        }}
      >
        {letters.map((ch, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              animation: `skyLetterDrop 0.85s cubic-bezier(0.25, 1, 0.5, 1) forwards ${i * 0.14}s`,
              transform: "translateY(-120vh)",
              opacity: 0,
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </div>

      <div
        className="w-full max-w-5xl h-3.5 mt-2 border-y-2 border-[#ff3b1d]"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, rgba(255,59,29,0.7) 0 2px, transparent 2px 9px)",
        }}
      />
    </div>
  );
}

/* =========================================================================
   ARC REACTOR TECH MATRIX
========================================================================= */
function ArcReactorMatrix({ mousePos, isDark }) {
  const [activeTech, setActiveTech] = useState(null);

  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center">
      <div className="relative w-[340px] h-[340px] sm:w-[580px] sm:h-[580px] lg:w-[640px] lg:h-[640px] flex items-center justify-center">
        {/* Outer Orbit */}
        <div className="absolute inset-0 rounded-full border border-dashed border-accent/30 animate-[spin_55s_linear_infinite] hover:[animation-play-state:paused]">
          {OUTER_ORBIT.map((tech, idx) => {
            const angle = (idx / OUTER_ORBIT.length) * 2 * Math.PI;
            const x = 50 + 48 * Math.cos(angle);
            const y = 50 + 48 * Math.sin(angle);
            return (
              <button
                key={tech.name}
                onMouseEnter={() => setActiveTech(tech)}
                onMouseLeave={() => setActiveTech(null)}
                style={{ top: `${y}%`, left: `${x}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 hover:border-accent hover:scale-125 transition-all duration-300 p-2.5 shadow-2xl flex items-center justify-center cursor-pointer group z-20"
                aria-label={tech.name}
              >
                <tech.Icon />
              </button>
            );
          })}
        </div>

        {/* Inner Orbit */}
        <div className="absolute inset-16 sm:inset-28 rounded-full border border-slate-300 dark:border-zinc-700 animate-[spin_32s_linear_infinite_reverse] hover:[animation-play-state:paused]">
          {INNER_ORBIT.map((tech, idx) => {
            const angle = (idx / INNER_ORBIT.length) * 2 * Math.PI;
            const x = 50 + 48 * Math.cos(angle);
            const y = 50 + 48 * Math.sin(angle);
            return (
              <button
                key={tech.name}
                onMouseEnter={() => setActiveTech(tech)}
                onMouseLeave={() => setActiveTech(null)}
                style={{ top: `${y}%`, left: `${x}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-accent/40 hover:border-accent hover:scale-125 transition-all duration-300 p-2.5 shadow-2xl flex items-center justify-center cursor-pointer group z-20"
                aria-label={tech.name}
              >
                <tech.Icon />
              </button>
            );
          })}
        </div>

        {/* Core Center */}
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-white dark:bg-zinc-950 border-4 border-accent shadow-[0_0_60px_rgba(255,59,29,0.5)] flex items-center justify-center overflow-hidden z-10">
          <RealPixarAvatar mousePos={mousePos} isDark={isDark} size="w-full h-full" />
        </div>
      </div>

      <div className="mt-10 text-center min-h-[3.5rem]">
        {activeTech ? (
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-accent shadow-xl text-sm font-mono tracking-wide text-foreground animate-fadeIn">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
            <span className="font-bold text-accent">{activeTech.name}</span>: {activeTech.role}
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN APP
========================================================================= */
export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);

  // Mouse tracking for 3D parallax
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <div
        className={`relative min-h-screen overflow-x-hidden font-sans antialiased transition-colors duration-300 ${
          isDark ? "bg-[#08080a] text-[#f3f1ea]" : "bg-white text-[#111114]"
        }`}
      >
        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl text-[#f3f1ea] overflow-y-auto antialiased">
            <header className="sticky top-0 z-50 bg-[#08080a]/90 backdrop-blur border-b border-white/10 px-6 sm:px-12 py-5 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-muted hover:text-accent transition-colors cursor-pointer"
              >
                <span className="text-accent text-lg transition-transform group-hover:-translate-x-1">←</span>
                Return to Dashboard
              </button>
              <span className="text-xs uppercase tracking-widest text-accent font-mono bg-accent/10 border border-accent/25 px-3.5 py-1.5 rounded-full">
                {selectedProject.outcome}
              </span>
            </header>

            <main className="max-w-6xl mx-auto px-6 sm:px-12 py-12 lg:py-16">
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.24em] font-mono text-accent font-semibold">
                    {selectedProject.category} · {selectedProject.year}
                  </span>
                  <h1 className="mt-3 font-display uppercase text-4xl sm:text-6xl tracking-tight leading-tight">
                    {selectedProject.name}
                  </h1>
                  <p className="mt-4 text-base sm:text-lg opacity-80 leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.highlights.map((badge) => (
                    <span
                      key={badge}
                      className="px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-lg bg-accent/15 border border-accent/40 text-accent animate-pulse"
                    >
                      ⚡ {badge}
                    </span>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-2xl border border-white/10 bg-[#111116]">
                    <h3 className="font-sans text-xs font-bold text-accent uppercase tracking-wider">
                      The Distributed Bottleneck
                    </h3>
                    <p className="mt-2 text-sm opacity-90 leading-relaxed">
                      {selectedProject.deepDive.problem}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-white/10 bg-[#111116]">
                    <h3 className="font-sans text-xs font-bold text-accent uppercase tracking-wider">
                      Architectural Solution
                    </h3>
                    <p className="mt-2 text-sm opacity-90 leading-relaxed">
                      {selectedProject.deepDive.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-display uppercase text-2xl tracking-wide mb-4">
                    Core Engineering Pillars
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.deepDive.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#111116] border border-white/10">
                        <span className="text-accent font-mono font-bold text-sm">0{idx + 1}</span>
                        <span className="text-sm opacity-80 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3.5 px-6 rounded-xl bg-accent text-white font-semibold text-xs uppercase tracking-widest text-center hover:bg-accent-2 transition-colors shadow-lg active:scale-95"
                  >
                    View GitHub Repository ↗
                  </a>
                  <a
                    href={PROFILE.email}
                    className="flex-1 py-3.5 px-6 rounded-xl border border-white/10 hover:border-accent font-semibold text-xs uppercase tracking-widest text-center transition-colors active:scale-95"
                  >
                    Inquire System
                  </a>
                </div>
              </div>
            </main>
          </div>
        )}

        {/* NAVIGATION */}
        <header className="fixed inset-x-0 top-0 z-40 pointer-events-none">
          <nav
            className={`pointer-events-auto flex items-center justify-between px-6 sm:px-12 py-5 backdrop-blur-md border-b transition-colors ${
              isDark ? "bg-[#08080a]/80 border-white/10" : "bg-white/80 border-slate-200"
            }`}
          >
            <a href="#top" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-accent grid place-items-center font-semibold text-xs tracking-tight bg-white dark:bg-zinc-900 group-hover:bg-accent group-hover:text-white transition-colors">
                {PROFILE.monogram}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{PROFILE.name}</span>
                <span className="text-[0.625rem] font-mono uppercase tracking-widest opacity-60">3rd Year CSBS · SKCET (8.21 CGPA)</span>
              </div>
            </a>

            <ul className="hidden lg:flex items-center gap-8">
              {["Story", "Stack", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative text-[0.8125rem] font-medium uppercase tracking-[0.18em] opacity-70 hover:opacity-100 hover:text-accent transition-colors py-1 group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 ease-out group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm transition-all cursor-pointer active:scale-95 ${
                  isDark ? "border-zinc-700 bg-zinc-900 hover:border-accent" : "border-slate-300 bg-white hover:border-accent"
                }`}
                aria-label="Toggle Color Theme"
              >
                {isDark ? "☀️" : "🌙"}
              </button>

              <a
                href={PROFILE.resumePdf}
                download="Pranesh_US_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent bg-accent/10 hover:bg-accent text-accent hover:text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 active:scale-95"
              >
                Resume PDF ↓
              </a>

            </div>
          </nav>
        </header>

        {/* HERO SECTION: REGGIE PERRY JR. REFERENCE LAYOUT (RED NAME BEHIND, AVATAR IN FRONT) */}
        <section id="top" className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pt-28 sm:px-12 sm:pt-36">
          <div className="relative z-30 flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
            <div>
              <div className="inline-flex items-center gap-3 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-[#ff3b1d]">
                <span className="size-2.5 animate-ping rounded-full bg-[#ff3b1d]" />
                {PROFILE.college?.split("(")[0]}
              </div>
              <h2 className="mt-3 font-display text-2xl uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                {PROFILE.roleLines.map((r) => (
                  <span key={r} className="block">{r}</span>
                ))}
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <p className="max-w-md text-sm leading-relaxed opacity-75 sm:text-right sm:text-base">
                {PROFILE.bio}
              </p>
            </div>
          </div>

          {/* REGGIE PERRY COMPOSITION: NAME DROPS BEHIND (Z-10), AVATAR IN FRONT (Z-20) */}
          <div className="relative mt-4 flex min-h-[500px] flex-1 items-end justify-center pb-4 sm:min-h-[540px]">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
              <RedDroppingName text={PROFILE.name.toUpperCase()} />
            </div>

            <div className="relative z-20 mb-[7.5rem] sm:mb-[8.5rem]">
              <RealPixarAvatar
                mousePos={mousePos}
                isDark={isDark}
                size="w-[280px] h-[360px] sm:w-[360px] sm:h-[460px]"
              />
            </div>
          </div>

        </section>

        {/* MARQUEE */}
        <section id="story" className="relative overflow-hidden border-y border-slate-200 dark:border-zinc-800 py-7 bg-white dark:bg-zinc-950/60 backdrop-blur z-10">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[0, 1].map((copyIdx) => (
              <div key={copyIdx} className="flex items-center shrink-0">
                {[
                  "ZERO-TRUST ARCHITECTURE",
                  "KAFKA EVENT STREAMING",
                  "DETERMINISTIC STATE ROLLBACKS",
                  "SPRING SECURITY & RBAC",
                  "SUB-5MS LATENCY OVERHEAD",
                  "HIGH THROUGHPUT SCALE"
                ].map((phrase) => (
                  <div key={phrase} className="flex items-center">
                    <span className="font-display text-3xl sm:text-5xl uppercase tracking-tight hover:text-accent transition-colors cursor-default whitespace-nowrap">
                      {phrase}
                    </span>
                    <span className="mx-8 sm:mx-12 w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ARC REACTOR MATRIX */}
        <section id="stack" className="py-28 sm:py-36 px-6 sm:px-12 z-10 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-accent font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                Technical Stack
              </div>
              <h2 className="mt-4 font-display uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                Tools I Use.
              </h2>
            </div>
          </div>

          <ArcReactorMatrix mousePos={mousePos} isDark={isDark} />
        </section>

        {/* TIMELINE */}
        <section id="experience" className="py-28 sm:py-36 px-6 sm:px-12 z-10 relative border-t border-slate-200 dark:border-zinc-800">
          <div className="inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-accent font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
            Verified Career Milestones
          </div>
          <h2 className="mt-4 font-display uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Experience & Education.
          </h2>

          <div className="mt-16 relative">
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent via-accent/40 to-transparent -translate-x-1/2" />
            <div className="space-y-12">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className={`relative flex flex-col sm:flex-row gap-8 items-start ${idx % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#08080a] border-4 border-accent shadow-[0_0_15px_rgba(255,59,29,0.8)] z-20 flex items-center justify-center" />
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div className="p-7 rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 hover:border-accent transition-all duration-300 shadow-xl space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-zinc-800">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">{item.tag}</span>
                        <span className="text-xs font-mono opacity-60">{item.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold font-sans">{item.role}</h3>
                      <h4 className="text-sm font-mono text-accent font-semibold">{item.company}</h4>
                      <ul className="space-y-2 pt-2">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-sm opacity-80 leading-relaxed">
                            <span className="text-accent font-bold">›</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-28 sm:py-36 px-6 sm:px-12 z-10 relative border-t border-slate-200 dark:border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-accent font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                Verified Repositories
              </div>
              <h2 className="mt-4 font-display uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                Selected Systems.
              </h2>
            </div>
            <span className="text-[0.8125rem] uppercase tracking-[0.22em] font-mono opacity-60">04 / Production Architectures</span>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {PROJECTS.map((proj, idx) => (
              <article
                key={proj.name}
                className={`group flex flex-col justify-between p-7 rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 hover:border-accent transition-all duration-500 shadow-xl ${
                  idx % 2 === 1 ? "md:mt-16" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-zinc-800">
                    <span className="text-xs uppercase tracking-widest font-mono text-accent font-bold">{proj.outcome}</span>
                    <span className="text-xs uppercase tracking-widest font-mono opacity-60">{proj.year}</span>
                  </div>
                  <h3 className="mt-6 font-display uppercase text-3xl sm:text-4xl tracking-tight group-hover:text-accent transition-colors">
                    {proj.name}
                  </h3>
                  <p className="mt-3 text-sm opacity-80 leading-relaxed">{proj.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {proj.highlights.map((h) => (
                      <span key={h} className="px-3 py-1 text-[0.6875rem] font-mono font-semibold uppercase tracking-wider rounded-lg bg-[#111114] border border-[#111114] text-white">
                        ⚡ {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    GitHub Repository ↗
                  </a>
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:underline cursor-pointer group-hover:translate-x-1 duration-300"
                  >
                    Deep Dive System ↗
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="pt-24 sm:pt-36 px-6 sm:px-12 border-t border-slate-200 dark:border-zinc-800 z-10 relative bg-white dark:bg-zinc-950/80 backdrop-blur">
          <div className="inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-accent font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
            Let’s Connect
          </div>

          <h2 className="mt-4 font-display uppercase text-4xl sm:text-6xl lg:text-8xl max-w-4xl leading-[0.95] tracking-tight">
            Ready to scale systems together?
          </h2>

          <p className="mt-6 text-base sm:text-xl opacity-75 max-w-xl leading-relaxed">
            Open to software engineering internships and high-performance backend roles in distributed systems, application security, and AI infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={PROFILE.email}
              className="group inline-flex items-baseline gap-3 sm:gap-4 font-sans text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight transition-all duration-300 ease-out hover:translate-x-3.5 hover:text-accent break-all"
            >
              {PROFILE.emailDisplay}
              <span className="text-accent inline-block transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">↗</span>
            </a>

            <a
              href={PROFILE.resumePdf}
              download="Pranesh_US_Resume.pdf"
              className="py-3.5 px-7 rounded-full bg-accent text-white font-semibold text-xs uppercase tracking-widest hover:bg-accent-2 transition-colors shadow-xl active:scale-95"
            >
              Download Resume (PDF) ↓
            </a>
          </div>

          <div className="mt-28 sm:mt-36 border-t border-slate-200 dark:border-zinc-800 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <p className="font-display text-3xl uppercase tracking-tight">{PROFILE.name}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] opacity-60 font-mono">
                B.Tech CSBS @ SKCET · Engineering with conviction & zero trust.
              </p>
            </div>

            <div className="lg:col-span-3">
              <ul className="space-y-2">
                <li>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-accent transition-colors font-mono"
                  >
                    <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-4" />
                    GitHub: pranesh0707 ↗
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-accent transition-colors font-mono"
                  >
                    <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-4" />
                    LinkedIn: pranesh-sekar ↗
                  </a>
                </li>
                <li className="text-sm opacity-70 font-mono pt-1">Tel: {PROFILE.phone}</li>
              </ul>
            </div>

            <div className="lg:col-span-3 lg:text-right">
              <p className="text-xs uppercase tracking-[0.18em] opacity-60 font-mono">
                © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Real Gravitational Drop Keyframes */}
      <style>{`
        @keyframes skyLetterDrop {
          0% {
            transform: translateY(-120vh) rotate(-12deg);
            opacity: 0;
          }
          65% {
            transform: translateY(22px) rotate(2deg);
            opacity: 1;
          }
          85% {
            transform: translateY(-10px) rotate(-1deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
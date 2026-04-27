export const profile = {
  name: "Sergio Monteiro",
  role: "Avionics Systems Engineer",
  subtitle: "Eurofighter AJT — Airbus Defence & Space",
  location: "Madrid, Spain",
  email: "aerospace.sm@gmail.com",
  phone: "+34 630 514 880",
  // Brand hook — edit freely.
  tagline: "From GNC algorithms to Eurofighter avionics.",
  brandLine: "Aerospace Engineering & AI Solutions",
  pitch: "Building the aerospace systems of today and the AI solutions of tomorrow.",
  aboutLead:
    "I grew up picking apart how things fly and never stopped. Formal training in Guidance, Navigation & Control; day job integrating avionics on the world's leading fighter jet; a side channel translating all of it into clips anyone can follow.",
  quote: "Precision is a discipline. Curiosity is a habit.",
  headshot: "/images/headshot.jpg",
  portrait: "/images/portrait.jpg",
  aboutBullets: [
    "Aerospace Engineer — specialised in GNC (Guidance, Navigation & Control).",
    "Avionics Systems Engineer, Eurofighter AJT at Airbus Defence & Space.",
    "Ex-GNC lead on SWAT-SHOAL UUV swarm programme (SENER).",
    "Ex-Configuration Mgmt on A320/A330/A340/A350 (Airbus Operations).",
    "MS Aerospace Eng. — Embry-Riddle Daytona (9.75 / 10).",
    "BS Aerospace Eng. — Embry-Riddle Prescott (9.83 / 10).",
  ],
  memberships: [
    { short: "Phi Kappa Phi", full: "The Honor Society of Phi Kappa Phi — national all-discipline honor society", logo: "/images/Phi Kappa Phi.png" },
    { short: "Tau Beta Pi", full: "Tau Beta Pi — the oldest engineering honor society in the US", logo: "/images/tau_beta_pi.gif" },
    { short: "Sigma Gamma Tau", full: "Sigma Gamma Tau — national aerospace engineering honor society", logo: "/images/SGT Logo.gif" },
  ],
  currentPosition: {
    title: "Avionics Systems Engineer, Eurofighter AJT",
    company: "Airbus Defence & Space",
  },
};

export const education = [
  {
    title: "Aerospace Engineering, Master's",
    concentration: "Guidance, Navigation, Dynamics & Controls",
    school: "Embry-Riddle Aeronautical University",
    schoolUrl: "https://erau.edu",
    location: "Daytona Beach, Florida · USA",
    years: "2021 — 2023",
    gpa: "9.75 / 10.00",
    image: "/images/Grad_Masters.jpg",
    featured: true,
    bullets: [
      "Thesis & coursework focused on GNC of aerospace vehicles.",
      "Top of class in the Dynamics & Controls specialisation.",
      "Research covered Kalman filtering, trajectory optimisation, and autonomous vehicle control.",
    ],
  },
  {
    title: "Aerospace Engineering, Bachelor's",
    concentration: "Astronautics",
    school: "Embry-Riddle Aeronautical University",
    schoolUrl: "https://erau.edu",
    location: "Prescott, Arizona · USA",
    years: "2017 — 2021",
    gpa: "9.83 / 10.00",
    image: "/images/Grad_Bachelors.jpg",
    featured: true,
    bullets: [
      "ERAU — #1 US undergraduate aerospace programme.",
      "Student-athlete; captain of the Men's Soccer team.",
      "Dean's List every semester; Phi Kappa Phi, Tau Beta Pi & Sigma Gamma Tau.",
    ],
  },
  {
    title: "Bachillerato (Secondary)",
    concentration: "Engineering track",
    school: "IES Emilio Prados",
    schoolUrl: "",
    location: "Spain",
    years: "2014 — 2017",
    gpa: "Honors",
    image: "/images/IES Emilio Prados.png",
    featured: false,
    bullets: [
      "Graduated with Honors — top distinction.",
      "Gave the end-of-course graduation speech.",
    ],
  },
  {
    title: "Primary Education",
    concentration: "",
    school: "Rosario Moreno",
    schoolUrl: "",
    location: "Spain",
    years: "2004 — 2014",
    gpa: "",
    image: "/images/Rosario moreno.png",
    featured: false,
    bullets: [
      "Identified as gifted at age 11; skipped one academic year.",
      "Regularly invited back to give motivational speeches.",
    ],
  },
];

export const work = [
  {
    company: "Airbus Defence & Space",
    role: "Avionics Systems Engineer — Eurofighter AJT",
    location: "Madrid, Spain",
    period: "Sep 2025 — Present",
    initials: "AD",
    current: true,
    bullets: [
      "FET Team: <strong class=\"font-bold text-flame-500\">end-to-end avionics integration</strong> across the full Eurofighter platform.",
      "TADYC-7: <strong class=\"font-bold text-flame-500\">Fighters Communications System Integration</strong>.",
      "Ownership: requirements, interfaces, and <strong class=\"font-bold text-flame-500\">DOORS traceability</strong> end-to-end.",
      "Joint design: Eurofighter Consortium Partners.",
    ],
  },
  {
    company: "SENER Aerospace & Defence",
    role: "GNC Engineer — SWAT-SHOAL",
    location: "Seville, Spain",
    period: "Jan 2024 — Jul 2025",
    initials: "SE",
    current: false,
    bullets: [
      "Technical lead: <strong class=\"font-bold text-flame-500\">Swarm Formation Control</strong> &amp; <strong class=\"font-bold text-flame-500\">Task Allocation</strong> / Resource Management.",
      "Advanced formation control: leader–follower, waypoint tracker, virtual-point-based swarm navigation.",
      "Collision avoidance: <strong class=\"font-bold text-flame-500\">Cost Function</strong> &amp; Potential Fields.",
      "Swarm reconfiguration: obstacle navigation.",
      "Task allocation: <strong class=\"font-bold text-flame-500\">battery-aware homing</strong> for multi-UUV ops.",
      "State estimation: <strong class=\"font-bold text-flame-500\">Kalman filtering</strong> + time-delay compensation (GNSS-denied).",
    ],
  },
  {
    company: "Airbus Operations — Sogeclair Aerospace",
    role: "Aerospace Configuration Management",
    location: "Seville, Spain",
    period: "Jul 2023 — Dec 2023",
    initials: "AO",
    current: false,
    bullets: [
      "Full <strong class=\"font-bold text-flame-500\">change-process lifecycle</strong>: A320/A330/A340/A350.",
      "TRS/SubTRS coordinator: Wing, Fuel, Auto-flight, Surveillance.",
      "Organised: CRRs, Kick-off, Maturity &amp; Decision Boards.",
    ],
  },
];

export const projects = [
  {
    title: "Eurofighter Comms Integration",
    org: "Airbus Defence & Space",
    period: "2025 — present",
    tag: "Industry",
    image: "/images/IMG_1691.jpeg",
    featured: true,
    bullets: [
      "Integration of all Eurofighter comms systems.",
      "Data Link ownership (MIDS, VMF, CESMO, JREAP).",
      "Level-2 design — requirements, interfaces, protocols.",
      "DOORS traceability & hazard analysis.",
    ],
  },
  {
    title: "SWAT-SHOAL · UUV Swarm GNC",
    org: "SENER Aerospace & Defence",
    period: "2024 — 2025",
    tag: "Industry",
    image: "/images/swatshoal.png",
    featured: true,
    bullets: [
      "Swarm formation control for cooperative UUVs.",
      "Collision avoidance: Cost Function & Potential Fields.",
      "Swarm reconfiguration in obstacle navigation.",
      "Task allocation, battery-aware homing.",
    ],
  },
  {
    title: "NEO Mission — Asteroid Rendezvous",
    org: "Embry-Riddle",
    period: "2022 — 2023",
    tag: "Academic",
    image: "/images/NEO.png",
    featured: true,
    bullets: [
      "Mission to locate & visit a Near-Earth Object.",
      "MATLAB ΔV optimisation.",
      "NASA GMAT transfer, rendezvous & return sim.",
    ],
  },
  {
    title: "Satellite Attitude Controller",
    org: "Embry-Riddle",
    period: "2022",
    tag: "Academic",
    image: "",
    featured: false,
    bullets: [
      "MATLAB/SIMULINK spacecraft attitude controller.",
      "Optimal control — torque minimisation.",
      "Kalman filter bank for sensor-noise reduction.",
    ],
  },
  {
    title: "Adaptive Vibration Controller",
    org: "Embry-Riddle",
    period: "2022",
    tag: "Academic",
    image: "",
    featured: false,
    bullets: [
      "Modelled non-linear cyclic telemetry vibrations.",
      "Adaptive SIMULINK controller for mitigation.",
    ],
  },
  {
    title: "GEPETO Rover",
    org: "Embry-Riddle",
    period: "2020",
    tag: "Academic",
    image: "/images/GEPETO.png",
    featured: false,
    bullets: [
      "Team-built rover, 100 km telemetry relay.",
      "Telemetry subsystem: MATLAB + LabJack.",
      "CATIA V5 — frame, wheels, solar, suspension.",
    ],
  },
  {
    title: "JBS Rover",
    org: "Embry-Riddle",
    period: "2019 — 2020",
    tag: "Academic",
    image: "/images/JBS Rover.jpg",
    featured: false,
    bullets: [
      "Collaborative rover design for desert terrain trials.",
      "Owned structural calculations and CAD deliverables.",
    ],
  },
  {
    title: "Spacesuit Dust Mitigation",
    org: "Embry-Riddle",
    period: "2019",
    tag: "Academic",
    image: "/images/DustBustersLOGONewwithdots (1).png",
    featured: false,
    bullets: [
      "Active system for lunar dust on spacesuits.",
      "Team design, build and test.",
    ],
  },
];

export const tools = [
  "MATLAB",
  "SIMULINK",
  "GMAT (NASA)",
  "CATIA V5",
  "ANSYS",
  "NASTRAN",
  "VHDL",
  "LabView",
  "DOORS",
];

export const expertise = [
  "Spacecraft Dynamics & Controls",
  "Advanced Orbital Mechanics",
  "Attitude Determination & Control",
  "Kalman Filtering",
  "Linear & Nonlinear System Analysis",
  "Adaptive Control of AE Structures",
  "Closed-Loop Control Design",
  "Discrete Control Theory",
  "GNC Algorithm Design",
  "Modern Control Theory",
  "Systems Engineering",
  "Data Acquisition",
];

export type LanguageLevel = 1 | 2 | 3 | 4 | 5;
export const languages: { name: string; level: LanguageLevel; label: string }[] = [
  { name: "Spanish", level: 5, label: "Native" },
  { name: "English", level: 5, label: "Native" },
  { name: "French", level: 4, label: "Fluent" },
  { name: "Portuguese", level: 4, label: "Fluent" },
  { name: "German", level: 3, label: "Intermediate" },
];

// Top 3 featured awards get hero treatment; the rest go into the compact list.
export const awardsFeatured = [
  { year: "2021", title: "Top Student Scholar Award", issuer: "Embry-Riddle Aeronautical University" },
  { year: "2021", title: "Outstanding AE Graduate", issuer: "Embry-Riddle Aeronautical University" },
  { year: "2019 — 2023", title: "Top 10 NAIA Daktronics Scholar-Athlete", issuer: "NAIA" },
];

export const awardsRest = [
  { year: "2021", title: "Best AE Undergraduate Student", issuer: "Embry-Riddle Aeronautical University" },
  { year: "2017 — 2023", title: "Presidential Scholarship", issuer: "Embry-Riddle Aeronautical University" },
  { year: "2017 — 2023", title: "Academic Scholarship", issuer: "Embry-Riddle Aeronautical University" },
  { year: "2017 — 2023", title: "Soccer Scholarship", issuer: "Embry-Riddle Aeronautical University" },
  { year: "2017 — 2023", title: "Dean's List (every semester)", issuer: "Embry-Riddle Aeronautical University" },
];

export const honors = [
  { year: "2021 — Present", title: "Phi Kappa Phi Honor Society", org: "Embry-Riddle Aeronautical University" },
  { year: "2019 — Present", title: "Tau Beta Pi — Engineering Honor Society", org: "Embry-Riddle Aeronautical University" },
  { year: "2018 — Present", title: "Sigma Gamma Tau — Aerospace Honor Society", org: "Embry-Riddle Aeronautical University" },
  { year: "2017 — 2023", title: "Captain — Men's Soccer Team", org: "Embry-Riddle Aeronautical University" },
  { year: "2019 — 2023", title: "Public Relations — Student-Athlete Advisory Committee", org: "Embry-Riddle Aeronautical University" },
  { year: "2021 — 2023", title: "Graduate Teacher Assistant", org: "Embry-Riddle Aeronautical University" },
];

// Media — replace with real content once URLs are confirmed.
export const media = [
  {
    platform: "Research",
    title: "UUV Autonomous Obstacle Avoidance Algorithm",
    href: "https://www.tiktok.com/@sergiomonteiro",
    cover: "/images/swarm-ezgif.com-crop.gif",
    kind: "video",
  },
  {
    platform: "LinkedIn",
    title: "Inside the Eurofighter's avionics: what actually happens on a change",
    href: "https://www.linkedin.com/in/sergiomonteirog/",
    cover: "/images/IMG_1691.jpeg",
    kind: "article",
  },
  {
    platform: "YouTube",
    title: "Kalman filters, in 90 seconds",
    href: "https://www.youtube.com/@SergioMonteiroAero",
    cover: "/images/GEPETO.png",
    kind: "video",
  },
];

export type SocialLink = {
  label: string;
  href: string;
  handle?: string;
  icon: "linkedin" | "tiktok" | "instagram" | "youtube" | "email" | "cv" | "github";
  external?: boolean;
};

export const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sergiomonteirog/", handle: "in/sergiomonteirog", icon: "linkedin", external: true },
  { label: "TikTok", href: "https://www.tiktok.com/@sergioomonteiroo0", handle: "@sergioomonteiroo0", icon: "tiktok", external: true },
  { label: "Instagram", href: "https://www.instagram.com/sergioomonteiroo/", handle: "@sergioomonteiroo", icon: "instagram", external: true },
  { label: "YouTube", href: "https://www.youtube.com/@SergioMonteiroAero", handle: "@SergioMonteiroAero", icon: "youtube", external: true },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email, icon: "email" },
  { label: "Curriculum Vitae", href: "/cv.pdf", handle: "Download PDF", icon: "cv" },
];

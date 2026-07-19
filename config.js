/* ============================================================
   JK MOTION — SITE CONFIG
   Edit everything here. You don't need to touch any other file
   to update your name, bio, links, colors or projects.
   ============================================================ */

const SITE = {
  name: "Jason Knoetze",
  brand: "JK Motion",
  role: "Motion & Graphic Designer",
  tagline: "I make things move.",
  location: "Stellenbosch, South Africa",
  email: "hello@jkmotion.org",
  bio: `Multidisciplinary motion and graphic designer based in Stellenbosch,
  South Africa. I take brands from static to kinetic — title sequences,
  animated identities, explainer GIFs and everything in between. If it
  can move, I probably want to animate it.`,
  tools: [
    "After Effects", "Illustrator", "Photoshop",
    "Premiere Pro", "Blender", "Figma"
  ],
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jason-knoetze-855219217" },
    { label: "Instagram", url: "https://www.instagram.com/adventure_lies_within/" },
    { label: "YouTube", url: "https://www.youtube.com/@jasonknoetze9800" },
    { label: "Facebook", url: "https://web.facebook.com/jason.knoetze.9/" }
  ]
};

/* Accent colors — used in rotation across project cards & UI accents.
   Swap any hex to instantly re-theme the whole site. */
const PALETTE = ["pink", "yellow", "blue", "mint"];

/* PROJECTS
   -----------------------------------------------------------
   slug      — used in the URL: project.html?p=slug
   title     — project name
   category  — short label shown on cards (e.g. "Brand Film")
   year      — production year
   tools     — array of software/skills used
   summary   — one-line teaser for the grid card
   description — longer paragraph for the project page
   image     — path to a thumbnail image/video poster. Leave as ""
               to use an auto-generated color placeholder instead.
   video     — optional path to an mp4/embed URL for the project page
   accent    — one of PALETTE, or leave "" to auto-assign
   ----------------------------------------------------------- */
const PROJECTS = [
  {
    slug: "bmw-personal-project",
    title: "BMW — Personal Project",
    category: "3D / Product Animation",
    year: "2023",
    tools: ["Cinema 4D", "After Effects"],
    summary: "A self-initiated product film exploring reflective surfaces and studio lighting.",
    description: "This was a personal project, trying a couple of things with movement. The emphasis was also on creating a professional logo animation that finishes off the short video project.",
    image: "", video: "assets/video/bmw-m-power.mp4",
    embed: "",
    gallery: [
      "assets/images/bmw/bmw-01.png",
      "assets/images/bmw/bmw-02.png",
      "assets/images/bmw/bmw-03.png"
    ],
    accent: ""
  },
  {
    slug: "garmin-personal-project",
    title: "Garmin — Personal Project",
    category: "3D / Product Animation",
    year: "2023",
    tools: ["Cinema 4D", "Octane"],
    summary: "Hero product renders and a short animated spot for a Garmin device concept.",
    description: "A self-directed product piece for a Garmin device, focused on clean turntable animation and tactile material work.",
    image: "", video: "", accent: ""
  },
  {
    slug: "kt-leather",
    title: "KT Leather",
    category: "Brand Animation",
    year: "2022",
    tools: ["After Effects", "Illustrator"],
    summary: "Warm, tactile brand motion for a leather goods label.",
    description: "Brand animation work for KT Leather — translating the tactility of their craft into a warm, considered motion language.",
    image: "", video: "", accent: ""
  },
  {
    slug: "lhb",
    title: "LHB",
    category: "Motion Identity",
    year: "2022",
    tools: ["After Effects"],
    summary: "A kinetic identity system built for flexibility across formats.",
    description: "An animated identity system for LHB, designed to flex cleanly across social, web and broadcast formats.",
    image: "", video: "", accent: ""
  },
  {
    slug: "easter-story",
    title: "Easter Story",
    category: "Animated Short",
    year: "2021",
    tools: ["After Effects", "Illustrator"],
    summary: "A short narrative piece animated for an Easter campaign.",
    description: "A short-form animated retelling produced for an Easter campaign, blending flat illustration with character animation.",
    image: "", video: "", accent: ""
  },
  {
    slug: "dont-be-a-bum",
    title: "Don't Be a Bum",
    category: "Campaign Animation",
    year: "2021",
    tools: ["After Effects"],
    summary: "Punchy, high-energy motion graphics for a social awareness campaign.",
    description: "Fast-cut, high-contrast motion graphics produced for a social awareness campaign built to grab attention on social feeds.",
    image: "", video: "", accent: ""
  },
  {
    slug: "digemy",
    title: "Digemy",
    category: "Explainer GIFs",
    year: "2020",
    tools: ["After Effects", "Photoshop"],
    summary: "A library of GIF explainers for an online learning platform.",
    description: "An ongoing library of short explainer GIFs for Digemy, an online learning platform — designed for clarity at a glance.",
    image: "", video: "", accent: ""
  },
  {
    slug: "mandalorian",
    title: "Mandalorian",
    category: "Fan Animation",
    year: "2020",
    tools: ["Cinema 4D", "After Effects"],
    summary: "A fan-made title sequence tribute in 3D.",
    description: "A personal tribute piece — a 3D title sequence exploring the world and material language of The Mandalorian.",
    image: "", video: "", accent: ""
  },
  {
    slug: "cd",
    title: "CD",
    category: "Motion Graphics",
    year: "2020",
    tools: ["After Effects"],
    summary: "Short-form motion graphics study.",
    description: "A motion graphics study focused on typographic rhythm and timing.",
    image: "", video: "", accent: ""
  },
  {
    slug: "ch",
    title: "CH",
    category: "Motion Graphics",
    year: "2019",
    tools: ["After Effects", "Illustrator"],
    summary: "Graphic motion study built around bold color blocking.",
    description: "A motion graphics study built around bold color blocking and confident type transitions.",
    image: "", video: "", accent: ""
  },
  {
    slug: "collaboritt",
    title: "Collaboritt",
    category: "Brand Animation",
    year: "2019",
    tools: ["After Effects", "Illustrator"],
    summary: "Animated brand assets for a collaboration-focused startup.",
    description: "Animated brand assets and social templates produced for the Collaboritt platform launch.",
    image: "", video: "", accent: ""
  },
  {
    slug: "lighthouse-proj",
    title: "Lighthouse Project",
    category: "Animated Short",
    year: "2019",
    tools: ["After Effects", "Illustrator"],
    summary: "An atmospheric short built around a coastal lighthouse scene.",
    description: "An atmospheric animated short built around a coastal lighthouse scene — a study in mood, light and parallax.",
    image: "", video: "", accent: ""
  },
  {
    slug: "oa",
    title: "OA",
    category: "Motion Graphics",
    year: "2019",
    tools: ["After Effects"],
    summary: "Abstract motion study in shape and rhythm.",
    description: "An abstract motion graphics study exploring shape, rhythm and negative space.",
    image: "", video: "", accent: ""
  },
  {
    slug: "world-forever-fund",
    title: "World Forever Fund",
    category: "Campaign Animation",
    year: "2018",
    tools: ["After Effects", "Illustrator"],
    summary: "Motion graphics for a nonprofit awareness campaign.",
    description: "Animated assets produced for the World Forever Fund's awareness campaign, designed for accessibility and impact.",
    image: "", video: "", accent: ""
  },
  {
    slug: "school-of-motion",
    title: "School of Motion",
    category: "Coursework",
    year: "2018",
    tools: ["After Effects"],
    summary: "Selected exercises from motion design training.",
    description: "A selection of exercises and final projects completed during motion design training with School of Motion.",
    image: "", video: "", accent: ""
  }
];

/* Auto-assign accent colors in rotation if not explicitly set. */
PROJECTS.forEach((p, i) => { if (!p.accent) p.accent = PALETTE[i % PALETTE.length]; });

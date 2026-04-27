const GAMES = [
  {
    slug: "tap-tap-seed",
    title: "Tap Tap Seed",
    shortTitle: "TTS",
    image: "images/tap-tap-seed.jpg",
    thumbGradient: "linear-gradient(135deg, #d8ecf9 0%, #9bbbd5 100%)",
    statusType: "released",
    statusLabel: "Released",
    statusDescription: "Currently published and available as a released project.",
    shortDescription: "A casual clicker game with satisfying progression and polished presentation.",
    description: "A casual mobile game focused on clean progression, satisfying tapping feedback, and a pleasant visual style.",
    longDescription: "Tap Tap Seed is a casual mobile project built around satisfying interaction, readable UI, and a simple but rewarding gameplay loop.",
    tags: ["Casual", "Mobile", "Unity"],
    platforms: ["Google Play"],
    publisherNames: [
      { store: "Google Play", name: "Grib Games" }
    ],
    googlePlayUrl: "#",
    appStoreUrl: "",
    privacyUrl: "privacy-tap-tap-seed.html"
  },
  {
    slug: "dot-drop",
    title: "Dot Drop",
    shortTitle: "DD",
    image: "images/dot-drop.jpg",
    thumbGradient: "linear-gradient(135deg, #f6d469 0%, #f1a226 100%)",
    statusType: "released",
    statusLabel: "Released",
    statusDescription: "Currently published and available as a released project.",
    shortDescription: "A focused arcade game built around timing, precision, and replayability.",
    description: "An arcade-style game centered on quick reactions, precision gameplay, and repeatable high-score runs.",
    longDescription: "Dot Drop is built around timing and consistency, with strong moment-to-moment feel and fast replayable sessions.",
    tags: ["Arcade", "Precision", "Replayable"],
    platforms: ["Google Play"],
    publisherNames: [
      { store: "Google Play", name: "Grib Games" }
    ],
    googlePlayUrl: "#",
    appStoreUrl: "",
    privacyUrl: "privacy-dot-drop.html"
  },
  {
    slug: "anti-capitalista",
    title: "Anti-Capitalista",
    shortTitle: "AC",
    image: "images/anti-capitalista.jpg",
    thumbGradient: "linear-gradient(135deg, #dcdcdc 0%, #b8b8b8 100%)",
    statusType: "released",
    statusLabel: "Released",
    statusDescription: "Currently published and available as a released project.",
    shortDescription: "A released project published on Google Play.",
    description: "A released mobile project currently available through Google Play.",
    longDescription: "Anti-Capitalista is one of the published Google Play releases included on this developer site as part of the full project catalog.",
    tags: ["Mobile", "Published"],
    platforms: ["Google Play"],
    publisherNames: [
      { store: "Google Play", name: "Grib Games" }
    ],
    googlePlayUrl: "#",
    appStoreUrl: "",
    privacyUrl: "privacy-anti-capitalista.html"
  },
  {
    slug: "fingertip-mahjong",
    title: "Fingertip Mahjong",
    shortTitle: "FM",
    image: "images/fingertip-mahjong.jpg",
    thumbGradient: "linear-gradient(135deg, #1c8b5f 0%, #7fd6b3 100%)",
    statusType: "released",
    statusLabel: "Released",
    statusDescription: "Currently published and available as a released project.",
    shortDescription: "A mahjong-themed mobile title released on Google Play.",
    description: "A mobile mahjong project designed for quick interaction and approachable play sessions.",
    longDescription: "Fingertip Mahjong is part of the published catalog on Google Play.",
    tags: ["Mahjong", "Mobile", "Puzzle"],
    platforms: ["Google Play"],
    publisherNames: [
      { store: "Google Play", name: "Grib Games" }
    ],
    googlePlayUrl: "#",
    appStoreUrl: "",
    privacyUrl: "privacy-fingertip-mahjong.html"
  },
  {
    slug: "romashka-daisy",
    title: "Romashka (Daisy)",
    shortTitle: "RD",
    image: "images/romashka-daisy.jpg",
    thumbGradient: "linear-gradient(135deg, #faf1b8 0%, #ffffff 100%)",
    statusType: "released",
    statusLabel: "Released",
    statusDescription: "Currently published and available as a released project.",
    shortDescription: "A published mobile project available on Google Play.",
    description: "A released mobile title that forms part of the broader published portfolio.",
    longDescription: "Romashka (Daisy) is part of the active released portfolio.",
    tags: ["Mobile", "Published"],
    platforms: ["Google Play"],
    publisherNames: [
      { store: "Google Play", name: "Grib Games" }
    ],
    googlePlayUrl: "#",
    appStoreUrl: "",
    privacyUrl: "privacy-romashka-daisy.html"
  },
  {
    slug: "slide-match",
    title: "Slide Match",
    shortTitle: "SM",
    image: "images/slide-match.jpg",
    thumbGradient: "linear-gradient(135deg, #233d83 0%, #8b53ff 100%)",
    statusType: "released",
    statusLabel: "Released",
    statusDescription: "Currently published and available as a released project.",
    shortDescription: "A released puzzle-style title on Google Play.",
    description: "A mobile matching project with a simple visual identity and quick-access gameplay structure.",
    longDescription: "Slide Match belongs to the published catalog and reflects an interest in understandable mechanics and accessible mobile structure.",
    tags: ["Puzzle", "Mobile", "Match"],
    platforms: ["Google Play"],
    publisherNames: [
      { store: "Google Play", name: "Grib Games" }
    ],
    googlePlayUrl: "#",
    appStoreUrl: "",
    privacyUrl: "privacy-slide-match.html"
  },
  {
    slug: "tuco-plans",
    title: "Tuco Plans: Delay Tasks Easily",
    shortTitle: "TP",
    image: "images/tuco-plans.jpg",
    thumbGradient: "linear-gradient(135deg, #f3e38c 0%, #b9a555 100%)",
    statusType: "released",
    statusLabel: "Released",
    statusDescription: "Currently published and available as a released project.",
    shortDescription: "A published productivity-oriented mobile app on Google Play.",
    description: "A released app project focused on simple task-related use cases.",
    longDescription: "Tuco Plans expands the portfolio beyond games and demonstrates practical mobile product work.",
    tags: ["App", "Mobile", "Utility"],
    platforms: ["Google Play"],
    publisherNames: [
      { store: "Google Play", name: "Grib Games" }
    ],
    googlePlayUrl: "#",
    appStoreUrl: "",
    privacyUrl: "privacy-tuco-plans.html"
  },
  {
    slug: "pickle-clicker",
    title: "Pickle Clicker",
    shortTitle: "PC",
    image: "images/pickle-clicker.jpg",
    thumbGradient: "linear-gradient(135deg, #a7d672 0%, #5e9b3d 100%)",
    statusType: "development",
    statusLabel: "In Development",
    statusDescription: "Currently in development and/or closed testing.",
    shortDescription: "An in-development clicker project currently in closed testing.",
    description: "A clicker-style project currently in development, with a dedicated page already available on the site.",
    longDescription: "Pickle Clicker is currently one of the active in-development projects and deserves a dedicated page on the site even before full release.",
    tags: ["Clicker", "Idle", "In Development"],
    platforms: ["Google Play"],
    publisherNames: [
      { store: "Google Play", name: "Grib Games" }
    ],
    googlePlayUrl: "",
    appStoreUrl: "",
    privacyUrl: "privacy-pickle-clicker.html"
  },
  {
    slug: "not-today-uni",
    title: "Not today, Uni",
    shortTitle: "NU",
    image: "images/not-today-uni.jpg",
    thumbGradient: "linear-gradient(135deg, #e8e8e8 0%, #c7c7c7 100%)",
    statusType: "development",
    statusLabel: "Draft",
    statusDescription: "Currently in draft stage and not yet publicly released.",
    shortDescription: "A draft-stage project currently not released.",
    description: "A project in draft form and still early in development.",
    longDescription: "Not today, Uni is currently at a draft stage and shows the broader creative direction of ongoing development.",
    tags: ["Prototype", "Draft", "In Development"],
    platforms: ["Google Play"],
    publisherNames: [
      { store: "Google Play", name: "Grib Games" }
    ],
    googlePlayUrl: "",
    appStoreUrl: "",
    privacyUrl: "privacy-not-today-uni.html"
  },
  {
    slug: "gomoku-capture-go",
    title: "Gomoku & Capture Go",
    shortTitle: "GCG",
    image: "images/gomoku-capture-go.jpg",
    thumbGradient: "linear-gradient(135deg, #f0f0f0 0%, #bdbdbd 100%)",
    statusType: "development",
    statusLabel: "In Development",
    statusDescription: "Currently in development for the App Store.",
    shortDescription: "An upcoming App Store project currently in development.",
    description: "A strategy board-style project currently in development for the App Store.",
    longDescription: "Gomoku & Capture Go is currently in development for the App Store under the developer name Yehor Ivanov.",
    tags: ["Board Game", "Strategy", "App Store"],
    platforms: ["App Store"],
    publisherNames: [
      { store: "App Store", name: "Yehor Ivanov" }
    ],
    googlePlayUrl: "",
    appStoreUrl: "",
    privacyUrl: "privacy-gomoku-capture-go.html"
  }
];
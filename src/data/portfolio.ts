import {
  Briefcase,
  Building2,
  Coffee,
  Compass,
  LayoutDashboard,
  Leaf,
  Palette,
  Rocket,
  Scale,
  type LucideIcon,
} from "lucide-react";

export interface SiteMock {
  siteName: string;
  icon: LucideIcon;
  navLinks: string[];
  headline: string;
  tagline?: string;
  cta: string;
  bg: string;
  text: string;
  buttonClass: string;
}

export interface FeaturedProject {
  name: string;
  type: string;
  description: string;
  mock: SiteMock;
}

export const categories = ["All", "Business", "E-Commerce", "Landing Pages", "Portfolio", "Other"] as const;
export type Category = (typeof categories)[number];

export interface Project {
  name: string;
  category: Exclude<Category, "All">;
  mock: SiteMock;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Meridian Architecture",
    type: "Corporate website",
    description:
      "A dark, image-led portfolio for a boutique architecture practice — built to feel as precise as the buildings it showcases.",
    mock: {
      siteName: "Meridian",
      icon: Building2,
      navLinks: ["Home", "Projects", "About", "Contact"],
      headline: "Building Dreams Into Reality",
      cta: "View Projects",
      bg: "#1b2430",
      text: "text-white",
      buttonClass: "bg-white text-[#1b2430]",
    },
  },
  {
    name: "Cinder Roasters",
    type: "E-commerce website",
    description:
      "A warm, conversion-focused storefront for a small-batch coffee roaster, wired for stock and fulfilment.",
    mock: {
      siteName: "Cinder",
      icon: Coffee,
      navLinks: ["Shop", "Menu", "About", "Contact"],
      headline: "Coffee, Roasted With Care",
      tagline: "Small-Batch • Fair Trade • Fresh",
      cta: "Shop Now",
      bg: "#5a3620",
      text: "text-[#fbe9d8]",
      buttonClass: "bg-[#e8a33d] text-[#2b1a10]",
    },
  },
  {
    name: "Hartwell & Co.",
    type: "Law firm website",
    description:
      "A trustworthy, authoritative site for a mid-size law practice. Clear structure, strong typography and easy contact paths.",
    mock: {
      siteName: "Hartwell & Co.",
      icon: Scale,
      navLinks: ["Home", "Practice", "Team", "Contact"],
      headline: "Trusted Counsel. Proven Results.",
      cta: "Book Consultation",
      bg: "#1a222c",
      text: "text-white",
      buttonClass: "border border-white/70 bg-transparent text-white",
    },
  },
];

export const allProjects: Project[] = [
  {
    name: "Northwind Capital",
    category: "Business",
    mock: {
      siteName: "Northwind",
      icon: Briefcase,
      navLinks: ["Home", "Services", "About", "Contact"],
      headline: "Capital, Managed Wisely",
      cta: "Get Started",
      bg: "#1d2a44",
      text: "text-white",
      buttonClass: "bg-white text-[#151c2c]",
    },
  },
  {
    name: "Verde Organics",
    category: "E-Commerce",
    mock: {
      siteName: "Verde",
      icon: Leaf,
      navLinks: ["Shop", "About", "Contact"],
      headline: "Nature's Best, Delivered",
      cta: "Shop Now",
      bg: "#2f4a24",
      text: "text-[#eaf3e2]",
      buttonClass: "bg-[#eaf3e2] text-[#1f2e1a]",
    },
  },
  {
    name: "Ascent Coaching",
    category: "Landing Pages",
    mock: {
      siteName: "Ascent",
      icon: Rocket,
      navLinks: ["Program", "Results", "Join"],
      headline: "Push Your Limits",
      cta: "Join Now",
      bg: "#5a2416",
      text: "text-white",
      buttonClass: "bg-white text-[#2b1210]",
    },
  },
  {
    name: "Lucia Studio",
    category: "Portfolio",
    mock: {
      siteName: "Lucia",
      icon: Palette,
      navLinks: ["Work", "About", "Contact"],
      headline: "Creative Digital Experiences",
      cta: "See Work",
      bg: "#4a1f45",
      text: "text-white",
      buttonClass: "bg-white text-[#2a1330]",
    },
  },
  {
    name: "Trailhead Adventures",
    category: "Other",
    mock: {
      siteName: "Trailhead",
      icon: Compass,
      navLinks: ["Tours", "About", "Book"],
      headline: "Explore The Untamed",
      cta: "Book a Trip",
      bg: "#17494b",
      text: "text-white",
      buttonClass: "bg-white text-[#0e2b2c]",
    },
  },
  {
    name: "Ledger Systems",
    category: "Business",
    mock: {
      siteName: "Ledger",
      icon: LayoutDashboard,
      navLinks: ["Product", "Pricing", "Login"],
      headline: "Manage Your Business, Smarter",
      cta: "Get Started",
      bg: "#1e2330",
      text: "text-white",
      buttonClass: "bg-white text-[#11141a]",
    },
  },
];

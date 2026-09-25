export const SITE = {
  name: "Prudence Services",
  email: "hello@prudenceservices.com",
  phone: "+1 (555) 019-2840",
  hours: "Mon–Fri, 9:00–18:00",
} as const;

export type ServiceId = "finance" | "procurement" | "erp" | "web" | "ecommerce" | "support";

export interface Service {
  id: ServiceId;
  n: string;
  name: string;
  short: string;
  desc: string;
  points: string[];
  group: "business" | "technology";
}

export const services: Service[] = [
  {
    id: "finance",
    n: "01",
    name: "Finance & bookkeeping",
    short: "Books you can defend.",
    desc: "Accurate, current books and clear management reporting — so decisions are made on facts, and month-end stops being an event.",
    points: [
      "Bookkeeping & reconciliations",
      "Management accounts & reporting",
      "Cash-flow visibility",
      "Month-end close",
    ],
    group: "business",
  },
  {
    id: "procurement",
    n: "02",
    name: "Procurement",
    short: "Buy better. Spend less.",
    desc: "Sourcing, supplier management and purchasing workflows that bring control — and better terms — to everything the business buys.",
    points: [
      "Sourcing & supplier selection",
      "Purchasing workflows & approvals",
      "Cost control",
      "Supplier performance",
    ],
    group: "business",
  },
  {
    id: "erp",
    n: "03",
    name: "Finance & ERP systems",
    short: "One system of record.",
    desc: "We select, configure and implement the systems that connect finance, purchasing and inventory into a single, reliable view of the business.",
    points: [
      "ERP selection & implementation",
      "Workflow automation",
      "Systems integration",
      "Training & handover",
    ],
    group: "technology",
  },
  {
    id: "web",
    n: "04",
    name: "Website development",
    short: "Credible from the first click.",
    desc: "Fast, considered websites that explain the business clearly and make it easy for the right people to get in touch.",
    points: [
      "Design & build",
      "UX / UI implementation",
      "Responsive, accessible builds",
      "Performance & SEO foundations",
    ],
    group: "technology",
  },
  {
    id: "ecommerce",
    n: "05",
    name: "E-commerce development",
    short: "Stores that sell.",
    desc: "Storefronts, checkout and payments built to convert — and wired into the finance and inventory systems running behind them.",
    points: [
      "Storefront design & build",
      "Checkout & payments",
      "Inventory & finance integration",
      "Launch & migration",
    ],
    group: "technology",
  },
  {
    id: "support",
    n: "06",
    name: "Ongoing e-commerce support",
    short: "Someone always on it.",
    desc: "Once you're live, we stay: fixes, improvements, campaigns and peak-season readiness — handled by people who already know your store.",
    points: [
      "Maintenance & monitoring",
      "Improvements & experiments",
      "Promotions & seasonal readiness",
      "Priority support",
    ],
    group: "technology",
  },
];

/** The journey of a single order — used by the scroll story. */
export interface OrderStep {
  serviceId: ServiceId;
  tag: string;
  title: string;
  text: string;
}

export const orderSteps: OrderStep[] = [
  {
    serviceId: "web",
    tag: "Website development",
    title: "It starts with a page that earns trust.",
    text: "A customer arrives. The site loads fast, explains the business in a sentence and makes the next step obvious.",
  },
  {
    serviceId: "ecommerce",
    title: "Checkout that stays out of the way.",
    tag: "E-commerce development",
    text: "They pay. Payment, tax and shipping run in one clean flow — and the order is passed on without anyone re-typing it.",
  },
  {
    serviceId: "erp",
    tag: "Finance & ERP systems",
    title: "The system already knows.",
    text: "The order lands in the system of record. Stock updates, an invoice is raised, and nobody touches a spreadsheet.",
  },
  {
    serviceId: "procurement",
    tag: "Procurement",
    title: "Stock never quietly runs dry.",
    text: "Inventory crosses the reorder line, so a purchase order goes to the right supplier, at the agreed price.",
  },
  {
    serviceId: "finance",
    tag: "Finance & bookkeeping",
    title: "The books close themselves. Almost.",
    text: "Revenue, cost and tax are posted and reconciled as they happen. Month-end becomes a check, not a project.",
  },
  {
    serviceId: "support",
    tag: "Ongoing e-commerce support",
    title: "Then we keep it running.",
    text: "A rule changes, a promotion launches, a peak arrives. The team that built the store is already on it.",
  },
];

export const principles = [
  {
    n: "01",
    title: "One desk, not six vendors.",
    text: "Finance, procurement, systems and web under one roof means nothing falls between suppliers — and one team is accountable for the outcome.",
  },
  {
    n: "02",
    title: "Built around your business.",
    text: "We configure to the way you actually work. No template forced on you, no process bent to fit a tool.",
  },
  {
    n: "03",
    title: "Numbers you can defend.",
    text: "Clean books, reconciled systems and clear reporting — the kind you can put in front of a lender, an investor or an auditor.",
  },
  {
    n: "04",
    title: "Plain talk, on schedule.",
    text: "Plain-English advice, a clear scope up front, and delivery dates we keep. No jargon to hide behind.",
  },
  {
    n: "05",
    title: "We stay after launch.",
    text: "Handover is a proper handover, and ongoing support is there whenever the business needs it.",
  },
];

export const testimonials = [
  {
    quote: "Prudence built us a site that finally feels as careful as our work.",
    name: "Elena Marsh",
    role: "Director, Meridian Architecture",
  },
  {
    quote:
      "Our enquiries doubled in the first quarter. The site finally matches the quality of our work.",
    name: "Marcus Delaney",
    role: "Founder, Northwind Capital",
  },
  {
    quote:
      "Calm, precise and easy to talk to. The clearest process I've worked through with any team.",
    name: "Sara Okafor",
    role: "Owner, The Ember Room",
  },
];

export const faqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "Growing businesses that need practical help across finance, procurement, systems or digital presence — from single-site companies to multi-team operations.",
  },
  {
    q: "Can I engage Prudence for just one service?",
    a: "Yes. Each service stands on its own. Many clients start with a single area, then add others once they see how the pieces connect.",
  },
  {
    q: "How does an engagement start?",
    a: "With a conversation. We discuss your goals, constraints and current situation, then scope the work and share a clear proposal before anything begins.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope. Focused pieces of work run a few weeks; systems implementations and multi-area programmes run longer. You get a timeline in the proposal.",
  },
  {
    q: "Do you provide support after delivery?",
    a: "Yes. Every engagement ends with a proper handover, and ongoing support is available for the areas we've worked on together.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is scoped per engagement after the first conversation, based on the work involved — no open-ended arrangements.",
  },
];

export const processSteps = [
  { n: "01", title: "Listen", text: "We start with your goals, your constraints and how the business actually runs today." },
  { n: "02", title: "Scope", text: "A clear proposal: what we'll do, what it takes, how long it runs and what it costs." },
  { n: "03", title: "Build", text: "We implement the systems, workflows and websites — with you in the room, not at arm's length." },
  { n: "04", title: "Hand over", text: "Proper training and documentation, so the business owns what we've built." },
  { n: "05", title: "Support", text: "We stay on hand as the business changes, for as long as it's useful." },
];

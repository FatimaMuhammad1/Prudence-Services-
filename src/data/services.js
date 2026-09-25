import {
  FiBriefcase,
  FiMonitor,
  FiDollarSign,
  FiDatabase,
  FiShoppingCart,
} from "react-icons/fi";

export const services = [
  {
    slug: "business-operations",
    icon: FiBriefcase,
    title: "Business Operations Management Consultancy",
    summary:
      "Practical guidance to streamline how your business runs, from day-to-day processes to long-term strategy.",
    description:
      "We work alongside your leadership team to understand how your business really operates, find where time and money are being lost, and build a realistic plan to fix it. No generic frameworks — just clear, actionable recommendations we help you carry out.",
    idealFor:
      "Owner-led and growing businesses that feel stretched, or that want to scale without adding chaos.",
    outcomes: ["Clearer, faster day-to-day processes", "Less wasted time and cost", "A practical roadmap your team can follow"],
    features: [
      "Operational reviews and process mapping",
      "Strategy, planning and goal setting",
      "Workflow improvement and automation opportunities",
      "Ongoing advisory and performance tracking",
    ],
  },
  {
    slug: "it-web-development",
    icon: FiMonitor,
    title: "IT & Web Development",
    summary:
      "Websites, e-commerce stores and custom software that give your business a strong online presence.",
    description:
      "From a professional company website to a full online store or an internal tool, we design and build reliable digital products around how your business actually works, then support them long after launch.",
    idealFor:
      "Businesses that need a professional online presence, an online store, or a tool to replace manual work.",
    outcomes: ["A site or system customers trust", "Fewer manual tasks for your team", "Reliable hosting and support"],
    features: [
      "Company websites and e-commerce stores",
      "Custom web applications and internal tools",
      "Hosting, security and technical support",
      "Ongoing maintenance and improvements",
    ],
  },
  {
    slug: "finance-bookkeeping",
    icon: FiDollarSign,
    title: "Finance & Bookkeeping",
    summary:
      "Accurate books and clear financial reporting, so you always know where your business stands.",
    description:
      "We keep your finances organised and up to date, so you can make decisions with confidence instead of guesswork. Our team handles the detail and explains the numbers in plain language.",
    idealFor:
      "Businesses that want accurate books, tidy records and a clear view of cash flow without hiring in-house.",
    outcomes: ["Up-to-date, accurate records", "Reports you can actually understand", "Confident budgeting decisions"],
    features: [
      "Day-to-day bookkeeping and reconciliations",
      "Monthly financial reports and summaries",
      "Budgeting, cash-flow tracking and forecasting",
      "Accounting software setup and clean-up",
    ],
  },
  {
    slug: "erp-systems",
    icon: FiDatabase,
    title: "ERP Systems",
    summary:
      "One connected system for inventory, sales, finance and operations, tailored to your business.",
    description:
      "We select, set up and customise ERP systems that bring your operations into one place, replacing scattered spreadsheets and disconnected tools with a single source of truth your whole team can rely on.",
    idealFor:
      "Businesses outgrowing spreadsheets, or juggling separate tools for stock, sales and accounts.",
    outcomes: ["One source of truth across teams", "Real-time visibility of operations", "Less double entry and fewer errors"],
    features: [
      "System selection and implementation",
      "Custom configuration and data migration",
      "Team training and documentation",
      "Support and continuous optimisation",
    ],
  },
  {
    slug: "procurement",
    icon: FiShoppingCart,
    title: "Procurement",
    summary:
      "Source better, spend smarter and build stronger supplier relationships.",
    description:
      "We help you buy what you need at the right price and quality, from finding and vetting suppliers to negotiating terms and putting a simple purchasing process in place.",
    idealFor:
      "Businesses that want better prices, dependable suppliers and a purchasing process that is under control.",
    outcomes: ["Lower purchasing costs", "Reliable, vetted suppliers", "Clear approval and spending controls"],
    features: [
      "Supplier sourcing and evaluation",
      "Negotiation and cost reduction",
      "Purchasing process design and controls",
      "Vendor performance monitoring",
    ],
  },
];

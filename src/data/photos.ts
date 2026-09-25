import finance from "../assets/hero-finance.jpg";
import procurement from "../assets/hero-procurement.jpg";
import operations from "../assets/hero-operations.jpg";
import workspace from "../assets/hero-workspace.jpg";
import retail from "../assets/industry-retail.jpg";
import logistics from "../assets/industry-logistics.jpg";
import consulting from "../assets/hero-consulting.jpg";
import partnership from "../assets/why-partnership.jpg";
import type { ServiceId } from "./site";

export type Pic = { src: string; alt: string; pos?: string };

export const servicePhotos: Record<ServiceId, Pic> = {
  finance: { src: finance, alt: "An accountant reconciling figures at a desk", pos: "50% 40%" },
  procurement: { src: procurement, alt: "A buyer checking stock on a warehouse aisle", pos: "40% 40%" },
  erp: { src: operations, alt: "Two colleagues reviewing a production schedule board", pos: "45% 40%" },
  web: { src: workspace, alt: "A laptop on a desk showing a website", pos: "50% 60%" },
  ecommerce: { src: retail, alt: "A shop counter with staff serving a customer", pos: "50% 50%" },
  support: { src: logistics, alt: "A logistics coordinator checking a delivery on a tablet", pos: "60% 50%" },
};

export const heroPhoto: Pic = { src: finance, alt: "An accountant reconciling figures at a desk", pos: "50% 30%" };

export const aboutPhotoA: Pic = {
  src: consulting,
  alt: "Three consultants reviewing documents together",
  pos: "50% 35%",
};
export const aboutPhotoB: Pic = { src: partnership, alt: "A warm handshake after a meeting", pos: "50% 45%" };
export const whyChoosePhoto: Pic = {
  src: procurement,
  alt: "A consultant pausing to think while reviewing stock",
  pos: "45% 30%",
};
export const testimonialPhoto: Pic = { src: retail, alt: "A warm, welcoming shop counter", pos: "45% 50%" };

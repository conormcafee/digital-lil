import { NavigationLink, Service } from "./types";

export const NAV_LINKS: NavigationLink[] = [
  { text: "About", url: "/about" },
  { text: "Services", url: "/services" },
  { text: "Get in Touch", url: "/get-in-touch" },
];

export const FOOTER_LINKS: NavigationLink[] = [
  {
    text: "Call us on +44 (0)79 6876 1869",
    url: "tel:+447968761869",
    icon: {
      url: "/svg/iconmark-02.svg",
      height: 60,
      width: 60,
    },
  },
  {
    text: "Email lisa@digitiallil.com",
    url: "mailto:lisa@digitiallil.com",
    icon: {
      url: "/svg/iconmark-01.svg",
      height: 60,
      width: 60,
    },
  },
];

export const SERVICES: Service[] = [
  {
    title: "Social Media Management",
    intro: "Let us manage, run & build your brand voice and awareness.",
    icon: {
      url: "/svg/iconmark-01.svg",
      height: 60,
      width: 60,
    },
  },
  {
    title: "Meta Platform Paid Ads",
    intro:
      "Target highly specific, pre-defined audiences anywhere in the world.",
    icon: {
      url: "/svg/iconmark-02.svg",
      height: 60,
      width: 60,
    },
  },
  {
    title: "Social media training",
    intro: "Let us manage, run & build your brand voice and awareness.",
    icon: {
      url: "/svg/iconmark-03.svg",
      height: 60,
      width: 60,
    },
  },
  {
    title: "Email Marketing",
    intro: "Reach the audience who have already engaged with your brand.",
    icon: {
      url: "/svg/iconmark-04.svg",
      height: 60,
      width: 60,
    },
  },
];

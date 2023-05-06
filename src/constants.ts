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
    slug: "social-media-management",
    title: "Social Media Management",
    intro: "Let us manage, run & build your brand voice and awareness.",
    icon: {
      url: "/svg/iconmark-01.svg",
      height: 60,
      width: 60,
    },
    body: `Let us take the stress out of your Social Media Management,  by taking over the set-up (if required) and the day to day running of your platforms. This includes creating posts and stories, writing captions, advance scheduling of posts, and engaging with your audience.`,
    features: [
      {
        title: "Set up",
        body: `If required, we will  set up the social media accounts best suited for your business.`,
      },
      {
        title: "Day to day running",
        body: `Let’s us take over the day to day running of your social platforms to allow you to focus fully on your business.`,
      },
      {
        title: "Content creation",
        body: `Creating images and video / reels for posts, and also longer form content creation such as Blog Writing for your Online Blog or social media platforms`,
      },
    ],
  },
  {
    slug: "meta-platform-paid-ads",
    title: "Meta Platform Paid Ads",
    intro:
      "Target highly specific, pre-defined audiences anywhere in the world.",
    icon: {
      url: "/svg/iconmark-02.svg",
      height: 60,
      width: 60,
    },
    body: "",
    features: [],
  },
  {
    slug: "social-media-training",
    title: "Social media training",
    intro: "Let us manage, run & build your brand voice and awareness.",
    icon: {
      url: "/svg/iconmark-03.svg",
      height: 60,
      width: 60,
    },
    body: "",
    features: [],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    intro: "Reach the audience who have already engaged with your brand.",
    icon: {
      url: "/svg/iconmark-04.svg",
      height: 60,
      width: 60,
    },
    body: "",
    features: [],
  },
];

import { Service } from "@/types";

export const SERVICES_PAGE = {
  name: "Services",
  body: `Our comprehensive range of services can help grow your brand
  online. Services include Social Media Management, Meta Platform
  Paid Ads, and Social Media Training. Our experts
  develop customized strategies to connect with your audience,
  increase online presence, and boost revenue. Trust us to take your
  brand to the next level.`,
};

export const SERVICES: Service[] = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
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
    icon: {
      url: "/svg/iconmark-02.svg",
      height: 60,
      width: 60,
    },
    body: `Boost your social media strategy with highly targeted Paid Ads. As organic reach declines, Paid Ads are crucial. We set up and run your ads for results and ROI. We monitor platform changes to ensure continued success.`,
    features: [
      {
        title: "Audiences",
        body: "Paid ads can target specific audiences globally",
      },
      {
        title: "Paid social advertising",
        body: "Organic social reach is declining, so paid social advertising is crucial",
      },
      {
        title: "Don't waste budget",
        body: "Setting up paid ads incorrectly can waste your budget",
      },
      {
        title: "Trained professionals",
        body: "We are trained to set up and run your ads correctly for results and return on investment",
      },
      {
        title: "Monitor changes",
        body: "We monitor platform changes and adjust your ads for continued success.",
      },
    ],
  },
  {
    slug: "social-media-training",
    title: "Social media training",
    icon: {
      url: "/svg/iconmark-03.svg",
      height: 60,
      width: 60,
    },
    body: `Get a 1-hour deep dive into social media strategy or Facebook Ads with our expert team. Gain valuable insights and recommendations to move your business forward. Perfect for newbies or those looking to improve their current efforts.`,
    features: [
      {
        title: "Deep dive",
        body: "1-hour deep dive into social media strategy or Facebook Ads",
      },
      {
        title: "Valuable insights",
        body: "Expert team provides valuable insights and recommendations",
      },
      {
        title: "Move forward",
        body: "Move your business forward with confidence",
      },
      {
        title: "Suitable for beginners",
        body: "Suitable for newbies or those looking to improve current efforts",
      },
    ],
  },
];

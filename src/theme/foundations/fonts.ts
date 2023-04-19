import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export const fonts = {
  body: figtree.style.fontFamily,
  heading: figtree.style.fontFamily,
};

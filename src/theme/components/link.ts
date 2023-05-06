import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const common = defineStyle({
  color: "accent.base",
  textDecoration: "underline",
  fontWeight: "700",

  _hover: {
    background: "accent.base",
    color: "white",
  },
});

export const navbar = defineStyle({
  color: "secondary.base",
  textDecoration: "none",
  fontWeight: "700",

  _hover: {
    color: "accent.base",
  },
});

export const footer = defineStyle({
  color: "white",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "2xl",

  _hover: {
    color: "accent.base",
  },
});

export const Link = defineStyleConfig({
  variants: { common, navbar, footer },
});

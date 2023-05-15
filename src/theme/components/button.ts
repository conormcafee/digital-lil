import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const navbar = defineStyle({
  color: "secondary.base",
  textDecoration: "none",
  fontWeight: "700",
  padding: 0,

  _hover: {
    color: "accent.base",
    textDecoration: "underline",
  },
});

export const Button = defineStyleConfig({
  variants: { navbar },
});

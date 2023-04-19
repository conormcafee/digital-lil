import { defineStyleConfig } from "@chakra-ui/react";

export const Link = defineStyleConfig({
  baseStyle: {
    color: "accent.base",
    textDecoration: "underline",
    fontWeight: "700",

    _hover: {
      background: "accent.base",
      color: "white",
    },
  },
});

import { defineStyleConfig } from "@chakra-ui/react";

export const Card = defineStyleConfig({
  baseStyle: {
    container: {
      flexDirection: "row",
      gap: "1rem",
      borderRadius: "xl",
      borderBottomRightRadius: 0,
    },
  },
});

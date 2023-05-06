import { Box } from "@chakra-ui/react";
import { Header } from "./Header";

interface HeroWrapperProps {
  children: React.ReactNode;
}

export const HeroWrapper: React.FC<HeroWrapperProps> = ({ children }) => {
  return (
    <Box
      bgImage="/assets/pexels-andrew-neel-3178818.jpg"
      bgColor="secondary.base"
      bgSize="cover"
      bgBlendMode="overlay"
      bgPosition="center"
      position="relative"
    >
      <Box
        w="100%"
        h="100%"
        bg="secondary.base"
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        top={0}
        opacity={0.5}
      ></Box>

      <Box pos="relative" zIndex="docked">
        <Header />

        {children}
      </Box>

      <Box
        w="100%"
        h={96}
        bgGradient="linear(to-t, secondary.base, transparent)"
        position="absolute"
        bottom={0}
        left={0}
        right={0}
      ></Box>
    </Box>
  );
};

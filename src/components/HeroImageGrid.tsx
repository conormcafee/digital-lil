import { Box, Center, Grid, GridItem, Hide } from "@chakra-ui/react";
import Image from "next/image";

export const HeroImageGrid: React.FC = () => {
  return (
    <Grid
      templateColumns={{ md: "1fr 1fr 1fr " }}
      alignItems="center"
      gap={{ sm: 4, lg: 8 }}
    >
      <GridItem h="full" order={{ md: 2 }}>
        <Center
          bgGradient="linear(to-br, accent.base, accent.light)"
          h="full"
          w="full"
          rounded="2xl"
          py={8}
        >
          <Image
            src="/assets/digital-lil-white.svg"
            width={330}
            height={176}
            alt="A white version of the Digital Lil logo."
            style={{ borderRadius: "8px" }}
          />
        </Center>
      </GridItem>

      <GridItem py={{ sm: 4, lg: 8 }} order={{ md: 1 }}>
        <Box
          bgImage="/assets/lisa-02.jpeg"
          bgPosition="center"
          minH="sm"
          borderRadius="lg"
        ></Box>
      </GridItem>

      <Hide below="md">
        <GridItem py={{ sm: 4, lg: 8 }} order={{ md: 3 }}>
          <Box
            bgImage="/assets/lisa-01.jpeg"
            bgPosition="top-center"
            bgSize="cover"
            minH="sm"
            borderRadius="lg"
          ></Box>
        </GridItem>
      </Hide>
    </Grid>
  );
};

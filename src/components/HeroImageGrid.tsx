import { Center, Grid, GridItem, Hide } from "@chakra-ui/react";
import Image from "next/image";

export const HeroImageGrid: React.FC = () => {
  return (
    <Grid
      templateColumns={{ md: "1fr 1fr 1fr " }}
      alignItems="center"
      gap={{ sm: 4, lg: 8 }}
    >
      <GridItem h="full" order={{ md: 2 }}>
        <Center bg="accent.base" h="full" w="full" rounded="2xl" py={8}>
          <span>Logo</span>
        </Center>
      </GridItem>

      <GridItem py={{ sm: 4, lg: 8 }} order={{ md: 1 }}>
        <Image
          src="/assets/example-portrait.jpg"
          width={1279}
          height={854}
          alt="Example Portrait"
          style={{ borderRadius: "8px" }}
        />
      </GridItem>

      <Hide below="md">
        <GridItem py={{ sm: 4, lg: 8 }} order={{ md: 3 }}>
          <Image
            src="/assets/example-portrait.jpg"
            width={1279}
            height={854}
            alt="Example Portrait"
            style={{ borderRadius: "8px" }}
          />
        </GridItem>
      </Hide>
    </Grid>
  );
};

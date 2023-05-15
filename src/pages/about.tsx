import { HeroWrapper } from "@/components/HeroWrapper";
import { Layout } from "@/components/Layout";
import { Services as ServicesList } from "@/components/Services";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Layout pageTitle={`Digital Lil: About`}>
      <HeroWrapper>
        <Container maxW="1400px" py={16}>
          <Grid templateColumns={{ md: "1fr 1fr" }} gap={6}>
            <GridItem>
              <Heading>
                <Highlight query="." styles={{ color: "accent.base" }}>
                  About
                </Highlight>
              </Heading>

              <Text maxW="lg" fontSize="2xl" mb={4}>
                <Highlight query="." styles={{ color: "accent.base" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque quis tempus dolor. Duis malesuada, diam nec
                  venenatis vulputate, nunc nibh lacinia ligula, at rutrum justo
                  ante nec leo. Duis porttitor mauris enim. Mauris varius sed
                  tellus augue.
                </Highlight>
              </Text>

              <Text maxW="lg" fontSize="2xl" mb={4}>
                <Highlight query="." styles={{ color: "accent.base" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque quis tempus dolor. Duis malesuada, diam nec
                  venenatis vulputate, nunc nibh lacinia ligula, at rutrum justo
                  ante nec leo. Duis porttitor mauris enim. Mauris varius sed
                  tellus augue.
                </Highlight>
              </Text>
            </GridItem>

            <GridItem pt={{ md: 12 }}>
              <Box
                bgImage="/assets/lisa-01.jpeg"
                bgPosition="top-center"
                bgSize="cover"
                minH="lg"
                borderRadius="lg"
                transform={{ md: "rotate(2deg)" }}
              />
            </GridItem>
          </Grid>
        </Container>
      </HeroWrapper>

      <Container maxW="1400px" py={16}>
        <ServicesList showIntroduction />
      </Container>
    </Layout>
  );
}

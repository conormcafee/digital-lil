import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HeroImageGrid } from "@/components/HeroImageGrid";
import { Layout } from "@/components/Layout";
import { Services } from "@/components/Services";
import { Container } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout pageTitle="Digital Lil">
      <Box
        bgImage="/assets/example-portrait.jpg"
        bgColor="secondary.base"
        bgSize="cover"
        bgBlendMode="overlay"
        bgPosition="top"
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

          <Container maxW="1400px" py={16}>
            <Hero />
          </Container>

          <Container maxW="1800px" py={16}>
            <HeroImageGrid />
          </Container>
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

      <Container maxW="1400px" pt={16}>
        <Services />
      </Container>
    </Layout>
  );
}

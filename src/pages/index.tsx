import { Hero } from "@/components/Hero";
import { HeroImageGrid } from "@/components/HeroImageGrid";
import { HeroWrapper } from "@/components/HeroWrapper";
import { Layout } from "@/components/Layout";
import { Services } from "@/components/Services";
import { Container } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Layout pageTitle="Digital Lil">
      <HeroWrapper>
        <Container maxW="1400px" py={16}>
          <Hero />
        </Container>

        <Container maxW="1800px" py={16}>
          <HeroImageGrid />
        </Container>
      </HeroWrapper>

      <Container maxW="1400px" pt={16}>
        <Services showIntroduction />
      </Container>
    </Layout>
  );
}

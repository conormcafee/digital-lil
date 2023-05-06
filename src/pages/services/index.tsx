import { HeroWrapper } from "@/components/HeroWrapper";
import { Layout } from "@/components/Layout";
import { Services as ServicesList } from "@/components/Services";
import { Container, Heading, Highlight, Text } from "@chakra-ui/react";

export default function Services() {
  return (
    <Layout pageTitle={`Digital Lil: Services`}>
      <HeroWrapper>
        <Container maxW="1400px" py={16}>
          <Heading>
            <Highlight query="." styles={{ color: "accent.base" }}>
              Services
            </Highlight>
          </Heading>

          <Text maxW="lg" fontSize="2xl" mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet
            <Highlight query="." styles={{ color: "accent.base" }}>
              .
            </Highlight>
          </Text>
        </Container>
      </HeroWrapper>

      <Container maxW="1400px" py={16}>
        <ServicesList />
      </Container>
    </Layout>
  );
}

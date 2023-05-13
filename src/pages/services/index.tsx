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
            <Highlight query="." styles={{ color: "accent.base" }}>
              Our comprehensive range of services can help grow your brand
              online. Services include Social Media Management, Meta Platform
              Paid Ads, Social Media Training, and Email Marketing. Our experts
              develop customized strategies to connect with your audience,
              increase online presence, and boost revenue. Trust us to take your
              brand to the next level.
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

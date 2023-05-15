import { HeroWrapper } from "@/components/HeroWrapper";
import { Layout } from "@/components/Layout";
import { Services as ServicesList } from "@/components/Services";
import { SERVICES_PAGE as content } from "@/constants";
import { Container, Heading, Highlight, Text } from "@chakra-ui/react";

export default function ServicesPage() {
  return (
    <Layout pageTitle={`Digital Lil: Services`} description={content.body}>
      <HeroWrapper>
        <Container maxW="1400px" py={16}>
          <Heading>
            <Highlight query="." styles={{ color: "accent.base" }}>
              Services
            </Highlight>
          </Heading>

          <Text maxW="lg" fontSize="2xl" mb={4}>
            <Highlight query="." styles={{ color: "accent.base" }}>
              {content.body}
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

import { HeroImageGrid } from "@/components/HeroImageGrid";
import { HeroWrapper } from "@/components/HeroWrapper";
import { Layout } from "@/components/Layout";
import { SERVICES } from "@/constants";
import { Link } from "@chakra-ui/next-js";
import {
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Highlight,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function ServicePage() {
  const router = useRouter();

  const pageSlug = router.query.slug;

  const service = SERVICES.find((service) => service.slug === pageSlug);

  if (!service) return null;

  return (
    <Layout
      pageTitle={`Digital Lil: Services - ${service.title}`}
      description={service.body}
    >
      <HeroWrapper>
        <Container maxW="1400px" py={16}>
          <Grid templateColumns={{ md: "1fr 1fr" }}>
            <GridItem>
              <Link
                color="accent.base"
                mb={1}
                href="/services"
                fontWeight="700"
              >
                Services /{" "}
              </Link>

              <Heading>
                <Highlight query="." styles={{ color: "accent.base" }}>
                  {service.title}
                </Highlight>
              </Heading>

              <Text maxW="lg" fontSize="2xl" mb={4}>
                {service.body}
              </Text>
            </GridItem>
            <GridItem>
              <VStack as="ul" alignItems="flex-start" spacing={4} my={8}>
                {service.features.map((feature, idx) => (
                  <HStack
                    as="li"
                    bg="white"
                    p={4}
                    w="full"
                    rounded="lg"
                    key={idx}
                    spacing={4}
                    alignItems="flex-start"
                  >
                    <Image
                      src="/svg/digital-lil-logomark-dark.svg"
                      width={8}
                      height={8}
                      alt={`A digital lil logo mark`}
                    />
                    <VStack alignItems="flex-start">
                      <Heading color="secondary.base" mb="0" fontSize="md">
                        {feature.title}
                      </Heading>
                      <Text color="secondary.dark">{feature.body}</Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>
            </GridItem>
          </Grid>
        </Container>

        <Container maxW="1800px" py={16}>
          <HeroImageGrid />
        </Container>
      </HeroWrapper>
    </Layout>
  );
}

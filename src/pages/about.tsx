import { HeroWrapper } from "@/components/HeroWrapper";
import { Layout } from "@/components/Layout";
import { Services as ServicesList } from "@/components/Services";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const HERO_CONTENT = [
  `Digital Lil was founded by Lisa Mulkerns.  With over 23 years of experience in both IT and marketing, Lisa brings a diverse range of skills and expertise to help businesses thrive in the digital landscape.`,
];

const BODY_CONTENT = [
  `Lisa is educated to Master’s Level and holds third level qualifications in Linguistics, Computing, and Marketing respectively, providing a deep understanding of the technical aspects required for effective digital marketing strategies. Throughout her career Lisa has immersed herself in various business sectors, working closely with clients to achieve their marketing objectives. Gaining valuable insights and hands-on experience, and allowing her to adapt and tailor an approach to suit the specific needs of each industry.`,
  `What sets Lisa apart is her comprehensive skill set. Not only does she possess a strong marketing background, but also has programming experience, which gives her a holistic understanding of the digital ecosystem.  This unique blend of expertise allows Lisa to develop innovative strategies and execute them effectively, ensuring optimal results for her clients.`,
  `As a Certified Social Media Manager and Certified Social Media Ads Manager, Lisa has the knowledge and skills to leverage the power of social platforms to enhance your online presence, engage your target audience, and drive conversions.  Staying up-to-date with the latest trends, algorithms, and best practices to ensure that your social media campaigns are always at the forefront of innovation.`,
  `Lisa understands that every business is unique, and takes a tailored approach to create customized strategies that align with your brand identity and goals. Whether you're looking to build brand awareness, increase website traffic, or generate leads, we will work closely with you to develop a comprehensive social media strategy that delivers measurable results.`,
  `Lisa is passionate about helping businesses succeed in the digital world, and dedicated to providing exceptional service and support. Lisa believes in building long-term relationships with clients, fostering trust, and being a reliable partner on every client’s journey to success.`,
  `Thank you for visiting www.digitallil.com. We invite you to explore our services and get in touch to discuss how we can help your business achieve its digital marketing objectives. Let's embark on this exciting journey together!`,
];

export default function AboutPage() {
  return (
    <Layout pageTitle={`Digital Lil: About`}>
      <HeroWrapper>
        <Container maxW="1400px" py={16}>
          <Grid templateColumns={{ md: "1fr 1fr" }} gap={12}>
            <GridItem>
              <Heading>
                <Highlight query="." styles={{ color: "accent.base" }}>
                  About
                </Highlight>
              </Heading>

              {HERO_CONTENT.map((text, idx) => (
                <Text maxW="lg" fontSize="2xl" mb={4} key={idx}>
                  <Highlight query="." styles={{ color: "accent.base" }}>
                    {text}
                  </Highlight>
                </Text>
              ))}

              {BODY_CONTENT.map((text, idx) => (
                <Text fontSize="lg" mb={4} key={idx}>
                  <Highlight query="." styles={{ color: "accent.base" }}>
                    {text}
                  </Highlight>
                </Text>
              ))}
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

              <Center
                bgGradient="linear(to-br, accent.base, accent.light)"
                h={{ base: "xs", md: "sm" }}
                w="full"
                rounded="2xl"
                py={8}
                mt={{ base: 8, md: 16 }}
                transform={{ md: "rotate(-4deg)" }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxSize={{ base: 150, lg: 330 }}
                >
                  <Image
                    src="/assets/digital-lil-white.svg"
                    width={330}
                    height={176}
                    alt="A white version of the Digital Lil logo."
                  />
                </Box>
              </Center>
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

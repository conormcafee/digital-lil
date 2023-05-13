import { SERVICES } from "@/constants";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Card,
  Grid,
  GridItem,
  Heading,
  Highlight,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface ServicesPageProps {
  showIntroduction?: boolean;
}

export const Services: React.FC<ServicesPageProps> = ({ showIntroduction }) => {
  return (
    <React.Fragment>
      {showIntroduction && (
        <React.Fragment>
          <Heading as="h2" size="lg">
            <Highlight query="." styles={{ color: "accent.base" }}>
              Services.
            </Highlight>
          </Heading>

          <Text maxW="lg" fontSize="lg" mb={16}>
            <Highlight query="." styles={{ color: "accent.base" }}>
              We offer Social Media Management, Meta Platform Paid Ads, Social
              Media Training, and Email Marketing services to help you grow your
              brand online .
            </Highlight>
          </Text>
        </React.Fragment>
      )}

      <Grid templateColumns={{ md: "1fr 1fr" }} gap={8}>
        {SERVICES.map((service, idx) => (
          <GridItem key={idx}>
            <LinkBox as={Card} bg="white" p={8} gap={8}>
              <Box as="figure">
                <Image
                  src={service.icon.url}
                  width={service.icon.width}
                  height={service.icon.height}
                  alt={`A digital lil logo mark for ${service.title}`}
                />
              </Box>

              <Box flex="2">
                <Heading as="h3" size="md" color="secondary.base" mb={2}>
                  {service.title}
                </Heading>
                <Text color="secondary.dark" mb={4}>
                  {service.body.substring(0, 125)}...
                </Text>

                <LinkOverlay
                  as={Link}
                  href={`/services/${service.slug}`}
                  color="accent.base"
                  fontWeight="700"
                >
                  Find out more
                </LinkOverlay>
              </Box>
            </LinkBox>
          </GridItem>
        ))}
      </Grid>
    </React.Fragment>
  );
};

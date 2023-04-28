import { SERVICES } from "@/constants";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Card,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const Services: React.FC = () => {
  return (
    <React.Fragment>
      <Heading as="h2" size="lg">
        <Highlight query="." styles={{ color: "accent.base" }}>
          Services.
        </Highlight>
      </Heading>

      <Text maxW="sm" fontSize="lg" mb={16}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet
        <Highlight query="." styles={{ color: "accent.base" }}>
          .
        </Highlight>
      </Text>

      <Grid templateColumns={{ md: "1fr 1fr" }} gap={8}>
        {SERVICES.map((service, idx) => (
          <GridItem key={idx}>
            <Card bg="white" p={4}>
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
                <Text color="secondary.dark" mb={8}>
                  {service.intro}
                </Text>
                <Link href="/" variant="common">
                  Find out more <ChevronRightIcon />
                </Link>
              </Box>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </React.Fragment>
  );
};

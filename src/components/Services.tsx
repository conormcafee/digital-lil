import { Link } from "@chakra-ui/next-js";
import { Grid, GridItem, Heading, Highlight, Text } from "@chakra-ui/react";
import React from "react";

const services = [
  {
    title: "Social Media Management",
    intro: "Let us manage, run & build your brand voice and awareness.",
  },
  {
    title: "Meta Platform Paid Ads",
    intro:
      "Target highly specific, pre-defined audiences anywhere in the world.",
  },
  {
    title: "Social media training",
    intro: "Let us manage, run & build your brand voice and awareness.",
  },
  {
    title: "Email Marketing",
    intro: "Reach the audience who have already engaged with your brand.",
  },
];

export const Services: React.FC = () => {
  return (
    <React.Fragment>
      <Heading as="h2" size="lg">
        Services
        <Highlight query="." styles={{ color: "accent.base" }}>
          .
        </Highlight>
      </Heading>

      <Text maxW="sm" fontSize="lg" mb={16}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet
        <Highlight query="." styles={{ color: "accent.base" }}>
          .
        </Highlight>
      </Text>

      <Grid templateColumns="1fr 1fr" gap={8}>
        {services.map((service, idx) => (
          <GridItem key={idx} bg="white" p={4}>
            <Heading as="h3" size="md" color="secondary.base">
              {service.title}
            </Heading>
            <Text mb={4}>{service.intro}</Text>
            <Link href="/">Find out more</Link>
          </GridItem>
        ))}
      </Grid>
    </React.Fragment>
  );
};

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Heading, Highlight, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/next-js";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <React.Fragment>
      <Heading>
        Driving and converting traffic using your online presence
        <Highlight query="." styles={{ color: "accent.base" }}>
          .
        </Highlight>
      </Heading>

      <Text maxW="lg" fontSize="2xl" mb={4}>
        Digital Lil leverages the latest digital marketing techniques and
        technologies.
      </Text>

      <Link href="/about" variant="common">
        More about Digital Lil <ChevronRightIcon />
      </Link>
    </React.Fragment>
  );
};

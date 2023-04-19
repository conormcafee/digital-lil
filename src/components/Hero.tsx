import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Heading, Highlight, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/next-js";

export const Hero: React.FC = () => {
  return (
    <Box py={16}>
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

      <Link href="/about">
        More about Digital Lil <ChevronRightIcon />
      </Link>
    </Box>
  );
};

import { FOOTER_LINKS } from "@/constants";
import { Heading, Highlight } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Container maxWidth="1400px">
      <Box as="footer" py={16}>
        <Heading as="h2" size="lg">
          <Highlight query="." styles={{ color: "accent.base" }}>
            Let&apos;s chat.
          </Highlight>
        </Heading>

        <Text maxW="sm" fontSize="lg" mb={16}>
          <Highlight query="." styles={{ color: "accent.base" }}>
            Ready to take your marketing to the next level? Contact us today to
            learn how we can help.
          </Highlight>
        </Text>

        <Flex gap={24}>
          {FOOTER_LINKS.map((link, idx) => (
            <Flex key={idx} gap={4} alignItems="center">
              <Box w={12} h={12} bg="accent.base"></Box>
              <Link href={link.url} variant="footer">
                {link.text}
              </Link>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

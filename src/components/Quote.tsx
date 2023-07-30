import { Box, Flex, Show, Text } from "@chakra-ui/react";

export const Quote: React.FC = () => {
  return (
    <Flex as="blockquote" alignItems="flex-start" justifyContent="center">
      <Show above="lg">
        <Box
          as="svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="accent.base"
          h={12}
          w={12}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </Box>
      </Show>

      <Box ml={4} maxW="3xl">
        <Text mb={2}>
          “Lisa is both professional and supportive in her role.”
        </Text>

        <Text mb={8}>
          “She was happy to accommodate meetings and calls at times that were
          convenient to me, which was much appreciated. The social media audits,
          advice and strategy that Lisa completed are extremely helpful to my
          business going forward and will give me much needed direction and
          support.”
        </Text>

        <Text color="accent.base" fontWeight={500}>
          Linda Elmore, Business Owner, Moo Music North East.
        </Text>
      </Box>
    </Flex>
  );
};

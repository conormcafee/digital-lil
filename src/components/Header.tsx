import { FOOTER_LINKS, NAV_LINKS } from "@/constants";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center as="header" py={8}>
      <Flex
        display="inline-flex"
        as="nav"
        alignItems="center"
        gap={6}
        bg="whiteAlpha.900"
        borderColor="white"
        shadow="2xl"
        borderWidth={2}
        py={3}
        px={8}
        rounded="full"
      >
        <Link href="/" variant="navbar">
          <Image
            src="/assets/nav-logo.svg"
            width={35}
            height={46}
            alt="Digital Lil | Home"
          />
        </Link>
        {NAV_LINKS.map((link, idx) => (
          <Link href={link.url} key={idx} variant="navbar">
            {link.text}
          </Link>
        ))}

        <Button variant="navbar" onClick={() => onOpen()}>
          Get in touch
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="secondary.base" fontWeight="700">
              Get in touch
            </ModalHeader>
            <ModalCloseButton bg="accent.base" color="white" rounded="full" />
            <ModalBody>
              <Text color="secondary.dark">
                Get in touch with us today to supercharge your marketing
                strategies. We&apos;d love to hear from you and discuss how we
                can help your business grow. Drop us a message or give us a
                call!
              </Text>

              <VStack alignItems="flex-start" my={6} spacing={6}>
                {FOOTER_LINKS.map((link, idx) => (
                  <Flex key={idx} gap={4} alignItems="center">
                    {link.icon ? (
                      <Box as="figure">
                        <Image
                          src={link.icon.url}
                          width={link.icon.width / 3}
                          height={link.icon.height / 3}
                          alt={`A digital lil logo mark for ${link.text}`}
                        />
                      </Box>
                    ) : null}
                    <Link
                      href={link.url}
                      fontWeight={700}
                      color="secondary.base"
                      fontSize={{ base: "lg", md: "md" }}
                    >
                      {link.text}
                    </Link>
                  </Flex>
                ))}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Center>
  );
};

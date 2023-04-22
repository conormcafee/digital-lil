import { NAV_LINKS } from "@/constants";
import { Link } from "@chakra-ui/next-js";
import { Center, Flex } from "@chakra-ui/react";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <Center as="header" py={8}>
      <Flex
        display="inline-flex"
        as="nav"
        alignItems="center"
        gap={4}
        bg="white"
        py={2}
        px={4}
        rounded="3xl"
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
      </Flex>
    </Center>
  );
};

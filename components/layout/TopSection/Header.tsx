import {
  Box,
  Container,
  Link,
  Image,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";

const links = ["About", "Pricing", "Contact Us", "Login"];

export const Header = () => {
  return (
    <Box as="header">
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/">
            <Image h="12" w="12" src="/logo.svg" alt="logo" />
          </Link>
          <HStack as="nav" spacing={10}>
            {links.map((link) => (
              <Link
                key={link}
                _hover={{ color: "accent" }}
                fontSize="md"
                fontWeight="medium"
                href="#"
                transition="color .4s ease"
              >
                {link}
              </Link>
            ))}
            <Button variant="ghost" size={"sm"}>
              Get Started
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

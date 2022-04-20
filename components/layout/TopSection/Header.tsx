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
      <Container maxW={"container.xl"}>
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
            <Button
              as="a"
              size="sm"
              fontWeight="medium"
              fontSize="sm"
              href="#"
              px="8"
              borderColor="accent"
              color="accent"
              variant="outline"
              rounded="full"
              transition="all .4s ease"
              _hover={{ backgroundColor: "accent", color: "white" }}
              _active={{ backgroundColor: "accent", color: "white" }}
            >
              Get Started
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

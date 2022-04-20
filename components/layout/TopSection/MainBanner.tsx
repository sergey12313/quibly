import {
  Box,
  Container,
  Grid,
  Text,
  Icon,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Link,
} from "@chakra-ui/react";
import StarsIcon from "./Stars.svg";
export const MainBanner = () => {
  return (
    <Container maxW="container.xl">
      <SimpleGrid templateColumns={"repeat(2, 1fr)"}>
        <Stack>
          <Tag
            borderRadius="full"
            variant="solid"
            size="lg"
            alignItems="center"
            bg="accent_light"
            color="accent"
          >
            <TagLeftIcon>
              <Icon h={4} w={4} as={StarsIcon} position="absolute" top={5} />
            </TagLeftIcon>
            <TagLabel>
              <Text
                display="inline-flex"
                borderBottom="2px"
                borderBottomStyle="dotted"
                borderBottomColor="gray.500"
              >
                v3.1
              </Text>
              <Text display="inline-flex">released.</Text>

              <Link display="inline-flex" textDecoration="underline" p={2}>
                Learn more
              </Link>
            </TagLabel>
          </Tag>
        </Stack>
        <Box>2</Box>
      </SimpleGrid>
    </Container>
  );
};

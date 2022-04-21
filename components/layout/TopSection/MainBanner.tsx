import {
  Box,
  Container,
  Grid,
  Text,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Link,
  Button,
  Heading,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { AppTag } from "../../Tag";
import StarsIcon from "./Stars.svg";
export const MainBanner = () => {
  return (
    <Box>
      <Container>
        <SimpleGrid templateColumns={"repeat(2, 1fr)"} mt="100">
          <Stack alignItems="flex-start" spacing={4}>
            <AppTag icon={StarsIcon}>
              <Text display="inline-flex" textStyle="accent">
                v3.1 released.&nbsp;
                <Link textDecoration="underline">Learn more</Link>
              </Text>
            </AppTag>
            <Text textStyle="h" as="h1">
              Your data with real-time analytics
            </Text>
            <Text>
              Harness the potential of Big Data Analytics & Cloud Services and
              become a data-driven organization with Needle tail
            </Text>
            <Flex flexDirection="row" gap={3}>
              <Button variant="accent" alignItems="center">
                Start free trial
              </Button>
              <Button variant="white">Learn More</Button>
            </Flex>
          </Stack>
          <Box>
            <Image src="/img1.png"></Image>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { AppTag } from "../../Tag";
import EyeIcon from "./EyeIcon.svg";
export const AdvantageSection = (): ReactElement => {
  return (
    <Box as="section">
      <Container justifyContent="center">
        <Stack
          maxW="500px"
          justifyContent="center"
          align="center"
          textAlign="center"
        >
          <AppTag icon={EyeIcon}>Why Qubly</AppTag>
          <Text maxW="400px" textStyle="h" as="h3">
            Get actionable insights from Big Data in 3 steps
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

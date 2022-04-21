import {
  Box,
  BoxProps,
  Container,
  Flex,
  forwardRef,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { LegacyRef, ReactElement } from "react";
import { AppTag } from "../../Tag";
import { AdvantageCard } from "./AdvantageCard";
import EyeIcon from "./icons/EyeIcon.svg";

const advantageList = [
  {
    icon: "/icons/Data.svg",
    title: "Data in real-time",
    text: "Collect data in real-time from multiple channels and move it into a data lake, in its original format.",
  },
  {
    icon: "/icons/Powerful.svg",
    title: "Powerful Algorithms",
    text: "With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data.",
  },
  {
    icon: "/icons/Chart.svg",
    title: "Valuable business insights",
    text: "Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.",
  },
];

export const AdvantageSection = forwardRef(
  (props: BoxProps, ref: LegacyRef<HTMLDivElement>): ReactElement => {
    return (
      <Box as="section" {...props} ref={ref}>
        <Container justifyContent="center">
          <Flex
            justifyContent="center"
            flexDirection="column"
            mx="auto"
            maxW="600px"
            align="center"
            textAlign="center"
          >
            <AppTag icon={EyeIcon}>Why Qubly</AppTag>
            <Text maxW="550px" textStyle="h" as="h3" mt={8} mb={4}>
              Get actionable insights from Big Data in 3 steps
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Text>
          </Flex>
          <SimpleGrid mt={12} columns={3}>
            {advantageList.map((el) => (
              <AdvantageCard key={el.title} {...el} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
);

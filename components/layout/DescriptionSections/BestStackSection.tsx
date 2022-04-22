import {
  Box,
  BoxProps,
  Container,
  Image,
  SimpleGrid,
  Text,
  Stack,
} from "@chakra-ui/react";
import { forwardRef, LegacyRef } from "react";
import { AppTag } from "../../Tag";
import Electronic from "./icons/Electronic.svg";
export const BestStackSection = forwardRef(
  (props: BoxProps, ref?: LegacyRef<HTMLDivElement>) => {
    return (
      <Box {...props} ref={ref}>
        <Container>
          <SimpleGrid columns={2} alignItems="center">
            <Box>
              <Image src="/stack.png" alt="best stack"></Image>
            </Box>
            <Box>
              <Stack alignItems="start">
                <AppTag icon={Electronic}>For Product Teams</AppTag>
                <Text textStyle="h">Launch with the best stack</Text>
                <Text>
                  A centralized platform that integrates zillions of data
                  sources using Big Data ELT (Extract, Load & Transform) that
                  leaves no data behind
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
);
BestStackSection.displayName = "BestStackSection";

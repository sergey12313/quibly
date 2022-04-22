import {
  Box,
  BoxProps,
  Container,
  SimpleGrid,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { forwardRef, LegacyRef } from "react";
import { AppTag } from "../../Tag";
import Compass from "./icons/Compass.svg";

export const PipeLineSection = forwardRef(
  (props: BoxProps, ref?: LegacyRef<HTMLDivElement>) => {
    return (
      <Box {...props} ref={ref}>
        <Container>
          <SimpleGrid columns={2} alignItems="center">
            <Box>
              <Stack alignItems="start">
                <AppTag icon={Compass}>For Engineering Teams</AppTag>
                <Text textStyle="h">Data-driven pipelines in minutes</Text>
                <Text>
                  Maintenance-free data pipelines with quick set-up and
                  straight-forward deployments that are powered by a modern &
                  scalable platform.
                </Text>
              </Stack>
            </Box>
            <Box>
              <Image src="/pipeline.png" alt="best stack"></Image>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
);
PipeLineSection.displayName = "PipeLineSection";

import { Stack } from "@chakra-ui/react";
import { Header } from "./Header";
import { MainBanner } from "./MainBanner";

export const TopSection = () => {
  return (
    <Stack
      as="section"
      background="url('/topSectionBg.svg')"
      backgroundSize="100%"
      backgroundRepeat="no-repeat"
      backgroundPosition="left bottom"
      pb="200px"
      pt="24px"
    >
      <Header />
      <MainBanner />
    </Stack>
  );
};

import { Stack } from "@chakra-ui/react";
import { Header } from "./Header";
import { MainBanner } from "./MainBanner";

export const TopSection = () => {
  return (
    <Stack as="section">
      <Header />
      <MainBanner />
    </Stack>
  );
};

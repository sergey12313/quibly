import { Stack } from "@chakra-ui/react";
import { Header } from "./Header";
import { MainBanner } from "./MainBanner";

export const TopSection = () => {
  return (
    <Stack
      as="section"
      background="linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(227,241,254,0.5) 100%)"
      clipPath="polygon(0 0, 100% 0%, 100% 85%, 0% 100%)"
      pb="200px"
      pt="24px"
    >
      <Header />
      <MainBanner />
    </Stack>
  );
};

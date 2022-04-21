import { Box, Text, Stack, Image } from "@chakra-ui/react";

export const AdvantageCard = ({
  title,
  icon,
  text,
}: {
  title: string;
  icon: string;
  text: string;
}) => {
  return (
    <Stack spacing={4} maxW="250">
      <Image src={icon} alt={title} h={10} w={10} />
      <Text as="h4" fontWeight="bold" color="headerTextColor" fontSize="xl">
        {title}
      </Text>
      <Text>{text}</Text>
    </Stack>
  );
};

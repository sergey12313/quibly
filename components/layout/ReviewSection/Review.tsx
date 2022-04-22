import { Avatar, Flex, forwardRef, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RefObject } from "react";

export const Review = forwardRef(
  (
    {
      text,
      name,
      position,
      photo,
      ...props
    }: {
      logo: string;
      text: string;
      name: string;
      position: string;
      photo: string;
    },
    ref
  ) => {
    return (
      <Flex
        layout
        flexDirection="column"
        alignItems="center"
        as={motion.div}
        {...props}
        ref={ref}
      >
        <Text
          color="headerTextColor"
          fontSize="xl"
          maxW={"600px"}
          textAlign="center"
        >
          {text}
        </Text>
        <Avatar
          size="xl"
          name={name}
          bgColor="accent"
          border={0}
          my={4}
          src={photo}
        />
        <Text fontWeight="bold" color="black">
          {name}
        </Text>
        <Text fontWeight="bold" color="black">
          {position}
        </Text>
      </Flex>
    );
  }
);

Review.displayName = "Review";

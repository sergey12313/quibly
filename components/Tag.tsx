import {
  TagLeftIcon,
  Icon,
  TagLabel,
  Tag,
  Text,
  Link,
  TagProps,
  forwardRef,
} from "@chakra-ui/react";
import React, { ForwardedRef, ReactComponentElement } from "react";

export const AppTag = forwardRef(
  (
    {
      icon,
      children,

      ...props
    }: TagProps & {
      icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    },
    ref: React.LegacyRef<HTMLSpanElement>
  ) => {
    return (
      <Tag
        borderRadius="full"
        variant="solid"
        size="lg"
        height={10}
        ref={ref}
        alignItems="center"
        bg="accent_light"
        color="accent"
        {...props}
      >
        <TagLeftIcon>
          <Icon h={4} w={4} as={icon} position="absolute" top={5} />
        </TagLeftIcon>
        <TagLabel>{children}</TagLabel>
      </Tag>
    );
  }
);

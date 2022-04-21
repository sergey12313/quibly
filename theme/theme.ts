import {
  ComponentSingleStyleConfig,
  ComponentStyleConfig,
  extendTheme,
} from "@chakra-ui/react";

const colors = {
  accent: "#722ED1",
  accent_light: "#F9F0FF",
  accent_dark: "#470D98",
  gray: "#8989A2",
  headerTextColor: "#160637",
};
const fonts = {
  heading: "'Lato', sans-serif",
  body: "'Lato', sans-serif",
};

const textStyles = {
  h: {
    fontSize: "5xl",
    color: "headerTextColor",
    fontWeight: "bold",
  },
  appText: {
    fontSize: "md",
    color: "gray",
  },
};

const Text: ComponentStyleConfig = {
  baseStyle: {
    textStyle: "appText",
  },
};

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "400",
    rounded: "full",
    fontSize: "md",
    borderRadius: "base",
    shadow: "0px 3px  6px rgba(0,0,0,0.16)",
    transition: "all .4s ease",
  },
  variants: {
    accent: {
      background: "accent",
      color: "white",
      shadow: "0px 3px  6px rgba(0,0,0,0.16)",
      _hover: {
        backgroundColor: "accent_dark",
        color: "white",
      },
    },
    white: {
      background: "white",
      color: "black",
      _hover: {
        backgroundColor: "accent",
        color: "white",
      },
      _active: {
        backgroundColor: "accent",
        color: "white",
      },
    },
    ghost: {
      border: "1px",
      background: "transparent",
      borderColor: "accent",
      shadow: "none",
      color: "accent",
      _hover: {
        backgroundColor: "accent",
        color: "white",
      },
      _active: {
        backgroundColor: "accent",
        color: "white",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "accent",
  },
};

const Container: ComponentSingleStyleConfig = {
  baseStyle: {
    maxW: "container.xl",
  },
};

export const theme = extendTheme({
  colors,
  textStyles,
  fonts,
  components: {
    Button,
    Container,
    Text,
  },
});
export default theme;

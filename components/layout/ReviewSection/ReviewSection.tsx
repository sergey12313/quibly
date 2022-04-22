import {
  Avatar,
  BackgroundProps,
  Box,
  BoxProps,
  Container,
  Divider,
  Image,
  Link,
  SimpleGrid,
  Flex,
  Text,
  TransformProps,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { forwardRef, LegacyRef, MouseEvent, useState } from "react";
import { Review } from "./Review";

const companyIcons = [
  "/companies/Adonis.svg",
  "/companies/Huggy.svg",
  "/companies/Kotlin.svg",
  "/companies/Nim.svg",
  "/companies/Supabase.svg",
];
const companyReview = [
  {
    logo: "/companies/Adonis.svg",
    text: '"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"',
    name: "Sekhar Gunnr",
    position: "Seo",
    photo:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d5/d56e759bb51baccb48ec8c55c3a37c5c09182e0a_full.jpg",
  },
  {
    logo: "/companies/Huggy.svg",
    text: '"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"',
    name: "Emanuel Marcellus",
    position: "Programmer",
    photo:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0019df6637a8dad174356114ee557e23eb3ea3e1_full.jpg",
  },
  {
    logo: "/companies/Kotlin.svg",
    text: '"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"',
    name: "Eleutherius Prudencia",
    position: "Designer",
    photo:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/bc/bc88a6e76449555f916b093e1adb4ffd0a46631a_full.jpg",
  },
  {
    logo: "/companies/Nim.svg",
    text: '"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"',
    name: "Ashoka Blagoslav",
    position: "Copywriter",
    photo:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/76/7608bfefeadb6e29d802bd8b5ec27eb5de207d52_full.jpg",
  },
  {
    logo: "/companies/Supabase.svg",
    text: '"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"',
    name: "Martha Shahrivar",
    position: "Marketing",
    photo:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c3/c3a5c7ef3734b0e90492aecc6bc736f128723c96_full.jpg",
  },
];

const background: TransformProps & BackgroundProps = {
  background:
    "linear-gradient(167deg, rgba(2,0,36,1) 0%, rgba(252,247,255,0.5) 0%, rgba(227,241,254,0.5) 100%)",
  clipPath: "polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)",
};

export const ReviewSection = forwardRef(
  (props: BoxProps, ref: LegacyRef<HTMLDivElement>) => {
    const [selectedItem, setSelectedItem] = useState(0);
    const handleClick = (e: MouseEvent<HTMLDivElement>, i: number) => {
      e.preventDefault();
      setSelectedItem(i);
    };

    return (
      <Box ref={ref} as="section" {...props} py="200px" {...background}>
        <Container>
          <Flex alignItems="center" flexDirection="column">
            <AnimatePresence>
              <Review
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 2 }}
                // exit={{ opacity: 0 }}
                {...companyReview[selectedItem]}
              />
            </AnimatePresence>
            <Divider color="#DEC9FA" my={16} />
            <SimpleGrid columns={5} alignSelf="stretch">
              {companyIcons.map((el, i) => (
                <Flex
                  key={i}
                  as="a"
                  href="#"
                  justifyContent="center"
                  onClick={(e) => handleClick(e, i)}
                  transition={"all 0.2s ease-in-out"}
                  filter={i === selectedItem ? "grayscale(0)" : "grayscale(9)"}
                  _hover={{ filter: "grayscale(0)", transform: "scale(1.02)" }}
                >
                  <Image src={el} maxW="200px" alt="company" />{" "}
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
        </Container>
      </Box>
    );
  }
);

ReviewSection.displayName = "ReviewSection";

// as = "section";
// background = "url('/topSectionBg.svg')";
// backgroundSize = "100%";
// backgroundRepeat = "no-repeat";
// backgroundPosition = "left bottom";

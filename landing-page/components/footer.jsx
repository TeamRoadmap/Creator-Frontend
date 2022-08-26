import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const Footer = () => {
  const testimonialBg = useColorModeValue("gray.100", "gray.700");
  return (
    <Box
      bg={testimonialBg}
      py="2rem"
    >
      <Flex
        justify={{ base: "center", md: "space-around" }}
        direction={{ base: "column", md: "row" }}
        align={"center"}
        mx={"2rem"}
        py={"2rem"}
      >
        <Flex
          direction={"column"}
          justify={{ base: "start", md: "center" }}
          mb={"2rem"}
        >
          <Text fontSize={"2xl"}>Ready to get started?</Text>
          <Text fontSize={"md"}>Sign up</Text>
        </Flex>
        <Flex gap={"1rem"}>
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"purple.600"}
            rounded="8px"
            href={"#"}
            _hover={{
              bg: "purple.800",
            }}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
      <Flex
        justify={{ base: "center", md: "space-around" }}
        align={"center"}
        direction={{ base: "column-reverse", md: "row" }}
        gap={{ base: "2rem", md: "1rem" }}
      >
        <Flex
          direction={"column"}
          gap={{ base: "1rem", md: "2rem" }}
          align={"center"}
        >
          <Flex align={"baseline"}>
            <Text
              textAlign={useBreakpointValue({ base: "start", md: "left" })}
              fontFamily={"heading"}
              fontSize="xl"
              mr="3px"
              color={useColorModeValue("gray.800", "white")}
            >
              ROADMAP
            </Text>
            <Text fontSize="xs">CREATOR</Text>
          </Flex>
          <Flex
            direction={"column"}
            align="center"
          >
            <h1>© 2022</h1>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
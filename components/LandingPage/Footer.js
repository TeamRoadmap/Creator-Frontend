import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Input,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

export default function Footer() {
  const testimonialBg = useColorModeValue("gray.100", "gray.700");
  return (
    <Box bg={testimonialBg} py={"2rem"}>
      <Flex
        justify={{base: "center" , md: "space-between"}}
        direction={{ base: "column", md: "row" }}
        align={"center"}
        mx={{base:"1rem", md: "11rem"}}
        py={"4rem"}
      >
        <Flex direction={"column"} justify={{base: "start", md:"center"}} mb={"2rem"}>
            <Text fontSize={"2xl"}>Ready to get started?</Text>
            <Text fontSize={"md"}>Sign up or contact us</Text>
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
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            borderColor={"purple.500"}
            variant={"outline"}
            rounded="8px"
            href={"#"}
          >
            Contact Us
          </Button>
        </Flex>
      </Flex>
      <Flex
        justify={{base: "center" , md: "space-between"}}
        direction={{ base: "column", md: "row" }}
        align={"center"}
        mx={{base:"0", md: "11rem"}}
        py={"3rem"}
      >
        <Flex direction={"column"} gap={"1.5rem"} mb={"2rem"} align={"start"}>
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
          <div>
            <h1>© 2022</h1>
            <h1>Privacy — Terms</h1>
          </div>
        </Flex>
        <Flex direction={"column"} gap={"1.5rem"}>
          <h4>Join NewsLetter</h4>
          <div>
            <h4>Your Email</h4>
            <Input placeholder="Basic usage" />
          </div>
          <Button maxW={"9rem"} color={"white"} bg="purple.600" variant="solid">
            Button
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

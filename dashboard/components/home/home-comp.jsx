import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Avatar,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";

const HomeComp = () => {
  return (
    <Stack
      m="6"
      direction="column"
      gap="12"
    >
      <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
        <Text
          as={"span"}
          position={"relative"}
        >
          Hey There,
        </Text>{" "}
        <Text
          color={"purple.600"}
          as={"span"}
        >
          Devansh Bajaj
        </Text>{" "}
      </Heading>
      <Heading fontSize="2xl"> Your Courses</Heading>
    </Stack>
  );
};

export default HomeComp;

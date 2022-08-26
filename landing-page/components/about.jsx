import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

import AboutImage1 from "../../public/images/about1.png";
import Stats from "../../public/images/stats.png";
import Editor from "../../public/images/editor-img.png";
import StatImg from "../../public/images/stats-img.png";

const About = () => {
  return (
    <>
      <Stack
        id="aboutus"
        minH={"50vh"}
        direction={{ base: "column-reverse", md: "row" }}
        mx={{ base: "2rem", md: "4rem" }}
        my="2rem"
        spacing="2rem"
      >
        <Flex
          flex={1}
          align={"center"}
          justify={"center"}
        >
          <Stack
            spacing={6}
            w={"full"}
            maxW={"lg"}
          >
            <Heading fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }}>
              <Text
                as={"span"}
                position={"relative"}
              >
                Create your courses
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={useColorModeValue("gray.700", "gray.300")}
            >
              Build Courses in a Interactive and customizable way
            </Text>
          </Stack>
        </Flex>
        <Flex
          py="6rem"
          px={{ base: "0", md: "2rem" }}
          flex={1}
          justify={"center"}
          align={{ base: "flex-end", md: "center" }}
        >
          <Image
            alt={"Create courses Image"}
            src={Editor}
          />
        </Flex>
      </Stack>
      <Stack
        minH={"50vh"}
        direction={{ base: "column-reverse", md: "row-reverse" }}
        mx={{ base: "2rem", md: "4rem" }}
        my="2rem"
        mb={"4rem"}
        spacing="2rem"
      >
        <Flex
          flex={1}
          align={"center"}
          justify={"center"}
        >
          <Stack
            spacing={6}
            w={"full"}
            maxW={{ base: "xl", md: "2xl", lg: "4xl" }}
          >
            <Heading fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }}>
              <Text
                as={"span"}
                position={"relative"}
              >
              Detailed Statistics
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={useColorModeValue("gray.700", "gray.300")}
            >
              Get detailed Stats about upvote downvotes and total bookmark and enrollment of courses
            </Text>
          </Stack>
        </Flex>
        <Flex
          py="6rem"
          px={{ base: "0", md: "2rem" }}
          flex={1}
          justify={"center"}
          align={{ base: "flex-end", md: "center" }}
        >
          <Image
            alt={"Statistics Image"}
            src={StatImg}
          />
        </Flex>
      </Stack>
    </>
  );
};
export default About;

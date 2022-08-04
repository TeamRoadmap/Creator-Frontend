import {
	Button,
	Flex,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

import AboutImage1 from "../../public/images/about1.png";
import Stats from "../../public/images/stats.png";

const About = () => {
	return (
		<>
			<Stack
				id="aboutus"
				minH={"50vh"}
				direction={{ base: "column-reverse", md: "row" }}
				m={{ base: "2rem", md: "4rem" }}
				spacing="2rem"
			>
				<Flex flex={1} align={"center"} justify={"center"}>
					<Stack spacing={6} w={"full"} maxW={"lg"}>
						<Heading fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }}>
							<Text as={"span"} position={"relative"}>
								Create your courses in a quick customizable way
							</Text>
						</Heading>
						<Text
							fontSize={{ base: "md", lg: "lg" }}
							color={useColorModeValue("gray.700", "gray.300")}
						>
							Create Interactive courses with our course creator which allows
							you to create courses with ease.
						</Text>
						<Text
							fontSize={{ base: "sm", lg: "md" }}
							color={useColorModeValue("gray.600", "gray.500")}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
					<Image alt={"Create courses Image"} src={AboutImage1} />
				</Flex>
			</Stack>
			<Stack
				minH={"50vh"}
				direction={{ base: "column-reverse", md: "row-reverse" }}
				m={{ base: "2rem", md: "4rem" }}
				spacing="2rem"
			>
				<Flex flex={1} align={"center"} justify={"center"}>
					<Stack
						spacing={6}
						w={"full"}
						maxW={{ base: "xl", md: "2xl", lg: "4xl" }}
					>
						<Heading fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }}>
							<Text as={"span"} position={"relative"}>
								Get Detailed Statistics of your courses
							</Text>
						</Heading>
						<Text
							fontSize={{ base: "md", lg: "lg" }}
							color={useColorModeValue("gray.700", "gray.300")}
						>
							Create Interactive courses with our course creator which allows
							you to create courses with ease.
						</Text>
						<Text
							fontSize={{ base: "sm", lg: "md" }}
							color={useColorModeValue("gray.600", "gray.500")}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
					<Image alt={"Statistics Image"} src={Stats} />
				</Flex>
			</Stack>
		</>
	);
};
export default About;

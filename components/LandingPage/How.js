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
	SimpleGrid,
	Box,
} from "@chakra-ui/react";

const How = () => {
	return (
		<>
			<Stack
				direction={"column"}
				p={{ base: "2rem", md: "4rem" }}
				spacing="2rem"
				margin={{ base: "2rem", md: "4rem", lg: "6rem", xl: "12rem" }}
				justify={"center"}
			>
				<Heading align="center" colorScheme={"white"}>
					How it works??
				</Heading>
				<SimpleGrid columns={2} spacingX="60px" spacingY="60px">
					<Box rounded={"8px"} bg={useColorModeValue("gray.100", "gray.700")}>
						<Flex
							direction={"column"}
							p={{ base: "2rem", md: "3rem", lg: "4rem" }}
							gap="2rem"
						>
							<Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
								<Text as={"span"} position={"relative"}>
									Sign Up and create text based course or roadmap.
								</Text>
							</Heading>
							<Text
								fontSize={{ base: "md", lg: "lg" }}
								color={useColorModeValue("gray.700", "gray.300")}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore...
							</Text>
						</Flex>
					</Box>
					<Box rounded={"8px"} bg={useColorModeValue("gray.100", "gray.700")}>
						<Flex
							direction={"column"}
							p={{ base: "2rem", md: "3rem", lg: "4rem" }}
							gap="2rem"
						>
							<Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
								<Text as={"span"} position={"relative"}>
									Add quizzes to your course to make it interactive.
								</Text>
							</Heading>
							<Text
								fontSize={{ base: "md", lg: "lg" }}
								color={useColorModeValue("gray.700", "gray.300")}
							>
								Create Interactive courses with our course creator which allows
								you to create courses with ease.
							</Text>
						</Flex>
					</Box>
					<Box rounded={"8px"} bg={useColorModeValue("gray.100", "gray.700")}>
						<Flex
							direction={"column"}
							p={{ base: "2rem", md: "3rem", lg: "4rem" }}
							gap="2rem"
						>
							<Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
								<Text as={"span"} position={"relative"}>
									Upload your course in just one click.{" "}
								</Text>
							</Heading>
							<Text
								fontSize={{ base: "md", lg: "lg" }}
								color={useColorModeValue("gray.700", "gray.300")}
							>
								Create Interactive courses with our course creator which allows
								you to create courses with ease.
							</Text>
						</Flex>
					</Box>
					<Box rounded={"8px"} bg={useColorModeValue("gray.100", "gray.700")}>
						<Flex
							direction={"column"}
							p={{ base: "2rem", md: "3rem", lg: "4rem" }}
							gap="2rem"
						>
							<Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
								<Text as={"span"} position={"relative"}>
									Get statistics based on learner’s response{" "}
								</Text>
							</Heading>
							<Text
								fontSize={{ base: "md", lg: "lg" }}
								color={useColorModeValue("gray.700", "gray.300")}
							>
								Create Interactive courses with our course creator which allows
								you to create courses with ease.
							</Text>
						</Flex>
					</Box>
				</SimpleGrid>
			</Stack>
		</>
	);
};

export default How;

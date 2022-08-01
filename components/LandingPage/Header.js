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
import Image from "next/image";
import HeaderImage from "../../images/CreatorDashboard.png";

const Header = () => {
  const testimonialBg = useColorModeValue("gray.100", "gray.700");

	return (
		<>
			<Stack
				minH={"90vh"}
				direction={{ base: "column-reverse", md: "row" }}
				mx={{ base: "2rem", md: "4rem" }}
				mb={{ base: "2rem", md: "4rem" }}
				spacing="2rem"
			>
				<Flex flex={1} align={"center"} justify={"center"}>
					<Stack spacing={6} w={"full"} maxW={"lg"}>
						<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
							<Text as={"span"} position={"relative"}>
								Create
							</Text>
							<br />{" "}
							<Text color={"purple.600"} as={"span"}>
								Interactive Courses
							</Text>{" "}
						</Heading>
						<Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
							Create Interactive courses with our course creator which allows
							you to create courses with ease.
						</Text>
						<Button
							rounded={"8px"}
							color={"white"}
							bg="purple.600"
							_hover={{
								bg: "purple.800",
							}}
							p="1rem"
							maxW={"50%"}
						>
							Sign Up
						</Button>
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
						alt={"Header Image"}
						style={{ borderRadius: "8px" }}
						src={HeaderImage}
					/>
				</Flex>
			</Stack>
			<Stack
				direction={"column"}
				p={{ base: "2rem", md: "4rem" }}
				spacing="2rem"
				justify={"center"}
				bg={testimonialBg}
			>
				<Heading align="center" colorScheme={"white"}>
					Trusted By the Best Creators
				</Heading>
				<Stack direction={"row"} justify="center">
					<Wrap>
						<WrapItem>
							<Avatar />
						</WrapItem>
						<WrapItem>
							<Avatar />
						</WrapItem>
						<WrapItem>
							<Avatar />
						</WrapItem>
						<WrapItem>
							<Avatar />
						</WrapItem>
						<WrapItem>
							<Avatar />
						</WrapItem>
						<WrapItem>
							<Avatar />
						</WrapItem>
					</Wrap>
				</Stack>
			</Stack>
		</>
	);
};
export default Header;

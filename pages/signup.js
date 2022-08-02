import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	Link,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Layout from "../components/Layout";

export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Layout>
			<Flex
				minH={"100vh"}
				align={"center"}
				justify={"center"}
				bg={useColorModeValue("gray.50", "gray.800")}
			>
				<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
					<Stack align={"center"}>
						<Heading fontSize={"4xl"} textAlign={"center"}>
							Sign up
						</Heading>
						<Text fontSize={"lg"} color={"gray.600"}>
							to enjoy all of our cool features ✌️
						</Text>
					</Stack>
					<Box
						rounded={"lg"}
						bg={useColorModeValue("white", "gray.700")}
						boxShadow={"lg"}
						p={8}
					>
						<Stack spacing={4}>
							<HStack>
								<Box>
									<FormControl id="firstName" isRequired>
										<FormLabel>First Name</FormLabel>
										<Input type="text" focusBorderColor="purple.500" />
									</FormControl>
								</Box>
								<Box>
									<FormControl id="lastName">
										<FormLabel>Last Name</FormLabel>
										<Input type="text" focusBorderColor="purple.500" />
									</FormControl>
								</Box>
							</HStack>
							<FormControl id="email" isRequired>
								<FormLabel>Email address</FormLabel>
								<Input focusBorderColor="purple.500" type="email" />
							</FormControl>
							<FormControl id="password" isRequired>
								<FormLabel>Password</FormLabel>
								<InputGroup>
									<Input
										focusBorderColor="purple.500"
										type={showPassword ? "text" : "password"}
									/>
									<InputRightElement h={"full"}>
										<Button
											variant={"ghost"}
											onClick={() =>
												setShowPassword((showPassword) => !showPassword)
											}
										>
											{showPassword ? <ViewIcon /> : <ViewOffIcon />}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<Stack spacing={10} pt={2}>
								<Button
									loadingText="Submitting"
									size="lg"
									bg={"purple.600"}
									color={"white"}
									_hover={{
										bg: "purple.800",
									}}
								>
									Sign up
								</Button>
							</Stack>
							<Stack pt={6}>
								<Text align={"center"}>
									Already a user?{" "}
									<NextLink href="/login" passHref>
										<Link color="purple.500">Login</Link>
									</NextLink>
								</Text>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Flex>
		</Layout>
	);
}
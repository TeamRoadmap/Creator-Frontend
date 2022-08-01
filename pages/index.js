import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.css";
import {
	Box,
	Button,
	ButtonGroup,
	Heading,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Head>
				<title>Roadmap Creator</title>
				<meta name="description" content="Roadmap Creator App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box
				display="flex"
				flexDirection="column"
				mt="2rem"
				gap="2rem"
				alignItems="center"
			>
				<Heading color={useColorModeValue("brand.500", "brand.300")}>
					Hello Creator!
				</Heading>
				<Button onClick={toggleColorMode}>
					Toggle {colorMode === "light" ? "Dark" : "Light"}
				</Button>
			</Box>
		</>
	);
}

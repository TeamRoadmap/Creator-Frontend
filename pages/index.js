import Head from "next/head";
import { useColorMode } from "@chakra-ui/react";
import Navbar from "../components/LandingPage/Navbar";
import Header from "../components/LandingPage/Header";
import About from "../components/LandingPage/About";

export default function Home() {
	// const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Head>
				<title>Roadmap Creator</title>
				<meta name="description" content="Roadmap Creator App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Heading color={useColorModeValue("brand.500", "brand.300")}>
					Hello Creator!
				</Heading> */}
			<Navbar />
			<Header />
			<About />
			{/* <Button onClick={toggleColorMode}>
				Toggle {colorMode === "light" ? "Dark" : "Light"}
			</Button> */}
		</>
	);
}

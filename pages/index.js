import Head from "next/head";
import Navbar from "../components/LandingPage/Navbar";
import Header from "../components/LandingPage/Header";
import About from "../components/LandingPage/About";
import How from "../components/LandingPage/How";

export default function Home() {
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
			<How />
		</>
	);
}

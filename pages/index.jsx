import Head from "next/head";
import Header from "../landing-page/components/header";
import About from "../landing-page/components/about";
import How from "../landing-page/components/how";
import Footer from "../landing-page/components/footer";
import Layout from "../shared/components/layout";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Roadmap Creator</title>
				<meta name="description" content="Roadmap Creator App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<About />
			<How />
			<Footer />
		</Layout>
	);
}

export { getServerSideProps } from "../shared/lib/chakra";

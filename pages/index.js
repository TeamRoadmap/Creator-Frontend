import Head from "next/head";
import Navbar from "../components/LandingPage/Navbar";
import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";
import About from "../components/LandingPage/About";
import How from "../components/LandingPage/How";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const { user } = useSelector((store) => store.user); // just for testing
  return (
    <Layout>
      <Head>
        <title>Roadmap Creator</title>
        <meta name="description" content="Roadmap Creator App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Heading color={useColorModeValue("brand.500", "brand.300")}>
					Hello Creator!
				</Heading> */}
      <Header />
      <About />
      <How />
      <Footer />
    </Layout>
  );
}

export { getServerSideProps } from "../lib/Chakra";

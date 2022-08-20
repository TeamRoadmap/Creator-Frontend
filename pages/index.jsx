import Head from "next/head";
import { Header, How, About, Footer } from "../landing-page/components";
import Layout from "../shared/components/layout";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const { user } = useSelector((store) => store.user); // just for testing
  return (
    <Layout>
      <Head>
        <title>Roadmap Creator</title>
        <meta
          name="description"
          content="Roadmap Creator App"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <About />
      <How />
      <Footer />
    </Layout>
  );
}

export { getServerSideProps } from "../shared/lib/chakra";

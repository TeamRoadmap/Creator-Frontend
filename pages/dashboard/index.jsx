import Head from "next/head";
import { HomeComp } from "../../dashboard/components";
import Layout from "../../dashboard/components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Roadmap Creator Dashboard</title>
        <meta
          name="description"
          content="Roadmap Creator App"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <HomeComp />
    </Layout>
  );
}

export { getServerSideProps } from "../../shared/lib/chakra";

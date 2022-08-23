import Head from "next/head";
import { Layout, HomeCard } from "../../dashboard/components";
import { Button, Flex, Grid, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Home() {
  const { user } = useSelector((state) => state.user)
  const {courses} = useSelector((state) => state.course)
  const router = useRouter();
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
      <Stack
        m="6"
        direction="column"
        gap="12"
      >
        <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
          <Text
            as={"span"}
            position={"relative"}
          >
            Hey There,
          </Text>{" "}
          <Text
            color={"purple.600"}
            as={"span"}
          >
            {user?.name}!
          </Text>{" "}
        </Heading>
        <Stack
          m="6"
          direction="column"
          gap="6"
        >
          <Heading fontSize="2xl"> Your Courses</Heading>
          <SimpleGrid
            columns={{ base: "1", md: "2", lg: "3" }}
            spacing="4"
          >
            {courses.slice(0,3).map((data, index) => {
              return (
                <HomeCard
                  key={index}
                  data={data}
                />
              );
            })}
          </SimpleGrid>
        </Stack>
        <Flex justifyContent="center">
         {courses.length > 3 && <Button maxWidth="10rem" onClick={() => router.push("/dashboard/courses")}>View More</Button>} 
        </Flex>
        <Stack
          m="6"
          direction="column"
          gap="6"
        >
        </Stack>
      </Stack>
    </Layout>
  );
}

export { getServerSideProps } from "../../shared/lib/chakra";

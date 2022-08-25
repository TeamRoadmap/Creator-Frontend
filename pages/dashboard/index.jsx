import Head from "next/head";
import { Layout, HomeCard } from "../../dashboard/components";
import {
  Button,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.user);
  const { courses } = useSelector((state) => state.course);
  const router = useRouter();
  const [isLoadingCourses, setIsLoadingCourses] = useState(true);
  const getCourses = async () => {
    const res = await axios.get(
      `https://roadmap-backend-host.herokuapp.com/api/v1/course?creatorId=${user?.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setIsLoadingCourses(true);
    dispatch({ type: "course/setCourses", payload: res.data.data });
  };

  useEffect(() => {
    if (user?.id) {
      setIsLoadingCourses(false);
      getCourses();
    }
  }, [user]);
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
          {isLoadingCourses ? (
            courses.length !== 0 ? (
              <SimpleGrid
                columns={{ base: "1", md: "2", lg: "3" }}
                spacing="4"
              >
                {courses?.slice(0, 3).map((data, index) => {
                  return (
                    <HomeCard
                      key={index}
                      data={data}
                    />
                  );
                })}
              </SimpleGrid>
            ) : (
              <Flex fontSize="2xl" fontWeight="semibold" justifyContent="center">
                <Text>
                  You havent created a course yet pls embark on the journey
                </Text>
              </Flex>
            )
          ) : (
            <Flex justifyContent="center">
              {" "}
              <Spinner size="xl" />{" "}
            </Flex>
          )}
        </Stack>
        <Flex justifyContent="center">
          {isLoadingCourses && courses?.length > 3 && (
            <Button
              maxWidth="10rem"
              onClick={() => router.push("/dashboard/courses")}
            >
              View More
            </Button>
          )}
        </Flex>
        <Stack
          m="6"
          direction="column"
          gap="6"
        ></Stack>
      </Stack>
    </Layout>
  );
}

export { getServerSideProps } from "../../shared/lib/chakra";

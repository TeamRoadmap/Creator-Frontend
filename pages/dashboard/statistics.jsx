import Head from "next/head";
import { Layout, StatsCard } from "../../dashboard/components";
import {
  Button,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Skeleton,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Statistics() {
  const { token } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState();
  const [totalStats, setTotalStats] = useState(0);

  const getStats = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://roadmap-backend-host.herokuapp.com/api/v1/user/statistics`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTotalStats(res.data.data);
      setStats(res.data.data.courses);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

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
        <Stack direction="row">
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            Statistics
          </Heading>
        </Stack>

        <Stack
          m="6"
          direction="column"
          gap="6"
        >
          <Heading fontSize={{ base: "xl", md: "2xl" }}>Total Stats</Heading>

          <SimpleGrid
            columns={{ base: "1", md: "2", lg: "3" }}
            spacing="4"
          >
            {loading ? (
              <Stack>
                <Skeleton
                  height="40px"
                  fadeDuration={1}
                ></Skeleton>
                <Skeleton
                  height="40px"
                  fadeDuration={1}
                ></Skeleton>
                <Skeleton
                  height="40px"
                  fadeDuration={1}
                ></Skeleton>
                <Skeleton
                  height="40px"
                  fadeDuration={1}
                ></Skeleton>
              </Stack>
            ) : (
              <>
                <Stat>
                  <StatLabel>Total Courses</StatLabel>
                  <StatNumber>{totalStats?.totalCourses}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>
                    Total Upvotes <StatArrow type="increase" />
                  </StatLabel>
                  <StatNumber>{totalStats?.totalUpvotes}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>
                    Total Downvotes <StatArrow type="decrease" />
                  </StatLabel>
                  <StatNumber>{totalStats?.totalDownvotes}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Total Bookmarks</StatLabel>
                  <StatNumber>{totalStats?.totalBookmarks}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Total Enrollments</StatLabel>
                  <StatNumber>{totalStats?.totalEnrollments}</StatNumber>
                </Stat>
              </>
            )}
          </SimpleGrid>
        </Stack>
        <Stack
          m="6"
          direction="column"
          gap="6"
        >
          <Heading fontSize={{ base: "xl", md: "2xl" }}>
            Course Wise Stats
          </Heading>
          <SimpleGrid
            columns={{ base: "1", md: "2", lg: "3" }}
            spacing="4"
          >
            {loading ? (
              <Stack>
                <Skeleton
                  height="40px"
                  w="full"
                  fadeDuration={1}
                ></Skeleton>
                <Skeleton
                  height="40px"
                  fadeDuration={1}
                ></Skeleton>
                <Skeleton
                  height="40px"
                  fadeDuration={1}
                ></Skeleton>
                <Skeleton
                  height="40px"
                  fadeDuration={1}
                ></Skeleton>
              </Stack>
            ) : (
              <>
                {stats?.map((data, index) => {
                  return (
                    <StatsCard
                      key={index}
                      id={data.id}
                      description={data.description}
                      title={data.title}
                      public_id={data.public_id}
                      bookmarks={data.totalBookmarks}
                      enrollment={data.totalEnrollments}
                      votes={data.votes}
                      image={data.image}
                    />
                  );
                })}
              </>
            )}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Layout>
  );
}

export { getServerSideProps } from "../../shared/lib/chakra";

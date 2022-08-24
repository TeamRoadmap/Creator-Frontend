import Head from "next/head";
import { Layout, StatsCard } from "../../dashboard/components";
import {
  Button,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Statistics() {
  const { token } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      setStats(res.data.data.courses);
      setLoading(false);
    } catch (error) {
      console.log(err);
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
        <Stack
          direction="row"
          justify="space-between"
        >
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            Statistics
          </Heading>
        </Stack>

        <Stack
          m="6"
          direction="column"
          gap="6"
        >
          <SimpleGrid
            columns={{ base: "1", md: "2", lg: "3" }}
            spacing="4"
          >
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
          </SimpleGrid>
        </Stack>
      </Stack>
    </Layout>
  );
}

export { getServerSideProps } from "../../shared/lib/chakra";

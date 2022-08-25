import Head from "next/head";
import { Layout, CourseCard, CourseModal } from "../../dashboard/components";
import {
  Button,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
export default function Course() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { courses } = useSelector((state) => state.course);
  const { user, token } = useSelector((state) => state.user);
  const getCourses = async () => {
    const res = await axios.get(
      `https://roadmap-backend-host.herokuapp.com/api/v1/course?creatorId=${user?.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: "course/setCourses", payload: res.data.data });
  };
  useEffect(() => {
    if (user?.id) {
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
        <Stack
          direction="row"
          justify="space-between"
        >
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            Courses({courses?.length})
          </Heading>
          <Button
            onClick={onOpen}
            leftIcon={<AiOutlinePlus />}
          >
            Create Course
          </Button>
          <CourseModal
            isOpen={isOpen}
            onClose={onClose}
          />
        </Stack>

        <Stack
          m="6"
          direction="column"
          gap="6"
        >
          {courses?.length !== 0 ? (
            <SimpleGrid
              columns={{ base: "1", md: "2", lg: "3" }}
              spacing="4"
            >
              {courses?.map((data, index) => {
                return (
                  <CourseCard
                    key={index}
                    id={data.id}
                    type={data.type}
                    description={data.description}
                    title={data.title}
                    public_id={data.public_id}
                    image={data.image}
                  />
                );
              })}
            </SimpleGrid>
          ) : (
            <Flex
              justifyContent="center"
            >
              <Text fontSize="2xl" fontWeight="semibold">Start Your Course Building Journey</Text>
            </Flex>
          )}
        </Stack>
      </Stack>
    </Layout>
  );
}

export { getServerSideProps } from "../../shared/lib/chakra";

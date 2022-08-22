import Head from "next/head";
import { Layout, CourseCard, CourseModal } from "../../dashboard/components";
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
import axios from "axios";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

const data = [
  {
    id: 1,
    isNew: false,
    imageURL: "/images/react-course.webp",
    courseName: " Basics of React",
    type: "Frontend",
    lastUpdated: "12/04/12",
    tutor: "Devansh",
  },

  {
    id: 2,
    isNew: false,
    imageURL: "/images/react-course.webp",
    courseName: " Basics of React",
    type: "Frontend",
    lastUpdated: "12/04/12",
    tutor: "Devansh",
  },
  {
    id: 3,
    isNew: false,
    imageURL: "/images/react-course.webp",
    courseName: " Basics of React",
    type: "Frontend",
    lastUpdated: "12/04/12",
    tutor: "Devansh",
  },
];

export default function Course() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.user);
  const { courses } = useSelector((state) => state.course);
  const getCourses = async () => {
    const res = await axios.get(
      `https://roadmap-backend-host.herokuapp.com/api/v1/course?creatorId=${user?.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: "course/setCourses", payload: res.data.data.courses });
  };

  useEffect(() => {
    if(user?.id){
      getCourses();
    }
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
          <SimpleGrid
            columns={{ base: "1", md: "2", lg: "3" }}
            spacing="4"
          >
            {courses?.map((data, index) => {
              return (
                <CourseCard
                  key={index}
                  id={data.id}
                  description={data.description}
                  title={data.title}
                  public_id={data.public_id}
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

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

const data = [
  {
    isNew: false,
    imageURL: "/images/react-course.webp",
    courseName: " Basics of React",
    type: "Frontend",
    lastUpdated: "12/04/12",
    tutor: "Devansh",
  },

  {
    isNew: false,
    imageURL: "/images/react-course.webp",
    courseName: " Basics of React",
    type: "Frontend",
    lastUpdated: "12/04/12",
    tutor: "Devansh",
  },
  {
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
            Courses(2)
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
            {data.map((data, index) => {
              return (
                <CourseCard
                  key={index}
                  data={data}
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

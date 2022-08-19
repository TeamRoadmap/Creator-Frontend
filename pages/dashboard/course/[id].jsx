import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { AiOutlineSave } from "react-icons/ai";
import { Quill, CourseBuildLayout } from "../../../dashboard/components";

export const Course = () => {
  const { courses } = useSelector((state) => state.course);

  // const router = useRouter();

  // const { id } = router.query;
  // console.log(id);

  console.log(courses);

  return (
    <CourseBuildLayout>
      <Stack
        direction="row"
        justify="space-between"
        m="4"
        align="center"
      >
        <Stack direction="column">
          <Heading>{courses.courseName}</Heading>
          <Text>{courses.description}</Text>
        </Stack>

        <Button leftIcon={<AiOutlineSave />}>Save</Button>
      </Stack>
      <Quill />
    </CourseBuildLayout>
  );
};

export default Course;

export { getServerSideProps } from "../../../shared/lib/chakra";

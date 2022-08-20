import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { AiOutlineSave } from "react-icons/ai";
import { Quill, CourseBuildLayout } from "../../../dashboard/components";
import axios from "axios";
import { useDispatch } from "react-redux";
export const Course = () => {
  const { course } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const router = useRouter();
  const { courseId } = router.query;
  const getCourseDetail = async () => {
    const res = await axios.get(
      `https://e2b008aa-8ef7-4125-8063-532dfb7d0c2e.mock.pstmn.io/getCourse?id=${courseId}`,
      {
        headers: {
          "Content-Type" : "application/json"
        },
      }
    );
    dispatch({type: "course/setCourse", payload: res.data.data})
  };
  useEffect(() => {
    dispatch({type: "course/setCourseId", payload: courseId})
    getCourseDetail();
  }, []);



  return (
    <CourseBuildLayout>
      <Stack
        direction="row"
        justify="space-between"
        m="4"
        align="center"
      >
        <Stack direction="column">
          <Heading>{course?.courseName}</Heading>
          <Text>{course?.description}</Text>
        </Stack>

        <Button leftIcon={<AiOutlineSave />}>Save</Button>
      </Stack>
      <Quill />
    </CourseBuildLayout>
  );
};

export default Course;

export { getServerSideProps } from "../../../shared/lib/chakra";

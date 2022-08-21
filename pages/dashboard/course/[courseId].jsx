import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { AiFillCodeSandboxCircle, AiOutlineSave } from "react-icons/ai";
import { Quill, CourseBuildLayout } from "../../../dashboard/components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
export const Course = () => {
  const notify = () => toast("Saved")
  const { course, editorSection } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const router = useRouter();
  const { courseId } = router.query;

  const getCourseDetail = async () => {
    const res = await axios.get(
      `https://e2b008aa-8ef7-4125-8063-532dfb7d0c2e.mock.pstmn.io/getCourse?id=${courseId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "course/setCourse", payload: res.data });
  };

  const updateSection = async () => {
    const res = await axios.patch(
      `https://e2b008aa-8ef7-4125-8063-532dfb7d0c2e.mock.pstmn.io/getSection?id=${editorSection.id}`,
      {
        title: editorSection.title,
        description: editorSection.description,
        content: editorSection.content,
      }
    );
    notify();
  };
  useEffect(() => {
    dispatch({ type: "course/setCourseId", payload: courseId });
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
          <Heading>{course?.title}</Heading>
          <Text>{course?.description}</Text>
        </Stack>

        <Button
          leftIcon={<AiOutlineSave />}
          onClick={updateSection}
        >
          Save
        </Button>
      </Stack>
      {editorSection != "" && (
        <Box
          my="12"
          bg="white"
          rounded="8"
          _dark={{ bg: "gray.900" }}
          mx="6"
          p="8"
        >
          <Flex
            gap="6"
            direction="column"
          >
            <Flex
              gap="2"
              direction="column"
            >
              <Text fontSize="1rem">{editorSection.id}</Text>
              <Text>{editorSection.title}</Text>
              <Text>{editorSection.description}</Text>
            </Flex>

            <Quill value={editorSection.content} />
          </Flex>
        </Box>
      )}
    </CourseBuildLayout>
  );
};

export default Course;

export { getServerSideProps } from "../../../shared/lib/chakra";

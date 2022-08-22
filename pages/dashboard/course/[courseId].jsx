import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { AiFillCodeSandboxCircle, AiOutlineSave } from "react-icons/ai";
import { Quill, CourseBuildLayout } from "../../../dashboard/components";
import axios from "axios";
import { toast } from "react-toastify";
import parse from "html-react-parser";
export const Course = () => {
  const notify = () => toast("Saved");
  const { course, editorSection, editFlag } = useSelector(
    (state) => state.course
  );
  const { token, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const { courseId } = router.query;
  const [previewToggle, setPreviewToggle] = useState(false);
  const getCourseDetail = async () => {
    const res = await axios.get(
      `https://roadmap-backend-host.herokuapp.com/api/v1/course/${courseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: "course/setCourse", payload: res.data.data });
  };
  useEffect(() => {
    dispatch({ type: "course/setSection", payload: "" });
    dispatch({type:"course/setEditFlag", payload: false})
  }, [courseId]);
  const updateSection = async () => {
    const res = await axios.patch(
      `https://roadmap-backend-host.herokuapp.com/api/v1/${editorSection?.type}/${editorSection?.public_id}`,
      {
        order: editorSection.order,
        title: editorSection.title,
        description: editorSection.description,
        content: editorSection.content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: "course/setEditFlag",
      payload: false,
    });
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
          <Heading>{course?.course?.title}</Heading>
          <Text>{course?.course?.description}</Text>
        </Stack>

        {editorSection != "" && <Button
          leftIcon={<AiOutlineSave />}
          onClick={updateSection}
        >
          {editFlag ? "Save" : "Saved"}
        </Button>}
      </Stack>
      <Box
        my="12"
        bg="white"
        rounded="8"
        _dark={{ bg: "gray.900" }}
        mx="6"
        p="8"
      >
        {editorSection == "" && (
          <Text
            fontSize="xl"
            textAlign="center"
          >
            Start Building your Course By Adding Section
          </Text>
        )}
        {editorSection != "" && (
          <>
            <Button  onClick={() => setPreviewToggle((prev) => !prev)}>
              Preview
            </Button>
            {previewToggle ? (
              <Box>
                <div style={{ fontWeight: "unset", fontSize: "unset" }}>
                  {parse(editorSection?.content)}
                </div>
              </Box>
            ) : (
              <Flex
                gap="6"
                direction="column"
              >
                <Flex
                  gap="2"
                  direction="column"
                >
                  <Text fontSize="1rem">{editorSection?.id}</Text>
                  <Text>{editorSection?.title}</Text>
                  <Text>{editorSection?.description}</Text>
                </Flex>

                <Quill value={editorSection?.content} />
              </Flex>
            )}
          </>
        )}
      </Box>
    </CourseBuildLayout>
  );
};

export default Course;

export { getServerSideProps } from "../../../shared/lib/chakra";

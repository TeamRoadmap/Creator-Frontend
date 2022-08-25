import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Flex, Heading, Input, Stack, Text, Editable, EditableInput, EditablePreview, TagLabel } from "@chakra-ui/react";
import { AiFillCodeSandboxCircle, AiOutlineSave , AiFillDelete} from "react-icons/ai";
import { Quill, CourseBuildLayout } from "../../../dashboard/components";
import axios from "axios";
import { toast } from "react-toastify";
import parse from "html-react-parser";
export const Course = () => {
  const notify = () => toast("Saved");
  const { course, editorSection, editFlag, builderHome } = useSelector(
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
    dispatch({ type: "course/setEditFlag", payload: false });
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
    getCourseDetail();
    dispatch({
      type: "course/setEditFlag",
      payload: false,
    });
    notify();
  };
  const deleteSection = async () => {
    const res = await axios.delete(
      `https://roadmap-backend-host.herokuapp.com/api/v1/${editorSection?.type}/${editorSection?.public_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: "course/setSection", payload: "" });
    dispatch({
      type: "course/setEditFlag",
      payload: false,
    });
    getCourseDetail();
  };
  useEffect(() => {
    dispatch({ type: "course/setBuilderHome", payload: true });
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
        <Flex
          gap="2"
          flexWrap="wrap"
        >
          {editorSection !== "" && (
            <Button onClick={() => setPreviewToggle((prev) => !prev)}>
              {previewToggle ? "Open Editor" : "Preview"}
            </Button>
          )}
          {editorSection != "" && (
            <Button
              leftIcon={<AiOutlineSave />}
              onClick={updateSection}
            >
              {editFlag ? "Save" : "Saved"}
            </Button>
          )}
          {editorSection != "" && (
            <Button
              leftIcon={<AiFillDelete />}
              onClick={deleteSection}
            >
              Delete
            </Button>
          )}
        </Flex>
      </Stack>
      <Box
        my="12"
        bg="white"
        rounded="8"
        _dark={{ bg: "gray.900" }}
        mx="6"
        p="8"
      >
        <div></div>
        {builderHome ? (
          <>
            {course.sections == "" ? (
              <Text
                fontSize="xl"
                textAlign="center"
              >
                Start Building your Course By Adding Section
              </Text>
            ) : (
              <Text
                fontSize="xl"
                textAlign="center"
              >
                You already Have started working on the course.
                <br /> Create more Content. Have a good day!
              </Text>
            )}
          </>
        ) : (
          <>
            <div></div>
            {editorSection != "" && (
              <>
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
                      <Text>Edit Title</Text>
                      <Input
                        value={editorSection?.title}
                        onChange={(e) => {
                          dispatch({
                            type: "course/setEditorSectionTitle",
                            payload: e.target.value,
                          });
                          dispatch({
                            type: "course/setEditFlag",
                            payload: true,
                          });
                        }}
                      />
                      <Text>Edit Description</Text>
                      <Input
                        value={editorSection?.description}
                        onChange={(e) => {
                          dispatch({
                            type: "course/setEditorSectionDescription",
                            payload: e.target.value,
                          });
                          dispatch({
                            type: "course/setEditFlag",
                            payload: true,
                          });
                        }}
                      />
                    </Flex>

                    <Quill value={editorSection?.content} />
                  </Flex>
                )}
              </>
            )}
          </>
        )}
      </Box>
    </CourseBuildLayout>
  );
};

export default Course;

export { getServerSideProps } from "../../../shared/lib/chakra";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Editable,
  EditableInput,
  EditablePreview,
  TagLabel,
  Link,
  Code,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  AiFillCodeSandboxCircle,
  AiOutlineSave,
  AiFillDelete,
} from "react-icons/ai";
import { Quill, CourseBuildLayout } from "../../../dashboard/components";
import axios from "axios";
import { toast } from "react-toastify";
import parse, {
  attributesToProps,
  domToReact,
  Element,
} from "html-react-parser";
import Image from "next/image";

const Course = () => {
  const notify = () => toast("Saved");
  const { course, editorSection, editFlag, builderHome } = useSelector(
    (state) => state.course
  );
  const { token, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const { courseId } = router.query;
  const [previewToggle, setPreviewToggle] = useState(false);
  const linkColor = useColorModeValue("purple.500", "purple.200");
  const codeColor = useColorModeValue("gray.200", "gray.700");
  const contentColor = useColorModeValue("gray.700", "gray.200");

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
    dispatch({ type: "course/setBuilderHome", payload: true });
    getCourseDetail();
  };
  useEffect(() => {
    dispatch({ type: "course/setBuilderHome", payload: true });
    dispatch({ type: "course/setCourseId", payload: courseId });
    getCourseDetail();
  }, []);

  const options = {
    replace: (domNode) => {
      // Look for an img tag and replace it with Image.
      if (domNode instanceof Element && domNode.name === "img") {
        const { src, alt } = domNode.attribs;

        return (
          <Image
            src={`${src}`}
            width={`200px`}
            height={`200px`}
            alt={alt}
            layout="intrinsic"
            objectFit="cover"
          />
        );
      }
      if (domNode instanceof Element && domNode.name === "h1") {
        const props = attributesToProps(domNode.attribs);
        return (
          <Heading
            as="h1"
            fontSize="1.2rem"
            color={contentColor}
          >
            {domNode.children[0].data}
          </Heading>
        );
      }
      if (domNode instanceof Element && domNode.name === "h2") {
        const props = attributesToProps(domNode.attribs);
        return (
          <Heading
            as="h1"
            fontSize="1rem"
            color={contentColor}
          >
            {domNode.children[0].data}
          </Heading>
        );
      }
      if (domNode instanceof Element && domNode.name === "a") {
        const props = attributesToProps(domNode.attribs);
        return (
          <Link
            {...props}
            as="a"
            fontSize="1rem"
            color={linkColor}
          >
            {domNode.children[0].data}
          </Link>
        );
      }
      if (domNode instanceof Element && domNode.name === "pre") {
        const props = attributesToProps(domNode.attribs);
        return (
          <Code
            bg={codeColor}
            px="6"
            py="4"
            mb="4"
            rounded="8"
          >
            {domToReact(domNode.children)}
          </Code>
        );
      }
      if (domNode instanceof Element && domNode.name === "iframe") {
        const { src, alt } = domNode.attribs;
        return (
          <iframe
            width="260"
            src={`${src}`}
          >
            {domToReact(domNode.children)}
          </iframe>
        );
      }
      if (domNode instanceof Element && domNode.name === "ol") {
        return (
          <ol style={{ padding: "0 16px" }}>{domToReact(domNode.children)}</ol>
        );
      }
      if (domNode instanceof Element && domNode.name === "ul") {
        return (
          <ul style={{ padding: "0 16px" }}>{domToReact(domNode.children)}</ul>
        );
      }
    },
  };

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
          style={builderHome ? { display: "none" } : {}}
          gap="2"
          flexWrap="wrap"
        >
          {editorSection !== "" && (
            <Button
              isDisabled={builderHome}
              onClick={() => setPreviewToggle((prev) => !prev)}
            >
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
              isDisabled={builderHome}
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
        {builderHome && editFlag === false ? (
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
                      <Text
                        as="h1"
                        fontSize={{ sm: "1rem", md: "1.2rem" }}
                        fontWeight="700"
                        casing="capitalize"
                      >
                        Title: {editorSection?.title}
                      </Text>
                      <Text
                        as="h1"
                        mb="6"
                        fontSize={{ sm: "1rem", md: "1.2rem" }}
                        fontWeight="400"
                        casing="capitalize"
                      >
                        Description: {editorSection?.description}
                      </Text>
                      {parse(`${editorSection?.content}`, options)}
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
                        focusBorderColor="purple.500"
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
                        focusBorderColor="purple.500"
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

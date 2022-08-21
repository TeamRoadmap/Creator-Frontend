import React from "react";
import { coursesectiondata } from "./test-data";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Box,
  Button,
  List,
  ListItem,
  useDisclosure,
  Text,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import CourseSidebarModal from "./course-sidebar-modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { EditIcon } from "@chakra-ui/icons";

export default function Sections() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { course } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const color = useColorModeValue("gray.500", "white");
  const getSectionData = async (sectionId) => {
    const res = await axios.get(
      `https://e2b008aa-8ef7-4125-8063-532dfb7d0c2e.mock.pstmn.io/getSection?id=${sectionId}`
    );
    // const res = await axios.get(
    //   `https://e2b008aa-8ef7-4125-8063-532dfb7d0c2e.mock.pstmn.io/getSubSection?id=${subSectionId}`
    // );
    dispatch({ type: "course/setSection", payload: res.data });
  };
  return (
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.600"
      gap="2"
      aria-label="Main Navigation"
    >
      <Accordion
        allowMultiple
        allowToggle="false"
      >
        {course?.section?.map((sectionData, index) => {
          return (
            <AccordionItem key={sectionData.id}>
              <Flex
                m="2"
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                px="2"
              >
                <Text
                  fontSize="1rem"
                  color="brand.500"
                  _dark={{ color: "white" }}
                >
                  {sectionData.title}
                </Text>
                <Flex alignItems="center">
                  <IconButton
                    icon={<MdModeEdit size="1rem" />}
                    color={color}
                    onClick={() => getSectionData(sectionData.id)}
                  />
                  <AccordionButton w="fit">
                    <AccordionIcon />
                  </AccordionButton>
                </Flex>
              </Flex>

              <AccordionPanel>
                <List px="5">
                  {sectionData.subSection.map((subSec) => {
                    return (
                      <Flex
                        mb="4"
                        direction="row"
                        gap="2"
                        justifyContent="space-between"
                        alignItems="center"
                        key={subSec.id}
                      >
                        <Text
                          fontSize="1rem"
                          color="brand.500"
                          _dark={{ color: "white" }}
                        >
                          {subSec.title}
                        </Text>
                        <IconButton
                          icon={<MdModeEdit size="1rem" />}
                          color={color}
                          onClick={() => getSectionData(sectionData.id)}
                        />
                      </Flex>
                    );
                  })}
                </List>
                <CourseSidebarModal type="Subsection" />
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
      <Box
        mx="3"
        my="5"
        color="brand.500"
        _dark={{ color: "white" }}
      >
        <CourseSidebarModal type="Section" />
      </Box>
    </Flex>
  );
}

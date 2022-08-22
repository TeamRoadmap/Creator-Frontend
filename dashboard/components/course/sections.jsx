import React from "react";
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
import { toast } from "react-toastify";
import { EditIcon } from "@chakra-ui/icons";

export default function Sections() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { course , editFlag } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const notify = (msg) => toast(msg);
  const color = useColorModeValue("gray.500", "white");
  const getSectionData = async (sectionId) => {
    if(editFlag) {
      notify("Please Save Latest Changes")
    }else {
     const res = await axios.get(
      `https://roadmap-backend-host.herokuapp.com/api/v1/section/${sectionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: "course/setSection", payload:{ ...res.data.data.section , type: "section" }}); 
    }
    
  };
  const getSubsectionData = async (id) => {
    if(editFlag){
      notify("Please Save Latest Changes")
    }else {
    const res = await axios.get(
      `https://roadmap-backend-host.herokuapp.com/api/v1/subsection/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: "course/setSection", payload:{ ...res.data.data.subsection , type: "subsection" } });
    }
  }
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
        {course?.sections?.map((sectionData, index) => {
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
                    onClick={() => getSectionData(sectionData.public_id)}
                  />
                  <AccordionButton w="fit">
                    <AccordionIcon />
                  </AccordionButton>
                </Flex>
              </Flex>

              <AccordionPanel>
                <List px="5">
                  {sectionData.subsections?.map((subSec, index) => {
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
                          onClick={() => getSubsectionData(subSec.public_id)}
                        />
                      </Flex>
                    );
                  })}
                </List>
                <CourseSidebarModal order={course?.sections?.subsections?.length ? course?.sections?.subsections?.length + 1 : 1 } type="Subsection" sectionId={sectionData.id} />
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
        <CourseSidebarModal order={course?.sections?.length ? course?.sections?.length + 1 : 1 }  type="Section" />
      </Box>
    </Flex>
  );
}

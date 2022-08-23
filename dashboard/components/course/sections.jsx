import React from "react";
import {
  Flex,
  Box,
  List,
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
      <Box
      >
        {course?.sections?.map((sectionData, index) => {
          return (
              <Box p="1rem">
              <Flex
                my="2"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
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
                </Flex>
              </Flex>

              <Box>
                <List px="">
                  {sectionData.subsections?.map((subSec, index) => {
                    return (
                      <Flex
                      my="2"
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      pl="1rem"
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
              </Box>
              </Box>
          );
        })}
      </Box>
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

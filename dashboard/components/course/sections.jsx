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
} from "@chakra-ui/react";
import { MdModeEdit } from "react-icons/md";
export default function Sections() {
  return (
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.600"
      gap="2"
      aria-label="Main Navigation"
    >
      <Accordion allowMultiple>
        {coursesectiondata.map((sectionData, index) => {
          return (
            <AccordionItem key={sectionData.id}>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  px="2"
                  color="brand.500"
                  _dark={{ color: "white" }}
                >
                  {sectionData.title}
                </Box>
                <Flex gap="0.5rem">
                  <MdModeEdit />
                  <AccordionIcon />
                </Flex>
              </AccordionButton>
              <AccordionPanel>
                <List px="5">
                  {sectionData.subSection.map((subSec) => {
                    return (
                      <ListItem
                        py="2"
                        key={subSec.id}
                        color="brand.500"
                        _dark={{ color: "white" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        {subSec.title}
                        <MdModeEdit />
                      </ListItem>
                    );
                  })}
                </List>
                <Button
                  color="brand.500"
                  _dark={{ color: "white" }}
                  my="5"
                  w="full"
                >
                  + Add Item
                </Button>
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
        <Button w="full">+ Add Item</Button>
      </Box>
    </Flex>
  );
}

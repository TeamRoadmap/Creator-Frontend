import React from "react";
import { Box } from "@chakra-ui/react";
import { CourseSidebar } from "./course-sidebar";

export const CourseBuildLayout = ({ children }) => {
  return (
    <Box
      ml={{ base: 0, md: 60 }}
      transition=".3s ease"
    >
      <Box
        as="section"
        bg="#F9F9F6"
        _dark={{ bg: "gray.800" }}
        minH="100vh"
      >
        <CourseSidebar />
        <Box
          as="main"
          p="4"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

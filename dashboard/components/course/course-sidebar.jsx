import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Button,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import React from "react";
import Sections from "./sections";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
export const CourseSidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const sidebar = useDisclosure();
  const router = useRouter();
  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{ bg: "gray.900" }}
      border
      borderColor={useColorModeValue("gray.100", "gray.700")}
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex
        direction="row"
        mx="5"
        mt="5"
        mb="2"
        gap="5"
      >
        <Button
          w="full"
          p="0"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? <FiMoon /> : <FiSun color="#A0AEC0" />}
        </Button>
        <Button
          w="full"
          p=""
          onClick={() => {
            router.push("/dashboard/courses");
          }}
        >
          Courses
        </Button>
      </Flex>
      {/* side bar's upper part */}
      <Flex
        px="2"
        py="1"
        align="center"
        justify="space-between"
        gap="4"
      >
        <Text
          fontSize="xl"
          ml="2"
          color="brand.500"
          _dark={{ color: "white" }}
          fontWeight="bold"
        >
          Course Builder
        </Text>
        <IconButton
          aria-label="Menu"
          display={{ base: "inline-flex", md: "none" }}
          my="4"
          onClick={sidebar.onClose}
          icon={<AiOutlineLeft />}
          size="sm"
        />
      </Flex>
      <Button
        w="86%"
        m="4"
        align="center"
        onClick={() => {
          dispatch({ type: "course/setBuilderHome", payload: true });
        }}
      >
        Editor Home
      </Button>
      <Text
        px="2"
        pt="4"
        fontSize="xl"
        ml="2"
        color="brand.500"
        _dark={{ color: "white" }}
        fontWeight="bold"
      >
        Sections
      </Text>
      {/* side bar's main content area */}
      <Sections />
      {/* <Flex direction="column" m="5" gap="5">
        <Button
          w="full"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? <FiMoon /> : <FiSun color="#A0AEC0" />}
        </Button>
        <Button
          w="full"
          onClick={() => router.push("/dashboard/courses")}
        >
          Dashboard
        </Button>
      </Flex> */}
    </Box>
  );
  return (
    <Box
      as="section"
      bg="#F9F9F6"
      _dark={{ bg: "gray.800" }}
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent
            w="full"
            borderRight="none"
          />
        </DrawerContent>
      </Drawer>
      <IconButton
        aria-label="Menu"
        display={{
          base: "inline-flex",
          md: "none",
        }}
        mx="10"
        mt="4"
        onClick={sidebar.onOpen}
        icon={<AiOutlineRight />}
        size="md"
      />
    </Box>
  );
};

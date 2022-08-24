import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
  IconButton,
  Button,
  Img,
  Stack,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import {
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import NextLink from "next/link";
// import Courseimg from "/images/react-course.webp";

const CourseCard = ({ title, id, description, public_id }) => {
  const color = useColorModeValue("white", "gray.800");
  const lastUpdatedColor = useColorModeValue("gray.600", "gray.300");
  return (
    <Box
      maxW={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"md"}
      rounded={"md"}
      pos={"relative"}
      zIndex={1}
    >
      <Box maxW="full">
        {/* <Img
          p="4"
          width="100%"
          height="100%"
          style={{ borderRadius: "1.2rem", objectFit: "contain" }}
          src={data.imageURL}
        /> */}
      </Box>

      <Box px="4">
        <Flex
          direction="column"
          gap="2"
        >
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="end"
          >
            <Text
              as="p"
              fontSize="md"
              fontWeight="semibold"
              color={useColorModeValue("gray.700", "gray.200")}
            >
              {title}
            </Text>
          </Flex>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="start"
          >
            <Text
              as="p"
              fontSize="sm"
              color={lastUpdatedColor}
            >
              {description}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Divider
        orientation="horizontal"
        w="100"
        p="2"
      />
      <ButtonGroup
        p="4"
        variant="link"
        bg="none"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Button
          bg="none"
          rightIcon={<AiOutlineEye />}
        >
          Preview
        </Button>

        <Divider
          orientation="vertical"
          w="100"
          p="2"
        />
        <NextLink href={`/dashboard/course/${public_id}`}>
          <Button
            bg="none"
            rightIcon={<AiOutlineEdit />}
          >
            {" "}
            Edit
          </Button>
        </NextLink>
        <Divider
          orientation="vertical"
          w="100"
          p="2"
        />
        <Button
          bg="none"
          rightIcon={<AiOutlineInfoCircle />}
        >
          {" "}
          Info
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default CourseCard;

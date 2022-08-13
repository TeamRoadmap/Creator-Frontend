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

const CourseCard = ({ data }) => {
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
        <Img
          p="4"
          width="100%"
          height="100%"
          style={{ borderRadius: "1.2rem", objectFit: "contain" }}
          src={data.imageURL}
        />
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
              {data.courseName}
            </Text>
            <Text
              as="p"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {data.type}
            </Text>
          </Flex>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="start"
          >
            {data.lastUpdated && (
              <Text
                as="p"
                fontSize="sm"
                color={lastUpdatedColor}
              >
                Last Updated on - {data.lastUpdated}
              </Text>
            )}
            <Text
              as="p"
              fontSize="sm"
              color={lastUpdatedColor}
            >
              By: {data.tutor}
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
        p="1"
        variant="ghost"
      >
        <Button
          bg="none"
          rightIcon={<AiOutlineEye />}
        >
          Preview
        </Button>
        <Button
          bg="none"
          rightIcon={<AiOutlineEdit />}
        >
          {" "}
          Edit
        </Button>
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

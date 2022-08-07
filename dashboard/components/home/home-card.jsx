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
} from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const HomeCard = ({ data }) => {
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

      <Box p="4">
        <Flex
          direction="column"
          gap="4"
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
            alignItems="end"
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

            {data.edit && (
              <Button
                px="4"
                py="0"
                rightIcon={<AiOutlineEdit />}
                fontSize="xs"
              >
                Edit
              </Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeCard;

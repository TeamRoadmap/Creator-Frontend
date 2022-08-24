import {
  Flex,
  Circle,
  Box,
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
import NextLink from "next/link";
import Image from "next/image";

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
      <Box
        maxW="full"
        p="2"
        mb="8"
      >
        {data?.image !== null ? (
          <Image
            alt="img"
            p="4"
            width="4"
            height="2"
            layout="responsive"
            style={{
              borderRadius: "8px",
              objectFit: "contain",
            }}
            src={data?.image}
          />
        ) : (
          <Image
            alt="dummyimg"
            p="4"
            width="4"
            height="2"
            layout="responsive"
            style={{
              borderRadius: "8px",
              objectFit: "contain",
            }}
            src="/images/dummy-img.webp"
          />
        )}
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
              {data.title}
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
            {/* {data.lastUpdated && ( */}
            <Text
              as="p"
              fontSize="sm"
              color={lastUpdatedColor}
            >
              Last Updated on - {data.lastUpdated}
            </Text>
            <NextLink href={`/dashboard/course/${data.public_id}`}>
              <Button
                px="4"
                py="0"
                rightIcon={<AiOutlineEdit />}
                fontSize="xs"
              >
                Edit
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeCard;

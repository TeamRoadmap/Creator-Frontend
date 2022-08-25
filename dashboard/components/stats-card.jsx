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
  StatLabel,
  Stat,
  StatNumber,
  StatHelpText,
  Heading,
  StatArrow,
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
import { BiUpvote } from "react-icons/bi";

const StatsCard = ({
  title,
  id,
  description,
  public_id,
  bookmarks,
  enrollment,
  image,
  votes,
}) => {
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
      {/* <Box maxW="full">
        {image !== null && (
          <Img
            p="4"
            width="100%"
            height="100%"
            style={{ borderRadius: "1.2rem", objectFit: "contain" }}
            src={image}
          />
        )}
      </Box> */}

      <Flex
        direction="column"
        p="4"
        m="2"
        gap="6"
      >
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
              fontSize="xl"
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
              fontSize="md"
              color={lastUpdatedColor}
            >
              {description}
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          gap="4"
          align="left"
        >
          <Text
            as="p"
            fontSize="lg"
            fontWeight="semibold"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            Votes
          </Text>
          <Flex direction="row">
            <Stat>
              <StatLabel>Upvotes</StatLabel>
              <StatNumber>{votes.upvotes}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                Upvotes
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel> Downvotes</StatLabel>
              <StatNumber>{votes.downvotes}</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" /> Downvotes
              </StatHelpText>
            </Stat>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          gap="4"
          align="left"
        >
          <Text
            as="p"
            fontSize="lg"
            fontWeight="semibold"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            Total Bookmarks
          </Text>
          <Flex direction="row">
            <Stat>
              <StatNumber>{bookmarks.count}</StatNumber>
              <StatHelpText>Bookmarks</StatHelpText>
            </Stat>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          gap="4"
          align="left"
        >
          <Text
            as="p"
            fontSize="lg"
            fontWeight="semibold"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            Total Enrollments
          </Text>
          <Flex direction="row">
            <Stat>
              <StatNumber>{enrollment?.count}</StatNumber>
              <StatHelpText>Students Enrolled</StatHelpText>
            </Stat>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default StatsCard;

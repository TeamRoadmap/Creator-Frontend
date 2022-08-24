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
  Stack,
  ButtonGroup,
  Divider,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import NextLink from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const CourseCard = ({ title, id, description, public_id, image, type }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.user);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: title,
      description: description,
    },
  });
  const color = useColorModeValue("white", "gray.800");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const lastUpdatedColor = useColorModeValue("gray.600", "gray.300");
  const getCourses = async () => {
    const res = await axios.get(
      `https://roadmap-backend-host.herokuapp.com/api/v1/course?creatorId=${user?.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: "course/setCourses", payload: res.data.data });
  };
  const onSubmit = async (data) => {
    const res = await axios.patch(
      `https://roadmap-backend-host.herokuapp.com/api/v1/course/${public_id}`,
      {
        title: data.title,
        description: data.description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getCourses();
    onClose();
  };
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
        mb="4"
      >
        {image !== null ? (
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
            src={image}
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
            <Flex
              alignItems="center"
              gap="2"
            >
              <Text
                as="p"
                fontSize="lg"
                casing="capitalize"
                fontWeight="semibold"
                color={useColorModeValue("gray.700", "gray.200")}
              >
                {title}
              </Text>
              <Box
                onClick={onOpen}
                cursor="pointer"
              >
                <AiOutlineEdit />
              </Box>
              <Modal
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>Edit Course Details</ModalHeader>
                    <ModalBody>
                      <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input
                          {...register("title")}
                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input
                          {...register("description")}
                          required
                        />
                      </FormControl>
                    </ModalBody>
                    {/* </ModalContent> */}
                    <ModalFooter>
                      <Button
                        leftIcon={<AiOutlineCheck />}
                        bg={"purple.600"}
                        color={"white"}
                        mr={3}
                        type="submit"
                      >
                        Save
                      </Button>
                      <Button
                        type="button"
                        onClick={onClose}
                      >
                        Cancel
                      </Button>
                    </ModalFooter>
                  </form>
                </ModalContent>
              </Modal>
            </Flex>
            <Text
              as="p"
              fontSize="md"
              casing="capitalize"
              fontWeight="bold"
              color={useColorModeValue("gray.700", "gray.200")}
            >
              {type}
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
        {/* <Divider
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
        </Button> */}
      </ButtonGroup>
    </Box>
  );
};

export default CourseCard;

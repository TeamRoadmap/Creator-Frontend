import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
const CourseSidebarModal = ({ type , sectionId, order }) => {
  const dispatch = useDispatch();
  const { courseId , course } = useSelector((state) => state.course);
  const {token} = useSelector((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit , reset} = useForm();
  const initialRef = useRef(null);
  const getUpdatedCourse = async () => {
    const res = await axios.get(
      `https://roadmap-backend-host.herokuapp.com/api/v1/course/${courseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: "course/setCourse", payload: res.data.data });
  }
  const addSectionPost = async (data) => {
    const res = await axios.post(
      "https://roadmap-backend-host.herokuapp.com/api/v1/section",
      {
        order: order,
        title: data.title,
        description: data.description,
        content: "",
        course_id: course?.course?.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getUpdatedCourse();
    onClose();
    reset({ title: "", description: "" });
  };
  const addSubSectionPost = async(data) => {
    const res = await axios.post(
      "https://roadmap-backend-host.herokuapp.com/api/v1/subsection",
      {
        order: order,
        title: data.title,
        description: data.description,
        content: "",
        section_id: sectionId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getUpdatedCourse();
    onClose();
    reset({ title: "", description: "" });
  }
  const onSubmit = (data) => {
    if(type == "Section") {
       addSectionPost(data)
    }else {
      addSubSectionPost(data)
    }
   
  };
  return (
    <>
      <Button
        onClick={onOpen}
        color="brand.500"
        _dark={{ color: "white" }}
        my="5"
        w="full"
      >
        + Add {type}
      </Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Create your {type}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>{type} Title</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder={`${type} title`}
                  {...register(`title`)}
                  required
                />
              </FormControl>
              <FormControl mt={4}>
                <Text mb="8px">{type} Description</Text>
                <Textarea
                  placeholder={`${type} Description`}
                  {...register(`description`, {
                    maxLength: {
                      value: 150,
                      message: "Please Enter word less than 150 Character",
                    },
                  })}
                  required
                />
              </FormControl>
            </ModalBody>

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
    </>
  );
};

export default CourseSidebarModal;

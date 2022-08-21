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
import { useSelector } from "react-redux";
const CourseSidebarModal = ({ type }) => {
  const { courseId } = useSelector((state) => state.course);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit , reset} = useForm();
  const initialRef = useRef(null);
  const getUpdatedCourse = async () => {

  }
  const addSectionPost = async (data) => {
    const res = await axios.post(
      "https://e2b008aa-8ef7-4125-8063-532dfb7d0c2e.mock.pstmn.io/addsection",
      {
        title: data.title,
        description: data.description,
        content: "",
        courseId: courseId,
      }
    );
    // const res = await axios.post(
    //   "https://e2b008aa-8ef7-4125-8063-532dfb7d0c2e.mock.pstmn.io/addSubSection",
    //   {
    //     title: data.title,
    //     description: data.description,
    //     content: "",
    //     sectionId: sectionId,
    //   }
    // );
    onClose();
    reset({ title: "", description: "" });
  };
  const onSubmit = (data) => {
    addSectionPost(data)
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

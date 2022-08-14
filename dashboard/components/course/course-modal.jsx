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
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useForm } from "react-hook-form";

const CourseModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = useForm();
  const initialRef = useRef(null);
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Create your Course</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Course Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Course Name"
                {...register("courseName")}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Course Type</FormLabel>
              <Select placeholder="Select Type" {...register("courseType")}>
                <option value="frontend">Front-End</option>
                <option value="backend">Back-End</option>
                <option value="devops">DevOps</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <Text mb="8px">Description</Text>
              <Textarea placeholder="Description" {...register("description",{
                maxLength:{
                  value: 25,
                  message:"Please Enter word less than 25 Character"
                }
              })} />
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
            <Button type="button" onClick={onClose}>Cancel</Button>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CourseModal;

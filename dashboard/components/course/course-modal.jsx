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

const CourseModal = ({ isOpen, onClose }) => {
  const initialRef = useRef(null);
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Course</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Course Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Course Name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Course Type</FormLabel>
              <Select placeholder="Select Type">
                <option value="frontend">Front-End</option>
                <option value="backend">Back-End</option>
                <option value="devops">DevOps</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <Text mb="8px">Description</Text>
              <Textarea placeholder="Description" />
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
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CourseModal;

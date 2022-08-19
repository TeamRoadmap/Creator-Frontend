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
} from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useForm } from "react-hook-form";

const CourseSidebarModal = ({ isOpen, onClose, type }) => {
  const { register, handleSubmit } = useForm();
  const initialRef = useRef(null);
  const onSubmit = (data) => {
    console.log(data);
  };
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
            <ModalHeader>Create your {type}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>{type} Title</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="title"
                  {...register("title")}
                />
              </FormControl>
              <FormControl mt={4}>
                <Text mb="8px">{type} Description</Text>
                <Textarea
                  placeholder="Description"
                  {...register("description", {
                    maxLength: {
                      value: 25,
                      message: "Please Enter word less than 25 Character",
                    },
                  })}
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

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

const CourseSidebarModal = ({ type }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();
  const initialRef = useRef(null);
  const onSubmit = (data) => {
    console.log(data);
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
                  {...register(`${type}Title`)}
                />
              </FormControl>
              <FormControl mt={4}>
                <Text mb="8px">{type} Description</Text>
                <Textarea
                  placeholder={`${type} Description`}
                  {...register(`${type}Description`, {
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

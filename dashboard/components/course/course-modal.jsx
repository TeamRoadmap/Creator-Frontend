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
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const CourseModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { token } = useSelector((state) => state.user);
  const { courses } = useSelector((state) => state.course);
  const { register, handleSubmit, reset } = useForm();
  const [type, setType] = useState();
  const initialRef = useRef(null);
  const notify = () => toast("Course Created successfully");

  const onSubmit = async (data, e) => {
    console.log(data);
    const res = await axios.post(
      "https://roadmap-backend-host.herokuapp.com/api/v1/course",
      {
        title: data?.title,
        description: data?.description,
        types: [data?.types],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    e.target.reset();

    console.log(res);
    router.push(`/dashboard/course/${res.data.data.course.public_id}`);
    notify();
  };

  const getType = async () => {
    const res = await axios.get(
      `https://roadmap-backend-host.herokuapp.com/api/v1/coursetype`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setType(res.data.data.courseTypes);
  };

  useEffect(() => {
    getType();
    onSubmit();
    console.log(type);
  }, []);

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
                  placeholder="Course Name"
                  {...register("title")}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Course Type</FormLabel>
                <Select
                  placeholder="Select Type"
                  {...register("types")}
                >
                  {type?.map((type, id) => {
                    return (
                      <option
                        key={id}
                        value={type.public_id}
                      >
                        {type.name}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <Text mb="8px">Description</Text>
                <Textarea
                  placeholder="Description"
                  {...register("description", {
                    maxLength: {
                      value: 150,
                      message: "Please Enter word less than 150 Character",
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

export default CourseModal;

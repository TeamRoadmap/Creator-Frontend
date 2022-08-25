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
import { toast } from "react-toastify";
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
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const uploadFile = () => {
    const formData = new FormData();

    formData.append("image", image);

    let url = `https://roadmap-backend-host.herokuapp.com/api/v1/image`;

    axios
      .post(url, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // then print response status
        console.log(res.data.data.url);
        setUrl(res.data.data.url);
      });
  };
  const onSubmit = async (data, e) => {
    console.log(data);
    const res = await axios.post(
      "https://roadmap-backend-host.herokuapp.com/api/v1/course",
      {
        title: data?.title,
        description: data?.description,
        image: url,
        types: [data?.types],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    e.target.reset();
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
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Course Type</FormLabel>
                <Select
                  placeholder="Select Type"
                  {...register("types")}
                  required
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
              <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Description"
                  {...register("description", {
                    maxLength: {
                      value: 150,
                      message: "Please Enter word less than 150 Character",
                    },
                  })}
                  required
                />
              </FormControl>
              <FormControl
                mt={4}
                display="flex"
                flexDirection="column"
                gap="2"
              >
                <FormLabel>Course Banner</FormLabel>
                <Input
                  padding="0.2rem 0.5rem"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <Button
                  bg={"purple.600"}
                  color={"white"}
                  onClick={uploadFile}
                  width="fit-content"
                >
                  Upload
                </Button>
              </FormControl>
              {url ? (
                <>
                  <h2>Image uploaded successfully</h2>
                  <img src={url}></img>
                </>
              ) : (
                <Text>No Image Uploaded</Text>
              )}
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

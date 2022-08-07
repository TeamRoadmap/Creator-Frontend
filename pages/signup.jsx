import Layout from "../shared/components/layout";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Link,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { signUpHandler } from "../redux/feature/user/thunk";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (isAuth) {
      router.push("/dashboard", undefined, { shallow: true });
    }
  }, [isAuth]);
  const onSubmit = (data) => {
    dispatch(signUpHandler(data));
  };

  return (
    <Layout>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
        >
          <Stack align={"center"}>
            <Heading
              fontSize={"4xl"}
              textAlign={"center"}
            >
              Sign up
            </Heading>
            <Text
              fontSize={"lg"}
              color={"gray.600"}
            >
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl
                      id="firstName"
                      isRequired
                    >
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        focusBorderColor="purple.500"
                        {...register("firstName")}
                        required
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type="text"
                        focusBorderColor="purple.500"
                        {...register("lastName")}
                        required
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl
                  id="email"
                  isRequired
                >
                  <FormLabel>Email address</FormLabel>
                  <Input
                    focusBorderColor="purple.500"
                    type="email"
                    {...register("email", {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message:
                          "Only alphabets, numbers and hyphens (-) are allowed",
                      },
                    })}
                    required
                  />
                </FormControl>
                <FormControl
                  id="password"
                  isRequired
                >
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      focusBorderColor="purple.500"
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      required
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack
                  spacing={10}
                  pt={2}
                >
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"purple.600"}
                    color={"white"}
                    _hover={{
                      bg: "purple.800",
                    }}
                    type="submit"
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <NextLink
                      href="/login"
                      passHref
                    >
                      <Link color="purple.500">Login</Link>
                    </NextLink>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Layout>
  );
}

export { getServerSideProps } from "../shared/lib/chakra";

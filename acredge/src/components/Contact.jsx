import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";

import React from "react";

import { IoCall } from "react-icons/io5";

function Contact() {
  return (
    <>
      <Container maxW="container.xl" textAlign={"left"} p={"0px"} pb={"20px"}>
        {/* 1st Parts  */}

        <Box
          w={"350px"}
          boxShadow={
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
          }
          borderRadius={"5px"}
          p={"15px 20px"}
          bg={"#fff"}
          mt={"30px"}
        >
          {/* First Heading  */}

          <Box
            display={"flex"}
            alignItems={"center"}
            alignContent={"center"}
            justifyContent={"flex-start"}
            p={"10px 0px"}
            gap={"10px"}
            bg={"#fff"}
            // border={"1px solid red"}
          >
            <Box border={"3px solid #59be92"} borderRadius={"50%"} p={"5px"}>
              <IoCall color="#59be92" fontSize={"20px"} />
            </Box>
            <Heading fontSize={"17px"} color={"#333333"}>
              Contact our Real Estate Experts
            </Heading>
          </Box>

          {/* contact form  */}

          <Box
            boxShadow={
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
            }
            p={"15px"}
            bg={"#fff"}
            borderRadius={"5px"}
          >
            <Box bg={"#fff"}>
              <Stack spacing={4} bg={"#fff"}>
                <InputGroup>
                  <Input
                    bg={"#fff"}
                    type="text"
                    placeholder="Name"
                    border={"1px solid #e9e9e9"}
                    _focus={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
                      border: "none",
                    }}
                    _active={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
                      border: "none",
                    }}
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    bg={"#fff"}
                    type="email"
                    placeholder="Email ID"
                    border={"1px solid #e9e9e9"}
                    _focus={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
                      border: "none",
                    }}
                    _active={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
                      border: "none",
                    }}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon bg={"#fff"}>+91</InputLeftAddon>
                  <Input
                    bg={"#fff"}
                    type="tel"
                    placeholder="phone number"
                    border={"1px solid #e9e9e9"}
                    _focus={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
                      border: "none",
                    }}
                    _active={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
                      border: "none",
                    }}
                  />
                </InputGroup>

                <InputGroup size="sm">
                  <Button
                    w={"100%"}
                    bg={"#58bf93"}
                    color={"white"}
                    _hover={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
                    }}
                    p={"22px "}
                  >
                    {" "}
                    Contact Now
                  </Button>
                </InputGroup>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Contact;

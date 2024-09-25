import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoCall } from "react-icons/io5";

function Contact() {
  return (
    <>
      <Container maxW="container.xl" textAlign={"left"} p={"0px"}>
        <Box >
          <Heading fontSize={"14px"} color={"#333333"}>
            Shortlisted Projects
          </Heading>
        </Box>

        {/* First part  */}
        <Box
          w={"350px"}
          p={"10px"}
          textAlign={"center"}
          mt={"30px"}
          boxShadow={
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
          }
          borderRadius={"5px"}
          bg={"#fff"}
        >
          <Heading
            fontSize={"14px"}
            textAlign={"center"}
            bg={"#fff"}
            color={"#333333"}
          >
            No Shortlisted Properties Yet!
          </Heading>
          <Box mt={"10px"} bg={"#fff"}>
            <Text
              display={"flex"}
              alignItems={"center"}
              alignContent={"center"}
              justifyContent={"center"}
              color={"#333333"}
              bg={"#fff"}
            >
              Tap icon{" "}
              <Text as="span" borderRadius={"50%"} bg={"#e7faf1"} p={"4px"}>
                <CiHeart color="#58bf93" />
              </Text>{" "}
              to shortlist and see them here,
            </Text>
            <Text bg={"#fff"}>Then you’ll be able to compare them too</Text>
          </Box>
        </Box>

        {/* 2nd Parts  */}

        <Box
          w={"350px"}
          boxShadow={
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
          }
          borderRadius={"5px"}
          p={"20px"}
          bg={"#fff"}
          mt={"30px"}
        >
          {/* First Heading  */}

          <Box
            display={"flex"}
            alignItems={"center"}
            alignContent={"center"}
            justifyContent={"flex-start"}
            p={"5px"}
            gap={"10px"}
            bg={"#fff"}
          >
            <Box border={"2px solid #59be92"} borderRadius={"50%"} p={"5px"}>
              <IoCall color="#59be92" />
            </Box>
            <Heading fontSize={"14px"}>Contact our Real Estate Experts</Heading>
          </Box>

          {/* contact form  */}

          <Box
            boxShadow={
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
            }
            p={"10px"}
            bg={"#fff"}
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

import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ProjectListing from "./ProjectListing";
import Contact from "./Contact";
import { CiHeart } from "react-icons/ci";

function Projects() {
  const [selectedButton, setSelectedButton] = useState("projects");
  const [selectButton, setSelectButton] = useState("all");
  return (
    <>
      <Container maxW="container.2xl" bg={"#f7f7f7"}>
        <Container maxW="container.xl" p={"0px"}>
          <Box
            display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
            fontSize={"12px"}
            justifyContent={"flex-start"}
            gap={"5px"}
            mb={"20px"}
          >
            <Text>Home</Text>
            <Text>New Projects in Guwahati</Text>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            gap={"30px"}
            w={"100%"}
          >
            <Box w={{ lg: "60%", md: "100%", base: "100%", sm: "100%" }}>
              <Box>
                <Heading
                  fontSize={"14px"}
                  display={{
                    base: "none",
                    sm: "none",
                    lg: "block",
                    md: "block",
                  }}
                  color={"#424242"}
                >
                  New Projects in Guwahati
                </Heading>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  fontSize={"14px"}
                  mt={"5px"}
                  w={{ base: "100%" }}
                >
                  <Text color={"#424242"}>Showing 51 Projects</Text>
                  <Text color={"#424242"}>Last Updated: Nov 28, 2023</Text>
                </Box>

                <Box
                  mt={"20px"}
                  display={{ base: "flex", sm: "flex" }}
                  w={{ base: "100%", sm: "100%" }}
                >
                  <Button
                    p={"0px 50px"}
                    onClick={() => setSelectedButton("projects")}
                    bg={selectedButton === "projects" ? "white" : "#e6e6e6"}
                    color={selectedButton === "projects" ? "#674ea0" : "#000"}
                    boxShadow={
                      selectedButton === "projects"
                        ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
                        : "none"
                    }
                    _hover={"none"}
                  >
                    Projects
                  </Button>
                  <Button
                    p={"0px 50px"}
                    onClick={() => setSelectedButton("resale")}
                    bg={selectedButton === "resale" ? "white" : "#e6e6e6"}
                    color={selectedButton === "resale" ? "#674ea0" : "#000"}
                    boxShadow={
                      selectedButton === "resale"
                        ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
                        : "none"
                    }
                    _hover={"none"}
                  >
                    Resale
                  </Button>
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={"30px"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={"5px"}
                >
                  <Button
                    background={"transparent"}
                    border={
                      selectButton === "all"
                        ? "1px solid #58bf93"
                        : "1px solid #e2e2e2"
                    }
                    _hover={{ border: "1px solid #58bf93" }}
                    onClick={() => setSelectButton("all")}
                    fontSize={"12px"}
                    color={"#666666"}
                  >
                    All
                  </Button>

                  <Box>
                    <Button
                      background={"transparent"}
                      border={
                        selectButton === "ready"
                          ? "1px solid #58bf93"
                          : "1px solid #e2e2e2"
                      }
                      _hover={{ border: "1px solid #58bf93" }}
                      onClick={() => setSelectButton("ready")}
                      fontSize={"12px"}
                      color={"#666666"}
                    >
                      Ready To Move
                    </Button>
                  </Box>

                  <Box>
                    <Button
                      background={"transparent"}
                      border={
                        selectButton === "affordable"
                          ? "1px solid #58bf93"
                          : "1px solid #e2e2e2"
                      }
                      _hover={{ border: ".5px solid #58bf93" }}
                      onClick={() => setSelectButton("affordable")}
                      fontSize={"12px"}
                      color={"#666666"}
                    >
                      Affordable
                    </Button>
                  </Box>
                </Box>
                <Box
                  display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
                  alignItems={"center"}
                  border={"1px solid #e2e2e2 "}
                  bg={"white"}
                  p={"4px 8px"}
                  borderRadius={"5px"}
                >
                  <Text>Sort by</Text>
                  <IoIosArrowDown />
                </Box>
              </Box>

              <Box mt={"20px"} w={"100%"}>
                <ProjectListing />
              </Box>
            </Box>

            {/* Contact component - Sticky */}
            <Box
              w={{ lg: "40%" }}
              // Make sure there is no overflow constraint
              display={{ sm: "none", base: "none", md: "none", lg: "block" }}
            >
              <Box>
                <Box>
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
                      <Text
                        as="span"
                        borderRadius={"50%"}
                        bg={"#e7faf1"}
                        p={"4px"}
                      >
                        <CiHeart color="#58bf93" />
                      </Text>{" "}
                      to shortlist and see them here,
                    </Text>
                    <Text bg={"#fff"}>
                      Then you’ll be able to compare them too
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box
                position={"sticky"}
                top={"70px"}
                h={"fit-content"} // Ensure the component doesn't overflow
                overflow={"visible"}
              >
                <Contact />
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default Projects;

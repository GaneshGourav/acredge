import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ProjectListing from "./ProjectListing";
import Contact from "./Contact";

function Projects() {
  const [selectedButton, setSelectedButton] = useState("projects");
  const [selectButton, setSelectButton] = useState("all");
  return (
    <>
      <Container maxW="container.2xl" bg={"#f7f7f7"}>
        {/* First heading */}

        <Container maxW="container.xl">
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
                  <Text>Showing 51 Projects</Text>
                  <Text>Last Updated: Nov 28, 2023</Text>
                </Box>

                {/* Projects and Resale button  */}
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

              {/* Category buttons  */}
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
                        ? "1px solid green"
                        : "1px solid #e2e2e2"
                    }
                    _hover={{ border: "2px solid green" }}
                    onClick={() => setSelectButton("all")}
                    fontSize={"12px"}
                    color={"#666666"}
                  >
                    All
                  </Button>

                  {/* Other buttons */}
                  <Box>
                    <Button
                      background={"transparent"}
                      border={
                        selectButton === "ready"
                          ? "1px solid green"
                          : "1px solid #e2e2e2"
                      }
                      _hover={{ border: "2px solid green" }}
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
                          ? "1px solid green"
                          : "1px solid #e2e2e2"
                      }
                      _hover={{ border: "2px solid green" }}
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

              {/* Importing ProjectListing Component  */}
              <Box mt={"20px"} w={"100%"}>
                <ProjectListing />
              </Box>
            </Box>

            {/* Importing Contact Components  */}
            <Box
              w={"40%"}
              position={"sticky"}
              display={{ sm: "none", base: "none", md: "none", lg: "block" }}
            >
              <Contact />
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default Projects;

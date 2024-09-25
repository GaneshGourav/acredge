import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      <Container
        maxW="container.2xl"
        sx={{ bg: "#000 !important" }}
        position={"relative"}
        pb={"30px"}
      >
        <Container
          maxW="container.lg"
          p={"3px 15px"}
          mt={"20px"}
          sx={{ bg: "#000 !important" }}
          pb={"20px"}
        >
          {/* first Section  */}

          <Box
            display={"flex"}
            justifyContent={"space-around"}
            sx={{ bg: "#000 !important" }}
          >
            <Box
              mt={"30px"}
              display={"flex"}
              justifyContent={"space-around"}
              flexDirection={{
                base: "column",
                sm: "column",
                lg: "row",
                md: "row",
              }}
              w={"100%"}
              sx={{ bg: "#000 !important" }}
            >
              <Box bg={"#000"} mb={"10px"}>
                <Text color={"white"} bg={"#000"}>
                  COMPANY
                </Text>
                <Box>
                  <Text color={"white"} bg={"#000"}>
                    About us
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Creers
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Services
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Contact US
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Terms & Conditions
                  </Text>
                </Box>
              </Box>
              <Box bg={"#000"} mb={"10px"}>
                <Text color={"white"} bg={"#000"}>
                  NETWOK SITES
                </Text>
                <Box>
                  <Text color={"white"} bg={"#000"}>
                    About us
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Creers
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Services
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Contact US
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Terms & Conditions
                  </Text>
                </Box>
              </Box>
              <Box bg={"#000"} mb={"10px"}>
                <Text color={"white"} bg={"#000"}>
                  SOLUTIONS
                </Text>
                <Box>
                  <Text color={"white"} bg={"#000"}>
                    About us
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Creers
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Services
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Contact US
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Terms & Conditions
                  </Text>
                </Box>
              </Box>
              <Box bg={"#000"} mb={"10px"}>
                <Text color={"white"} bg={"#000"}>
                  RESOURCES
                </Text>
                <Box>
                  <Text color={"white"} bg={"#000"}>
                    About us
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Creers
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Services
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Contact US
                  </Text>
                  <Text color={"white"} bg={"#000"}>
                    Terms & Conditions
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>

        <hr style={{ color: "#ba4242", background: "#171717" }} />

        <Text textAlign={"center"} bg={"#000"} color={"#454545"} mt={"20px"}>
          © 2024 www.squareyards.com. All rights reserved.
        </Text>
      </Container>
    </>
  );
}

export default Footer;

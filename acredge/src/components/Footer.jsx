import { Box, Container, Grid, Img, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      <Container
        maxW="container.2xl"
        sx={{ bg: "#000 !important" }}
        position={"relative"}
        pb={"30px"}
        pt={"20px"}
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
            // display={"flex"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}
            sx={{ bg: "#000 !important" }}
          >
            <Grid
              templateColumns={{
                lg: "repeat(5, 1fr)",
                md: "repeat(5, 1fr)",
                sm: "repeat(5, 1fr)",
                base: "repeat(2, 1fr)",
              }}
              gap={6}
              justifyItems="start"
              sx={{ bg: "#000 !important" }}
            >
              <Box bg={"#000"} mb={"10px"}>
                <Text
                  fontWeight={"600"}
                  mb={"10px"}
                  color={"#fff"}
                  fontSize={"14px"}
                >
                  COMPANY
                </Text>
                <Box color={"#fff"} fontSize={"12px"}>
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
                <Text
                  fontWeight={"600"}
                  mb={"10px"}
                  color={"#fff"}
                  fontSize={"14px"}
                >
                  NETWORK SITES
                </Text>
                <Box color={"#fff"} fontSize={"12px"}>
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
                <Text
                  fontWeight={"600"}
                  mb={"10px"}
                  color={"#fff"}
                  fontSize={"14px"}
                >
                  SOLUTIONS
                </Text>
                <Box color={"#fff"} fontSize={"12px"}>
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
                <Text
                  fontWeight={"600"}
                  mb={"10px"}
                  color={"#fff"}
                  fontSize={"14px"}
                >
                  RESOURCES
                </Text>
                <Box color={"#fff"} fontSize={"12px"}>
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
            </Grid>
          </Box>
          <hr style={{ marginTop: "20px", border: "0.1px solid #666666" }} />
        </Container>

        <Container maxW="container.lg" pb={"20px"} pt={"10px"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
          >
            <Box
              w={{ lg: "30%", md: "100%", sm: "100%", base: "100%" }}
              mb={"20px"}
            >
              <Text
                color={"#fff"}
                fontWeight={"600"}
                mb={"10px"}
                fontSize={"14px"}
              >
                ABOUT US
              </Text>

              <Text color={"#fff"} fontSize={"12px"}>
                Square Yards is India's largest Integrated real estate
                marketplace, with category leadership presence across multiple
                touchpoints of consumer home ownership journey. With
                Urbanisation and rising disposable incomes as the core theme,
                Square Yards, with 8mn+ monthly traffic and ~USD 5bn+ GTV, is
                the largest and asset light proxy play to the growing
                residential demand story of India. One of the few Indian start
                ups to taste global success with presence in 100+ cities across
                9 countries, Square Yards is at the forefront of tech adoption
                in the sector, with multiple patents across VR/AI domains.
              </Text>
            </Box>

            <Box
              w={{ lg: "30%", md: "30%", sm: "100%", base: "100%" }}
              mb={"20px"}
            >
              <Text
                fontWeight={"600"}
                mb={"10px"}
                color={"#fff"}
                fontSize={"14px"}
              >
                CONNECT WITH US
              </Text>
              <Text color={"#fff"} fontSize={"12px"}>
                Write to us at <br />
                connect@squareyards.com
              </Text>{" "}
              <br />
              <Text color={"#fff"} fontSize={"12px"}>
                Existing Clients <br />
                customercare@squareyards.com
              </Text>{" "}
              <br />
              <Text color={"#fff"} fontSize={"12px"}>
                Job/Career Related <br />
                careers@squareyards.com
              </Text>
            </Box>
            <Box w={{ lg: "30%", md: "30%", sm: "100%", base: "100%" }}>
              <Text
                fontWeight={"600"}
                mb={"20px"}
                color={"#fff"}
                fontSize={"14px"}
              >
                EXPERIENCE SQUAREYARDS APP ON MOBILE
              </Text>
              <Box display={"flex"} justifyContent={"flex-start"} gap={"15px"}>
                <Box>
                  <Img
                    src="https://static.squareyards.com/ui-assets/images/google-play.png"
                    alt="google-playstore-logo"
                  />
                </Box>
                <Box>
                  <Img
                    src="https://static.squareyards.com/ui-assets/images/app-store.png"
                    alt="apple-playstore-logo"
                  />
                </Box>
              </Box>{" "}
              <br />
              <br />
              <Text
                fontWeight={"600"}
                mb={"10px"}
                fontSize={"14px"}
                color={"#fff"}
              >
                KEEP IN TOUCH
              </Text>
              <Box display={"flex"} justifyContent={"flex-start"} gap={"10px"}>
                <Box>
                  <Img
                    src="https://img.squareyards.com/ui-assets/images/facebook.svg"
                    alt="facebook-logo"
                  />
                </Box>
                <Box>
                  <Img
                    src="https://img.squareyards.com/ui-assets/images/linkedin.svg"
                    alt="linkedin-logo"
                  />
                </Box>
                <Box>
                  <Img
                    src="https://img.squareyards.com/ui-assets/images/youtube.svg"
                    alt="youtube-logo"
                  />
                </Box>
                <Box>
                  <Img
                    src="https://img.squareyards.com/ui-assets/images/instagram.svg"
                    alt="insta-logo"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <hr style={{ marginTop: "20px", border: "0.1px solid #666666" }} />
        </Container>

        <Text
          textAlign={"center"}
          bg={"#000"}
          color={"#454545"}
          mt={"5px"}
          display={{ lg: "block", md: "none", sm: "none", base: "none" }}
        >
          © 2024 www.squareyards.com. All rights reserved.
        </Text>
      </Container>
    </>
  );
}

export default Footer;

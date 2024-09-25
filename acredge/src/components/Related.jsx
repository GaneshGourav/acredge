import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function RelatedSearch() {
  return (
    <>
      <Container
        maxW="container.2xl"
        sx={{ bg: "#fff !important" }}
        position={"relative"}
        pb={"30px"}
      >
        <Container
          maxW="container.xl"
          p={"3px 15px"}
          mt={"20px"}
          sx={{ bg: "#fff !important" }}
          pb={"20px"}
        >
          <Box sx={{ bg: "#fff !important" }} mt={"20px"}>
            <Heading fontSize={"18px"} sx={{ bg: "#fff !important" }}>
              Related to your search
            </Heading>
          </Box>

          {/* first Section  */}

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            sx={{ bg: "#fff !important" }}
          >
            <Box
              mt={"30px"}
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={{
                base: "column",
                sm: "column",
                lg: "row",
                md: "row",
              }}
              w={"100%"}
              sx={{ bg: "#fff !important" }}
            >
              <Box sx={{ bg: "#fff !important" }}>
                <Heading
                  fontSize={"14px"}
                  mb={"5px"}
                  sx={{ bg: "#fff !important" }}
                >
                  Zone wise Projects in Guwahati
                </Heading>
                <hr />

                <Box
                  fontSize={"12px"}
                  color={"#3b3b3b"}
                  mt={"10px"}
                  sx={{ bg: "#fff !important" }}
                >
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      Projects In Guwahati South Guwahati
                    </Text>
                  </Link>
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      Projects In Guwahati East Guwahati
                    </Text>
                  </Link>
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      Projects In Guwahati West Guwahati
                    </Text>
                  </Link>
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      Projects In Guwahati North Guwahati
                    </Text>
                  </Link>
                </Box>
              </Box>
              {/* 2nd Sction  */}
              <Box
                fontSize={"12px"}
                color={"#3b3b3b"}
                sx={{ bg: "#fff !important" }}
              >
                <Heading
                  fontSize={"14px"}
                  mb={"5px"}
                  sx={{ bg: "#fff !important" }}
                >
                  Projects in Top Localities of Guwahati
                </Heading>
                <hr />
                <Box fontSize={"12px"} color={"#3b3b3b"} mt={"10px"}>
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      New Projects In Jalukbari Guwahati
                    </Text>
                  </Link>
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      New Projects In Barbari Village Guwahati
                    </Text>
                  </Link>
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      New Projects In Sarania Hills Guwahati
                    </Text>
                  </Link>
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      New Projects In No Two Bonda Guwahati
                    </Text>
                  </Link>
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      New Projects In Six Mile Guwahati
                    </Text>
                  </Link>
                </Box>
              </Box>
              {/* 3rd Section  */}
              <Box
                fontSize={"12px"}
                color={"#3b3b3b"}
                sx={{ bg: "#fff !important" }}
              >
                <Heading
                  fontSize={"14px"}
                  mb={"5px"}
                  sx={{ bg: "#fff !important" }}
                >
                  Project Status in Guwahati
                </Heading>
                <hr />
                <Box mt={"10px"} sx={{ bg: "#fff !important" }}>
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      Ready To Move Projects In Guwahati
                    </Text>
                  </Link>
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      Under Construction Projects In Guwahati
                    </Text>
                  </Link>
                </Box>
              </Box>
              {/* 4th Section  */}
              <Box sx={{ bg: "#fff !important" }}>
                <Heading
                  fontSize={"14px"}
                  color={"#3b3b3b"}
                  mb={"5px"}
                  sx={{ bg: "#fff !important" }}
                >
                  Projects Under Budget in Guwahati
                </Heading>
                <hr />
                <Box
                  fontSize={"12px"}
                  color={"#3b3b3b"}
                  mt={"10px"}
                  sx={{ bg: "#fff !important" }}
                >
                  <Link href="#" _hover={"none"}>
                    <Text sx={{ bg: "#fff !important" }}>
                      Affordable Apartment In Guwahati
                    </Text>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          position={"absolute"}
          right={"70px"}
          top={"110px"}
          borderRadius={"50%"}
          boxShadow={
            " rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;"
          }
          p={"20px"}
          bg={"#fff"}
          display={{ lg: "block", md: "none", sm: "none", base: "none" }}
        >
          <IoIosArrowForward fontSize={"20px"} style={{ background: "#fff" }} />
        </Box>
      </Container>
    </>
  );
}

export default RelatedSearch;

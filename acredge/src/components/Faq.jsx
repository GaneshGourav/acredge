import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { ImCheckboxChecked } from "react-icons/im";

const Faqs = [
  {
    id: "1",
    title: "Which are the top localities to buy property in Guwahati?",
    answer:
      "If you are looking to buy property in Guwahati, Jalukbari, Barbari Village, Sarania Hills, are considered the top most localities out of 66 total number of localities in Guwahati",
  },
  {
    id: "2",
    title: "Which are the top localities to buy property in Guwahati?",
    answer:
      "If you are looking to buy property in Guwahati, Jalukbari, Barbari Village, Sarania Hills, are considered the top most localities out of 66 total number of localities in Guwahati",
  },
  {
    id: "3",
    title: "Which are the top localities to buy property in Guwahati?",
    answer:
      "If you are looking to buy property in Guwahati, Jalukbari, Barbari Village, Sarania Hills, are considered the top most localities out of 66 total number of localities in Guwahati",
  },
  {
    id: "4",
    title: "Which are the top localities to buy property in Guwahati?",
    answer:
      "If you are looking to buy property in Guwahati, Jalukbari, Barbari Village, Sarania Hills, are considered the top most localities out of 66 total number of localities in Guwahati",
  },
];

function Faq() {
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
              RFAQs: Property in Guwahati
            </Heading>
          </Box>

          {/* first Section  */}
          <Container
            maxW="container.xl"
            p={"3px 15px"}
            mt={"20px"}
            sx={{ bg: "#fff !important" }}
            pb={"20px"}
            border={"3px solid #f4f4f4"}
            borderRadius={"10px"}
          >
            {Faqs.map((query) => (
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                gap={"10px"}
                alignItems={"center"}
                mb={"20px"}
                bg={"#fff"}
                key={query.id}
              >
                <Box p={"15px"} borderRadius={"50%"} bg={"#eeeeee"}>
                  <Heading
                    fontSize={"14px"}
                    textAlign={"center"}
                    color={"#666666"}
                  >
                    Q
                  </Heading>
                </Box>
                <Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    gap={"10px"}
                    bg={"#fff"}
                  >
                    <ImCheckboxChecked
                      style={{ background: "white", color: "#00d26a" }}
                    />
                    <Heading color={"#666666"} bg={"#fff"} fontSize={"14px"}>
                      {query.title}
                    </Heading>
                  </Box>
                  <Text bg={"#fff"} fontSize={"14px"}>
                    {query.answer}
                  </Text>
                </Box>
              </Box>
            ))}
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Faq;

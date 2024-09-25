import { Box, Button, Container, Input, Text } from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";

function NavSection() {
  return (
    <>
      <Container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW="container.3lg"
        h={"50px"}
        mt={"10px"}
        mb={"10px"}
        bg={"#fff"}
        boxShadow={
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
        }
        position={"sticky"}
        top={"0px"}
        zIndex={"10"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={"10px"}
          w={"70%"}
          bg={"#fff"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            border={"1px solid white"}
            w={{ lg: "450px", md: "450px", sm: "330px", base: "330px" }}
            _hover={{ border: "1px solid black", borderRadius: "8px" }}
            bg={"white"}
          >
            <CiSearch fontSize={"20px"} />
            <Input
              type="text"
              placeholder="Search by Project, Locality, Builder, Road or Landmark"
              w={{ lg: "450px", md: "450px", sm: "330px", base: "330px" }}
              _hover={"none"}
              outline={"none"}
              border={"none"}
              _focus={{
                outline: "none",
                boxShadow: "none",
                border: "none",
              }}
            />
            <IoMicOutline fontSize={"20px"} />
          </Box>
          <Box
            display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
            justifyContent={"flex-start"}
            gap={"10px"}
          >
            <Button
              display={"flex"}
              alignItems={"center"}
              border={"1px solid #e8e8e8"}
              p={"5px"}
              bg={"white"}
              _hover={"none"}
            >
              <Text fontSize={"14px"}>Bedrooms</Text>
              <IoIosArrowDown />
            </Button>
            <Button
              display={"flex"}
              alignItems={"center"}
              gap={"3px"}
              border={"1px solid #e8e8e8"}
              p={"2px"}
              bg={"white"}
              _hover={"none"}
            >
              <Text fontSize={"14px"}>Property Type</Text>
              <IoIosArrowDown />
            </Button>
            <Button
              display={"flex"}
              alignItems={"center"}
              gap={"3px"}
              border={"1px solid #e8e8e8"}
              p={"2px"}
              bg={"white"}
              _hover={"none"}
            >
              <Text fontSize={"14px"}>Budget</Text>
              <IoIosArrowDown />
            </Button>
            <Button
              display={"flex"}
              alignItems={"center"}
              gap={"3px"}
              border={"1px solid #e8e8e8"}
              p={"2px"}
              bg={"white"}
              _hover={"none"}
            >
              <Text fontSize={"14px"}>Project Status</Text>
              <IoIosArrowDown />
            </Button>
            <Button
              display={"flex"}
              alignItems={"center"}
              gap={"3px"}
              border={"1px solid #e8e8e8"}
              p={"2px"}
              bg={"white"}
              _hover={"none"}
            >
              <Text fontSize={"14px"}>More</Text>
              <IoIosArrowDown />
            </Button>
            <Button
              display={"flex"}
              alignItems={"center"}
              gap={"3px"}
              border={"1px solid #e8e8e8"}
              p={"2px"}
              bg={"white"}
              _hover={"none"}
            >
              <FaArrowRotateRight color="#58bf93" />
              <Text color={"#58bf93"} fontSize={"14px"}>
                Clear All
              </Text>
            </Button>
          </Box>
        </Box>

        <Box
          border={"1px solid #ac9fce"}
          bg={"#f6f2ff"}
          borderRadius={"30"}
          p={"10px 20px"}
          w={"150px"}
          display={{ lg: "block", md: "block", base: "none", sm: "none" }}
        >
          <label>Show Map</label>
          <Box></Box>
        </Box>
      </Container>
    </>
  );
}

export default NavSection;

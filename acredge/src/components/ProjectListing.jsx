import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaBuilding } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Project = [
  {
    id: "1",
    title: "Paramount Grande",
    image: "https://bit.ly/2Z4KKcF",
    place: "Sarusajai, Guwahati",
    price: "₹ 52.08 Lac - 1.20 Cr",
    projectSize: "182 units",
    configuration: ["2,3,4 BHK", "Flat", "900-1000 Sq. Ft"],
    description:
      "Greentech Srishti Residency is a budget friendly Project located in Jalukbari, Guwahati West . This project has been developed by Greentech Projects who are one of the reputed developers in the Guwahati. The Project current status is Ready to Move. It has 96 Units.",
  },
  {
    id: "2",
    title: "Paramount Grande",
    image:
      "https://static.squareyards.com/resources/images/guwahati/tn-projectflagship/tn-swarna-valley-park-flagshipimg1.jpg?aio=w-242;h-212;crop;",
    place: "Sarusajai, Guwahati",
    price: "₹ 52.08 Lac - 1.20 Cr",
    projectSize: "182 units",
    configuration: ["2,3,4 BHK", "Flat", "900-1000 Sq. Ft"],
    description:
      "Greentech Srishti Residency is a budget friendly Project located in Jalukbari, Guwahati West . This project has been developed by Greentech Projects who are one of the reputed developers in the Guwahati. The Project current status is Ready to Move. It has 96 Units.",
  },
  {
    id: "3",
    title: "Paramount Grande",
    image:
      "https://static.squareyards.com/resources/images/guwahati/tn-projectflagship/tn-swarna-valley-park-flagshipimg1.jpg?aio=w-242;h-212;crop;",
    place: "Sarusajai, Guwahati",
    price: "₹ 52.08 Lac - 1.20 Cr",
    projectSize: "182 units",
    configuration: ["2,3,4 BHK", "Flat", "900-1000 Sq. Ft"],
    description:
      "Greentech Srishti Residency is a budget friendly Project located in Jalukbari, Guwahati West . This project has been developed by Greentech Projects who are one of the reputed developers in the Guwahati. The Project current status is Ready to Move. It has 96 Units.",
  },
  {
    id: "4",
    title: "Paramount Grande",
    image:
      "https://static.squareyards.com/resources/images/guwahati/tn-projectflagship/tn-swarna-valley-park-flagshipimg1.jpg?aio=w-242;h-212;crop;",
    place: "Sarusajai, Guwahati",
    price: "₹ 52.08 Lac - 1.20 Cr",
    projectSize: "182 units",
    configuration: ["2,3,4 BHK", "Flat", "900-1000 Sq. Ft"],
    description:
      "Greentech Srishti Residency is a budget friendly Project located in Jalukbari, Guwahati West . This project has been developed by Greentech Projects who are one of the reputed developers in the Guwahati. The Project current status is Ready to Move. It has 96 Units.",
  },
  {
    id: "5",
    title: "Paramount Grande",
    image:
      "https://static.squareyards.com/resources/images/guwahati/tn-projectflagship/tn-swarna-valley-park-flagshipimg1.jpg?aio=w-242;h-212;crop;",
    place: "Sarusajai, Guwahati",
    price: "₹ 52.08 Lac - 1.20 Cr",
    projectSize: "182 units",
    configuration: ["2,3,4 BHK", "Flat", "900-1000 Sq. Ft"],
    description:
      "Greentech Srishti Residency is a budget friendly Project located in Jalukbari, Guwahati West . This project has been developed by Greentech Projects who are one of the reputed developers in the Guwahati. The Project current status is Ready to Move. It has 96 Units.",
  },
  {
    id: "6",
    title: "Paramount Grande",
    image:
      "https://static.squareyards.com/resources/images/guwahati/tn-projectflagship/tn-swarna-valley-park-flagshipimg1.jpg?aio=w-242;h-212;crop;",
    place: "Sarusajai, Guwahati",
    price: "₹ 52.08 Lac - 1.20 Cr",
    projectSize: "182 units",
    configuration: ["2,3,4 BHK", "Flat", "900-1000 Sq. Ft"],
    description:
      "Greentech Srishti Residency is a budget friendly Project located in Jalukbari, Guwahati West . This project has been developed by Greentech Projects who are one of the reputed developers in the Guwahati. The Project current status is Ready to Move. It has 96 Units.",
  },
  {
    id: "7",
    title: "Paramount Grande",
    image:
      "https://static.squareyards.com/resources/images/guwahati/tn-projectflagship/tn-swarna-valley-park-flagshipimg1.jpg?aio=w-242;h-212;crop;",
    place: "Sarusajai, Guwahati",
    price: "₹ 52.08 Lac - 1.20 Cr",
    projectSize: "182 units",
    configuration: ["2,3,4 BHK", "Flat", "900-1000 Sq. Ft"],
    description:
      "Greentech Srishti Residency is a budget friendly Project located in Jalukbari, Guwahati West . This project has been developed by Greentech Projects who are one of the reputed developers in the Guwahati. The Project current status is Ready to Move. It has 96 Units.",
  },
  {
    id: "8",
    title: "Paramount Grande",
    image:
      "https://static.squareyards.com/resources/images/guwahati/tn-projectflagship/tn-swarna-valley-park-flagshipimg1.jpg?aio=w-242;h-212;crop;",
    place: "Sarusajai, Guwahati",
    price: "₹ 52.08 Lac - 1.20 Cr",
    projectSize: "182 units",
    configuration: ["2,3,4 BHK", "Flat", "900-1000 Sq. Ft"],
    description:
      "Greentech Srishti Residency is a budget friendly Project located in Jalukbari, Guwahati West . This project has been developed by Greentech Projects who are one of the reputed developers in the Guwahati. The Project current status is Ready to Move. It has 96 Units.",
  },
  {
    id: "9",
    title: "Paramount Grande",
    image:
      "https://static.squareyards.com/resources/images/guwahati/tn-projectflagship/tn-swarna-valley-park-flagshipimg1.jpg?aio=w-242;h-212;crop;",
    place: "Sarusajai, Guwahati",
    price: "₹ 52.08 Lac - 1.20 Cr",
    projectSize: "182 units",
    configuration: ["2,3,4 BHK", "Flat", "900-1000 Sq. Ft"],
    description:
      "Greentech Srishti Residency is a budget friendly Project located in Jalukbari, Guwahati West . This project has been developed by Greentech Projects who are one of the reputed developers in the Guwahati. The Project current status is Ready to Move. It has 96 Units.",
  },
  {
    id: "10",
    title: "Paramount Grande",
    image:
      "https://static.squareyards.com/resources/images/guwahati/tn-projectflagship/tn-swarna-valley-park-flagshipimg1.jpg?aio=w-242;h-212;crop;",
    place: "Sarusajai, Guwahati",
    price: "₹ 52.08 Lac - 1.20 Cr",
    projectSize: "182 units",
    configuration: ["2,3,4 BHK", "Flat", "900-1000 Sq. Ft"],
    description:
      "Greentech Srishti Residency is a budget friendly Project located in Jalukbari, Guwahati West . This project has been developed by Greentech Projects who are one of the reputed developers in the Guwahati. The Project current status is Ready to Move. It has 96 Units.",
  },
];

function ProjectListing() {
  const [expandedProjectIds, setExpandedProjectIds] = useState([]); // Track expanded projects

  const toggleReadMore = (id) => {
    if (expandedProjectIds.includes(id)) {
      setExpandedProjectIds(
        expandedProjectIds.filter((projectId) => projectId !== id)
      ); // Collapse if already expanded
    } else {
      setExpandedProjectIds([...expandedProjectIds, id]); // Expand the clicked project
    }
  };

  return (
    <Container
      boxSizing="border-box"
      mb={"20px"}
      maxW="Container.2xl"
      p={"0px"}
    >
      {Project.map((property) => {
        const isExpanded = expandedProjectIds.includes(property.id); // Check if the current project is expanded

        return (
          <Box
            key={property.id}
            w={"100%"}
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            mb={"30px"}
            p={"10px 15px"}
            bg={"#fff"}
            borderRadius={"10px"}
            borderBottom={"6px solid #d7d7d7"}
          >
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
              }}
              gap={"18px"}
              w={"100%"}
              bg={"#fff"}
            >
              <Box
                w={{ lg: "60%", md: "60%", sm: "100%", base: "100%" }}
                bg={"#fff"}
              >
                <Image
                  src={property.image}
                  objectFit="cover"
                  width="100%"
                  borderRadius="5px"
                />
              </Box>
              <Box w={"100%"} bg={"#fff"}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  bg={"#fff"}
                >
                  <Box>
                    <Heading fontSize={"16px"} bg={"#fff"}>
                      {property.title}
                    </Heading>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"flex-start"}
                    gap={"10px"}
                    alignItems={"center"}
                    bg={"#fff"}
                  >
                    <Box borderRadius={"50%"} p={"8px"} bg={"#f0f0f0"}>
                      {" "}
                      <CiHeart bg={"#fff"} fontSize={"20px"} color="#4f4f4f" />
                    </Box>
                    <Box borderRadius={"50%"} p={"8px"} bg={"#f0f0f0"}>
                      {" "}
                      <CiShare2 bg={"#fff"} fontSize={"20px"} color="#4f4f4f" />
                    </Box>
                  </Box>
                </Box>
                <Box mt={"5px"} bg={"#fff"}>
                  <Text fontSize={"14px"} color={"#333333"} bg={"#fff"}>
                    {property.place}
                  </Text>
                </Box>
                <Box mt={"5px"}>
                  <Heading fontSize={"18px"} color={"#5f449b"} bg={"#fff"}>
                    {property.price}
                  </Heading>
                </Box>

                <Box
                  borderRadius={"10px"}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  mt={"10px"}
                  bg={"#fff"}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    gap={"20px"}
                    p={"10px 3px"}
                    bg={"#fff"}
                    borderRadius={"10px"}
                  >
                    <Box borderRadius={"50%"} p={"10px"} bg={"#e8f4ff"}>
                      <HiOutlineBuildingOffice2 fontSize={"25px"} />
                    </Box>
                    <Box>
                      <Text color={"#666666"} bg={"#fff"}>
                        Project Size
                      </Text>
                      <Text color={"#333333"} bg={"#fff"}>
                        {property.projectSize}
                      </Text>
                    </Box>
                  </Box>
                  <hr />
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    gap={"20px"}
                    p={"10px 3px"}
                    bg={"#fff"}
                    borderRadius={"10px"}
                  >
                    <Box bg={"#d1f4ef"} borderRadius={"50%"} p={"10px"}>
                      <LiaBuilding fontSize={"25px"} />
                    </Box>
                    <Box>
                      <Text color={"#666666"} bg={"#fff"}>
                        Configuration
                      </Text>
                      <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        {property.configuration.map((item, index) => (
                          <Box
                            key={index}
                            display="flex"
                            alignItems="center"
                            ml={index > 0 ? 2 : 0}
                          >
                            {index > 0 && (
                              <Text color={"#333333"} as="span" mx={1}>
                                •
                              </Text>
                            )}
                            <Text color={"#333333"} bg={"#fff"}>
                              {item}
                            </Text>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              bg={"#fff"}
              mt={"10px"}
            >
              <Text
                color={"#666666"}
                fontFamily={"sans-serif"}
                fontSize={"14px"}
                bg={"#fff"}
              >
                {isExpanded
                  ? property.description
                  : property.description.split(" ").slice(0, 12).join(" ") +
                    "..."}
              </Text>
              <Button
                onClick={() => toggleReadMore(property.id)}
                size="sm"
                bg={"transparent"}
                color={"#58bf93"}
                _hover={"none"}
              >
                {isExpanded ? "Show Less" : "Read More"}
              </Button>
            </Box>

            <Box
              display={"flex"}
              justifyContent={{
                lg: "flex-end",
                md: "flex-end",
                sm: "space-around",
                base: "space-around",
              }}
              gap={"10px"}
              mt={"5px"}
              mb={"10px"}
              bg={"#fff"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                border={"1px solid #67c8a4"}
                p={"0px 5px"}
                gap={"5px"}
                borderRadius={"10px"}
                _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                bg={"#fff"}
              >
                <FaWhatsapp fontSize={"20px"} color="#67c8a4" bg={"#fff"} />
                <Button
                  bg={"transparent"}
                  color={"#67c8a4"}
                  fontSize={"16px"}
                  p={"0px 2px"}
                  _hover={"none"}
                >
                  WhatsApp
                </Button>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                border={"1px solid #67c8a4"}
                bg={"#58bf93"}
                p={"0px 5px"}
                borderRadius={"10px"}
                gap={"5px"}
                _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
              >
                <IoCall style={{ background: "transparent" }} color="#fff" />
                <Button
                  bg={"transparent"}
                  color={"white"}
                  p={"0px 2px"}
                  _hover={"none"}
                >
                  Get a Call Back
                </Button>
              </Box>
            </Box>
          </Box>
        );
      })}

      <Box display={"flex"} justifyContent={"center"} gap={"10px"}>
        <Button border={"1px solid #58bf93"} bg={"#58bf93"} color={"#fff"}>
          1
        </Button>
        <Button border={"1px solid #58bf93"} bg={"#fff"}>
          2
        </Button>
      </Box>
    </Container>
  );
}

export default ProjectListing;

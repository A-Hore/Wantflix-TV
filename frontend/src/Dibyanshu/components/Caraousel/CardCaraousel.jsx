import React, { useState } from "react";
import "./CardCaro.css";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import { Heading, Box, Text, Divider } from "@chakra-ui/react";


export const CardCarousel = ({ data, title ,minititle}) => {

  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate()

  return (
    <Box className="minicard" pt={5}>
      <Heading
        size={{ base: "md", md: "md", lg: "md" }}
        align={"start"}
        ml={{ base: 10, md: 20, lg: 20 }}
      >
        {title}
      </Heading>
      
      <Text
        size={{ base: "md", md: "lg", lg: "lg" }}
        align={"start"}
        ml={{ base: 10, md: 20, lg: 20 }}
      >
        {minititle}
      </Text>
      <Carousel
        // p={6}
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            // background: "blue",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 50,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 50,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        itemsToShow={{ base: 2, md: 4, lg: 5 }}
        // itemsToShow={4}
        speed={400}
      >
        {data.map((item, index) => (
          <Box onClick={() => navigate(`/details/${item.id}`)}
            width={{ base: "300px", md: "300px", lg: "300px" }}
            p={5}
            style={{
              height: 200,
              textAlign: "center",
              // lineHeight: "240px",
              borderRadius: "20px",
            }}
            key={index}
          >
            <img
              style={{
                borderRadius: "20px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              }}
              src={item.image}
            />
          </Box>
        ))}
      </Carousel>
      <Divider borderWidth="2px" ml={5} mr={5} colorScheme="gray.100" />
    </Box>
  );
};

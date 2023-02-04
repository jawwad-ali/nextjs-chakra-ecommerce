"use client";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HeroBanner from "../assets/hero-banner.png.webp";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Box
      w={"100%"}
      backgroundColor={"#f1f6f7"}
      position="relative"
      zIndex={111}
      mt={-3}
      display={"flex"}
      overflow={"hidden"}
      _before={{
        width: "35%",
        zIndex: "-1",
        content: "''",
        height: "100%",
        backgroundColor: "#384aeb",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <Image
        src={HeroBanner}
        alt="Hero banner"
        style={{ position: "relative", marginLeft: "120px", top: "50px" }}
      />

      {/* Right side */}
      <Box
        marginLeft={"65px"}
        marginTop="60px"
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"start"}
        width="500px"
      >
        <Heading fontWeight={"medium"} fontSize="30px" color="#555" as="h4">
          Shop is fun
        </Heading>
        <Heading
          fontSize="50px"
          mt="10px"
          fontWeight={"700"}
          lineHeight={"55px"}
        >
          BROWSE OUR PREMIUM PRODUCT
        </Heading>
        <Text
          fontSize="15px"
          lineHeight={"25px"}
          color="#777"
          fontWeight={400}
          mt="9"
        >
          Us which over of signs divide dominion deep fill bring they're meat
          beho upon own earth without morning over third. Their male dry. They
          are great appear whose land fly grass.
        </Text>

        <Button
          mt="4"
          size="lg"
          border="1px solid #384aeb"
          backgroundColor="#384aeb"
          color="white"
          borderRadius={"30px"}
          transition={"all .4s ease"}
          py="12px"
          px="41px"
          fontSize="15px"
          _hover={{
            background: "white",
            color: "black",
            border: "1px solid #384aeb",
          }}
        >
          Browse Now
        </Button>

        {/* <button
          style={{
            padding: "12px 41px",
            marginTop: "40px",
            //   border={"1px solid #384aeb"}
            backgroundColor: "#384aeb",
            color: "white",
            borderRadius: "30px",
            fontSize: "15px",
          }}
        >
          Browse Now
        </button> */}
      </Box>
    </Box>

    // <Box position={"relative"} mt="-3" w={"100%"} display={"flex"}>
    //   <Box
    //     zIndex={999}
    //     _before={{
    //       content: "''",
    //       display: "block",
    //       zIndex: "-1",
    //       height: "100%",
    //       backgroundColor: "#384aeb",
    //       position: "absolute",
    //       width: "35%",
    //       top: 0,
    //       left: 0,
    //     }}
    //   >
    //     <Image
    //       src={HeroBanner}
    //       alt="Hero Banner"
    //       style={{
    //         position: "relative",
    //         left: "118px",
    //         top: "60px",
    //         overflow: "hidden",
    //         width: "462px",
    //       }}
    //     />
    //   </Box>

    //   <Box bg="yellow" w="67.6%">
    //     <Text>Hello</Text>
    //   </Box>
    // </Box>
  );
};

export default HeroSection;

"use client";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HeroBanner from "../assets/hero-banner.png.webp";
import Image from "next/image";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

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
        loading="lazy"
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
        <Heading
          fontWeight={"hairline"}
          fontSize="30px"
          color="#555"
          as="h4"
          className={roboto.className}
        >
          Shop is fun
        </Heading>
        <Heading
          fontSize="50px"
          mt="10px"
          fontWeight={"bold"}
          lineHeight={"55px"}
          color="#222"
          className={roboto.className}
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
          Us which over of signs divide dominion deep fill bring they&apos;re meat
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
      </Box>
    </Box>
  );
};

export default HeroSection;
"use client";
import { Flex, Button, IconButton, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  FaCartPlus,
  FaGripLines,
  FaRegWindowClose,
  FaSearch,
} from "react-icons/fa";
import NextLink from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png.webp";

const Navbar = ({ res }: any) => {
  const [display, setDisplay] = useState("none");

  // storing categories in state
  const [cat, setCat] = useState([]);

  // func to capitalize first letter of catergory
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    setCat(res);
    console.log("cat", cat);
  });

  return (
    <Flex>
      <Flex
        pos="fixed"
        zIndex={10}
        alignItems={"center"}
        w="100%"
        px="28"
        py="8"
        justifyContent={"space-between"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          w="690px"
        >
          {/* logo */}
          <Box w="43%">
            <NextLink href="/">
              <Image src={Logo} alt="logo" />
            </NextLink>
          </Box>
          {/* menu items */}
          <Box w="58%">
            <Flex>
              {cat.map((c) => (
                <NextLink href={c} passHref>
                  <Button
                    variant={"ghost"}
                    aria-label="Home"
                    w="100%"
                    _hover={{ textDecoration: "underline" }}
                    fontSize={"15px"}
                  >
                    {capitalizeFirstLetter(c)}
                  </Button>
                </NextLink>
              ))}
            </Flex>
          </Box>
        </Box>

        {/* right side */}
        <Box display="flex">
          <FaSearch style={{ fontSize: "20px", marginRight: "20px" }} />
          <FaCartPlus style={{ fontSize: "20px" }} />
        </Box>

        <Box>
          <a
            href="#"
            style={{
              padding: "20px 45px",
              background: "transparent",
              borderRadius: "30px",
              border: "1px solid blue",
            }}
          >
            Buy Now
          </a>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;

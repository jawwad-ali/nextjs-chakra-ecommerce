"use client";
import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/legacy/image";
import { Oswald, Roboto } from "@next/font/google";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const oswald = Oswald({
  weight: ["700", "400"],
  subsets: ["latin"],
});

interface ProductType {
  response: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

const Product = ({ response }: ProductType) => {
  console.log("SINGLE PRODUCT", response);

  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <SimpleGrid columns={2} spacing={10}>
        {/* Left Side */}
        <Box
          height="80vh"
          display={"flex"}
          justifyContent="flex-end"
          alignItems={"center"}
        >
          <Box mr="10px">
            <Image
              //   style={{ backgroundColor: "silver" }}
              src={response.image}
              height={350}
              width={350}
              alt={response.title}
            />
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          mt="10"
          px="16"
          //   bg="red"
          display="flex"
          justifyContent={"center"}
          flexDirection={"column"}
        >
          {/* Product Name */}
          <Heading
            as="h2"
            fontSize="24px"
            fontWeight={"bold"}
            color="#222"
            marginBottom="20px"
            className={oswald.className}
          >
            {response.title}
          </Heading>

          {/* price */}
          <Text
            fontWeight={"bold"}
            color={"#384aeb"}
            fontSize="24px"
            className={roboto.className}
            pb="4"
          >
            {`$${response.price}.99`}
          </Text>

          {/* Stock and availibility */}
          <Flex
            className={roboto.className}
            color={"#555"}
            fontSize="15px"
            fontWeight={"normal"}
            mb="2"
          >
            <Text mr="5">Category</Text> <Text>:Household</Text>
          </Flex>
          <Flex
            className={roboto.className}
            color={"#555"}
            fontSize="15px"
            fontWeight={"normal"}
          >
            <Text mr="5">Availibility</Text> <Text>:In Stock</Text>
          </Flex>

          {/* Description */}
          <Text
            mt="4"
            className={roboto.className}
            fontSize="15px"
            color="#777"
            lineHeight={"25px"}
          >
            {response.description}
          </Text>

          {/* Quantity */}
          <Flex
            className={roboto.className}
            color={"#555"}
            fontSize="15px"
            fontWeight={"normal"}
            mt={8}
          >
            <Text mr="5">Quantity</Text> <Text>{quantity}</Text>
            <ButtonGroup
              size="sm"
              isAttached
              variant="outline"
              ml={"5px"}
              mt="-2px"
            >
              <IconButton
                aria-label="Add"
                onClick={() => setQuantity(quantity + 1)}
                icon={<AddIcon />}
              />
              <IconButton
                aria-label="Minus"
                onClick={() => setQuantity(quantity - 1)}
                icon={<MinusIcon />}
              />
            </ButtonGroup>
          </Flex>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Product;

"use client";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Oswald, Roboto } from "@next/font/google";
import Image from "next/legacy/image";
import Link from "next/link";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const oswald = Oswald({
  weight: ["700"],
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
  }[];
}

// func to capitalize first letter of catergory
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ProductList({ response }: ProductType) {
  return (
    <Flex>
      {/* Page Heading */}
      <Flex flex={1} maxW={"1150px"} mx="auto" flexDirection={"column"}>
        <Text
          fontWeight={"medium"}
          className={roboto.className}
          fontSize="15px"
          color="#777"
        >
          Popular Item in the market 
        </Text>
        <Heading
          className={oswald.className}
          as="h2"
          color="#222"
          fontSize={"36px"}
          fontWeight={"bold"}
        >
          Trending{" "}
          <Box
            as="span"
            borderBottom={"2px solid #384aeb"}
            paddingBottom={"8px"}
          >
            Product
          </Box>
        </Heading>

        {/* Products */}
        <Box mt="10">
          <SimpleGrid columns={4} spacing={10}>
            {response.map((result) => (
              <Box>
                <>
                  <Image
                    src={result?.image}
                    alt={result?.title}
                    layout="responsive"
                    width={"50"}
                    loading="lazy"
                    height="50" 
                  />
                </>
                <Link
                  href={`/category/${result.category}/${result.id.toString()}`}
                >
                  <Box
                    mt={5}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text
                      color="#777"
                      fontSize="15px"
                      className={roboto.className}
                      fontWeight={"light"}
                      pb={2}
                    >
                      {capitalizeFirstLetter(result.category)}
                    </Text>
                    <Text
                      textAlign={"center"}
                      fontSize="20px"
                      className={oswald.className}
                      fontWeight={"light"}
                      mb="2"
                      noOfLines={1}
                    >
                      {result.title}
                    </Text>
                    <Text
                      textAlign={"center"}
                      fontSize="18px"
                      color="#777"
                      fontWeight={500}
                    >
                      ${result.price}
                    </Text>
                  </Box>
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  );
}

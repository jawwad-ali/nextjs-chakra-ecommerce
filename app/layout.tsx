import ChakraWrapper from "@/components/Chakra";
import Navbar from "@/components/Navbar";
import axios from "axios";

const getCategories = async () => { 
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/categories` 
    );
    // console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.error(error); 
  }
};
 
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await getCategories();
  // console.log("response", response);
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraWrapper>
          <Navbar response={response} />
          {children}
        </ChakraWrapper>
      </body>
    </html>
  );
}

import ChakraWrapper from "@/components/Chakra";
import Navbar from "@/components/Navbar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const getCategories = async () => {
  const url = await fetch("https://fakestoreapi.com/products/categories");
  const res = await url.json();
  return res;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await getCategories();
  console.log("res", res);
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ChakraWrapper>
          <Navbar res={res} />
          {children}
        </ChakraWrapper>
      </body>
    </html>
  );
}

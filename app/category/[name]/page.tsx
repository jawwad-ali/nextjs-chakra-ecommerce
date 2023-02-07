import React from "react";
import ProductList from "./ProductList";
import axios from "axios";

type IProps = {
  params?: { name: string };
  searchParams?: { id: string };
};

const ProductCategory = async ({ params, searchParams }: IProps) => {
  async function getProductByCategory() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${params?.name}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  const response = await getProductByCategory();

  return (
    <div>
      <ProductList response={response} />
    </div>
  );
};

export default ProductCategory;

// export async function generateStaticParams() {
//   const names: string[] = ["zia", "zeeshan", "hira"];

//   return names.map((name) => ({
//     name: name,
//   }));
// }

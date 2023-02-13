import React from "react";
import ProductList from "./ProductList";
import axios from "axios";

type IProps = { 
  params?: { name: string };
}; 
 
const ProductCategory = async ({ params }: IProps) => {
  async function getProductByCategory() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${params?.name}`
      );
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
import axios from "axios";
import Product from "./Product";

type IProps = {
  params?: { product: string };
};

const DynamicProduct = async ({ params }: IProps) => {
  async function getProduct() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${params?.product}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
  const response = await getProduct();
  
  return (
    <Product response={response} />
  );
};

export default DynamicProduct;
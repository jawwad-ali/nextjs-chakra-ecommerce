import axios from "axios";
import Product from "./Product";

type IProps = {
  params?: { product: string };
};

// async function getAllProducts() {
export async function generateStaticParams() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/`);
    const data = await response.json();

    return data.map((d: any) => ({ 
      name: d.category,
      product: d.id.toString(),
    }));
  } catch (error) {
    console.error(error);
  }
}

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

  return <Product response={response} />;
};

export default DynamicProduct;

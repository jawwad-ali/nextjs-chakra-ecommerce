import React from "react";

type IProps = {
  params: { name: string };
  searchParams: { id: string };
};

const ProductCategory = async ({ params, searchParams }: IProps) => {
  const getProductByCategory = async () => {
    const url = await fetch(
      `https://fakestoreapi.com/products/category/${params.name}`
    );
    const res = await url.json();
    return res;
  };
  const res = await getProductByCategory();
  console.log("pbc", res);

  return (
    <div style={{ marginTop: "250px" }}>
      {params.name}
      <div>
        {res.map((r: any) => (
          <p>{r.title}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;

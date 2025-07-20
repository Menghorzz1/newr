// import React { use } from "react";
import { useLocation } from "react-router";
import React, { useState, useEffect } from "react";
import { getData } from "../../../api/api";
import CardProduct from "../../../Components/Card/card-products";

export default function Product() {
  const { state } = useLocation();
  const [product, setProduct] = useState([]);
  let getProucts = async () => {
    let result = await getData(`/products/categories/${state}`);

    setProduct(result);
  };

  useEffect(() => {
    getProucts();
  }, [state]);

  console.log(product);
  return (
    <div className="max-w-screen-lg mx-auto">
      <h1>Filter By Category</h1>
      <section className="grid grid-cols-4 gap-4 mt-10">
        {product.map((product) => (
          <CardProduct
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
            price={product.price}
            category={product.category}
            rating={product.rating}
            stock={product.stock}
            id={product.id}
          />
        ))}
      </section>
    </div>
  );
}

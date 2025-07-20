// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import React, { useEffect } from "react";
import ReactDom from "react-dom";
import Heading from "./Components/Heading/Heading";
import Orderlist from "./Components/Unorder/Orderlist";
import Current from "./Components/TIme/Current";
import CurrentTime from "./Components/TIme/Current";
import Card from "./Components/Card/card-products";
import CardProduct from "./Components/Card/card-products";
import NavBar from "./Components/Layout/Navbar";
import Navbar from "./Components/Layout/Navbar";
import FooterProduct from "./Components/Layout/footer";
import { getData } from "./api/api";
import { useNavigate } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  const [products, setProucts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const navigate = useNavigate();
  // axios("https://dummyjson.com/products/categories").then((res) =>
  //   console.log(res.data)
  // );

  let getProucts = async () => {
    let result = await getData("/products");
    let categories = await getData("/products/categories");
    setCategories(categories);
    setProucts(result.products);
  };

  useEffect(() => {
    getProucts();
  }, []);
  // console.log(Products);

  const handleOnClick = () => {
    navigate("/product", { state: categories.slug });
  };
  return (
    <>
      {/* <div>
        <Heading />
        <Orderlist />
      </div>
      <div>
        <CurrentTime />
      </div> */}
      {/*Header*/}
      {/* <Navbar /> */}
      {/*main*/}
      <main className="max-w-screen-lg mx-auto ">
        {categories.slice(0, 8).map((categories, index) => (
          <button
            onClick={() => handleOnClick(categories.slug)}
            className="py-2.5 px-2 bg-teal-100 text-teal-900 rounded-md mr-4 mb-5 hover:bg-teal-100 "
            key={index}
          >
            {categories.name}
          </button>
        ))}
        {/*product section*/}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {products.map((product) => (
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
      </main>
      {/*Footer*/}
      <FooterProduct />
    </>
  );
}

export default App;

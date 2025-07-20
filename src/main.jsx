import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./Components/page/about/about.jsx";
import Carrer from "./Components/page/carrer/carrer.jsx";
import Login from "./Components/auth/login.jsx";
import NotFound from "./Components/error/NotFound.jsx";

import MainLayout from "./Components/Layout/MainLayout.jsx";
import ProductDetial from "./Components/page/product/ProductDetial.jsx";
import Product from "./Components/page/product/product.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
          <Route index element={<App />} />
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetial />} />

          <Route path="/carrer" element={<Carrer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

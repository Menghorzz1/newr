import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import FooterProduct from "./footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

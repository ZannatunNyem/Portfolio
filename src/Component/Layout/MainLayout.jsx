import React from "react";
import NavBar from "../Pages/NavBar";
import { Outlet } from "react-router";
import Footer from "../Pages/Footer";

export default function MainLayout() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

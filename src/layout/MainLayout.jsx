import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../conponents/Navbar";
import Footer from "../conponents/Footer";
import AsideLeft from "../conponents/AsideLeft";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <AsideLeft />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

import React from "react";
import '../dist/output.css';
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../components/Header"

const Layout = () => {
  return (
    <>
    <Header>
    </Header>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
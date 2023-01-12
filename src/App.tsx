import React, { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./container/header/Navbar";
import TopHeader from "./container/header/TopHeader";
import { router } from "./router";

function App() {
  return (
    <Fragment>
      <TopHeader />
      <Navbar />
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;

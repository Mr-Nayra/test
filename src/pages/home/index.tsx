import React, { Fragment } from "react";
import BlogHome from "./components/blog/BlogHome";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Testimonials from "./components/testimonials/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <HeroBanner />
      <Testimonials />
      <BlogHome />
    </Fragment>
  );
};

export default Home;

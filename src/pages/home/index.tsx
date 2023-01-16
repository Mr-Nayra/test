import React, { Fragment } from "react";
import BlogHome from "./components/blog/BlogHome";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Team from "./components/team/Team";
import Testimonials from "./components/testimonials/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <HeroBanner />
      <Testimonials />
      <BlogHome />
      <Team />
    </Fragment>
  );
};

export default Home;

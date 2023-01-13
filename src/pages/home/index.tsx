import React, { Fragment } from "react";
import AboutSection from "./components/about/AboutSection";
import BlogHome from "./components/blog/BlogHome";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Testimonials from "./components/testimonials/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <HeroBanner />
      <AboutSection />
      <Testimonials />
      <BlogHome />
    </Fragment>
  );
};

export default Home;

import React, { Fragment } from "react";
import AboutSection from "./components/about/AboutSection";
import BlogHome from "./components/blog/BlogHome";
import CareersSection from "./components/careers/CareersSection";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Team from "./components/team/Team";
import Testimonials from "./components/testimonials/Testimonials";
import WorkFlow from "./components/workFlow/WorkFlow";

const Home = () => {
  return (
    <Fragment>
      <HeroBanner />
      <WorkFlow />
      <AboutSection />
      <Testimonials />
      <BlogHome />
      <Team />
      <CareersSection />
    </Fragment>
  );
};

export default Home;

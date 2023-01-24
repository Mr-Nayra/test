import React, { Fragment } from "react";
import FeatureSection from "./components/feature/FeatureSection";
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
      <FeatureSection />
      <Testimonials />
      <BlogHome />
      <Team />
      <CareersSection />
    </Fragment>
  );
};

export default Home;

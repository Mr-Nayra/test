import UseDevicesResize from "@/helpers/UseDevicesResize";
import Head from "next/head";
import React, { Fragment } from "react";
import BlogSection from "./index-components/blog/BlogSection";
import CareersSection from "./index-components/careers/CareersSection";
import FeatureSection from "./index-components/feature-section/FeatureSection";
import HeroBanner from "./index-components/hero-banner/HeroBanner";
import Testimonials from "./index-components/testimonials/Testimonials";
import WorkFlow from "./index-components/workFlow/WorkFlow";

const index = () => {
  const { width } = UseDevicesResize();
  return (
    <Fragment>
      <Head>
        <title>UpTrain | Open-Source ML Observability and Refinement</title>

        <meta
          name="description"
          content="Open-source observability tool to monitor ML models in production and continuously improve them over time by monitoring their performance, checking for (data) distribution shifts, and collecting edge cases to retrain them upon; built by a company that values your privacy."
        />
        <link rel="canonical" href="https://www.uptrain.ai" />
        <link rel="alternate" href="https://www.uptrain.ai" hrefLang="en-us" />
      </Head>
      {width > 800 ? (
        <>
          <HeroBanner />
          <FeatureSection />
          <WorkFlow />
          <Testimonials />
          <BlogSection />
          <CareersSection />
        </>
      ) : (
        <>
          <HeroBanner />
          <FeatureSection />
          <Testimonials />
          <CareersSection />
          <BlogSection />
        </>
      )}
    </Fragment>
  );
};

export default index;

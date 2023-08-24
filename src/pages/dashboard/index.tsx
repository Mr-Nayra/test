import UseDevicesResize from "@/helpers/UseDevicesResize";
import Head from "next/head";
import React, { Fragment } from "react";
import BlogSection from "../index-components/blog/BlogSection";
import CareersSection from "../index-components/careers/CareersSection";
import FeatureSection from "../index-components/feature-section/FeatureSection";
import DashboardHeroBanner from "@/pages/dashboard-components/hero-banner/DashboardHeroBanner";
import WorkFlow from "../index-components/workFlow/WorkFlow";
import ChatBot from "@/components/chat-bot/ChatBot";

const index = () => {
  const { width } = UseDevicesResize();
  const loggedIn = false;
  return (
    <Fragment>
      <Head>
        <title>UpTrain | Open-Source LLMOps Toolkit</title>

        <meta
          name="keywords"
          content="Open-source observability tool to monitor ML models in production and continuously improve them over time by monitoring their performance, checking for (data) distribution shifts, and collecting edge cases to retrain them upon; built by a company that values your privacy , Open-source, observability tool, monitor, machine learning models, production, continuous improvement, performance optimization, data distribution shifts, edge cases, retraining, model refinement, real-time monitoring, privacy-centric, data security, transparency, accountability, insights, actionable metrics, predictive analytics, anomaly detection, scalability, reliability, robustness, automation, model evaluation, model validation, model tracking, model governance, model interpretability"
        />
        <link rel="canonical" href="https://www.uptrain.ai" />
        <link rel="alternate" href="https://www.uptrain.ai" hrefLang="en-us" />
      </Head>
      {width > 800 ? (
        <>
          <DashboardHeroBanner />
          {/* <ChatBot /> */}
          {/* <FeatureSection /> */}
          {/* <WorkFlow /> */}
          {/* <Testimonials /> */}
          {/* <BlogSection /> */}
          {/* <CareersSection /> */}
        </>
      ) : (
        <>
          <DashboardHeroBanner />
          {/* <ChatBot /> */}
          {/* <FeatureSection /> */}
          {/* <Testimonials /> */}
          {/* <CareersSection /> */}
          {/* <BlogSection /> */}
        </>
      )}
    </Fragment>
  );
};

export default index;

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
        <title>UpTrain | Open-Source LLM Evaluation Tool</title>

        <meta
          name="keywords"
          content="Dashboard to create UpTrain API Key or UpTrain Access Token to run LLM evaluations such as factual accuracy, groundedness, context relevance, response quality, tonality, etc. by utilizing LLMs as evaluators. Use the API key to access UpTrain's managed service and visualize model's performance via realtime dashboards with automatic root cause analysis and Slack alerts."
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

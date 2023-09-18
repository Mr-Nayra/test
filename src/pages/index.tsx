import UseDevicesResize from "@/helpers/UseDevicesResize";
import Head from "next/head";
import React, { Fragment } from "react";
import BlogSection from "./index-components/blog/BlogSection";
import CareersSection from "./index-components/careers/CareersSection";
import FeatureSection from "./index-components/feature-section/FeatureSection";
import HeroBanner from "./index-components/hero-banner/HeroBanner";
import WorkFlow from "./index-components/workFlow/WorkFlow";
import ChatBot from "@/components/chat-bot/ChatBot";
import FiguresReached from "./index-components/figures-reached/figuresReached";
import KeyFeatures from "./index-components/key-features/keyFeatures";
import PlansSection from "./index-components/plans-section/plansSection";
import FaqSection from "./index-components/faq-section/faqSection";
import ConcludingBanner from "./index-components/concluding-banner/concludingBanner";
import Advantages from "./index-components/advantages-section/advantages";

const index = () => {
  const { width } = UseDevicesResize();
  return (
    <Fragment>
      <Head>
        <title>UpTrain | Open-Source LLMOps Toolkit</title>

        <meta
          name="description"
          content="Open-source observability tool to monitor ML models in production and continuously improve them over time by monitoring their performance, checking for (data) distribution shifts, and collecting edge cases to retrain them upon; built by a company that values your privacy , Open-source, observability tool, monitor, machine learning models, production, continuous improvement, performance optimization, data distribution shifts, edge cases, retraining, model refinement, real-time monitoring, privacy-centric, data security, transparency, accountability, insights, actionable metrics, predictive analytics, anomaly detection, scalability, reliability, robustness, automation, model evaluation, model validation, model tracking, model governance, model interpretability"
        />
        <link rel="canonical" href="https://www.uptrain.ai" />
        <link rel="alternate" href="https://www.uptrain.ai" hrefLang="en-us" />
      </Head>
      {width > 800 ? (
        <>
          <HeroBanner />
          <FiguresReached />
          <Advantages />
          <KeyFeatures />
          <ChatBot />
          <PlansSection />
          <FaqSection />
          <ConcludingBanner />
        </>
      ) : (
        <>
          <HeroBanner />
          <FiguresReached />
          <Advantages />
          <KeyFeatures />
          <ChatBot />
          <PlansSection />
          <FaqSection />
          <ConcludingBanner />
        </>
      )}
    </Fragment>
  );
};

export default index;

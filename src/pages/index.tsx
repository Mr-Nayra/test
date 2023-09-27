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
        <title>UpTrain | Open-Source LLM Evaluation Tool</title>

        <meta
          name="description"
          content="Open-source tool to evaluate LLM applications on aspects such as factual accuracy, hallucinations, retrieved-context quality, response relevance, guideline adherence, tonality, harmlessness, toxicity and many more. Users utilze UpTrain's open-source LLM evaluation tool to understand how their applications behave in production as well as experiment across multiple models like GPT-4, ChatGPT, Claude, PALM 2, as well as multiple prompts and chain configurations. Evaluation, Observability, Hallucinations, Correctness, Response Quality, Open-source"
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
          <PlansSection />
          <ChatBot />
          <FaqSection />
          <ConcludingBanner />
        </>
      ) : (
        <>
          <HeroBanner />
          <FiguresReached />
          <Advantages />
          <KeyFeatures />
          <PlansSection />
          <ChatBot />
          <FaqSection />
          <ConcludingBanner />
        </>
      )}
    </Fragment>
  );
};

export default index;

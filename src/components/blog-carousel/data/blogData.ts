import mistake_deploying_model from "../images/mistake-deploying-model/mistake-deploying-model.webp";
import mistake_deploying_model_hero from "../images/mistake-deploying-model/mistake-deploying-model-hero.webp";
import blog_active_learning from "../images/active-learning/blog_active_learning.webp";
import blog_active_learning_hero from "../images/active-learning/active_learning_hero.webp";
import bias_recommendation_system from "../images/bias-recommendation-systems/bias_recommendation_system.webp";
import bias_recommendation_system_hero from "../images/bias-recommendation-systems/bias_recommendation_system_hero.webp";
import care_about_retraining from "../images/care-about-retraining/care-about-retraining.webp";
import data_drift_detection from "../images/data-drift-detection/data-drift-detection.webp";
// Unlocking the Power of Language Models with UpTrain
import unLockingThePower from "../images/unlocking-the-power/unlocking-the-power.webp";
import unLockingThePowerLongBanner from "../images/unlocking-the-power/long-banner.webp";
// An Introductory Guide to Fine-tuning Large Language Models
import introductoryBanner from "../images/an-introductory-guide/banner.webp";
import introductoryLongBanner from "../images/an-introductory-guide/long-banner.webp";
// fine-tuning-language-models-with-uptrain
import fineBanner from "../images/fine-tuning-language-models-with-uptrain/banner.png";
import fineLongBanner from "../images/fine-tuning-language-models-with-uptrain/long_img.png";

import { TBlogData } from "./BlogType";
export const blogData: TBlogData[] = [
  {
    id: "fine-tuning-language-models-with-uptrain",
    title:
      "Fine-tuning Language Models with UpTrain: A Simple Guide to Enhancing Models for Custom Use-cases",
    authorName: "Sourabh Agrawal",
    date: "31st Mar, 2023",
    cardBanner: fineBanner,
    firstPositionBanner: fineLongBanner,
    cardDescription:
      "The era of large language models (LLMs) taking the world by storm has come and gone. Today, the debate between proponents of bigger models and smaller models has intensified.",
    longDescription:
      "The era of large language models (LLMs) taking the world by storm has come and gone. Today, the debate between proponents of bigger models and smaller models has intensified. While the debate continues, one thing is clear: not everyone needs to run large models for their specific use-cases ... ",
  },
  {
    id: "an-introductory-guide-to-fine-tuning-large-language-models",
    title: "An Introductory Guide to Fine-tuning Large Language Models",
    authorName: "Aryan V S",
    date: "20th Mar, 2023",
    cardBanner: introductoryBanner,
    cardDescription: `A "Language Model" is a machine learning model trained to perform well on tasks related to text/language like Classification, Summarization, Translation, Prediction and Generation.`,
    firstPositionBanner: introductoryLongBanner,
    longDescription: `A "Language Model" is a machine learning model trained to perform well on tasks related to text/language like Classification, Summarization, Translation, Prediction and Generation. With recent developments in this field ....`,
  },
  {
    id: "unlocking-the-power-of-language-models-with-upTrain",
    title: "Unlocking the Power of Language Models with UpTrain",
    authorName: "Shikha Mohanty",
    date: "14th Mar, 2023",
    cardBanner: unLockingThePower,
    cardDescription:
      "If you have connected to the internet in the last 60 days, it wouldn’t be of surprise that you have heard of ChatGPT(or atleast come across the word).",
    firstPositionBanner: unLockingThePowerLongBanner,
    longDescription:
      "If you have connected to the internet in the last 60 days, it wouldn’t be of surprise that you have heard of ChatGPT(or atleast come across the word). But behind this modern day marvel is an interesting technology powering it, which is Large Language Models (LLMs) ....",
  },
  {
    id: "mistakes-like-data-drift-while-deploying-ML-models",
    title: "7 Mistakes People Make When Putting Their Models In Production",
    authorName: "Sourabh & Shri",
    date: "7th Mar, 2023",
    cardBanner: mistake_deploying_model,
    cardDescription:
      "A critical part of the lifecycle of an ML model is post-production maintenance and performance. Many issues may arise during this period",
    firstPositionBanner: mistake_deploying_model_hero,
    longDescription:
      "A critical part of the lifecycle of an ML model is post-production maintenance and performance. Many issues may arise during this period, like degradation in accuracy or problems in the software architecture involved. It is essential to  ....",
  },
];

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

import { TBlogData } from "./BlogType";
export const blogData: TBlogData[] = [
  {
    id: "unlocking-the-power-of-language-models-with-upTrain",
    title: "Unlocking the Power of Language Models with UpTrain",
    authorName: "Shikha & Vipul",
    date: "14th March 2023",
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
    date: "7th March 2023",
    cardBanner: mistake_deploying_model,
    cardDescription:
      "A critical part of the lifecycle of an ML model is post-production maintenance and performance. Many issues may arise during this period",
    firstPositionBanner: mistake_deploying_model_hero,
    longDescription:
      "A critical part of the lifecycle of an ML model is post-production maintenance and performance. Many issues may arise during this period, like degradation in accuracy or problems in the software architecture involved. It is essential to  ....",
  },
  {
    id: "active-learning-for-deep-neural-networks",
    title: "Active Learning: Train Models with Less Labeled Data",
    authorName: "Tanisha & Vipul",
    date: "19th Feb, 2023",
    cardBanner: blog_active_learning,
    cardDescription:
      "Most supervised machine learning models require to be trained with large amounts of labeled data. Active Learning can be used to make models smarter with less labeled data.",
    firstPositionBanner: blog_active_learning_hero,
    longDescription:
      "Most supervised machine learning models require to be trained with large amounts of data to get good results. In most cases, these large datasets are unlabeled since the data is too large to be labeled manually. It requires enormous human effort and time, and ....",
  },
  {
    id: "model-bias-in-recommendation-systems",
    title: "Bias in Recommendation Systems",
    authorName: "Vipul Gupta",
    date: "21st Jan, 2023",
    cardBanner: bias_recommendation_system,
    cardDescription:
      "Modern-day web systems rely on user feedback (such as click activity or ratings) to build ML models to personalize recommendations.",
    firstPositionBanner: bias_recommendation_system_hero,
    longDescription:
      "Modern-day web systems rely on user feedback (such as click activity or ratings) to build ML models to personalize recommendations. Such recommender systems form the core of several popular applications that recommend short videos (Instagram, TikTok, YouTube), timeline feeds (Twitter, Facebook), the next prod...",
  },
  {
    id: "reasons-to-retrain-production-ml-models",
    title: "Why do we need to care about Retraining?",
    authorName: "Shikha Mohanty",
    date: "14th Jan, 2023",
    cardBanner: care_about_retraining,
    cardDescription:
      "The decay in model performance is generally due to reasons like data drifts, label drifts, and concept drifts. To combat these issues, retraining is critical.",
    firstPositionBanner: care_about_retraining,
    longDescription:
      "The decay in model performance is generally due to reasons like data drifts, label drifts, and concept drifts. To combat these issues, retraining is critical.",
  },
  {
    id: "statistical-methods-like-kl-divergence-for-data-drift-detection",
    title: "5 Great Statistical Methods For Data Drift Detection",
    authorName: "Shri & Sourabh",
    date: "07th Jan, 2023",
    cardBanner: data_drift_detection,
    cardDescription:
      "As we now know the significance of handling data distribution drifts, the first step of the process is to identify and detect these shifts.",
    firstPositionBanner: data_drift_detection,
    longDescription:
      "As we now know the significance of handling data distribution drifts, the first step of the process is to identify and detect these shifts.",
  },
];

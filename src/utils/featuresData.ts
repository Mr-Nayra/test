import model_performance from "./images/model_performance_img.webp";
import data_drift_img from "./images/data_drift_img.webp";
import edge_case_signals_img from "./images/edge_case_signals_img.webp";
import automated_refinement_img from "./images/automated_refinement.webp";
import seamless_integration_img from "./images/seamless_integration_img.webp";

import dimensions_llm_evaluations from "./images/features/dimensions_llm_evaluations.png";
import experimentation_gif from "./images/features/experimentation.gif";
import validation_gif from "./images/features/validation.gif";
import monitoring_gif from "./images/features/monitoring.gif";
import easy_integration_img from "./images/features/easy_integration.png";

export const featureData = [
  {
    featureImg: dimensions_llm_evaluations,
    heading: "Evaluations to test various aspects of your LLM responses", 
    description:
      "UpTrain provides a diverse set of pre-built metrics like response relevance, context quality, factual accuracy, language quality, etc. to evaluate your LLM applications upon.", 
    altText:
      "Visualization of UpTrain's ability to track model performance and identify accuracy declines linked to specific feature combinations.",
    titleText: "UpTrain Pinpoints Accuracy and Dimensions",
    link: "https://demo.uptrain.ai/evals_demo/",
  },
  
  {
    featureImg: experimentation_gif,
    heading: "Use UpTrain to find optimal LLM settings by experimentation",
    description:
    "UpTrain enables experimentation with multiple prompts, model providers, and custom configurations, offering quantitative scores for direct comparison and optimal prompt selection.",
    altText:
    "UpTrain supports prompt, model, and chain experimentation, yielding quantifiable scores for comparison.",
    titleText: "UpTrain: Scored Experimentation for Model Optimization",
  },
  
  {
    featureImg: monitoring_gif,
    heading: "Utilize UpTrain to detect performance dips with real-time monitoring",
    description:
      "UpTrain continuously monitors your application's performance on multiple evaluation criterions and alerts you in case of any issues with automatic root cause analysis.",
    altText: "UpTrain enables customized data filtering for improved model retraining.",
    titleText: "Enhanced Model Retraining with UpTrain's Domain Signals",
  },
  
  {
    featureImg: validation_gif,
    heading: "Use UpTrain to protect your users against incorrect responses",
    description:
      "Use UpTrain to define validation checks, configure retry logics, and protect your users and downstream tasks against undesirable LLM responses.",
    altText:
      "Achieve automated model enhancement by integrating data annotation, training, and deployment with UpTrain.",
    titleText: "Smart and Automated Model Retraining",
  },
  
  {
    featureImg: easy_integration_img,
    heading: "Single line of code to run LLM evaluations",
    description:
      "With UpTrain's wide array of pre-built metrics, you can run LLM evaluations in less than two minutes.",
    altText:
      "UpTrain seamlessly integrates with key ML libraries and MLOps tools for quick initiation in 5 minutes",
    titleText: "UpTrain integrates seamlessly with your production",
  },
];

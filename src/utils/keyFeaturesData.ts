import checking from './images/keyFeatures/checking.webp';
import custom from './images/keyFeatures/custom.webp';
import integration from './images/keyFeatures/integration.webp';
import checking_bg from "./images/keyFeatures/bg_checking.webp";
import integration_bg from "./images/keyFeatures/bg_integration.webp";
import custom_bg from "./images/keyFeatures/bg_custom.webp";

export const keyFeaturesData = [
  {
    featureImg: checking,
    backgroundImg: checking_bg,
    heading: "Diverse LLM Evaluations",
    description: 
      "Evaluations to test various aspects of your LLM responses. UpTrain provides a diverse set of pre-built metrics like response relevance, context quality, factual accuracy, language quality, etc. to evaluate your LLM applications upon.",
  },
  {
    featureImg: integration,
    backgroundImg: integration_bg,
    heading: "Single-line integration",
    description: 
      "Single line of code to run LLM evaluations. With UpTrain's wide array of pre-built metrics, you can run LLM evaluations in less than two minutes.",
  },
  {
    featureImg: custom,
    backgroundImg: custom_bg,
    heading: "Customization",
    description: 
      "When it comes to AI, there is no one size-fits-all solution. Hence, UpTrain is built with customization at its core, allowing you to configure custom grading prompts and operators with just a python function.",
  },
];
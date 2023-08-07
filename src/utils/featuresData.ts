import model_performance from "./images/model_performance_img.webp";
import data_drift_img from "./images/data_drift_img.webp";
import edge_case_signals_img from "./images/edge_case_signals_img.webp";
import automated_refinement_img from "./images/automated_refinement.webp";
import seamless_integration_img from "./images/seamless_integration_img.webp";

import dimensions_llm_evaluations from "./images/features/dimensions_llm_evaluations.png";
import experimentation_gif from "./images/features/experimentation.gif";
import validation_gif from "./images/features/validation.gif";
import monitoring_gif from "./images/features/monitoring.gif";


export const featureData = [
  {
    featureImg: dimensions_llm_evaluations,
    heading: "Use UpTrain to Evaluate specific Dimensions", 
    description:
      "UpTrain monitors your model's performance and precisely identifies decreases in accuracy, attributing them to specific combinations of dimensions.",
    altText:
      "Visualization of UpTrain's ability to track model performance and identify accuracy declines linked to specific feature combinations.",
    titleText: "UpTrain Pinpoints Accuracy and Dimensions",
  },
  
  {
    featureImg: experimentation_gif,
    heading: "Use UpTrain to find Optimal LLM Settings by Experimentation",
    description:
    "UpTrain enables experimentation with multiple prompts, model providers, and custom configuration, offering measurable scores for direct comparison and optimization.",
    altText:
    "UpTrain supports prompt, model, and chain experimentation, yielding quantifiable scores for comparison.",
    titleText: "UpTrain: Scored Experimentation for Model Optimization",
  },
  
  {
    featureImg: monitoring_gif,
    heading: "Utilize UpTrain to Detect LLM Breaking Points with Monitoring",
    description:
      "Utilize UpTrain to integrate 'Signals' that leverage domain knowledge, filtering data subsets for enhanced model retraining and targeted improvements.",
    altText: "UpTrain enables customized data filtering for improved model retraining.",
    titleText: "Enhanced Model Retraining with UpTrain's Domain Signals",
  },
  
  {
    featureImg: validation_gif,
    heading: "UpTrain Harnesses Intelligent and Automated Model Retraining.",
    description:
      "Achieve a fully automated model improvement cycle by integrating your data annotation, model training, and deployment pipelines with UpTrain.",
    altText:
      "Achieve automated model enhancement by integrating data annotation, training, and deployment with UpTrain.",
    titleText: "Smart and Automated Model Retraining",
  },
  
  {
    featureImg: seamless_integration_img,
    heading: "UpTrain Seamlessly Integrates with your Existing Pipelines",
    description:
      "Get started in under 5 minutes with UpTrain's effortless integration into leading ML libraries and MLOps tools.",
    altText:
      "UpTrain seamlessly integrates with key ML libraries and MLOps tools for quick initiation in 5 minutes",
    titleText: "UpTrain integrates seamlessly with your production",
  },
];

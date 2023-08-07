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
    titleText: "UpTrain’s Model performance dashboard",
  },
  
  {
    featureImg: experimentation_gif,
    heading: "Use UpTrain to find Optimal LLM Settings by Experimentation",
    description:
    "Perform experimentation using multiple prompts, model providers, custom configurations and measurable scores for direct comparison.",
    altText:
    "Visual representation of UpTrain's ability to support experimentation across prompts, model providers, and chain configurations, resulting in quantifiable scores for comparative analysis.",
    titleText: "Track Data Distribution Shifts as they happen",
  },
  
  {
    featureImg: monitoring_gif,
    heading: "Utilize UpTrain to Detect LLM Breaking Points with Monitoring",
    description:
      "Within UpTrain, you have the capability to establish 'Signals,' a means to integrate your specialized domain knowledge. These Signals serve the purpose of filtering distinct data subsets, which can then be applied for the purpose of model retraining.",
    altText: "UpTrain enables customized data filtering for improved model retraining.",
    titleText: "Visualize edge cases using UpTrain",
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

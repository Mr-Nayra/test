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
    heading: "Track Model Performance in Real-time", 
    description:
      "UpTrain observes the performance of your model and pin-points (any) dip in model’s accuracy to a specific feature combination",
    altText:
      "UpTrain’s Dashboard highlighting the performance of Machine learning model post deployment",
    titleText: "UpTrain’s Model performance dashboard",
  },
  {
    featureImg: experimentation_gif,
    heading: "Track Data Distribution Shifts as they happen",
    description:
    "UpTrain framework can be used to experiment across multiple prompts, model providers, chain configurations, etc. and get quantitative scores to compare them..",
    altText:
    "UpTrain’s Dashboard showing Data Distribution Shifts as they happen",
    titleText: "Track Data Distribution Shifts as they happen",
  },
  {
    featureImg: monitoring_gif,
    heading: "Define Signals to Collect Edge-cases",
    description:
      "UpTrain allows you to define “Signals” as a way to incorporate your domain-specific knowledge which are used to filter out specific subsets of data which can be used to retrain the model",
    altText: "UpTrain’s Dashboard showing edge case collection",
    titleText: "Visualize edge cases using UpTrain",
  },
  {
    featureImg: validation_gif,
    heading: "Smart and Automated Model Retraining",
    description:
      "With UpTrain, you can attach your existing data annotation, model training, and deployment pipelines to activate a completely automated continuous model improvement cycle",
    altText:
      "Pop-up box showcasing retraining upon edge cases collected by UpTrain",
    titleText: "Smart and Automated Model Retraining",
  },
  {
    featureImg: seamless_integration_img,
    heading: "Seamless Integration into your existing pipelines",
    description:
      "UpTrain offers seamless integration with all the major ML libraries and MLOps tools, allowing you to get started in less than 5 minutes",
    altText:
      "Image showing UpTrain integration with multiple ML models and cloud providers like AWS, GCP, Azure, Tensorflow, Pytorch etc.",
    titleText: "UpTrain integrates seamlessly with your production",
  },
];

import { IMAGES } from "../../../../images";

export const FeatureSectionMobileData = [
  {
    featureImg: IMAGES.model_performance,
    heading: "Track Model Performance in Real-time",
    description:
      "UpTrain observes the performance of your model and pin-points (any) dip in model’s accuracy to a specific feature combination",
  },
  {
    featureImg: IMAGES.data_drift_img,
    heading: "Track Data Distribution Shifts as they happen",
    description:
      "UpTrain compares your production data-points’ distribution against your training dataset and detects out-of-distribution cases",
  },
  {
    featureImg: IMAGES.edge_case_signals_img,
    heading: "Define Signals to Collect Edge-cases",
    description:
      "UpTrain allows you to define “Signals” as a way to incorporate your domain-specific knowledge which are used to filter out specific subsets of data which can be used to retrain the model",
  },
  {
    featureImg: IMAGES.automated_refinement_img,
    heading: "Smart and Automated Model Retraining",
    description:
      "With UpTrain, you can attach your existing data annotation, model training, and deployment pipelines to activate a completely automated continuous model improvement cycle",
  },
  {
    featureImg: IMAGES.seamless_integration_img,
    heading: "Seamless Integration into your existing pipelines",
    description:
      "UpTrain offers seamless integration with all the major ML libraries and MLOps tools, allowing you to get started in less than 5 minutes",
  },
];

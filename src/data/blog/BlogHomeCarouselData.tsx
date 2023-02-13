import { IMAGES } from "../../images";

export interface IBlogHomeCarouselData {
  cardImg: string;
  author: string;
  heading: string;
  description: string;
  id: string;
}

export const BlogHomeCarouselData: IBlogHomeCarouselData[] = [
  {
    id: "bias-in-recommendation-systems",
    cardImg: IMAGES.homeBlog_1,
    author: "Vipul Gupta | 21.01.2023",
    heading: "Bias in Recommendation Systems",
    description:
      "Modern-day web systems rely on user feedback (such as click activity or ratings) to build ML models to personalize recommendations.",
  },
  {
    id: "why-do-we-need-to-care-about-retraining",
    cardImg: IMAGES.homeBlog_2,
    author: "Shikha Mohanty | 14.01.2023",
    heading: "Why do we need to care about Retraining?",
    description:
      "The decay in model performance is generally due to reasons like data drifts, label drifts, and concept drifts. To combat these issues, retraining is critical.",
  },
  {
    id: "5-great-statistical-methods-for-data-drift-detection",
    cardImg: IMAGES.homeBlog_3,
    author: "Shri & Sourabh | 07.01.2023",
    heading: "5 Great Statistical Methods For Data Drift Detection",
    description:
      "As we now know the significance of handling data distribution drifts, the first step of the process is to identify and detect these shifts.",
  },
];

import advantage_01 from "./images/advantages/advantage_01.webp";
import advantage_02 from "./images/advantages/advantage_02.webp";
import advantage_03 from "./images/advantages/advantage_03.webp";

export const advantagesData = [
  {
    heading: "Improve performance by 20%",
    description: "You can’t improve what you can’t measure. UpTrain continuously monitors your application's performance on multiple evaluation criterions and alerts you in case of any regressions with automatic root cause analysis.",
    image: advantage_01,
  },
  {
    heading: "Iterate 3x faster",
    description: "UpTrain enables fast and robust experimentation across multiple prompts, model providers, and custom configurations, by calculating quantitative scores for direct comparison and optimal prompt selection.",
    image: advantage_02,
  },
  {
    heading: "Mitigate LLM Hallucinations",
    description: "Hallucinations have plagued LLMs since their inception. By quantifying degree of hallucination and quality of retrieved context, UpTrain helps to detect responses with low factual accuracy and prevent them before serving to the end-users.",
    image: advantage_03,
  },
]
import advantage_01 from "./images/advantages/advantage_01.webp";
import advantage_02 from "./images/advantages/advantage_02.webp";
import advantage_03 from "./images/advantages/advantage_03.webp";

export const advantagesData = [
  {
    heading: "Improve performance by 20%",
    description: "You can’t improve what you can’t measure. UpTrain continuously monitors your application's performance on multiple evaluation criterions and alerts you in case of any regressions with automatic root cause analysis.",
    image: advantage_01,
    alt: "Image showing quality of an LLM application increasing with time along with evaluation scores for hallucinations as well as guideline adherence. Image also shows real-time alerts for cohorts of model under-performance, specifically queries related to pricing information having lower context retrieval quality compared to the mean score."
  },
  {
    heading: "Iterate 3x faster",
    description: "UpTrain enables fast and robust experimentation across multiple prompts, model providers, and custom configurations, by calculating quantitative scores for direct comparison and optimal prompt selection.",
    image: advantage_02,
    alt: "Image showing comparison against two prompt experiments via quantitative scores for hallucinations and tonality. Image also shows cohort-level insights to determine which experiment performs better."
  },
  {
    heading: "Mitigate LLM Hallucinations",
    description: "Hallucinations have plagued LLMs since their inception. By quantifying degree of hallucination and quality of retrieved context, UpTrain helps to detect responses with low factual accuracy and prevent them before serving to the end-users.",
    image: advantage_03,
    alt: "Image showing workflow logic of an LLM application which uses evaluations to determine hallucinations scores and uses that to determine if the LLM response should be shown to the user or redirected to a human."
  },
]
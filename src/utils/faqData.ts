export const faqData = [
  {
    question: "How does UpTrain evaluations work?",
    answer: "We use a combination of NLP models and LLMs (we currently use OpenAI) to do LLM evaluations. To ensure reliable scores, we have built a dedicated pipeline for each of the pre-defined checks which is much more complex than just prompting the LLM to act as an evaluator.",
  },
  {
    question: "Do I need to pay for OpenAI costs for running UpTrain evaluations?",
    answer: "No, all the LLM costs are included in the paid plan, making it cheaper than other alternatives.",
  },
  {
    question: "How long does it take to integrate UpTrain?",
    answer: "UpTrain provides a single-line integration for both Python and JavaScript. Checkout the docs here",
  },
  {
    question: "Can I try UpTrain before purchasing?",
    answer: "Yes, we offer 100 free trial credits for every signup.",
  },
  {
    question: "What is the difference between open-source and managed version?",
    answer: "All the pre-defined checks like hallucinations, retrieval quality, response relevance, tonality, etc. are part of the paid plan. Other than that, the whole toolkit is open-sourced under Apache 2.0 license and provide powerful capabilities to define and run any evaluations",
  },
];
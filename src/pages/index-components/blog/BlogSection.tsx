import BlogCarousel from "@/components/blog-carousel/BlogCarousel";
import { blogData } from "@/components/blog-carousel/data/blogData";
import { memo } from "react";
import classes from "./blogHome.module.scss";

const BlogSection = () => {
  return (
    
    <meta
          name = "keywords"
          contetnt = "LLM evaluation, Language model assessment, Model performance metrics, Evaluation techniques, Benchmarking LLMs, NLP evaluation, Language generation evaluation, Model coherence, Fluency evaluation, Adequacy assessment, Human evaluation, Automated evaluation, BLEU score, ROUGE score, METEOR score, CIDEr score, Perplexity, N-gram overlap, Semantic similarity, Diversity in generated text, Informativeness, Contextual understanding, Contextual relevance, Pragmatic evaluation, Real-world performance, Task-specific evaluation, Generalization capability, Transfer learning, Pretraining evaluation, Fine-tuning evaluation, Downstream tasks, Zero-shot evaluation, Few-shot evaluation, Prompt engineering, Ethical considerations in evaluation, Active learning, Supervised machine learning, Data labeling, Unlabeled datasets, Training models, Query strategies, Semi-supervised learning, Machine learning algorithms, Data selection, Data prioritization, Uncertainty sampling, Query by committee, Least confidence strategy, Margin sampling, Expected model change, Expected error reduction, Entropy in active learning, Density-weighted methods, Applications of active learning, Natural Language Processing (NLP), Image segmentation, Object detection, Generative Adversarial Networks (GAN), Curriculum learning, Cost-effective active learning, Deep active learning, Active learning in computer vision, Active learning in NLP, Training efficiency, Labeling cost reduction, Model performance monitoring, Data distribution shifts, Edge cases collection, Model retraining, Privacy-aware tools, Observability in production, Model improvement, Continuous model monitoring, Performance assessment, Model evaluation metrics"
        />
    <div className={classes.root} id="blog">
      <h1 className={classes.heading}>Latest from UpTrain AI</h1>
      <BlogCarousel data={blogData} eventFor="home" />
    </div>
  );
};

export default memo(BlogSection);

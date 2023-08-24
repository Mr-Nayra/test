import React from "react";
import { tableList } from "./components/tableList";
import banner from "./images/long_img.png";
import analyzing from "./images/analyzing.png";
import catching from "./images/catching.png";
import vocabularyCoverage from "./images/vocabularyCoverage.gif";

import Image from "next/image";
import CodeViewer from "@/components/code-viewer/CodeViewer";
import BlogTemplate from "@/components/blog-template/BlogTemplate";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>
          Fine-tuning Language Models with UpTrain: A Simple Guide to Enhancing
          Models for Custom Use-cases
        </title>

        <meta
          name="keywords"
          content="Active learning, supervised machine learning, data labeling, unlabeled datasets, training models, query strategies, semi-supervised learning, machine learning algorithms, data selection, data prioritization, uncertainty sampling, query by committee, least confidence strategy, margin sampling, expected model change, expected error reduction, entropy in active learning, density-weighted methods, applications of active learning, Natural Language Processing (NLP), image segmentation, object detection, Generative Adversarial Networks (GAN), curriculum learning, cost-effective active learning, deep active learning, active learning in computer vision, active learning in NLP, training efficiency, labeling cost reduction"
        />
      </Head>
      <BlogTemplate
        tablelist={tableList}
        title="Fine-tuning Language Models with UpTrain: A Simple Guide to Enhancing Models for Custom Use-cases"
        authorName="Sourabh Agrawal"
        date="31st Mar, 2023"
        banner={{ image: banner, alt: "Unlocking The Power" }}
      >
        <meta
          name="keywords"
          content="Large language models, LLMs, Bigger models, Smaller models, Proponents, Debate, Collect, High-quality datasets, Fine-tune, Specific use-cases, Practical, Enhancing, Conversation summarization model, UpTrain, Tutorial, Dataset, Summarize, Human conversations, Facebook/bart-large-xsum model, Fine-tuned, SAMSum dataset, Best open-source models, Conversation summarization, Improve, DialogSum, Powerful tool, Fine-tuning datasets, Process, Visualizing, UMAP, t-SNE, Low-performing clusters, Finding clusters, Edge-case Collection, Heuristics, Observations, Building Custom Monitor, Out-of-vocabulary cases, GPU, Bart-large-xsum, Time consuming, Pre-generated, Model outputs, Sentence BERT embeddings, Reference dataset, SAMSum training, DialogSUM dataset, Analyzing Performance, UMAP, Content, Visualizing, UMAP, Performance, Rogue-L similarity, Metric, Rogue-L score, Outliers, Sentence BERT embeddings, Model performance, Edge cases, Observation, Model outputs, Poorly performing points, Clusters, Defining a monitor, Data points, Catch data-points, Close to outliers, Observation, Model performance, Edge cases, Observation, Model performance, Long conversations, Histogram, Threshold, Large conversation data-points, Edge Case Type 1, Long dialogues, Length check, Edge Case Type 2, Copied sentences, Negation."
        />

        <div>
          <h2 id="what-is-a-large-language-model">
            Run the example on Google Colab{" "}
            <a
              href="https://colab.research.google.com/drive/1svJoDdbwe-jSeGuQOhtrRMhxwIqP7nMM?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </h2>
          <p>
            The era of large language models (LLMs) taking the world by storm
            has come and gone. Today, the debate between proponents of bigger
            models and smaller models has intensified. While the debate
            continues, one thing is clear: not everyone needs to run large
            models for their specific use-cases. In such situations, {"it's "}
            more practical to collect high-quality datasets to fine-tune smaller
            models for the task at hand.
          </p>
          <h2 id="enhancing-a-conversation-cummarization-codel-with-uptrain">
            Enhancing a Conversation Summarization Model with UpTrain
          </h2>
          <p>
            In this blog post, {"we'll"} walk you through a tutorial to collect
            a dataset to fine-tune a model that can summarize human
            conversations. The model {"we're"} working with is based on the
            facebook/bart-large-xsum model, which is already fine-tuned on the
            SAMSum dataset, a collection of conversations and their summaries.
            This model is one of the best open-source models for conversation
            summarization.
          </p>
          <p>
            Our goal is to further improve this model so that it performs better
            on a similar dataset called DialogSum, which also contains
            conversations and their summaries. To do this, {"we'll"} use
            UpTrain, a powerful tool for creating fine-tuning datasets.
          </p>
          <h2 id="the-process">The Process</h2>
          <p>
            In this blog, the process of collecting a fine-tuning dataset
            involves several steps:
          </p>
          <p>● Visualizing UMAP/t-SNE for low-performing clusters</p>
          <p>● Finding clusters around data-points where accuracy is low</p>
          <p>
            ● Edge-case Collection (user defines the edge-case parameters based
            on heuristics/observations)
          </p>
          <p>● Building Custom Monitor (that checks out-of-vocabulary cases)</p>
          <p>Note: GPU is not required to run this tutorial.</p>
          <p>
            We understand that running the bart-large-xsum can be time consuming
            on some machines. Hence, we have pre-generated the model outputs and
            their corresponding sentence BERT embeddings to remote for both the
            SAMSum and DialogSUM datasets. Due to this, running this entire
            script does not take too much time (e.g., it runs in 3 minutes on my
            Macbook Air).
          </p>
          <p>
            First, {"let's"} see (literally) what we are dealing with. We plot
            the sentence BERT embeddings with UMAP dimensionality reduction. We
            apply dimensionality reduction on 3 types of datasets: SAMSum train
            (aka reference dataset), SAMSum test, and DialogSum train.
          </p>
          <h2 id="Analyzing-Performance-and-Visualizing-with-UMAP">
            Analyzing Performance and Visualizing with UMAP
          </h2>
          <p>
            {"We'll"} also use a visualization technique called UMAP to see how
            different datasets are related in terms of content. Datasets marked
            reference (i.e., SAMSum training) and samsum (i.e., SAMSum test) are
            close in the UMAP space. Most point from the DialogSum dataset are
            further than the data on which the model was finetuned on (i.e.,
            reference aka SAMSum train).
          </p>
          <Image
            style={{ height: "auto" }}
            src={analyzing}
            alt="Analyzing Performance and Visualizing with UMAP"
          />
          <p>
            Next, we identify poorly performing points and find clusters around
            them.
          </p>
          <h2 id="Defining-a-monitor-to-catch-data-points-close-to-outliers">
            Defining a monitor to catch data-points close to outliers
          </h2>
          <p>
            In this section, we first define a performance metric: Rogue-L
            similarity. You can choose any metric relevant to your use case.
            {"We'll"} select data points with Rogue-L scores equal to 0.0 as
            outliers. Our objective is to find data-points that lie around these
            outliers because they are more likely to perform worse (and as we
            show later, they do!).
          </p>
          <p>
            To do this, {"we'll"} use a technique called sentence BERT
            embeddings to represent our text data. {"We'll"} compare these
            embeddings from the DialogSum dataset to the ones from our reference
            dataset (SAMSum training).
          </p>
          <p>
            <b>RESULT</b>: The overall performance (Rogue-L score) on the
            DialogSum dataset was 0.305. However, on the data-points identified
            by the method above, the performance score dropped to 0.237.
          </p>
          <p>
            While analyzing the model outputs above, we made a few observations
            on cases where model does not perform well. Note that these are not
            statistical ways of finding edge cases but are more inspired by our
            intuition in dealing with the above data.
          </p>
          <h2 id="Catching-Edge-cases-for-Finetuning-the-Model-Later">
            Catching Edge-cases for Finetuning the Model Later
          </h2>
          <p>
            A basic step in fine-tuning the model is to analyze its performance
            and identify situations where it {"doesn't"} perform well to catch
            appropriate edge-cases. We do this by making a few observations on
            the model performance.
          </p>
          <p>
            <b>Observation</b>: Our first observation is that the model has
            trouble summarizing very long conversations, often producing
            incomplete summaries. Some examples of these incomplete summaries
            are below.
          </p>
          <CodeViewer>
            {`"Benjamin, Elliot, Daniel and Hilary are going to have lunch with French"
    "Jesse, Lee, Melvin and Maxine are going to chip in for the"
    "Jayden doesn't want to have children now, but maybe in the future when"
    "Leah met a creepy guy at the poetry reading last night. He asked her"
    "Jen wants to break up with her boyfriend. He hasn't paid her back the"`}
          </CodeViewer>
          <p>
            We used the above information to define an edge case in UpTrain. To
            collect a dataset that can help the model improve in these edge
            cases, we need to find conversations that are longer than a certain
            threshold. To find an appropriate threshold, we generated a
            histogram of length of input dialogues on the training dataset
            (i.e., SAMSum train). From here, we noted that a length of 1700 can
            be a good cut-off to collect large conversation data-points. The
            histogram is shown below.
          </p>
          <Image
            style={{ height: "auto" }}
            src={catching}
            alt="Catching Edge-cases for Finetuning the Model Later"
          />
          <h2 id="Long-dialogues">Edge Case Type 1: Long dialogues</h2>
          <p>
            Following is how the edge-case check is defined in UpTrain. It
            checks if the length of the input dialogue is greater than 1700
            characters.
          </p>
          <CodeViewer>
            {`def length_check_func(inputs, outputs, gts=None, extra_args={}):
        this_batch_dialog = inputs['dialog']
        return np.array([len(x) for x in this_batch_dialog]) > 1700

    edge_case_length = {
        'type': uptrain.Monitor.EDGE_CASE,
        'signal_formulae': uptrain.Signal("Length_dialog", length_check_func)
    } `}
          </CodeViewer>
          <p>
            <b>Observation</b>: Next, we will discuss another type of edge case
            that affects the performance of our language model. In this case,
            the model directly copies one or two sentences from the input
            conversation. This works well in many cases but fails when the
            conversation is about refuting those one or two sentences which
            model produced as summary. This can lead to the generation of
            summaries that are not accurate or do not capture the true essence
            of the conversation.
          </p>
          <p>
            For example, the output summary of the model in the following cases
            is not appropriate:
          </p>
          <CodeViewer>{`Input:
    Janice: my son has been asking me to get him a hamster for his birthday. Janice: Should I? Martina: NO! NO! NO! NO! NO! Martina: I got one for my son and it stank up the whole house. Martina: So don't do it!!!
    Output: Janice's son wants her to get him a hamster for his birthday.

    Input:
    Person1: Hello, I'm looking for a shop that sells inexpensive cashmere sweaters. Person2: Have you tried an outlet? Person1: Why didn't I think of that? Person2: Many of my friends shop at outlets. Person1: Thanks. That is a good suggestion. Person2: I'm only too happy to help.
    Output: Person1 is looking for a shop that sells inexpensive cashmere sweaters.`}</CodeViewer>
          <h2 id="Copied-sentences-with-negation">
            Edge Case Type 2: Copied sentences with negation
          </h2>
          <p>
            In order to catch this heuristic as an edge case in UpTrain, we
            define two functions: rogueL_check_func and negation_func.
          </p>
          <p>
            The rogueL_check_func function checks whether sentences from the
            input are copied directly using the Rouge-L metric. This metric
            calculates the longest common subsequence of characters in the input
            and output texts.
          </p>
          <p>
            {`The negation_func function, on the other hand, checks if there's a
                  negation in the input by searching for common negation words such
                  as "no," "not," "can't," "couldn't," "won't," "didn't," and
                  "don't."`}
          </p>
          <p>
            Finally, we combine these two functions to create an edge case
            definition called edge_case_negation. This definition will help us
            identify and collect data points where the model directly copies
            sentences and where negation is present in the input.
          </p>
          <p>
            By identifying and addressing these edge cases, we can further
            improve the performance of our language model, making it more
            accurate and reliable in generating summaries of conversations.
          </p>
          <h2 id="Custom-Monitor-for-Vocabulary-Coverage:-Ensuring-High-Quality-Summarization">
            Custom Monitor for Vocabulary Coverage: Ensuring High-Quality
            Summarization
          </h2>
          <p>
            In this section, we will discuss how to create a custom monitor to
            check the vocabulary coverage of the new dataset (DialogSum) on the
            old dataset (SAMSum). By evaluating the vocabulary coverage, we can
            determine whether there is a significant shift in the vocabulary
            used between the two datasets. This will help us understand how well
            the model can generalize and produce accurate summaries for
            different datasets.
          </p>
          <p>
            <b>Creating a Custom Monitor</b>
          </p>
          <p>To create a custom monitor, we need to define two functions:</p>
          <p>
            ● vocab_init: Initializes the state of the monitor, which includes
            the training vocabulary and a counter for out-of-vocab words.
          </p>
          <p>
            ● vocab_drift: Checks the vocabulary coverage of the production
            dataset in the training dataset, updates the out-of-vocab words
            counter, and logs the results to the UpTrain dashboard.
          </p>
          <p>The following is how the custom monitor is defined in UpTrain.</p>
          <CodeViewer>
            {`custom_monitor_check = {
        'type': uptrain.Monitor.CUSTOM_MONITOR,
        'initialize_func': vocab_init,
        'check_func': vocab_drift,
        # To tell the framework ground truth is not needed
        'need_gt': False,
    }`}
          </CodeViewer>
          <p>
            By using this custom monitor, we can analyze the vocabulary coverage
            of our model and identify any vocabulary drift that might be
            affecting the {"model's"} performance. This allows us to make the
            necessary adjustments to improve the accuracy and reliability of our
            language model in generating summaries for various datasets.
          </p>
          <p>
            <b>Defining UpTrain Config and Framework</b>
          </p>
          <p>
            In this section, we set up the UpTrain configuration and framework
            to analyze our {"model's"} performance and collect the necessary
            data. This helps us ensure that our language model is generating
            accurate summaries for various datasets.
          </p>
          <p>
            We create a configuration dictionary that includes the edge cases
            and custom monitor we defined earlier. Additionally, we specify the
            folder where the smart data will be stored.
          </p>
          <CodeViewer>
            {`config = {
        "checks": [edge_case_negation, edge_case_length, custom_monitor_check],
        "logging_args": {"st_logging": True},
        "retraining_folder": "smart_data_edge_case_and_custom_monitor",
    }
    framework = uptrain.Framework(cfg_dict=config)`}
          </CodeViewer>
          <p>
            <b>Vocabulary Coverage</b>
          </p>
          <p>
            Using the UpTrain dashboard, we can visualize the vocabulary
            coverage of our model on the production data. The coverage starts at
            around 98% for the SAMSum test dataset but decreases to about 95%
            for the DialogSum dataset (that is, after ~800 SAMSum test points
            are logged).
          </p>
          <Image
            style={{ height: "auto" }}
            src={vocabularyCoverage}
            alt="Vocabulary Coverage"
          />
          <p>
            By inspecting the collected edge cases, we can confirm that our edge
            case detector is effectively identifying the appropriate cases and
            collects 554 edge-cases of the 13200 data-points logged into the
            framework.
          </p>
          <p>
            <b>Out-of-Vocabulary Words</b>
          </p>
          <p>{`We can also examine the out-of-vocabulary words to gain insights into the differences between the datasets. For example, a significant number of out-of-vocabulary words are related to Asia, such as "yuan", "li", "wang", "taiwan", "zhang", "liu", "chinas", "sichuan", "singapore", and others. This indicates that many conversations in the DialogSum dataset focus on the Asia region.`}</p>
          <p>
            By understanding the out-of-vocabulary words and their context, we
            can take steps to improve our {"model's"} performance on specific
            topics or regions, ensuring it generates accurate and relevant
            summaries for various datasets, as shown next.
          </p>
          <h2 id="Identifying-Edge-Cases-with-Asia-related-Words">
            Identifying Edge Cases with Asia-related Words
          </h2>
          <p>
            {"We've"} found that many conversations in the DialogSum dataset are
            focused on the Asia region which were not originally present in the
            SAMSum dataset. So, {"we'll"} create a check to catch cases
            containing specific Asian words. The list asian_words contains some
            common Asian words like names, places, and currencies, and the check
            goes on to define cases where Asia-related words are found in the
            input dialogue.
          </p>
          <CodeViewer>
            {`asian_words = ['yuan', 'li', 'wang', 'taiwan', 'zhang', 'liu', 'chinas', 'sichaun', 'singapore']
    def asian_words_check(inputs, outputs, gts=None, extra_args={}):
        has_asian_word = [False]*len(inputs['dialog'])
        for i,text in enumerate(inputs['dialog']):
            all_words = clean_string(text).split()
            if len(set(asian_words).intersection(set(all_words))):
                has_asian_word[i] = True
        return has_asian_word

    edge_case_asian_word = {
        'type': uptrain.Monitor.EDGE_CASE,
        'signal_formulae': uptrain.Signal("asian_word", asian_words_check)
    }`}
          </CodeViewer>
          <p>
            Finally, we can add the above edge-case check to UpTrain config to
            catch all data-points with Asia-related words.
          </p>
          <h2 id="Putting-It-All-Together">Putting It All Together</h2>
          <p>
            By following these steps, we can collect a dataset that targets
            specific weaknesses in the {"model's"} performance. This dataset can
            then be used to fine-tune the model, making it better at handling
            custom use-cases like summarizing long conversations in the
            DialogSum dataset.
          </p>
          <p>
            pIn summary, fine-tuning smaller language models using tools like
            UpTrain is an effective way to create tailored solutions for
            specific tasks. By identifying edge cases, building custom monitors,
            and analyzing the {"model's"} performance, we can collect
            high-quality datasets that help improve the {"model's"} performance
            for our particular use-case.
          </p>
        </div>
      </BlogTemplate>
    </>
  );
};

export default index;

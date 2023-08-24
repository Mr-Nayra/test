import Image from "next/image";
import React, { Fragment } from "react";
import banner from "./images/banner.webp";
import retraining from "./images/retraining-blog.webp";
import error from "./images/error.webp";
import Head from "next/head";
import { whyDoWeTableList } from "./components/tableList";
import BlogTemplate from "@/components/blog-template/BlogTemplate";

const index = () => {
  return (
    <>
      <Head>
        <title>
          Data drift and why one needs to retrain machine learning models
        </title>

        <meta
          name="keywords"
          content="Model Maintenance, Long-term model performance, Continuous model improvement, Model upkeep, Machine Learning Lifecycle, Model management, Model maintenance strategy, Lifecycle of ML models, Model Degradation, Preventing model decay, Avoiding accuracy decline, Mitigating performance deterioration, Data Drift Detection, Detecting data shifts, Monitoring data changes, Identifying dataset shifts, Concept Shift Monitoring, Tracking changes in relationships, Detecting concept drift, Adapting to evolving contexts, Label Distribution, Shifting output distribution, Changes in label frequencies, Label change detection, Edge Case Handling, Rare event management, Addressing outlier scenarios, Handling unusual cases, Retraining Benefits, Importance of retraining, Maintaining model relevance, Upgrading model dataset, Dynamic Model Updates, Updating deployed models, Keeping models accurate, Real-time model refinement, Feature Evolution, Changing input features, Adapting input variables, Incorporating new features, Machine Learning Maintenance, ML model sustainability, Model adaptation, Updating ML solutions, Data Update Strategy, Refreshing training data, Keeping dataset current, Data refresh techniques, Maintaining Model Accuracy, Sustaining model precision, Retaining predictive power, Long-lasting model quality, Performance Metrics, Model precision, Accuracy rate, Prediction quality, Performance evaluation, Automated Model Management, AI-powered model maintenance, Automated model refinement, AI-driven retraining, ML Model Performance, Ensuring model effectiveness, Monitoring model efficiency, Evaluating model success, Long-Term Model Success, Continuous model optimization, Prolonged model relevance, Model enhancement, Data Quality Management, Ensuring data integrity, Managing dataset quality, High-quality training data, Machine Learning Best Practices, ML model best practices, Model upkeep guidelines, Optimal model management, UpTrain AI Solution, UpTrain AI platform, AI-driven model management, AI-powered retraining."
        />
      </Head>
      <BlogTemplate
        tablelist={whyDoWeTableList}
        title="Why do we need to care about Retraining?"
        authorName="Shikha Mohanty"
        date="14th Jan, 2023"
        banner={{ image: banner, alt: "about Retraining" }}
      >
        <div>
          <p>
            In our previous blog, we introduced you to the wonderful universe of
            ML and dug deep into the various steps involved in building and
            deploying the model. But there is one very integral step that one
            needs to take to ensure the longevity and relevance of the model and
            that is Model Retraining, which is a crucial aspect in the life
            cycle of a model.
          </p>
          <p>
            Let’s understand this better with an example. IMDb is one of the
            world’s largest movie databases and is a go-to website for many of
            us for movie recommendations (What would we do without it, right?
            XD). Let’s say for better user experience, IMDb wants to build a
            machine learning model which predicts box office outcome of a movie
            before its release based on inputs such as date of release, genre,
            star cast, production house, director, theme, editing and effects
            used, content rating (age group rating), music composer, region and
            budget and it will help predict whether the movie will be a box
            office hit or not. To do this, the model is first trained on the
            movie data of three years, say 2015 - 2018 and then it was deployed,
            and voila! It gave tremendously accurate results and everyone lived
            happily ever after. Or at least that’s what we all would like to
            believe, right?
          </p>

          <Image style={{ height: "auto" }} src={retraining} alt="" />

          <p>
            However, the success of the model is short lived- It was noticed
            that around late 2020, a data shift occurs as audience preferences
            change, which results in the degradation of the model. The precision
            and accuracy rate of the model deteriorates and an overall downfall
            in the performance of the model is observed. But why did this happen
            in the first place? Well, the reason is that the data we used to
            train our model is now outdated.
          </p>
          <p>So, what next? Cue, model retraining</p>

          <h2 id="model-retraining">
            <b>But First, Let Me #EXPLAIN What is Model Retraining?</b>
          </h2>
          <p>
            Model retraining is the process of updating the data of any deployed
            model. The updated data is used to retrain the model and keep the
            model up to date. It ensures the accuracy rate and precision rate of
            the model are not compromised, and quality service is ensured.
            However, model retraining doesn&apos;t change the model&apos;s
            algorithm; it simply means updating the model&apos;s dataset to get
            accurate results even after a long time.
          </p>

          <h2 id="6-Reasons">
            <b>6 Reasons Why ▶ Retraining is Important</b>
          </h2>
          <p>
            The decay in model performance is generally due to reasons like data
            drifts, label drifts, and concept drifts. To accommodate these
            changes, retraining is essential. Other reasons include the
            occurrence of unlikely scenarios, the addition of data, or an
            increase in the output labels. Let’s talk about all of these one by
            one:
          </p>

          <p className="blog-pt" id="data-drift">
            <b>1. Data Drift: </b>
            In simple words, a data shift is a change in the dataset,overtime,
            that is initially used to train the model. This change in dataset
            values leads to inaccurate predictions of the model. The initial
            data used to train the data is called source distribution, and the
            data that the model actually works on is the target distribution.
            Coming back to our previous IMDb example, the model was trained
            using data collected in the years 2015 - 2018 and it is inevitable
            that trends and preferences would have changed significantly since
            then, which would lead to a data shift. Hence, it becomes crucial to
            collect fresh data and update our model accordingly.{" "}
          </p>

          <p className="blog-pt" id="concept-drift">
            <b>2. Concept Drift: </b>
            Concept drift refers to a phenomenon where the relationship between
            the inputs and outputs change over time. In the context of our
            example, say the audience&apos;s tastes evolve over time. Previously
            having a big actor was enough to guarantee the success of a movie
            (and since this was a clear pattern in the training data, this is
            also what our model learnt). But now, people are giving more
            preference to storyline as compared to actors and as a result,
            movies with just popular artists but weak storylines are now getting
            flopped. This necessitates a need to retrain the model as the
            underlying relationship between the input features and resultant
            output has changed and the model must be retrained to the new
            reality.{" "}
          </p>

          <p className="blog-pt" id="label-shift">
            <b>3. Label Shift: </b>
            Label shift occurs when the output distribution changes while the
            input distribution and their relationship remains the same. These
            scenarios typically happen when the underlying data undergoes a
            systematic shift. Let’s understand this with our movie example. All
            of us have seen the meteoric rise of OTT platforms in recent years.
            This rise has resulted in a negative impact on box office
            collections as people are now okay to wait for the OTT release as
            compared to spending on movie tickets. What it means is that the box
            office collections have reduced across the board. While there might
            not be any change in which movies are becoming a hit, the hit movies
            may be earning lower collections as compared to earlier. Thus, the
            model needs to be retrained to learn the new output distribution.
          </p>

          <p className="blog-pt" id="edge-cases">
            <b>4. Edge Cases: </b>
            Edge cases are the occurrence of rare yet possible scenarios.
            Talking in quantitative terms, if there are events with a 99%
            possibility, then an edge case is the occurrence of an event with
            that rare 1% possibility. Let&apos;s talk about our example. In this
            case, let&apos;s say we have an actor who only works with big
            production houses, but in a particular case, the script of the movie
            attracts him, and he ends up working with a small local production
            house. Now, this is an edge case for our model. Another instance of
            an edge case is where a less famous actor has a big break and ends
            up working in a high-budget film with a very famous director and
            producer, contrary to his previous low-budget movie castings. While
            we collect the dataset and are provisioning our model, we might not
            consider these cases, but if such a case happens, we need to collect
            such data intently and retrain our model to include these cases as
            well.
          </p>
          <p className="blog-pt" id="enabling-cases">
            <b>5. Enabling new use cases: </b>
            Retraining is triggered in these situations where a new class has
            been added to the output. For instance, previously movies were being
            classified amongst these three categories: Flop, Average and Hit.
            However, a new category needs to be added called Blockbuster Hit.
            So, naturally the model needs to be retrained to incorporate this
            new class.
          </p>
          <p>
            <b>6. Feature change: </b>
            The factors in deciding a certain outcome keeps changing with time.
            Let&apos;s say with all the input data earlier described, we notice
            that supporting cast plays a key role in determining success of a
            movie and want to add that also as an input feature. This requires
            us to retrain the model with the new set of input features. Adding
            the data in the dataset will be easy, but then model retraining
            becomes a crucial step.
          </p>

          <Image style={{ height: "auto" }} src={error} alt="" />

          <p className="blog-pt" id="conculsion">
            The above drifts are some of the most common issues encountered by
            ML practitioners and we at UpTrain AI are building a smart and
            automated pipeline to continuously monitor these issues and solve
            them by retraining models so that they can meaningfully impact your
            business metrics.{" "}
            <a
              href="https://github.com/uptrain-ai/uptrain"
              target={"_blank"}
              rel="noreferrer"
            >
              Try out our open-source repo
            </a>
          </p>
        </div>
      </BlogTemplate>
    </>
  );
};

export default index;

import Image from "next/image";
import React, { Fragment } from "react";
import banner from "./images/banner.webp";
import Illustration_depicting_model_graph from "./images/Illustration-depicting-model-graph.webp";
import Head from "next/head";
import { mistakesModelsProduction } from "./components/tableList";
import BlogTemplate from "@/components/blog-template/BlogTemplate";

const index = () => {
  return (
    <>
      <Head>
        <title>
          7 Mistakes People Make When Putting Their Models In Production
        </title>

        <meta
          name="keywords"
          content="ML model post-production maintenance, ML model performance, Automate workflow, Prevent pipeline flaws, AI adoption challenges, Deploying ML models, Data drift in ML models, Real data distribution drift, Performance degradation in ML models, Monitor performance post-production, Unnoticed data drift detection, Data drift causes, Seasonal data drifts, Cost of model exceeding value, Model accuracy degradation, User input validation for ML models, Data validation for ML models, Handling data input mismatches, Pydantic data validation, Test set for ML models, Optimal test dataset for ML models, Generalization to unseen data, A/B testing methodology, Updating test dataset, Choosing ML architectures, Simple use-cases for ML models, Business problem definition for ML, Value/Cost ratio for ML solutions, Neural network vs. logistic regression, Tree-based models for ML, Automated model refinement pipelines, Efficient ML model development, Automated issue resolution, Feature engineering automation, Hyperparameter tuning automation, Model selection automation, AI governance, Data science and ML techniques, AI governance process, Deployment strategy for ML, Blue-green deployment, Canary deployment, Shadow deployment, Rollback system for ML models, Cross-functional team communication, Monitoring model biases, Tracking model biases, Fair AI adoption, MLOps tools for bias identification, Preventing model bias, Conclusion, ML model problems, Solution compatibility with stacks and libraries, Automating dynamic endpoint updates, Continuous deployment tools, Uptrain, Uptrain benefits, Uptrain platform, Uptrain use-cases, Uptrain features"
        />
      </Head>
      <BlogTemplate
        tablelist={mistakesModelsProduction}
        title="7 Mistakes People Make When Putting Their Models In Production"
        authorName="Sourabh & Shri"
        date="7th Mar, 2023"
        banner={{ image: banner, alt: "mistakes-deploying-ML-models" }}
      >
        <div>
          <div>
            <h2 id="introduction">
              <b>- Introduction</b>
            </h2>
            <p>
              A critical part of the lifecycle of an ML model is post-production
              maintenance and performance. Many issues may arise during this
              period, like degradation in accuracy or problems in the software
              architecture involved. It is essential to automate the workflow
              and prevent flaws in the pipeline. Companies and teams which are
              in the early stages of AI adoption often face high failure rates
              when deploying ML models. In this blog, I’ll cover the common
              mistakes teams make while deploying Machine learning models to
              production. Grab a cup of coffee and read on!
            </p>

            <p className="blog-pt" id="unnoticed-data-drifts">
              <b>1. Unnoticed Data Drifts: </b> Let’s say you work in an ML team
              that predicts the inventory demand forecasting for a
              pharmaceutical business. After developing and testing an ML model,
              you deployed it at a great performance accuracy of 85%, and
              it&apos;s a celebration. After 6-12 months, you started noticing
              that the performance has degraded to below 60%. This degradation
              happens due to drift in the distribution of the real data (current
              -time ) and the testing data (at deployment time).
            </p>
            <p>Wondering what causes the drifts in the distribution?</p>
            <p>
              Dynamic changes in the global economy, market, culture, varying
              trends or sudden changes imposed by events such as natural
              disasters and wars, etc., can cause these drifts. For example, in
              the case of pharmaceutical businesses, seasonal drifts commonly
              occur with the onset of flu season, the spread of Covid-19,
              dengue, etc.
            </p>
            <p>
              It is very essential to monitor the performance post-product and
              detect the data drifts. Because unnoticed data drifts would lead
              to the cost of the model exceeding the value addition it provides.
              If these drifts are not fixed sufficiently fast, there would be no
              choice but to train a new model again at the cost of business
              metrics. The image below describes how model accuracy degrades
              with time and why retraining at regular intervals of time is
              crucial.
            </p>

            <Image
              style={{ height: "auto" }}
              src={Illustration_depicting_model_graph}
              alt="Illustration depicting model graph"
            />
            <h3>Illustration depicting model degradation over time</h3>
            <p className="blog-pt" id="not-validating-user-inputs">
              <b>2. Not Validating User Inputs: </b>
              Validating user inputs is essential when deploying machine
              learning models because it helps to ensure that the model is being
              used correctly and can make accurate predictions. The model might
              expect data input from users in a specified format, such as
              integer values. But when we make it available to the real world,
              it must be ready for the worst! People may provide strings or
              mixed characters as input instead of integers. Specifying in the
              pipeline how to handle these mismatches is called data validation.
            </p>
            <p>
              Some may be genuine customers unaware of the technical interface
              or requirements or notorious hackers out there to crash your
              model. We need the model to handle both situations and explicitly
              inform users about the right change in the format required for
              correct output. Pydantic is a common python package that provides
              functionalities to perform easy data validation.
            </p>

            <p className="blog-pt" id="not-having-a-good-test-set">
              <b>3. Not Having a Good Test Set: </b> A very common mistake made
              by ML teams is not developing an optimal test dataset that would
              provide good performance and also retain the ability to generalize
              to unseen data. Many among us have improved our rank on the public
              leaderboard of Kaggle competitions by fitting the test data
              accurately. But, in most cases, overfitting occurs, and the rank
              drops on the unseen Private leaderboard data!
            </p>
            <p>
              To avoid this, it is advised to keep aside multiple unseen
              datasets for testing before deployment rather than using a single
              test dataset. Avoid re-using the same test set multiple times, as
              that would lead to biased evaluation. The A/B testing methodology
              is also used during production for better insights into the
              evaluation strategy. It is also essential to regularly update the
              test dataset over time, as there could be many changes and drifts
              introduced.
            </p>

            <p
              className="blog-pt"
              id="focusing-on-fancy-architectures-even-for simple use-cases"
            >
              <b>
                4. Focusing on Fancy Architectures Even For Simple Use-Cases:
              </b>
              With growing developments in artificial intelligence every day,
              many companies and startups have embarked on the journey of using
              Machine learning for their businesses. A common strategic mistake
              made in these situations is not defining and understanding our
              business problem clearly. Many teams directly hire ML
              practitioners to develop ML models without spending sufficient
              time to evaluate if Machine learning is the right approach for
              what they are trying to solve.
            </p>
            <p>
              ML can’t provide solutions in every case and is not required in
              many cases too. So, it is advised to compare the existing
              solutions and how using ML will add more value than that. The
              Value/Cost ratio of ML and non-ML solutions must be researched and
              tested. The business metrics to forecast or improve must be
              clearly defined and tested. Many beginners tend to use complex
              neural network-based models when simple logistic regression or
              tree-based models would be cheaper and more efficient with
              comparable performance.
            </p>

            <p
              className="blog-pt"
              id="lack-of-automated-workflows-for-model-improvement"
            >
              <b> 5. Lack of Automated Workflows For Model Improvement</b>{" "}
              Automated model refinement pipelines are important because they
              can help streamline the process of developing accurate and
              efficient machine learning models. As a model is deployed into
              production and its performance can degrade over time, these
              pipelines can ensure automated issue resolution, thus saving time
              and resources of your machine learning teams. Developing machine
              learning models can be a time-consuming process, especially when
              dealing with large datasets. Automated pipelines can speed up this
              process by automatically handling some of the more repetitive or
              time-consuming tasks, such as feature engineering, hyperparameter
              tuning and model selection. It also ensures that models are always
              up-to-date with recent user behaviors and don’t face any unwanted
              drifts.
            </p>

            <p>
              Overall, automated model refinement pipelines can help in reducing
              the time, cost, and complexity of developing machine learning
              models, while also improving their accuracy, reproducibility and
              scalability.
            </p>

            <p className="blog-pt" id="lack-of-AI-governance">
              <b> 6. Lack of AI governance</b> Heard of Spiderman’s famous
              quote:“With great power, comes greater responsibility”? Similarly,
              with the increasing applications of data science and ML
              techniques, along comes the responsibility of a well-structured AI
              governance process in place. AI governance refers to the process
              of how a company maintains the datasets used, and techniques
              employed and tracks all the versions deployed. Manual deployment
              can’t be trusted and depended upon at a large scale. Deciding a
              deployment strategy is also crucial to minimize service downtime.
              There are multiple recommended deployment strategies like
              Blue-green deployment, canary, and shadow deployment strategies.
              It is advised to use a rollback system that would let the ML
              practitioner switch to previous versions at critical times. AI
              governance also smoothens the communication between
              cross-functional teams of the company.
            </p>

            <p className="blog-pt" id="not-monitoring-model-biases">
              <b> 7. Not Monitoring Model Biases</b> Are you wondering why we
              need to keep a track of everything?
            </p>
            <p>
              Let’s understand with a text-based example, where we train a large
              language NLP model on huge text repositories to build a
              Conversational AI. What if the AI turns out to be biased to a
              specific gender, race, or community? You’d have to track back to
              the data you used for training and check for the presence of bias
              in it. To satisfy and maintain the ethics and legal aspects of AI,
              monitoring model bias is essential. One needs to ensure that AI
              adoption in teams is occurring fairly without bias. Hence, it is
              essential to use MLOps tools that can identify biases in your
              model as quickly as possible and allow you to take preventive
              measures before they can cause any reputation damage to your
              organisation.
            </p>

            <h2 id="conclusion">
              <b>- Conclusion</b>
            </h2>
            <p>
              I hope you understood the different problems we discussed in this
              section. Teams should try to develop a solution that is compatible
              with various stacks and libraries. Simple, but crucial tasks like
              automating the update of dynamic endpoints involved in our model.
              Tools like ArgoCD, Jenkins-X, or Flux are available for the
              continuous deployment stage. Your modifications will be released
              into production using these tools. Keeping these key points in the
              checklist can prevent most of the ML models from failing
              post-deployment.
            </p>
          </div>
        </div>
      </BlogTemplate>
    </>
  );
};

export default index;

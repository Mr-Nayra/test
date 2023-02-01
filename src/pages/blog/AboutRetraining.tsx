import React from "react";
import { IMAGES } from "../../images";
import classes from "./index.module.scss";

const AboutRetraining = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.tableContainer}>
          <ul>
            <li className={classes.listItem}>
              <a href="#introduction" className={classes.listItemLink}>
                - Introduction
              </a>
            </li>
            <li className={classes.listItem}>
              <a href="#model-retraining" className={classes.listItemLink}>
                - What is Model Retraining?
              </a>
            </li>

            <li className={classes.listItem}>
              <a href="#6-Reasons" className={classes.listItemLink}>
                - 6 Reasons Why ▶ Retraining is Important
              </a>
              <ul className={classes.nestedListItem}>
                <li>
                  <a href="#data-drift" className={classes.nestedListItemLink}>
                    Data Drift
                  </a>
                </li>
                <li>
                  <a
                    href="#concept-drift"
                    className={classes.nestedListItemLink}
                  >
                    Concept Drift
                  </a>
                </li>

                <li>
                  <a href="#label-shift" className={classes.nestedListItemLink}>
                    Label Shift
                  </a>
                </li>
                <li>
                  <a href="#edge-cases" className={classes.nestedListItemLink}>
                    Edge Cases
                  </a>
                </li>

                <li>
                  <a
                    href="#enabling-cases"
                    className={classes.nestedListItemLink}
                  >
                    Enabling new use cases
                  </a>
                </li>
              </ul>
            </li>
            <li className={classes.listItem}>
              <a
                href="#reinforcement-learning"
                className={classes.nestedListItemLink}
              >
                - Conculsion
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.mainContainer}>
          <div>
            <img src={IMAGES.biasSystemBanner} alt="" width={"auto"} />
          </div>
          <div>
            <h1 className={classes.heading}>
              {" "}
              Why do we need to care about Retraining?
            </h1>
            <h5 className={classes.publicDate}>UpTrain.ai | 20.01.2023</h5>
          </div>
          <div className={classes.mainContent}>
            <p className={classes.description} id="introduction">
              In our previous blog, we introduced you to the wonderful universe
              of ML and dug deep into the various steps involved in building and
              deploying the model. But there is one very integral step that one
              needs to take to ensure the longevity and relevance of the model
              and that is Model Retraining, which is a crucial aspect in the
              life cycle of a model.
            </p>
            <p className={classes.description}>
              Let’s understand this better with an example. IMDb is one of the
              world’s largest movie databases and is a go-to website for many of
              us for movie recommendations (What would we do without it, right?
              XD). Let’s say for better user experience, IMDb wants to build a
              machine learning model which predicts box office outcome of a
              movie before its release based on inputs such as date of release,
              genre, star cast, production house, director, theme, editing and
              effects used, content rating (age group rating), music composer,
              region and budget and it will help predict whether the movie will
              be a box office hit or not. To do this, the model is first trained
              on the movie data of three years, say 2015 - 2018 and then it was
              deployed, and voila! It gave tremendously accurate results and
              everyone lived happily ever after. Or at least that’s what we all
              would like to believe, right?
            </p>
            <div className={classes.imageContainer}>
              <img
                src={IMAGES.retrainingBlog}
                alt=""
                className={classes.mainContainerImage}
              />
            </div>

            <p className={classes.description}>
              However, the success of the model is short lived- It was noticed
              that around late 2020, a data shift occurs as audience preferences
              change, which results in the degradation of the model. The
              precision and accuracy rate of the model deteriorates and an
              overall downfall in the performance of the model is observed. But
              why did this happen in the first place? Well, the reason is that
              the data we used to train our model is now outdated.
            </p>
            <p className={classes.description}>
              So, what next? Cue, model retraining
            </p>

            <p className={classes.description} id="model-retraining">
              <b>But First, Let Me #EXPLAIN What is Model Retraining?</b>
            </p>
            <p className={classes.description}>
              Model retraining is the process of updating the data of any
              deployed model. The updated data is used to retrain the model and
              keep the model up to date. It ensures the accuracy rate and
              precision rate of the model are not compromised, and quality
              service is ensured. However, model retraining doesn't change the
              model's algorithm; it simply means updating the model's dataset to
              get accurate results even after a long time.
            </p>

            <p className={classes.description} id="6-Reasons">
              <b>6 Reasons Why ▶ Retraining is Important</b>
            </p>
            <p className={classes.description}>
              The decay in model performance is generally due to reasons like
              data drifts, label drifts, and concept drifts. To accommodate
              these changes, retraining is essential. Other reasons include the
              occurrence of unlikely scenarios, the addition of data, or an
              increase in the output labels. Let’s talk about all of these one
              by one:
            </p>

            <p className={classes.description} id="data-drift">
              <b>1. Data Drift: </b>
              In simple words, a data shift is a change in the dataset,overtime,
              that is initially used to train the model. This change in dataset
              values leads to inaccurate predictions of the model. The initial
              data used to train the data is called source distribution, and the
              data that the model actually works on is the target distribution.
              Coming back to our previous IMDb example, the model was trained
              using data collected in the years 2015 - 2018 and it is inevitable
              that trends and preferences would have changed significantly since
              then, which would lead to a data shift. Hence, it becomes crucial
              to collect fresh data and update our model accordingly.{" "}
            </p>

            <p className={classes.description} id="concept-drift">
              <b>2. Concept Drift: </b>
              In simple words, a data shift is a change in the dataset,overtime,
              that is initially used to train the model. This change in dataset
              values leads to inaccurate predictions of the model. The initial
              data used to train the data is called source distribution, and the
              data that the model actually works on is the target distribution.
              Coming back to our previous IMDb example, the model was trained
              using data collected in the years 2015 - 2018 and it is inevitable
              that trends and preferences would have changed significantly since
              then, which would lead to a data shift. Hence, it becomes crucial
              to collect fresh data and update our model accordingly.{" "}
            </p>

            <p className={classes.description} id="label-shift">
              <b>3. Label Shift: </b>
              Label shift occurs when the output distribution changes while the
              input distribution and their relationship remains the same. These
              scenarios typically happen when the underlying data undergoes a
              systematic shift. Let’s understand this with our movie example.
              All of us have seen the meteoric rise of OTT platforms in recent
              years. This rise has resulted in a negative impact on box office
              collections as people are now okay to wait for the OTT release as
              compared to spending on movie tickets. What it means is that the
              box office collections have reduced across the board. While there
              might not be any change in which movies are becoming a hit, the
              hit movies may be earning lower collections as compared to
              earlier. Thus, the model needs to be retrained to learn the new
              output distribution.
            </p>

            <p className={classes.description} id="edge-cases">
              <b>4. Edge Cases: </b>
              Edge cases are the occurrence of rare yet possible scenarios.
              Talking in quantitative terms, if there are events with a 99%
              possibility, then an edge case is the occurrence of an event with
              that rare 1% possibility. Let's talk about our example. In this
              case, let's say we have an actor who only works with big
              production houses, but in a particular case, the script of the
              movie attracts him, and he ends up working with a small local
              production house. Now, this is an edge case for our model. Another
              instance of an edge case is where a less famous actor has a big
              break and ends up working in a high-budget film with a very famous
              director and producer, contrary to his previous low-budget movie
              castings. While we collect the dataset and are provisioning our
              model, we might not consider these cases, but if such a case
              happens, we need to collect such data intently and retrain our
              model to include these cases as well.
            </p>
            <p className={classes.description} id="enabling-cases">
              <b>5. Enabling new use cases: </b>
              Retraining is triggered in these situations where a new class has
              been added to the output. For instance, previously movies were
              being classified amongst these three categories: Flop, Average and
              Hit. However, a new category needs to be added called Blockbuster
              Hit. So, naturally the model needs to be retrained to incorporate
              this new class.
            </p>
            <p className={classes.description}>
              <b>6. Feature change: </b>
              The factors in deciding a certain outcome keeps changing with
              time. Let's say with all the input data earlier described, we
              notice that supporting cast plays a key role in determining
              success of a movie and want to add that also as an input feature.
              This requires us to retrain the model with the new set of input
              features. Adding the data in the dataset will be easy, but then
              model retraining becomes a crucial step.
            </p>

            <div className={classes.imageContainer}>
              <img
                src={IMAGES.retrainingMlModelBlog}
                alt=""
                className={classes.mainContainerImage}
              />
            </div>

            <p className={classes.description} id="conculsion">
              The above drifts are some of the most common issues encountered by
              ML practitioners and we at UpTrain AI are building a smart and
              automated pipeline to continuously monitor these issues and solve
              them by retraining models so that they can meaningfully impact
              your business metrics.{" "}
              <a
                href="https://github.com/uptrain-ai/uptrain"
                target={"_blank"}
                rel="noreferrer"
              >
                Try out our open-source repo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRetraining;

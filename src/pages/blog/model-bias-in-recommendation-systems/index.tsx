import Image from "next/image";
import React, { Fragment } from "react";
import banner from "./images/banner.webp";
import rating_value from "./images/bias-rating-values.webp";
import system_amplification from "./images/bias-system-amplification.webp";
import engineer_uptrain from "./images/bias-system-engineer-uptrain.webp";
import Head from "next/head";
import { baisInTableList } from "./components/tableList";
import BlogTemplate from "@/components/blog-template/BlogTemplate";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Model Bias like Exposure bias & popularity bias in recommendation
          systems
        </title>

        <meta
          name="description"
          content="Different types of model bias like exposure bias, selection bias, popularity bias, position bias in recommendation sustems. Propensity score to solve it"
        />
      </Head>
      <BlogTemplate
        tablelist={baisInTableList}
        title="Bias in Recommendation Systems"
        authorName="Vipul Gupta"
        date="21st Jan, 2023"
        banner={{ image: banner, alt: "biasSystemBanner" }}
      >
        <div>
          <div>
            <p>
              Modern-day web systems rely on user feedback (such as click
              activity or ratings) to build ML models to personalize
              recommendations. Such recommender systems form the core of several
              popular applications that recommend short videos (Instagram,
              TikTok, YouTube), timeline feeds (Twitter, Facebook), the next
              product to buy (Amazon, Ebay), etc.
            </p>
            <h2 id="user-interaction-adds-bias">
              <b>User Interaction Adds Bias</b>
            </h2>
            <p>
              Recommender systems that rely on user&apos;s behavioral data are
              full of biases. This data, for instance, can be affected by the
              following factors:
            </p>

            <p className="blog-pt" id="selection-bias">
              <b>1. Selection bias: </b> It arises due to the user&apos;s
              self-selection behavior. For example, a user might rate a movie
              they like but rarely rate a movie they dislike. Training on such a
              dataset is challenging since high ratings account for the majority
              of observed ratings. These ratings are not a representative sample
              of all ratings; that is, the rating data is often missing not at
              random, thus incorporating a selection bias. The following figure
              from a rating survey highlights this issue, where users tend to
              only rate items that they like.
            </p>

            <Image style={{ height: "auto" }} src={rating_value} alt="" />

            <p className="blog-pt" id="exposure-bias">
              <b>2. Exposure bias: </b>
              The user is likely to watch a recommended video, even if it is not
              the best fit. This action is then taken as positive feedback by
              the system to recommend similar videos further, resulting in
              exposure bias in the data.
            </p>

            <p className="blog-pt" id="conformity-bias">
              <b>3. Conformity bias: </b>A user may be influenced by public
              opinions and might not select their true preferences. This results
              in conformity bias.
            </p>

            <p className="blog-pt" id="position-bias">
              <b>4. Position bias: </b>
              The user will likely watch one of the top 5 videos in response to
              a YouTube search. The bias arising due to the display position of
              the item is referred to as Position bias.
            </p>

            <h2 id="biases-present-in-data">
              <b>Biases present in data</b>
            </h2>
            <p>
              The above biases are due to user behaviors, but there are biases
              present in the training data itself, such as the
              <b>popularity bias,</b>
              where some items are more popular than others and hence generate
              more feedback from users, eventually making recommendations biased
              towards them.
            </p>
            <p>
              Another bias generally seen in training data is
              <b>Unfairness</b>, which is due to the recommender system unfairly
              discriminating against certain groups of individuals, such as on
              the basis of gender, race, age, wealth, education level, etc. For
              example, in the context of job recommendation, it has been found
              that women see fewer advertisements about high-paying jobs due to
              gender imbalance in training data.
            </p>
            <p>
              Finally, due to the <b>Feedback Loop</b> in recommender systems,
              these biases only intensify over time, resulting in a “the rich
              get richer” effect. This is because a bias in data results in a
              bias in recommendations, which in turn impacts the exposure and
              selection of users, causing further biases in the data.
            </p>

            <Image
              style={{ height: "auto" }}
              src={system_amplification}
              alt=""
            />

            <h3>
              An illustration of how popularity bias can exacerbate through
              feedback
            </h3>

            <p>
              Feedback loops are detected by measuring the diversity of
              popularity of items in the system. The popularity of all items
              generally follows a long-tail distribution, where most of the
              items are not interacted with at all. In general, the more
              diversity of outputs of the recommender systems (aka the long-tail
              distribution has a greater entropy), the less the system suffers
              from degenerate feedback loops. On the other hand, low scores
              imply a homogeneous system that suffers from popularity bias.
            </p>

            <h2 id="how-to-solve-it">
              <b>How to solve it?</b>
            </h2>
            <p>
              Due to the above biases, the data observed by a recommendation
              system used to personalize users’ preferences might deviate from
              reflecting users’ true preferences.
            </p>
            <p>
              The ubiquity of such systems in modern web companies has resulted
              in a growing interest in ameliorating bias in recommender systems.
              The following methods have gained significant interest due to
              their effectiveness in reducing bias.
            </p>
          </div>

          <p className="blog-pt" id="propensity-score">
            <b>1. Propensity Score: </b>
            Propensity scores can be calculated and fed back into the training
            loop to reduce bias due to the user&apos;s observation of items. The
            propensity score models the probability of exposure to a specific
            item. These probabilities are then later used to reweigh the
            interactions while retraining. For example, if the probability of
            exposure to an item is high, it can be downweighed during training
            to reduce the effects of its exposure on the user.
          </p>

          <p className="blog-pt" id="data-imputation">
            <b>2. Data Imputation: </b>
            Selection bias happens due to missing data (e.g., users prefer to
            give high ratings than low ratings). Data imputation can be used to
            solve for selection bias by imputing the missing entries with
            pseudo-labels.
          </p>

          <p className="blog-pt" id="model-popularity-influence">
            <b>3.Modeling Popularity Influence </b>
            Conformity bias occurs when users are influenced by popular opinion.
            One way to reduce its effect is to disentangle the effect caused by
            conformity by leveraging the average popularity of the item and
            offsetting it from the user’s ratings.
          </p>

          <p className="blog-pt" id="sampling">
            <b>4. Sampling: </b>
            Apart from propensity-score based weighing, sampling of items while
            retraining can be used to address exposure bias. The sampling
            determines which items to choose, and its distribution can be used
            as item confidence weights. Thus, it can limit the effect due to
            exposure by choosing an appropriate sampling distribution.
          </p>

          <p className="blog-pt" id="click-models">
            <b>5. Click Models: </b>
            Position bias, where the item is more likely to be interacted with
            due to its display position, can be mitigated using click models.
            The idea is to model the generative process of clicks as a variable
            dependent on both item’s position and relevance. Later, during
            retraining, the effect of its position can be offset to determine
            the item&apos;s relevance.
          </p>
          <p className="blog-pt" id="regularization">
            <b>6. Regularization: </b>
            Regularization can be used to mitigate popularity bias and
            unfairness in recommender systems. It has been shown that
            introducing suitable regularization terms can result in more
            balanced recommendation results.
          </p>

          <p className="blog-pt" id="rebalancing">
            <b>7. Rebalancing: </b>A simple method to tackle unfairness is to
            rebalance the training dataset with specific fairness objectives
            like gender parity. This can be done using re-labeling the positive
            labels in favor of the minority class or resampling the training
            data to balance the size of both classes.
          </p>

          <p className="blog-pt" id="adversarial-learning">
            <b>8. Adversarial Learning: </b>
            Apart from regularization, adversarial learning can be employed to
            ameliorate popularity bias and unfairness. The basic idea is to
            introduce an adversary whose aim is to confuse the recommender by
            giving a signal to recommend more niche items. Eventually, the
            adversary learns the implicit association between popular and niche
            items while the recommender captures niche items that correlate with
            the user’s history, resulting in more long-tail item
            recommendations.
          </p>

          <p className="blog-pt" id="reinforcement-learning">
            <b>9. Reinforcement Learning: </b>
            Finally, reinforcement learning can counter the loop amplification
            effect of biases by deploying a more intelligent strategy to balance
            exploitation and exploration adaptively. However, such methods
            require the policy to be deployed online to be evaluated.
          </p>

          <Image style={{ height: "auto" }} src={engineer_uptrain} alt="" />

          <p className="blog-pt" id="Conculsion">
            We at UpTrain AI are passionate about solving this problem statement
            for our users so that they can go on with their day without worrying
            about the efficacy of their models. So if you are a ML
          </p>
          <p>
            Practitioner, Data Scientist or Product Lead, we would love to hear
            from you. Try it out{" "}
            <a
              href="https://github.com/uptrain-ai/uptrain"
              target={"_blank"}
              rel="noreferrer"
            >
              here
            </a>
          </p>
        </div>
      </BlogTemplate>
    </Fragment>
  );
};

export default index;

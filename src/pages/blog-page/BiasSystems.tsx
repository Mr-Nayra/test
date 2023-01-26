import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import classes from "./blogPage.module.scss";
import Image from "../../images/blogPageImg/blog-second-1.png";
import Image1 from "../../images/blogPageImg/blog-second-2.png";
import Image2 from "../../images/blogPageImg/blog-second-3.png";

const BiasSystems = () => {
  return (
    <div className={classes.root} id="blogPage">
      <div className={classes.titleContainer}>
        <h5 className={classes.title}>Bias in Recommender Systems</h5>
      </div>

      <div className={classes.tableContainer}>
        <div style={{ paddingTop: 24 }}>
          <div className={classes.tableFlex}>
            <span className={classes.barIcon}>
              <AiOutlineBars size={26} />
            </span>
            <h5 className={classes.tableHeading}>tables of content</h5>
          </div>
          <ul>
            <li className={classes.li}>
              <a href="#introduction" className={classes.link}>
                - Introduction
              </a>
            </li>
            <li className={classes.li}>
              <a href="#user-interaction-adds-bias" className={classes.link}>
                - User Interaction Adds Bias
              </a>
            </li>

            <ol>
              <li>
                <a href="#selection-bias" className={classes.linkFirst}>
                  Selection Bias
                </a>
              </li>
              <li>
                <a href="#exposure-bias" className={classes.linkFirst}>
                  Exposure Bias
                </a>
              </li>
              <li>
                <a href="#conformity-bias" className={classes.linkFirst}>
                  Conformity Bias
                </a>
              </li>
              <li>
                <a href="#position-bias" className={classes.linkFirst}>
                  Position Bias
                </a>
              </li>
            </ol>

            <li className={classes.li}>
              <a href="#biases-present-in-data" className={classes.link}>
                - Biases Present in Data
              </a>
            </li>
            <li className={classes.li}>
              <a href="#how-to-solve-it" className={classes.link}>
                - How to solve it?
              </a>
            </li>
            <ol>
              <li>
                <a href="#propensity-score" className={classes.linkFirst}>
                  Propensity Score
                </a>
              </li>
              <li>
                <a href="#data-imputation" className={classes.linkFirst}>
                  Data Imputation
                </a>
              </li>
              <li>
                <a
                  href="#model-popularity-influence"
                  className={classes.linkFirst}
                >
                  Modeling Popularity Influence
                </a>
              </li>
              <li>
                <a href="#sampling" className={classes.linkFirst}>
                  Sampling
                </a>
              </li>
              <li>
                <a href="#click-models" className={classes.linkFirst}>
                  Click Models
                </a>
              </li>
              <li>
                <a href="#regularization" className={classes.linkFirst}>
                  Regularization
                </a>
              </li>
              <li>
                <a href="#rebalancing" className={classes.linkFirst}>
                  Rebalancing
                </a>
              </li>

              <li>
                <a href="#adversarial-learning" className={classes.linkFirst}>
                  Adversarial Learning
                </a>
              </li>
              <li>
                <a href="#reinforcement-learning" className={classes.linkFirst}>
                  Reinforcement Learning
                </a>
              </li>
            </ol>
            <div style={{ paddingTop: 16 }}>
              <li className={classes.li}>
                <a href="#conculsion" className={classes.link}>
                  - Conculsion
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className={classes.tableCard}>
        <p id="introduction">
          Modern-day web systems rely on user feedback (such as click activity
          or ratings) to build ML models to personalize recommendations. Such
          recommender systems form the core of several popular applications that
          recommend short videos (Instagram, TikTok, YouTube), timeline feeds
          (Twitter, Facebook), the next product to buy (Amazon, Ebay), etc.
        </p>

        <div className={classes.paddingTop}>
          <p className={classes.paraTop} id="user-interaction-adds-bias">
            <b>User Interaction Adds Bias</b>
          </p>
          <p className={classes.paraTop}>
            Recommender systems that rely on users' behavioral data are full of
            biases. This data, for instance, can be affected by the following
            factors:
          </p>
        </div>

        <div className={classes.paddingTop}>
          <p id="selection-bias">
            <b>1. Selection bias: </b>
            It arises due to the user’s self-selection behavior. For example, a
            user might rate a movie they like but rarely rate a movie they
            dislike. Training on such a dataset is challenging since high
            ratings account for the majority of observed ratings. These ratings
            are not a representative sample of all ratings; that is, the rating
            data is often missing not at random, thus incorporating a selection
            bias. The following figure from a rating survey highlights this
            issue, where users tend to only rate items that they like.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <img src={Image} alt="" className={classes.image} />
        </div>

        <div className={classes.paddingTop}>
          <p id="exposure-bias">
            <b>2. Exposure bias: </b>
            The user is likely to watch a recommended video, even if it is not
            the best fit. This action is then taken as positive feedback by the
            system to recommend similar videos further, resulting in exposure
            bias in the data.
          </p>
        </div>

        <div className={classes.paddingTop}>
          <p id="conformity-bias">
            <b>3. Conformity bias: </b>A user may be influenced by public
            opinions and might not select their true preferences. This results
            in conformity bias.
          </p>
        </div>

        <div className={classes.paddingTop}>
          <p id="position-bias">
            <b>4. Position bias: </b>
            The user will likely watch one of the top 5 videos in response to a
            YouTube search. The bias arising due to the display position of the
            item is referred to as Position bias.
          </p>
        </div>

        <div className={classes.paddingTop}>
          <p className={classes.paraTop}>
            <b id="biases-present-in-data">Biases present in data</b>
          </p>
          <p className={classes.paraTop}>
            The above biases are due to user behaviors, but there are biases
            present in the training data itself, such as the{" "}
            <b>popularity bias,</b>
            where some items are more popular than others and hence generate
            more feedback from users, eventually making recommendations biased
            towards them.
          </p>
          <p className={classes.paraTop}>
            Another bias generally seen in training data is <b>Unfairness</b>,
            which is due to the recommender system unfairly discriminating
            against certain groups of individuals, such as on the basis of
            gender, race, age, wealth, education level, etc. For example, in the
            context of job recommendation, it has been found that women see
            fewer advertisements about high-paying jobs due to gender imbalance
            in training data.
          </p>
          <p className={classes.paraTop}>
            Finally, due to the <b>Feedback Loop</b> in recommender systems,
            these biases only intensify over time, resulting in a “the rich get
            richer” effect. This is because a bias in data results in a bias in
            recommendations, which in turn impacts the exposure and selection of
            users, causing further biases in the data.
          </p>
        </div>

        <div className={classes.paddingTop}>
          <p className={classes.paraTop} style={{ textAlign: "center" }}>
            (Title) An illustration of how popularity bias can exacerbate
            through feedback
          </p>
        </div>

        <div className={classes.imageContainer}>
          <img src={Image1} alt="" className={classes.image} />
        </div>

        <div className={classes.paddingTop}>
          <p className={classes.paraTop}>
            Feedback loops are detected by measuring the diversity of popularity
            of items in the system. The popularity of all items generally
            follows a long-tail distribution, where most of the items are not
            interacted with at all. In general, the more diversity of outputs of
            the recommender systems (aka the long-tail distribution has a
            greater entropy), the less the system suffers from degenerate
            feedback loops. On the other hand, low scores imply a homogeneous
            system that suffers from popularity bias.
          </p>
        </div>

        <div className={classes.paddingTop}>
          <p className={classes.paraTop} id="how-to-solve-it">
            <b>How to solve it?</b>
          </p>
          <p className={classes.paraTop}>
            Due to the above biases, the data observed by a recommendation
            system used to personalize users’ preferences might deviate from
            reflecting users’ true preferences.
          </p>
          <p className={classes.paraTop}>
            The ubiquity of such systems in modern web companies has resulted in
            a growing interest in ameliorating bias in recommender systems. The
            following methods have gained significant interest due to their
            effectiveness in reducing bias.
          </p>
        </div>

        <div className={classes.paddingTop}>
          <p id="propensity-score">
            <b>1. Propensity Score: </b>
            Propensity scores can be calculated and fed back into the training
            loop to reduce bias due to the user's observation of items. The
            propensity score models the probability of exposure to a specific
            item. These probabilities are then later used to reweigh the
            interactions while retraining. For example, if the probability of
            exposure to an item is high, it can be downweighed during training
            to reduce the effects of its exposure on the user.
          </p>
        </div>

        <div className={classes.paddingTop}>
          <p id="data-imputation">
            <b>2. Data Imputation: </b>
            Selection bias happens due to missing data (e.g., users prefer to
            give high ratings than low ratings). Data imputation can be used to
            solve for selection bias by imputing the missing entries with
            pseudo-labels.
          </p>
        </div>
        <div className={classes.paddingTop}>
          <p id="model-popularity-influence">
            <b>3.Modeling Popularity Influence </b>
            Conformity bias occurs when users are influenced by popular opinion.
            One way to reduce its effect is to disentangle the effect caused by
            conformity by leveraging the average popularity of the item and
            offsetting it from the user’s ratings.
          </p>
        </div>
        <div className={classes.paddingTop}>
          <p id="sampling">
            <b>4. Sampling: </b>
            Apart from propensity-score based weighing, sampling of items while
            retraining can be used to address exposure bias. The sampling
            determines which items to choose, and its distribution can be used
            as item confidence weights. Thus, it can limit the effect due to
            exposure by choosing an appropriate sampling distribution.
          </p>
        </div>
        <div className={classes.paddingTop}>
          <p id="click-models">
            <b>5. Click Models: </b>
            Position bias, where the item is more likely to be interacted with
            due to its display position, can be mitigated using click models.
            The idea is to model the generative process of clicks as a variable
            dependent on both item’s position and relevance. Later, during
            retraining, the effect of its position can be offset to determine
            the item's relevance.
          </p>
        </div>
        <div className={classes.paddingTop}>
          <p id="regularization">
            <b>6. Regularization: </b>
            Regularization can be used to mitigate popularity bias and
            unfairness in recommender systems. It has been shown that
            introducing suitable regularization terms can result in more
            balanced recommendation results.
          </p>
        </div>
        <div className={classes.paddingTop}>
          <p id="rebalancing">
            <b>7. Rebalancing: </b>A simple method to tackle unfairness is to
            rebalance the training dataset with specific fairness objectives
            like gender parity. This can be done using re-labeling the positive
            labels in favor of the minority class or resampling the training
            data to balance the size of both classes.
          </p>
        </div>
        <div className={classes.paddingTop}>
          <p id="adversarial-learning">
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
        </div>
        <div className={classes.paddingTop}>
          <p id="reinforcement-learning">
            <b>9. Reinforcement Learning: </b>
            Finally, reinforcement learning can counter the loop amplification
            effect of biases by deploying a more intelligent strategy to balance
            exploitation and exploration adaptively. However, such methods
            require the policy to be deployed online to be evaluated.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <img src={Image2} alt="" className={classes.image} />
        </div>

        <p id="conculsion">
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
            {" "}
            here
          </a>
        </p>
        {/* <div className={classes.paddingTop}>
          <p className={classes.paraTop}>
            <b>Resources</b>
          </p>
          <p className={classes.paraTop}>
            Bias in Search in recommender systems:
          </p>
          <p className={classes.paraTop}>
            <a
              href="https://www.searchenginejournal.com/biases-search-recommender-systems/339319/"
              target={"_blank"} rel="noreferrer"
            >
              https://www.searchenginejournal.com/biases-search-recommender-systems/339319/
            </a>
          </p>
          <p className={classes.paraTop}>
            Section “Degenerate Feedback Loops” from here:
          </p>
          <p className={classes.paraTop}>
            <a
              href="https://huyenchip.com/2022/02/07/data-distribution-shifts-and-monitoring.html"
              target={"_blank"} rel="noreferrer"
            >
              https://huyenchip.com/2022/02/07/data-distribution-shifts-and-monitoring.html
            </a>
          </p>
          <p className={classes.paraTop}>
            (Note: Degenerate feedback loop is another name for Exposure bias)
          </p>
          <p className={classes.paraTop}>
            (Note: Degenerate feedback loop is another name for Exposure bias)
          </p>
          <p className={classes.paraTop}>
            A detailed Survey:{" "}
            <a href="https://arxiv.org/pdf/2010.03240.pdf">
              https://arxiv.org/pdf/2010.03240.pdf
            </a>
          </p>
          <p className={classes.paraTop}>
            3-page tutorial:{" "}
            <a
              href=" http://staff.ustc.edu.cn/~hexn/papers/recsys21-tutorial-bias.pdf" target={"_blank"} rel="noreferrer"
            >
              http://staff.ustc.edu.cn/~hexn/papers/recsys21-tutorial-bias.pdf
            </a>
          </p>
          <p className={classes.paraTop}>
            <a
              href="http://staff.ustc.edu.cn/~hexn/slides/sigir21-tutorial-bias-slides.pdf" target={"_blank"} rel="noreferrer"
            >
              http://staff.ustc.edu.cn/~hexn/slides/sigir21-tutorial-bias-slides.pdf
            </a>
          </p>
          <p className={classes.paraTop}>
            GitHub link with a collection of papers:{" "}
            <a href="https://github.com/jiawei-chen/RecDebiasing" target={"_blank"} rel="noreferrer">
              https://github.com/jiawei-chen/RecDebiasing
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default BiasSystems;

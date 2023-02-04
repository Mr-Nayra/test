import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import classes from "./blogPage.module.scss";
import ImageFirst from "../../images/blogPageImg/drift-model-deployed-blog.png";
import ImageSecond from "../../images/blogPageImg/drift-blog-2.png";
import ImageThird from "../../images/blogPageImg/blog-third-3.png";
import ImageForth from "../../images/blogPageImg/blog-third-4.png";
import ImageFifth from "../../images/blogPageImg/blog-third-5.png";
import ImageSixth from "../../images/blogPageImg/blog-third-6.png";
import ImageSeven from "../../images/blogPageImg/blog-third-7.png";
import ImageEight from "../../images/blogPageImg/blog-third-8.png";

const DataDrift = () => {
  return (
    <div className={classes.root} id="blogPage">
      <div className={classes.titleContainer}>
        <h5 className={classes.title}>
          5 Great Statistical Methods For Data Drift Detection
        </h5>
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
              <a
                href="#why-do-ml-modals-fail-after-production"
                className={classes.link}
              >
                - Why Do ML Models Fail After Production?
              </a>
            </li>
            <li className={classes.li}>
              <a href="#data-distribution-drift" className={classes.link}>
                - Data Distribution Drifts: Why Should You Handle Them?
              </a>
            </li>
            <li className={classes.li}>
              <a href="#types-of-drift" className={classes.link}>
                - Type Of Drifts
              </a>
            </li>
            <li className={classes.li}>
              <a
                href="#statistical-methods-to-detect-data-drifts"
                className={classes.link}
              >
                - Statistical Methods to Detect Data Drifts
              </a>
            </li>
            <ol>
              <li>
                <a
                  href="#population-stability-index"
                  className={classes.linkFirst}
                >
                  Population Stability Index
                </a>
              </li>
              <li>
                <a
                  href="#kullback-leibler-divergence"
                  className={classes.linkFirst}
                >
                  Kullback-Leibler Divergence
                </a>
              </li>
              <li>
                <a
                  href="#jensen-shannon-distance"
                  className={classes.linkFirst}
                >
                  Jensen- Shannon Distance
                </a>
              </li>
              <li>
                <a
                  href="#kolmogorov-smirnov-test"
                  className={classes.linkFirst}
                >
                  Kolmogorov- Smirnov Test
                </a>
              </li>
              <li>
                <a href="#page-hinkley-method" className={classes.linkFirst}>
                  Page-Hinkley Method
                </a>
              </li>
            </ol>
            <div style={{ paddingTop: 16 }}>
              <li className={classes.li}>
                <a href="#conclusion" className={classes.link}>
                  - Conclusion- When to use What?
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className={classes.tableCard}>
        <div id="why-do-ml-modals-fail-after-production">
          <p className={classes.paraTop}>
            <b>- Why Do ML Models Fail After Production?</b>
          </p>
          <p>
            In today’s transforming digital world, a wide variety of businesses
            leverage AI to perform forecasts on their sales, inventory, customer
            demand fluctuations, or maybe to provide recommendations to users
            while they shop.
          </p>
          <p>
            Consider any particular business scenario, where you have been
            tasked to build and deploy a machine learning model. What comes to
            your mind when we think of any ML project pipeline?
          </p>
          <p>
            Data collection & Processing {"->"} EDA {"->"} Feature
            selection/manipulation {"->"} Model training & Tuning {"->"} Model
            deployed to production
          </p>
          <p>
            However, a very crucial step is skipped in the above pipeline, which
            is “Monitoring post-production”. In most of the cases, the failure
            of ML models after deployment can be attributed to either machine
            failures or degradation in model performance. While machine failures
            occur due overheating or hardware shutdown, degradation in model
            performance is trickier and can happen slowly over multiple years as
            the data distribution shifts over time. A model which had accurate
            and reliable performance during the time of deployment can easily
            become unusable if left unchecked and not re-trained periodically.
          </p>
        </div>

        <div className={classes.paddingTop} id="data-distribution-drift">
          <p className={classes.paraTop}>
            <b>- Data Distribution Drifts : Why Should You Handle Them?</b>
          </p>
          <div className={classes.imageContainer}>
            <img src={ImageFirst} alt="" className={classes.image} />
          </div>
          <p>
            When we train a model on our curated training dataset, the model
            learns the patterns and the distribution of the underlying data. We
            also ensure that the model is able to use these learnings accurately
            on the test data distribution. But, when the model is already in
            production, it comes across real world “unseen” data (your wild wild
            west kind) and this real world data is not stationary by any means,
            i.e, its distribution is continuously shifting. This shift is termed
            as “ Data distribution drifts”. These shifts occur due to a variety
            of factors such as the change in everyday dynamics of the global
            economy, varying social norms and cultures across the world.
          </p>
          <p>
            Let’s look at a quick example. Prior to 2022, when people searched
            for “ Elon Musk twitter”, they probably were looking for the
            trending tweets posted by Musk, or his twitter profile. But now,
            people are looking for information on Elon musk’s takeover and
            organizational changes at Twitter. This is an example of a shift in
            the data distribution. A key thing to note is that shifts in data do
            not occur just due to sudden events, they also occur in a seasonal
            and gradual way. The data underlying the pricing of retail
            properties in semi-urban areas would shift gradually. The behavior
            of your users will evolve over time as you make product innovations,
            needs of your users evolve over time due to cultural shifts, your
            competitors change their pricing strategies etc. If you don’t handle
            these drifts on time, the model would degrade and may create more
            loss than value.
          </p>
        </div>

        <div className={classes.paddingTop} id="types-of-drift">
          <p className={classes.paraTop}>
            <b>- Types Of Drifts</b>
          </p>
          <p>
            The data distribution shifts we come across can be broadly grouped
            into Concept drift and covariate drift.
          </p>
          <p>
            Concept drift : It occurs when the relationship between the inputs
            and target variables changes over time. Consider a model built to
            predict the rent of office spaces in San Francisco based on features
            like location, square footage, furnishing, etc. As companies are
            embracing the remote work culture, work from home drastically
            reduced the need for office buildings and the rents (target) went
            down. Even though the input features distribution remains the same,
            the model would perform poorly. This is an example of concept drift.
          </p>
          <p>
            Data drift: Also known as covariate drift, it occurs due to a change
            in the underlying distribution of your input variables. Consider a
            case where you are building a model to predict if a new user on your
            website will be converted to a paid user or not. The model is built
            upon user features such as age, location, income, marketing channel,
            product interactions etc. Suppose you launch a marketing campaign
            which has attracted a lot of users with lower income compared to
            your current user-base. Your model is expected to underperform for
            these new set of users as it hasn’t the relationship between the
            input features and purchasing decision for this new set. This is an
            example of covariate drift
          </p>
        </div>

        <div
          className={classes.paddingTop}
          id="statistical-methods-to-detect-data-drifts"
        >
          <p className={classes.paraTop}>
            <b>- Statistical Methods To Detect Data Drifts</b>
          </p>
          <p className={classes.paraTop}>
            As we now know the significance of handling data distribution
            drifts, the first step of the process is to identify and detect
            these shifts. The simplest way of detection is to monitor
            statistical values like mean, median. But these methods are
            insufficient for most of the ML use-cases. However, there are many
            statistical methods, more suited for changes in data distributions
            which can be used
          </p>
        </div>

        <div className={classes.paddingTop} id="population-stability-index">
          <p>
            <b>a) Population Stability Index(PSI)</b>
          </p>
          <p>
            It is a metric that measures the shift in population over time
            between the target (test data) at the deployment time and the target
            at the current period. The below image shows an example of how the
            population distribution has changed.
          </p>
          <div className={classes.imageContainer}>
            <img src={ImageSecond} alt="" className={classes.image} />
          </div>
          <p>
            How do we quantify this?
            <br />
            <br /> We split the population distribution into buckets ( 10-20
            based on the range) . For each bucket, we compute the percentage of
            old and new data population. Next, we apply the below formula for
            PSI calculation on each bucket, and sum their values for the final
            PSI metric.
          </p>
          <div className={classes.imageContainer}>
            <img src={ImageThird} alt="" className={classes.image} />
          </div>
          <p>
            If the above calculated PSI value is less than 0.1, the drift in
            population is negligible. When the value lies between 0.1-0.2, the
            drift is moderate. When PSI is higher than 0.2, there is significant
            drift in the population and we need to handle it. This metric for
            drift identification is very popular in financial data based ML
            models.
          </p>
        </div>

        <div className={classes.paddingTop} id="kullback-leibler-divergence">
          <p>
            <b>b) Kullback–Leibler Divergence</b>
          </p>
          <p>
            The KL divergence is a statistical metric, which measures the
            difference between probability distribution of old data( testing
            time) and new data (post-deployment in production). It is
            represented by “||’. This metric is often referred to as ‘relative
            entropy’ , as it uses the entropy of probability distribution in its
            calculation.
          </p>
          <p>
            Recall that, for a discrete probability distribution, the entropy is
            given by the blow formula:
          </p>
          <div className={classes.imageContainer}>
            <img src={ImageForth} alt="" className={classes.image} />
          </div>
          <p>
            This expression is extended to compare the probability distributions
            of old data (Q) and new data (P) as shown below.
          </p>
          <div className={classes.imageContainer}>
            <img src={ImageFifth} alt="" className={classes.image} />
          </div>
          <p>
            Note that KL divergence is asymmetric, you would end up with
            different results if you swap P and Q.
          </p>
          <p>
            The value of the metric can range from 0 (ideal-case) to infinity.
            The larger the value, the more is the drift in probability
            distributions between both datasets.
          </p>
        </div>
        <div className={classes.paddingTop} id="jensen-shannon-distance">
          <p>
            <b>c) Jensen-Shannon Distance</b>
          </p>
          <p>
            The JSD also measures the difference in probability distributions
            similar to KL divergence, with two major changes. The JSD metric
            calculates a normalized score using the KL divergence formula
            discussed in the previous section, as shown below.
          </p>

          <div className={classes.imageContainer}>
            <img src={ImageSixth} alt="" className={classes.image} />
          </div>
          <p>
            Due to the normalizing, the value of the metric is restricted from 0
            to 1, which makes interpretation easier for us. Also, this metric is
            symmetric adding another advantage. When the value is zero, it
            indicates the distributions are identical and there is no drift. The
            value of 1 corresponds to maximum drift.
          </p>
        </div>
        <div className={classes.paddingTop} id="kolmogorov-smirnov-test">
          <p>
            <b>c) Kolmogorov-Smirnov Test</b>
          </p>
          <p>
            The K-S test is different from other tests as it is a non-parametric
            test. What do we mean by non-parametric tests? They do not make any
            assumptions on the nature of underlying data distribution.
          </p>
          <p>
            The Kolmogorov-Smirnov test measures the difference/distance between
            the cumulative probability distributions of the old and new data.
          </p>

          <div className={classes.imageContainer}>
            <img src={ImageSeven} alt="" className={classes.image} />
          </div>
          <p>
            As it compares distribution of two data samples and performs
            null-hypothesis testing it is referred to as ‘two-sample test’. This
            method is best for implementing numerical data. A limitation of this
            method is its sensitivity in large datasets.
          </p>
        </div>
        <div className={classes.paddingTop} id="page-hinkley-method">
          <p>
            <b>e) Page-Hinkley Method</b>
          </p>
          <p>
            It is a commonly used method to detect drift in incoming data and
            provide warnings to the ML teams. In this method, the mean value is
            dynamically updated as there is an inflow of new data. At any point
            when the mean value would exceed the threshold value ( set by the
            user based on mean observed during deployment), it provides drift
            detection alarms. In practical usage, this method leverages the
            CUMSUM control chart to identify shifts.
          </p>
          <p>
            To implement this in python, we can use the river library’s modules.
            It provides an easy way to control parameters such as no of
            instances to consider, the threshold value and so on.
          </p>
        </div>
        <div className={classes.paddingTop} id="conclusion">
          <p>
            <b>- Conclusion : When To Use What?</b>
          </p>
          <p>
            Apart from knowing the implementation of these methods, it is
            essential to understand the best statistical test for different
            scenarios. The KL divergence does not depend upon the sample size,
            and is a good fit for large datasets. The Jenson-Shannon distance is
            more sensitive than the former , but still stable, reaching a good
            compromise. It is preferred to use the Kolmogorov-Smirnov test when
            we have a small sample size and we want to spot sensitive changes.
            Wasserstein distance is another statistical measure, which is useful
            to detect drift in higher dimensional spaces like images. Apart from
            these, there are model-based and time-window distribution based
            approaches for drift detection. Hope you enjoyed the read!
          </p>
          <div className={classes.imageContainer}>
            <img src={ImageEight} alt="" className={classes.image} />
          </div>

          <p>
            The above mentioned are some of the most commonly used statistical
            measures that work for more than 90% of ML models. UpTrain is an
            open-source toolkit which has out-of-the-box implementations for all
            these measures and provides a single line interface for you to start
            monitoring drifts in your ML models. Try it out{" "}
            <a
              href="https://github.com/uptrain-ai/uptrain"
              target={"_blank"}
              rel="noreferrer"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataDrift;

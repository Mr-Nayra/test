import Image from "next/image";
import React, { Fragment } from "react";
import banner from "./images/banner.webp";
import active_learning_collage from "./images/active_learning_collage.webp";
import active_learning_entropy from "./images/active_learning_entropy.webp";
import active_learning_deep from "./images/active_learning_deep.webp";
import active_learning_cnn from "./images/active_learning_cnn.webp";
import active_learning_gan from "./images/active_learning_gan.webp";
import Head from "next/head";
import { activeLearningTableList } from "./components/tableList";
import BlogTemplate from "@/components/blog-template/BlogTemplate";

const index = () => {
  return (
    <>
      <Head>
        <title>
          Strategies and applications of Active learning for neural networks
        </title>

        <meta
          name="keywords"
          content="Active learning, supervised machine learning, data labeling, unlabeled datasets, training models, query strategies, semi-supervised learning, machine learning algorithms, data selection, data prioritization, uncertainty sampling, query by committee, least confidence strategy, margin sampling, expected model change, expected error reduction, entropy in active learning, density-weighted methods, applications of active learning, Natural Language Processing (NLP), image segmentation, object detection, Generative Adversarial Networks (GAN), curriculum learning, cost-effective active learning, deep active learning, active learning in computer vision, active learning in NLP, training efficiency, labeling cost reduction"
        />
      </Head>
      <BlogTemplate
        tablelist={activeLearningTableList}
        title="Active Learning: Train Smart Machine Learning Models with Less Labeled Data"
        authorName="Tanisha & Vipul"
        date="19th Feb, 2023"
        banner={{ image: banner, alt: "biasSystemBanner" }}
      >
        <div>
          <div>
            <div>
              <p>
                Most supervised machine learning models require to be trained
                with large amounts of data to get good results. In most cases,
                these large datasets are unlabeled since the data is too large
                to be labeled manually. It requires enormous human effort and
                time, and we can end up with problems like missing or erroneous
                annotations, which can affect the training of the model and,
                hence, further impact the performance of the model. But
                here&apos;s the good news: active learning is here to save the
                day! Basically, it&apos;s a way to cut down on how much we have
                to label by making use of all the other examples we have lying
                around that we haven&apos;t labeled.
              </p>
              <h2 id="active_learning">
                <b>Active Learning: Getting Machines Smarter With Less Work</b>
              </h2>
              <p>
                Active learning is used to construct a high-performance
                algorithm by actively selecting relevant data points for
                labeling. While training, active learning prioritizes the data
                which needs to be labeled in order to train a supervised
                learning model better. It does that by smartly identifying the
                labels which would be the most beneficial for the model to learn
                from by interactively querying the user to label the relevant
                data points.
              </p>

              <p>
                From the pool of unlabeled data, active learning selects the
                subset of data to be labeled. The idea is to allow the model to
                choose the data it wants to learn from and achieve a higher
                level of accuracy while using a smaller number of training
                labels.
              </p>

              <p>
                It is a type of semi-supervised learning wherein a small amount
                of labeled data, and a large quantity of unlabeled data are used
                to train a model. The belief behind using semi-supervised
                learning is that labeling just a small sample of data can result
                in a similar performance while reducing the enormous effort
                required to label the entire training data.
              </p>

              <Image
                src={active_learning_collage}
                style={{ height: "auto" }}
                alt=""
              />
              <h3>
                Active learning is effective with large amounts of low-cost,
                unlabelled data, e.g., images and tweets (image borrowed from
                <a
                  href="https://collider.com/movie-collage-2013/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  here
                </a>
                ).
              </h3>

              <h2 id="behind_the_scenes">
                <b>Behind the Scenes of Active Learning</b>
              </h2>

              <p className="blog-pt" id="scenarios">
                <b>Scenarios: </b>
                In active learning, there are typically three broad scenarios
                through which it can be implemented in which the learner will
                query the labels of instances:
              </p>

              <p>
                1. <b>Membership Query Synthesis</b>: The learner creates their
                own instance, in this case, from an underlying natural
                distribution.
              </p>

              <p>
                2. <b>Stream-Based Selective Sampling</b>: Here an assumption is
                made that getting an unlabeled instance is free. In this
                scenario, each unlabeled data point is examined one by one, the
                informativeness of each instance is evaluated, and the learner
                decides whether it wants to query the label of the instance or
                reject it based on its informativeness. To determine the
                informativeness of the instance, a query strategy is used.
              </p>

              <p>
                3. <b>Pool-Based Sampling</b>: Here, the instances are drawn
                from the entire pool of unlabeled data, and an evaluation of how
                well the learner understands the data is made by assigning a
                confidence score or an informativeness measure to each instance,
                and those instances are chosen in which it is least confident
                and queries the user to provide the labels.
              </p>

              <p className="blog-pt" id="query_strategies">
                <b>Query Strategies</b>: Active learning scenarios require some
                sort of informativeness measure of the unlabeled instances,
                which is used for determining which data points should be
                labeled to query the user for them. Each has its own set of pros
                and cons. These are basically used to assign a priority score to
                each data point.
              </p>

              <p>
                1. <b>Uncertainty sampling</b>: An active learner queries the
                instances about which it is least certain how to label, i.e.,
                the samples which lie close to the classification boundary.
              </p>

              <p>
                2. <b>Query by committee</b>: Several models are trained on the
                currently labeled data, and the output for unlabeled data is
                decided by a vote; the points that the &rdquo;committee&rdquo;
                disagrees on the most are labeled.
              </p>

              <p>
                3. <b>Least Confidence</b>: In this strategy, the learner
                selects the instance it has the least confidence in its most
                likely label. So, the data points to be labeled are sorted with
                respect to the confidence in their most-likely labels.
              </p>

              <p>
                4. <b>Margin Sampling</b>: It selects the instance with the
                smallest difference between the first and second most probable
                labels. So, the data points with the lowest difference between
                the highest probability and the second highest probability would
                be labeled first.
              </p>

              <p>
                5. <b>Expected model change</b>: The points that would most
                significantly change the values of the current model are
                labeled.
              </p>

              <p>
                6. <b>Expected error reduction</b>: The data points that reduce
                the generalization error of the model the most are labeled.
              </p>

              <p>
                7. <b>Variance reduction</b>: The data points that would
                minimize output variance are labeled.
              </p>

              <p>
                8. <b>Entropy</b>: The concept of entropy comes from
                thermodynamics and is a measure of disorder in a system. The
                entropy for each instance is calculated, and the instance with
                the largest value is queried.
              </p>

              <Image
                src={active_learning_entropy}
                style={{ height: "auto" }}
                alt=""
              />

              <p>
                9. <b>Density-weighted methods</b>: Points representative of the
                underlying distribution (that is, reside in the dense areas of
                the input space) are labeled.
              </p>

              <h2 id="putting_it_together">
                <b>Putting it all together (aka perform active learning)</b>
              </h2>

              <p>
                We have been provided with a large unlabeled dataset for
                training.
              </p>

              <p>
                The first thing that must be done is the manual labeling of a
                very small subset of this data.
              </p>

              <p>
                Once there is a small amount of labeled data, the model has to
                be trained on it. The model won&apos;t be its best possible
                version, of course, but it will provide insights into which
                regions of the parameter space should be tagged first to make it
                better.
              </p>

              <p>
                The model is used to predict the class of each of the remaining
                unlabeled data points after it has been trained. Depending on
                the prediction confidence of the model, it is decided which data
                points should be labeled by querying the user for them, or a
                priority score is assigned to each unlabeled data point.
              </p>

              <p>
                After the best method for prioritizing the labeling has been
                selected, the process can be iteratively repeated; that is, a
                new model can be trained on a new labeled data set that has
                labels assigned using the priority score. The unlabeled data
                points can be run through the model to update the prioritization
                scores and continue labeling after the new model has been
                trained on the subset of data. In this manner, the labeling
                method may be continually optimized as the model improves.
              </p>

              <Image
                src={active_learning_deep}
                style={{ height: "auto" }}
                alt=""
              />
              <h3>
                A typical example of deep active learning (borrowed from
                <a
                  href="https://arxiv.org/pdf/2009.00236.pdf"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  here
                </a>
                ).
              </h3>

              <h2 id="applications">
                <b>Applications</b>
              </h2>

              <p>
                Active learning is widely used in multiple domains and has
                several applications in the real world. One of the most
                widely-used applications of active learning is Natural Language
                Processing (NLP), where the amount of unlabeled data is huge,
                and the labeling process is tedious. It is used for tasks like
                Named Entity Recognition, where the model has to find which
                parts of the input text correspond to entities such as persons,
                locations, or organizations; Machine Translation; Text
                categorization, etc., which is the task of assigning a category
                to a piece of text.
              </p>

              <p>
                For Machine Translation, curriculum learning frameworks are used
                that decide which training samples to show to the model during
                different periods of training based on the estimated difficulty
                of a sample and the current competence of the model. This method
                not only effectively improves the training efficiency but also
                obtains a good accuracy improvement.
              </p>

              <p>
                Active learning has also proven successful in complex Computer
                Vision tasks like image segmentation, object detection, image
                classification, restoration, etc., as a huge amount of unlabeled
                data is available through the internet. Cost Effective Active
                Learning (CEAL) merges deep convolutional neural networks into
                active learning and assigns pseudo-labels to samples with high
                confidence, and adds them to the highly uncertain sample set
                queried using the uncertainty-based AL method.
              </p>

              <Image
                src={active_learning_cnn}
                style={{ height: "auto" }}
                alt=""
              />
              <h3>
                Cost Effective Active Learning mode (image borrowed from the
                <a
                  href="https://www.semanticscholar.org/reader/b5bfb2776c33f8d5de8b812da7a7d5ad56cb84e3"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  CEAL paper
                </a>
                ).
              </h3>

              <p>
                Active learning also has applications in the field of speech and
                audio processing, social network analysis, medical image
                processing, wildlife protection, industrial robotics, autonomous
                driving, and disaster analysis, among other fields. Generative
                Adversarial Active Learning (GAAL) introduced the Generative
                Adversarial Networks (GAN) used for data augmentation to the
                active learning query method. GAAL aims to use generative
                learning to generate samples with more information than the
                original dataset.
              </p>

              <Image
                src={active_learning_gan}
                style={{ height: "auto" }}
                alt=""
              />
              <h3>
                Principle behind the GAAL algorithm. The learner synthesizes
                samples for querying using GAN.
                <a
                  href="https://www.semanticscholar.org/reader/e9ff047489490e505d44e573c4240b4dd8137f33"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  GAAL paper
                </a>
                .
              </h3>

              <h2 id="conclusion">
                <b>Conclusion</b>
              </h2>

              <p>
                Active learning attempts to maximize a model’s performance gain
                while annotating the fewest samples possible. More specifically,
                it aims to select the most useful samples from the unlabeled
                dataset and hand them over to the oracle (e.g., human annotator)
                for labeling to reduce the cost of labeling as much as possible
                while maintaining performance. The acquisition of a large number
                of high-quality annotated datasets consumes a lot of manpower.
              </p>

              <p>
                Deep learning is greedy for data and requires a large amount of
                data supply to optimize a massive number of parameters if the
                model is to learn how to extract high-quality features. In
                recent years, due to the rapid development of internet
                technology, we have entered an era of information abundance
                characterized by massive amounts of available data.
              </p>

              <p>
                One of the most critical problems faced in the field of image
                vision tasks is that of efficiently querying samples of
                high-dimensional data (an area in which traditional methods
                perform poorly) and obtaining satisfactory performance at the
                smallest possible labeling cost.
              </p>

              <p>
                Active Learning is proven to have been successful in many
                applications and is still an active area of research.
              </p>
            </div>
          </div>
        </div>
      </BlogTemplate>
    </>
  );
};

export default index;

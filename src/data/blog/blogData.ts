import { IMAGES } from "../../images";
export const blogData: TBlogData[] = [
  {
    id: "active_learning",
    title:
      "Active Learning: Train Models with Less Labeled Data",
    authorName: "Tanisha & Vipul",
    date: "19th Feb, 2023",
    cardBanner: IMAGES.home_active_learning,
    cardDescription:
      "Most supervised machine learning models require to be trained with large amounts of labeled data. Active Learning can be used to make models smarter with less labeled data.",
    firstPositionBanner: IMAGES.home_active_learning,
    longDescription:
      "Most supervised machine learning models require to be trained with large amounts of data to get good results. In most cases, these large datasets are unlabeled since the data is too large to be labeled manually. It requires enormous human effort and time, and ....",
    mainBanner: IMAGES.active_learning_hero,
    tableContent: [
      { title: "Introduction", id: "introduction" },
      {
        title: "Active Learning: Getting Machines Smarter With Less Work",
        id: "active_learning",
      },
      {
        title: "Behind the Scenes of Active Learning",
        id: "behind_the_scenes",
        nestedList: [
          { title: "Scenarios", id: "scenarios" },
          { title: "Query Strategies", id: "query_strategies" },
        ],
      },
      {
        title: "Putting it all together (aka perform active learning)",
        id: "putting_it_together",
      },
      {
        title: "Exciting Ways Active Learning Can Be Put to Use",
        id: "exciting_ways",
      },
      {
        title: "Conclusion",
        id: "conclusion",
      },
    ],
    pageData: ` <div>
                  <div>
                    <p>
                    Most supervised machine learning models require to be trained with large amounts of data to get good results. In most cases, these large datasets are unlabeled since the data is too large to be labeled manually. It requires enormous human effort and time, and we can end up with problems like missing or erroneous annotations, which can affect the training of the model and, hence, further impact the performance of the model. But here's the good news: active learning is here to save the day! Basically, it's a way to cut down on how much we have to label by making use of all the other examples we have lying around that we haven't labeled.
                    </p>
                    <h2 id="active_learning">
                      <b>Active Learning: Getting Machines Smarter With Less Work</b>
                    </h2>
                    <p>
                    Active learning is used to construct a high-performance algorithm by actively selecting relevant data points for labeling. While training, active learning prioritizes the data which needs to be labeled in order to train a supervised learning model better. It does that by smartly identifying the labels which would be the most beneficial for the model to learn from by interactively querying the user to label the relevant data points. 
                    </p>

                    <p>
                    From the pool of unlabeled data, active learning selects the subset of data to be labeled. The idea is to allow the model to choose the data it wants to learn from and achieve a higher level of accuracy while using a smaller number of training labels.  
                    </p>
  
                    <p>
                    It is a type of semi-supervised learning wherein a small amount of labeled data, and a large  quantity of unlabeled data are used to train a model. The belief behind using semi-supervised learning is that labeling just a small sample of data can result in a similar performance while reducing the enormous effort required to label the entire training data. 
                    </p>
  
                    
                    <img src=${IMAGES.active_learning_collage} width="500px" alt="" />
                    <h3>
                    Active learning is effective with large amounts of low-cost, unlabelled data, e.g., images and tweets (source: 
                    <a
                      href="https://collider.com/movie-collage-2013/"
                      target={"_blank"}
                      rel="noreferrer"
                    >Collider</a>).
                    </h3>

                    <h2 id="behind_the_scenes">
                    <b>Behind the Scenes of Active Learning</b>
                    </h2>

                    <p className="blog-pt" id="scenarios">
                    <b>Scenarios: </b>
                    In active learning, there are typically three broad scenarios through which it can be implemented in which the learner will query the labels of instances: 
                    </p>

                    <p>
                    1. <b>Membership Query Synthesis</b>: 
                    The learner creates their own instance, in this case, from an underlying natural distribution. 
                    </p>

                    </p>
                    2. <b>Stream-Based Selective Sampling</b>: 
                    Here an assumption is made that getting an unlabeled instance is free. 
                    In this scenario, each unlabeled data point is examined one by one, the informativeness of each instance is evaluated, and the learner decides whether it wants to query the label of the instance or reject it based on its  
                    informativeness. To determine the informativeness of the instance, a query strategy is used. 
                    </p>

                    <p>
                    3. <b>Pool-Based Sampling</b>: 
                    Here, the instances are drawn from the entire pool of unlabeled data, and an evaluation of how well the learner understands the data is made by assigning a  confidence score or an informativeness measure to each instance, and those instances are chosen in which it is least confident and queries the user to provide the labels. 
                    </p>

                    <p className="blog-pt" id="query_strategies">
                    <b>Query Strategies</b>: 
                    Active learning scenarios require some sort of informativeness measure of the unlabeled instances, which is used for determining which data points should be labeled to query the user for them. Each has its own set of pros and cons. These are basically used to assign a priority score to each data point. 
                    </p>

                    <p>
                    1. <b>Uncertainty sampling</b>: 
                    An active learner queries the instances about which it is least certain how to label, i.e., the samples which lie close to the classification boundary. 
                    </p>

                    <p>
                    2. <b>Query by committee</b>: 
                    Several models are trained on the currently labeled data, and the output for unlabeled data is decided by a vote; the points that the  "committee" disagrees on the most are labeled. 
                    </p>
                    
                    <p>
                    3. <b>Least Confidence</b>: In this strategy, the learner selects the instance it has the least confidence in its most likely label. So, the data points to be labeled are sorted with respect to the confidence in their most-likely labels. 
                    </p>

                    <p>
                    4. <b>Margin Sampling</b>: It selects the instance with the smallest difference between the first and second most probable labels. So, the data points with the lowest difference between the highest probability and the second highest probability would be labeled first. 
                    </p>

                    <p>
                    5. <b>Expected model change</b>: The points that would most significantly change the values of the current model are labeled.  
                    </p>

                    <p>
                    6. <b>Expected error reduction</b>: The data points that reduce the generalization error of the model the most are labeled.
                    </p>

                    </p>
                    7. <b>Variance reduction</b>: The data points that would minimize output variance are labeled.
                    </p>
                     
                    <p>
                    8. <b>Entropy</b>: The concept of entropy comes from thermodynamics and is a  measure of disorder in a system. The entropy for each instance is calculated, and the instance with the largest value is queried. 
                    </p>

                    <img width="500px" src=${IMAGES.active_learning_entropy} alt="" />

                    <p>
                    9. <b>Density-weighted methods</b>: Points representative of the underlying distribution (that is, reside in the dense areas of the input space) are labeled.
                    </p>

                    <h2 id="putting_it_together">
                    <b>Putting it all together (aka perform active learning)</b>
                  </h2>
                     
                  <p>
                    We have been provided with a large unlabeled dataset for training.  
                    </p>

                    <p>
                    The first thing that must be done is the manual labeling of a very small subset of this data. 
                    </p>

                    <p>
                    Once there is a small amount of labeled data, the model has to be trained on it. The model won't be its best possible version, of course, but it will provide insights into which regions of the parameter space should be tagged first to make it better. 
                    </p>

                    <p>
                    The model is used to predict the class of each of the remaining unlabeled data points after it has been trained. 
                    Depending on the prediction confidence of the model, it is decided which data points should be labeled by querying the user for them, or a priority score is assigned to each unlabeled data point.  
                    </p>

                    <p>
                    After the best method for prioritizing the labeling has been selected, the process can be iteratively repeated; that is, a new model can be trained on a new labeled data set that has labels assigned using the priority score. The unlabeled data points can be run through the model to update the prioritization scores and continue labeling after the new model has been trained on the subset of data. In this manner, the labeling method may be continually optimized as the model improves. 
                    </p>

                    <img src=${IMAGES.active_learning_deep} alt="" />
                    <h3>
                    A typical example of deep active learning (borrowed from
                      <a
                      href="https://arxiv.org/pdf/2009.00236.pdf"
                      target={"_blank"}
                      rel="noreferrer"
                    >here</a>).
                    </h3>

                  <h2 id="applications">
                    <b>Applications</b>
                  </h2>

                  <p>
                  Active learning is widely used in multiple domains and has several applications in the real world. One of the most widely-used applications of active learning is Natural Language Processing (NLP), where the amount of unlabeled data is huge, and the labeling process is tedious. It is used for tasks like Named Entity Recognition, where the model has to find which parts of the input text correspond to entities such as persons, locations, or organizations; Machine Translation; Text categorization, etc., which is the task of assigning a category to a piece of text.  
                  </p>

                  <p>
                  For Machine Translation, curriculum learning frameworks are used that decide which  training samples to show to the model during different periods of training based on the  estimated difficulty of a sample and the current competence of the model. This method not  only effectively improves the training efficiency but also obtains a good accuracy  improvement.
                  </p> 
                  
                  <p>
                  Active learning has also proven successful in complex Computer Vision tasks like image segmentation, object detection, image classification, restoration, etc., as a huge amount of unlabeled data is available through the internet. Cost Effective Active Learning (CEAL) merges deep convolutional neural networks into active learning and assigns pseudo-labels to samples with high confidence, and adds them to the highly uncertain sample set queried using the uncertainty-based AL method. 
                  </p>

                  <img src=${IMAGES.active_learning_cnn} alt="" />
                    <h3>
                    Cost Effective Active Learning mode (source:
                      <a
                      href="https://www.semanticscholar.org/reader/b5bfb2776c33f8d5de8b812da7a7d5ad56cb84e3"
                      target={"_blank"}
                      rel="noreferrer"
                    >CEAL paper</a>).
                    </h3>

                    <p>
                    Active learning also has applications in the field of speech and audio processing, social network analysis, medical image processing, wildlife protection, industrial robotics, autonomous driving, and disaster analysis, among other fields. Generative Adversarial Active Learning (GAAL) introduced the Generative Adversarial Networks (GAN) used for data augmentation to the active learning query method. GAAL aims to use generative learning to generate samples with more information than the original dataset. 
                    </p>

                    <img src=${IMAGES.active_learning_gan} alt=""/>
                    <h3>
                    Principle behind the GAAL algorithm, where the learner synthesizes samples for querying using GAN.
                    (source: 
                      <a
                      href="https://www.semanticscholar.org/reader/e9ff047489490e505d44e573c4240b4dd8137f33"
                      target={"_blank"}
                      rel="noreferrer"
                    >GAAL paper</a>).
                    </h3>

                  <h2 id="conclusion">
                    <b>Conclusion</b>
                  </h2>

                  <p>
                  Active learning attempts to maximize a model’s performance gain while annotating the fewest samples possible. More specifically, it aims to select the most useful samples from the unlabeled dataset and hand them over to the oracle (e.g., human annotator) for labeling to reduce the cost of labeling as much as possible while maintaining performance. The acquisition of a large number of high-quality annotated datasets consumes a lot of manpower. 
                  </p>

                  <p>
                  Deep learning is greedy for data and requires a large amount of data supply to optimize a  massive number of parameters if the model is to learn how to extract high-quality features. In recent years, due to the rapid development of internet technology, we have entered an era of information abundance characterized by massive amounts of available data. 
                  </p>

                  <p>
                  One of the most critical problems faced in the field of image vision tasks is that of efficiently querying samples of high-dimensional data (an area in which traditional methods perform poorly) and obtaining satisfactory performance at the smallest possible labeling cost. 

                  <p>
                  Active Learning is proven to have been successful in many applications and is still an active area of research.
                  </p>
              
                </div>`,
  },
  {
    id: "bias-in-recommendation-systems",
    title: "Bias in Recommendation Systems",
    authorName: "Vipul Gupta",
    date: "21.01.2023",
    cardBanner: IMAGES.homeBlog_1,
    cardDescription:
      "Modern-day web systems rely on user feedback (such as click activity or ratings) to build ML models to personalize recommendations.",
    firstPositionBanner: IMAGES.biasRoundedBanner,
    longDescription:
      "Modern-day web systems rely on user feedback (such as click activity or ratings) to build ML models to personalize recommendations. Such recommender systems form the core of several popular applications that recommend short videos (Instagram, TikTok, YouTube), timeline feeds (Twitter, Facebook), the next prod...",
    mainBanner: IMAGES.biasSystemBanner,
    tableContent: [
      { title: "Introduction", id: "introduction" },
      {
        title: "User Interaction Adds Bias",
        id: "user-interaction-adds-bias",
        nestedList: [
          { title: "Selection Bias", id: "selection-bias" },
          { title: "Exposure Bias", id: "exposure-bias" },
          { title: "Conformity Bias", id: "conformity-bias" },
          { title: "Position Bias", id: "position-bias" },
        ],
      },
      { title: "Biases Present in Data", id: "biases-present-in-data" },
      {
        title: "How to solve it?",
        id: "how-to-solve-it",
        nestedList: [
          { title: "Propensity Score", id: "propensity-score" },
          { title: "Data Imputation", id: "data-imputation" },
          {
            title: "Modeling Popularity Influence",
            id: "model-popularity-influence",
          },
          { title: "Sampling", id: "sampling" },
          { title: "Click Models", id: "click-models" },
          { title: "Regularization", id: "regularization" },
          { title: "Rebalancing", id: "rebalancing" },
          { title: "Adversarial Learning", id: "adversarial-learning" },
          { title: "Reinforcement Learning", id: "reinforcement-learning" },
        ],
      },
      { title: "Conculsion", id: "Conculsion" },
    ],
    pageData: ` <div>
                <div>
                  <p>
                    Modern-day web systems rely on user feedback (such as click
                    activity or ratings) to build ML models to personalize
                    recommendations. Such recommender systems form the core of
                    several popular applications that recommend short videos
                    (Instagram, TikTok, YouTube), timeline feeds (Twitter,
                    Facebook), the next product to buy (Amazon, Ebay), etc.
                  </p>
                  <h2 id="user-interaction-adds-bias">
                    <b>User Interaction Adds Bias</b>
                  </h2>
                  <p>
                    Recommender systems that rely on users' behavioral data are
                    full of biases. This data, for instance, can be affected by
                    the following factors:
                  </p>

                  <p className="blog-pt" id="selection-bias">
                    <b>1. Selection bias: </b> It arises due to the user’s
                    self-selection behavior. For example, a user might rate a
                    movie they like but rarely rate a movie they dislike.
                    Training on such a dataset is challenging since high ratings
                    account for the majority of observed ratings. These ratings
                    are not a representative sample of all ratings; that is, the
                    rating data is often missing not at random, thus
                    incorporating a selection bias. The following figure from a
                    rating survey highlights this issue, where users tend to
                    only rate items that they like.
                  </p>

                  
                  <img width="400px" src=${IMAGES.biasRatingValues} alt="" />
                  

                  <p className="blog-pt" id="exposure-bias">
                    <b>2. Exposure bias: </b>
                    The user is likely to watch a recommended video, even if it
                    is not the best fit. This action is then taken as positive
                    feedback by the system to recommend similar videos further,
                    resulting in exposure bias in the data.
                  </p>

                  <p className="blog-pt" id="conformity-bias">
                    <b>3. Conformity bias: </b>A user may be influenced by
                    public opinions and might not select their true preferences.
                    This results in conformity bias.
                  </p>

                  <p className="blog-pt" id="position-bias">
                    <b>4. Position bias: </b>
                    The user will likely watch one of the top 5 videos in
                    response to a YouTube search. The bias arising due to the
                    display position of the item is referred to as Position
                    bias.
                  </p>

                  <h2 id="biases-present-in-data">
                    <b>Biases present in data</b>
                  </h2>
                  <p>
                    The above biases are due to user behaviors, but there are
                    biases present in the training data itself, such as the 
                    <b>popularity bias,</b>
                    where some items are more popular than others and hence
                    generate more feedback from users, eventually making
                    recommendations biased towards them.
                  </p>
                  <p>
                    Another bias generally seen in training data is 
                    <b>Unfairness</b>, which is due to the recommender system
                    unfairly discriminating against certain groups of
                    individuals, such as on the basis of gender, race, age,
                    wealth, education level, etc. For example, in the context of
                    job recommendation, it has been found that women see fewer
                    advertisements about high-paying jobs due to gender
                    imbalance in training data.
                  </p>
                  <p>
                    Finally, due to the <b>Feedback Loop</b> in recommender
                    systems, these biases only intensify over time, resulting in
                    a “the rich get richer” effect. This is because a bias in
                    data results in a bias in recommendations, which in turn
                    impacts the exposure and selection of users, causing further
                    biases in the data.
                  </p>

                  <img src=${IMAGES.biasSystemAmplification} width="500" alt="" />

                  <h3>
                    An illustration of how popularity bias can
                    exacerbate through feedback
                  </h3>

                  <p>
                    Feedback loops are detected by measuring the diversity of
                    popularity of items in the system. The popularity of all
                    items generally follows a long-tail distribution, where most
                    of the items are not interacted with at all. In general, the
                    more diversity of outputs of the recommender systems (aka
                    the long-tail distribution has a greater entropy), the less
                    the system suffers from degenerate feedback loops. On the
                    other hand, low scores imply a homogeneous system that
                    suffers from popularity bias.
                  </p>

                  <h2 id="how-to-solve-it">
                    <b>How to solve it?</b>
                  </h2>
                  <p>
                    Due to the above biases, the data observed by a
                    recommendation system used to personalize users’ preferences
                    might deviate from reflecting users’ true preferences.
                  </p>
                  <p>
                    The ubiquity of such systems in modern web companies has
                    resulted in a growing interest in ameliorating bias in
                    recommender systems. The following methods have gained
                    significant interest due to their effectiveness in reducing
                    bias.
                  </p>
                </div>

                <p className="blog-pt" id="propensity-score">
                  <b>1. Propensity Score: </b>
                  Propensity scores can be calculated and fed back into the
                  training loop to reduce bias due to the user's observation of
                  items. The propensity score models the probability of exposure
                  to a specific item. These probabilities are then later used to
                  reweigh the interactions while retraining. For example, if the
                  probability of exposure to an item is high, it can be
                  downweighed during training to reduce the effects of its
                  exposure on the user.
                </p>

                <p className="blog-pt" id="data-imputation">
                  <b>2. Data Imputation: </b>
                  Selection bias happens due to missing data (e.g., users prefer
                  to give high ratings than low ratings). Data imputation can be
                  used to solve for selection bias by imputing the missing
                  entries with pseudo-labels.
                </p>

                <p className="blog-pt" id="model-popularity-influence">
                  <b>3.Modeling Popularity Influence </b>
                  Conformity bias occurs when users are influenced by popular
                  opinion. One way to reduce its effect is to disentangle the
                  effect caused by conformity by leveraging the average
                  popularity of the item and offsetting it from the user’s
                  ratings.
                </p>

                <p className="blog-pt" id="sampling">
                  <b>4. Sampling: </b>
                  Apart from propensity-score based weighing, sampling of items
                  while retraining can be used to address exposure bias. The
                  sampling determines which items to choose, and its
                  distribution can be used as item confidence weights. Thus, it
                  can limit the effect due to exposure by choosing an
                  appropriate sampling distribution.
                </p>

                <p className="blog-pt" id="click-models">
                  <b>5. Click Models: </b>
                  Position bias, where the item is more likely to be interacted
                  with due to its display position, can be mitigated using click
                  models. The idea is to model the generative process of clicks
                  as a variable dependent on both item’s position and relevance.
                  Later, during retraining, the effect of its position can be
                  offset to determine the item's relevance.
                </p>
                <p className="blog-pt" id="regularization">
                  <b>6. Regularization: </b>
                  Regularization can be used to mitigate popularity bias and
                  unfairness in recommender systems. It has been shown that
                  introducing suitable regularization terms can result in more
                  balanced recommendation results.
                </p>

                <p className="blog-pt" id="rebalancing">
                  <b>7. Rebalancing: </b>A simple method to tackle unfairness is
                  to rebalance the training dataset with specific fairness
                  objectives like gender parity. This can be done using
                  re-labeling the positive labels in favor of the minority class
                  or resampling the training data to balance the size of both
                  classes.
                </p>

                <p className="blog-pt" id="adversarial-learning">
                  <b>8. Adversarial Learning: </b>
                  Apart from regularization, adversarial learning can be
                  employed to ameliorate popularity bias and unfairness. The
                  basic idea is to introduce an adversary whose aim is to
                  confuse the recommender by giving a signal to recommend more
                  niche items. Eventually, the adversary learns the implicit
                  association between popular and niche items while the
                  recommender captures niche items that correlate with the
                  user’s history, resulting in more long-tail item
                  recommendations.
                </p>

                <p className="blog-pt" id="reinforcement-learning">
                  <b>9. Reinforcement Learning: </b>
                  Finally, reinforcement learning can counter the loop
                  amplification effect of biases by deploying a more intelligent
                  strategy to balance exploitation and exploration adaptively.
                  However, such methods require the policy to be deployed online
                  to be evaluated.
                </p>

                <img src=${IMAGES.biasSystemEngineerUptrain} alt="" />

                <p className="blog-pt" id="Conculsion">
                  We at UpTrain AI are passionate about solving this problem
                  statement for our users so that they can go on with their day
                  without worrying about the efficacy of their models. So if you
                  are a ML
                </p>
                <p>
                  Practitioner, Data Scientist or Product Lead, we would love to
                  hear from you. Try it out 
                  <a
                    href="https://github.com/uptrain-ai/uptrain"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                     
                    here
                  </a>
                </p>
              </div>`,
  },
  {
    longDescription: "",
    id: "why-do-we-need-to-care-about-retraining",
    title: "Why do we need to care about Retraining?",
    authorName: "Shikha Mohanty",
    date: "14.01.2023",
    cardBanner: IMAGES.homeBlog_2,
    cardDescription:
      "The decay in model performance is generally due to reasons like data drifts, label drifts, and concept drifts. To combat these issues, retraining is critical.",

    firstPositionBanner: IMAGES.retrainingBanner,
    mainBanner: IMAGES.retrainingBanner,
    tableContent: [
      { title: "Introduction", id: "introduction" },
      { title: "What is Model Retraining?", id: "model-retraining" },
      {
        title: "6 Reasons Why ▶ Retraining is Important",
        id: "6-Reasons",
        nestedList: [
          { title: "Data Drift", id: "data-drift" },
          { title: "Concept Drift", id: "concept-drift" },
          { title: "Label Shift", id: "label-shift" },
          { title: "Edge Cases", id: "edge-cases" },
          { title: "Enabling new use cases", id: "enabling-cases" },
        ],
      },
      { title: "Conculsion", id: "conculsion" },
    ],
    pageData: `<div className={classes.dataContainer}>
              <p>
                In our previous blog, we introduced you to the wonderful
                universe of ML and dug deep into the various steps involved in
                building and deploying the model. But there is one very integral
                step that one needs to take to ensure the longevity and
                relevance of the model and that is Model Retraining, which is a
                crucial aspect in the life cycle of a model.
              </p>
              <p>
                Let’s understand this better with an example. IMDb is one of the
                world’s largest movie databases and is a go-to website for many
                of us for movie recommendations (What would we do without it,
                right? XD). Let’s say for better user experience, IMDb wants to
                build a machine learning model which predicts box office outcome
                of a movie before its release based on inputs such as date of
                release, genre, star cast, production house, director, theme,
                editing and effects used, content rating (age group rating),
                music composer, region and budget and it will help predict
                whether the movie will be a box office hit or not. To do this,
                the model is first trained on the movie data of three years, say
                2015 - 2018 and then it was deployed, and voila! It gave
                tremendously accurate results and everyone lived happily ever
                after. Or at least that’s what we all would like to believe,
                right?
              </p>

              <img src=${IMAGES.retrainingBlog}  alt="" />

              <p>
                However, the success of the model is short lived- It was noticed
                that around late 2020, a data shift occurs as audience
                preferences change, which results in the degradation of the
                model. The precision and accuracy rate of the model deteriorates
                and an overall downfall in the performance of the model is
                observed. But why did this happen in the first place? Well, the
                reason is that the data we used to train our model is now
                outdated.
              </p>
              <p>So, what next? Cue, model retraining</p>

              <h2 id="model-retraining">
                <b>But First, Let Me #EXPLAIN What is Model Retraining?</b>
              </h2>
              <p>
                Model retraining is the process of updating the data of any
                deployed model. The updated data is used to retrain the model
                and keep the model up to date. It ensures the accuracy rate and
                precision rate of the model are not compromised, and quality
                service is ensured. However, model retraining doesn't change the
                model's algorithm; it simply means updating the model's dataset
                to get accurate results even after a long time.
              </p>

              <h2 id="6-Reasons">
                <b>6 Reasons Why ▶ Retraining is Important</b>
              </h2>
              <p>
                The decay in model performance is generally due to reasons like
                data drifts, label drifts, and concept drifts. To accommodate
                these changes, retraining is essential. Other reasons include
                the occurrence of unlikely scenarios, the addition of data, or
                an increase in the output labels. Let’s talk about all of these
                one by one:
              </p>

              <p className="blog-pt" id="data-drift">
                <b>1. Data Drift: </b>
                In simple words, a data shift is a change in the
                dataset,overtime, that is initially used to train the model.
                This change in dataset values leads to inaccurate predictions of
                the model. The initial data used to train the data is called
                source distribution, and the data that the model actually works
                on is the target distribution. Coming back to our previous IMDb
                example, the model was trained using data collected in the years
                2015 - 2018 and it is inevitable that trends and preferences
                would have changed significantly since then, which would lead to
                a data shift. Hence, it becomes crucial to collect fresh data
                and update our model accordingly.{" "}
              </p>

              <p className="blog-pt" id="concept-drift">
                <b>2. Concept Drift: </b>
                Concept drift refers to a phenomenon where the relationship
                between the inputs and outputs change over time. In the context
                of our example, say the audience's tastes evolve over time.
                Previously having a big actor was enough to guarantee the
                success of a movie (and since this was a clear pattern in the
                training data, this is also what our model learnt). But now,
                people are giving more preference to storyline as compared to
                actors and as a result, movies with just popular artists but
                weak storylines are now getting flopped. This necessitates a
                need to retrain the model as the underlying relationship between
                the input features and resultant output has changed and the
                model must be retrained to the new reality.{" "}
              </p>

              <p className="blog-pt" id="label-shift">
                <b>3. Label Shift: </b>
                Label shift occurs when the output distribution changes while
                the input distribution and their relationship remains the same.
                These scenarios typically happen when the underlying data
                undergoes a systematic shift. Let’s understand this with our
                movie example. All of us have seen the meteoric rise of OTT
                platforms in recent years. This rise has resulted in a negative
                impact on box office collections as people are now okay to wait
                for the OTT release as compared to spending on movie tickets.
                What it means is that the box office collections have reduced
                across the board. While there might not be any change in which
                movies are becoming a hit, the hit movies may be earning lower
                collections as compared to earlier. Thus, the model needs to be
                retrained to learn the new output distribution.
              </p>

              <p className="blog-pt" id="edge-cases">
                <b>4. Edge Cases: </b>
                Edge cases are the occurrence of rare yet possible scenarios.
                Talking in quantitative terms, if there are events with a 99%
                possibility, then an edge case is the occurrence of an event
                with that rare 1% possibility. Let's talk about our example. In
                this case, let's say we have an actor who only works with big
                production houses, but in a particular case, the script of the
                movie attracts him, and he ends up working with a small local
                production house. Now, this is an edge case for our model.
                Another instance of an edge case is where a less famous actor
                has a big break and ends up working in a high-budget film with a
                very famous director and producer, contrary to his previous
                low-budget movie castings. While we collect the dataset and are
                provisioning our model, we might not consider these cases, but
                if such a case happens, we need to collect such data intently
                and retrain our model to include these cases as well.
              </p>
              <p className="blog-pt" id="enabling-cases">
                <b>5. Enabling new use cases: </b>
                Retraining is triggered in these situations where a new class
                has been added to the output. For instance, previously movies
                were being classified amongst these three categories: Flop,
                Average and Hit. However, a new category needs to be added
                called Blockbuster Hit. So, naturally the model needs to be
                retrained to incorporate this new class.
              </p>
              <p>
                <b>6. Feature change: </b>
                The factors in deciding a certain outcome keeps changing with
                time. Let's say with all the input data earlier described, we
                notice that supporting cast plays a key role in determining
                success of a movie and want to add that also as an input
                feature. This requires us to retrain the model with the new set
                of input features. Adding the data in the dataset will be easy,
                but then model retraining becomes a crucial step.
              </p>

              <img src=${IMAGES.retrainingMlModelBlog} alt="" />

              <p className="blog-pt" id="conculsion">
                The above drifts are some of the most common issues encountered
                by ML practitioners and we at UpTrain AI are building a smart
                and automated pipeline to continuously monitor these issues and
                solve them by retraining models so that they can meaningfully
                impact your business metrics.
                <a
                  href="https://github.com/uptrain-ai/uptrain"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Try out our open-source repo
                </a>
              </p>
            </div>`,
  },
  {
    longDescription: "",
    id: "5-great-statistical-methods-for-data-drift-detection",
    title: "5 Great Statistical Methods For Data Drift Detection",
    authorName: "Shri & Sourabh",
    date: "07.01.2023",
    cardBanner: IMAGES.homeBlog_3,
    cardDescription:
      "As we now know the significance of handling data distribution drifts, the first step of the process is to identify and detect these shifts.",

    firstPositionBanner: IMAGES.driftBanner,
    mainBanner: IMAGES.driftBanner,
    tableContent: [
      {
        title: "Why Do ML Models Fail After Production?",
        id: "why-do-ml-modals-fail-after-production",
      },
      {
        title: "Data Distribution Drifts: Why Should You Handle Them?",
        id: "data-distribution-drift",
      },
      {
        title: "Type Of Drifts",
        id: "types-of-drift",
      },
      {
        title: "Statistical Methods to Detect Data Drifts",
        id: "statistical-methods-to-detect-data-drifts",
        nestedList: [
          {
            title: "Population Stability Index",
            id: "population-stability-index",
          },
          {
            title: "Kullback-Leibler Divergence",
            id: "kullback-leibler-divergence",
          },
          { title: "Jensen- Shannon Distance", id: "jensen-shannon-distance" },
          { title: "Kolmogorov- Smirnov Test", id: "kolmogorov-smirnov-test" },
          { title: "Page-Hinkley Method", id: "page-hinkley-method" },
        ],
      },
      {
        title: "Conclusion- When to use What?",
        id: "conclusion",
      },
    ],
    pageData: `<div className={classes.dataContainer}>
              <h2 id="why-do-ml-modals-fail-after-production">
                <b>- Why Do ML Models Fail After Production?</b>
              </h2>

              <p>
                In today’s transforming digital world, a wide variety of
                businesses leverage AI to perform forecasts on their sales,
                inventory, customer demand fluctuations, or maybe to provide
                recommendations to users while they shop.
              </p>
              <p>
                Consider any particular business scenario, where you have been
                tasked to build and deploy a machine learning model. What comes
                to your mind when we think of any ML project pipeline?
              </p>
              <p>
                Data collection & Processing -> EDA -> Feature
                selection/manipulation -> Model training & Tuning ->
                Model deployed to production
              </p>
              <p>
                However, a very crucial step is skipped in the above pipeline,
                which is “Monitoring post-production”. In most of the cases, the
                failure of ML models after deployment can be attributed to
                either machine failures or degradation in model performance.
                While machine failures occur due overheating or hardware
                shutdown, degradation in model performance is trickier and can
                happen slowly over multiple years as the data distribution
                shifts over time. A model which had accurate and reliable
                performance during the time of deployment can easily become
                unusable if left unchecked and not re-trained periodically.
              </p>

              <h2 id="data-distribution-drift">
                <b>- Data Distribution Drifts : Why Should You Handle Them?</b>
              </h2>

              <img src=${IMAGES.driftModelDeployedBlog} alt="" />

              <p>
                When we train a model on our curated training dataset, the model
                learns the patterns and the distribution of the underlying data.
                We also ensure that the model is able to use these learnings
                accurately on the test data distribution. But, when the model is
                already in production, it comes across real world “unseen” data
                (your wild wild west kind) and this real world data is not
                stationary by any means, i.e, its distribution is continuously
                shifting. This shift is termed as “ Data distribution drifts”.
                These shifts occur due to a variety of factors such as the
                change in everyday dynamics of the global economy, varying
                social norms and cultures across the world.
              </p>
              <p>
                Let’s look at a quick example. Prior to 2022, when people
                searched for “ Elon Musk twitter”, they probably were looking
                for the trending tweets posted by Musk, or his twitter profile.
                But now, people are looking for information on Elon musk’s
                takeover and organizational changes at Twitter. This is an
                example of a shift in the data distribution. A key thing to note
                is that shifts in data do not occur just due to sudden events,
                they also occur in a seasonal and gradual way. The data
                underlying the pricing of retail properties in semi-urban areas
                would shift gradually. The behavior of your users will evolve
                over time as you make product innovations, needs of your users
                evolve over time due to cultural shifts, your competitors change
                their pricing strategies etc. If you don’t handle these drifts
                on time, the model would degrade and may create more loss than
                value.
              </p>

              <h2 id="types-of-drift">
                <b>- Types Of Drifts</b>
              </h2>

              <p>
                The data distribution shifts we come across can be broadly
                grouped into Concept drift and covariate drift.
              </p>
              <p>
                Concept drift : It occurs when the relationship between the
                inputs and target variables changes over time. Consider a model
                built to predict the rent of office spaces in San Francisco
                based on features like location, square footage, furnishing,
                etc. As companies are embracing the remote work culture, work
                from home drastically reduced the need for office buildings and
                the rents (target) went down. Even though the input features
                distribution remains the same, the model would perform poorly.
                This is an example of concept drift.
              </p>
              <p>
                Data drift: Also known as covariate drift, it occurs due to a
                change in the underlying distribution of your input variables.
                Consider a case where you are building a model to predict if a
                new user on your website will be converted to a paid user or
                not. The model is built upon user features such as age,
                location, income, marketing channel, product interactions etc.
                Suppose you launch a marketing campaign which has attracted a
                lot of users with lower income compared to your current
                user-base. Your model is expected to underperform for these new
                set of users as it hasn’t the relationship between the input
                features and purchasing decision for this new set. This is an
                example of covariate drift
              </p>

              <div>
                <h2 id="statistical-methods-to-detect-data-drifts">
                  <b>- Statistical Methods To Detect Data Drifts</b>
                </h2>

                <p>
                  As we now know the significance of handling data distribution
                  drifts, the first step of the process is to identify and
                  detect these shifts. The simplest way of detection is to
                  monitor statistical values like mean, median. But these
                  methods are insufficient for most of the ML use-cases.
                  However, there are many statistical methods, more suited for
                  changes in data distributions which can be used
                </p>

                <div>
                  <p className="blog-pt" id="population-stability-index">
                    <b>a) Population Stability Index(PSI)</b>: It is a metric
                    that measures the shift in population over time between the
                    target (test data) at the deployment time and the target at
                    the current period. The below image shows an example of how
                    the population distribution has changed.
                  </p>

                  <img src=${IMAGES.driftBlog_2} alt="" />

                  <p>
                    How do we quantify this?
                    <br />
                    <br /> We split the population distribution into buckets (
                    10-20 based on the range) . For each bucket, we compute the
                    percentage of old and new data population. Next, we apply
                    the below formula for PSI calculation on each bucket, and
                    sum their values for the final PSI metric.
                  </p>

                  <img src=${IMAGES.driftBlog_3} alt="" />

                  <p>
                    If the above calculated PSI value is less than 0.1, the
                    drift in population is negligible. When the value lies
                    between 0.1-0.2, the drift is moderate. When PSI is higher
                    than 0.2, there is significant drift in the population and
                    we need to handle it. This metric for drift identification
                    is very popular in financial data based ML models.
                  </p>
                </div>

                <div>
                  <p className="blog-pt" id="kullback-leibler-divergence">
                    <b>b) Kullback–Leibler Divergence</b>: The KL divergence is
                    a statistical metric, which measures the difference between
                    probability distribution of old data( testing time) and new
                    data (post-deployment in production). It is represented by
                    “||’. This metric is often referred to as ‘relative entropy’
                    , as it uses the entropy of probability distribution in its
                    calculation.
                  </p>
                  <p>
                    Recall that, for a discrete probability distribution, the
                    entropy is given by the blow formula:
                  </p>

                  <img src=${IMAGES.driftBlog_4} alt="" />

                  <p>
                    This expression is extended to compare the probability
                    distributions of old data (Q) and new data (P) as shown
                    below.
                  </p>

                  <img src=${IMAGES.driftBlog_5} alt="" />

                  <p>
                    Note that KL divergence is asymmetric, you would end up with
                    different results if you swap P and Q.
                  </p>
                  <p>
                    The value of the metric can range from 0 (ideal-case) to
                    infinity. The larger the value, the more is the drift in
                    probability distributions between both datasets.
                  </p>
                </div>

                <div>
                  <p className="blog-pt" id="jensen-shannon-distance">
                    <b>c) Jensen-Shannon Distance</b>: The JSD also measures the
                    difference in probability distributions similar to KL
                    divergence, with two major changes. The JSD metric
                    calculates a normalized score using the KL divergence
                    formula discussed in the previous section, as shown below.
                  </p>

                  <img src=${IMAGES.driftBlog_6} alt="" />

                  <p>
                    Due to the normalizing, the value of the metric is
                    restricted from 0 to 1, which makes interpretation easier
                    for us. Also, this metric is symmetric adding another
                    advantage. When the value is zero, it indicates the
                    distributions are identical and there is no drift. The value
                    of 1 corresponds to maximum drift.
                  </p>
                </div>

                <div>
                  <p className="blog-pt" id="kolmogorov-smirnov-test">
                    <b>c) Kolmogorov-Smirnov Test</b>: The K-S test is different
                    from other tests as it is a non-parametric test. What do we
                    mean by non-parametric tests? They do not make any
                    assumptions on the nature of underlying data distribution.
                  </p>
                  <p>
                    The Kolmogorov-Smirnov test measures the difference/distance
                    between the cumulative probability distributions of the old
                    and new data.
                  </p>

                  <img src=${IMAGES.driftBlog_7} alt="" />

                  <p>
                    As it compares distribution of two data samples and performs
                    null-hypothesis testing it is referred to as ‘two-sample
                    test’. This method is best for implementing numerical data.
                    A limitation of this method is its sensitivity in large
                    datasets.
                  </p>
                </div>

                <div>
                  <p className="blog-pt" id="page-hinkley-method">
                    :<b>e) Page-Hinkley Method</b> It is a commonly used method
                    to detect drift in incoming data and provide warnings to the
                    ML teams. In this method, the mean value is dynamically
                    updated as there is an inflow of new data. At any point when
                    the mean value would exceed the threshold value ( set by the
                    user based on mean observed during deployment), it provides
                    drift detection alarms. In practical usage, this method
                    leverages the CUMSUM control chart to identify shifts.
                  </p>
                  <p>
                    To implement this in python, we can use the river library’s
                    modules. It provides an easy way to control parameters such
                    as no of instances to consider, the threshold value and so
                    on.
                  </p>
                </div>
              </div>

              <div>
                <h2 id="conclusion">
                  <b>- Conclusion : When To Use What?</b>
                </h2>
                <p>
                  Apart from knowing the implementation of these methods, it is
                  essential to understand the best statistical test for
                  different scenarios. The KL divergence does not depend upon
                  the sample size, and is a good fit for large datasets. The
                  Jenson-Shannon distance is more sensitive than the former ,
                  but still stable, reaching a good compromise. It is preferred
                  to use the Kolmogorov-Smirnov test when we have a small sample
                  size and we want to spot sensitive changes. Wasserstein
                  distance is another statistical measure, which is useful to
                  detect drift in higher dimensional spaces like images. Apart
                  from these, there are model-based and time-window distribution
                  based approaches for drift detection. Hope you enjoyed the
                  read!
                </p>

                <img src=${IMAGES.driftBlog_8} alt="" />

                <p>
                  The above mentioned are some of the most commonly used
                  statistical measures that work for more than 90% of ML models.
                  UpTrain is an open-source toolkit which has out-of-the-box
                  implementations for all these measures and provides a single
                  line interface for you to start monitoring drifts in your ML
                  models. Try it out{" "}
                  <a
                    href="https://github.com/uptrain-ai/uptrain"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    here
                  </a>
                </p>
              </div>
            </div>`,
  },
];

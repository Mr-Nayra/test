import { useState, useEffect } from "react";
import Eclipse from "../../../../components/eclipse/Eclipse";
import classes from "./FeatureSection.module.scss";
import CircleImg from "./CircleImg";
import FeatureSectionMobile from "./FeatureSectionMobile";
import { IMAGES } from "../../../../images";

const FeatureSection = () => {
  const [active, setActive] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className={`${classes.root} feature-section`}>
      {width >= 790 ? (
        <div className={classes.row}>
          <div className={` ${classes.leftImg}`}>
            <div className={classes.contentLeft}>
              <div className={classes.circle}>
                <CircleImg
                  size={50}
                  top={"-48%"}
                  right={"32%"}
                  lightShadow={true}
                  opacity={active === 1 ? false : true}
                  onClick={() => setActive(1)}
                  textPosition={true}
                  topPositionHeadingSection={"-48%"}
                  rightPositionHeadingSection={"-138%"}
                  topText="Model"
                  bottomText={"Performance"}
                  featureIcon={IMAGES.grow_graph}
                />
                <CircleImg
                  size={50}
                  top={"-21%"}
                  right={"-50%"}
                  lightShadow={true}
                  opacity={active === 2 ? false : true}
                  onClick={() => setActive(2)}
                  topText={"Data "}
                  bottomText={"Drift"}
                  featureIcon={IMAGES.trade_graph}
                />
                <CircleImg
                  size={50}
                  top={"34%"}
                  right={"-96%"}
                  lightShadow={true}
                  opacity={active === 3 ? false : true}
                  onClick={() => setActive(3)}
                  topText={"Edge-case"}
                  bottomText={"Signals"}
                  featureIcon={IMAGES.search_graph}
                />
                <CircleImg
                  size={50}
                  bottom={"-14%"}
                  right={"-86%"}
                  lightShadow={true}
                  opacity={active === 4 ? false : true}
                  onClick={() => setActive(4)}
                  topText={"Automated"}
                  bottomText={"Refinement"}
                  featureIcon={IMAGES.highlight_graph}
                />
                <CircleImg
                  size={50}
                  bottom={"-49%"}
                  right={"30%"}
                  lightShadow={true}
                  opacity={active === 5 ? false : true}
                  onClick={() => setActive(5)}
                  textPosition={true}
                  rightPositionHeadingSection={"-118%"}
                  bottomPositionHeadingSection={"-26%"}
                  topText={"Seamless"}
                  bottomText={"Integration"}
                  featureIcon={IMAGES.upload_icon}
                />

                <Eclipse
                  size={"8.5558%"}
                  top={"-5%"}
                  right={"-45%"}
                  lightShadow={true}
                  opacity={active === 1 ? false : true}
                  backgroundImageDark={active === 1 ? true : false}
                />

                <Eclipse
                  size={"8.5558%"}
                  top={"11%"}
                  right={"-83%"}
                  lightShadow={true}
                  opacity={active === 2 ? false : true}
                  backgroundImageDark={active === 2 ? true : false}
                />
                <Eclipse
                  size={"8.5558%"}
                  bottom={"-45%"}
                  right={"-96%"}
                  lightShadow={true}
                  opacity={active === 3 ? false : true}
                  backgroundImageDark={active === 3 ? true : false}
                />
                <Eclipse
                  size={"8.5558%"}
                  top={0}
                  right={"-86%"}
                  bottom={"-77%"}
                  lightShadow={true}
                  opacity={active === 4 ? false : true}
                  backgroundImageDark={active === 4 ? true : false}
                />
                <Eclipse
                  size={"8.5558%"}
                  bottom={"-96.5%"}
                  right={"-45%"}
                  lightShadow={true}
                  opacity={active === 5 ? false : true}
                  backgroundImageDark={active === 5 ? true : false}
                />
                <div className={classes.outerCircle}>
                  <div className={classes.innerCircle}>
                    <h2 className={classes.circleText}>
                      UpTrain <br /> Features
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={` ${classes.rightSideCol}`}>
            <div className={classes.content}>
              {active === 1 && (
                <div>
                  <h1 className={classes.heading}>
                    Track Model Performance in Real-time
                  </h1>
                  <p className={classes.description}>
                    UpTrain observes the performance of your model and
                    pin-points (any) dip in model’s accuracy to a specific
                    feature combination
                  </p>
                  <div className={classes.whiteBox}>
                    <div className={classes.blackBox}>
                      <img
                        src={IMAGES.model_performance}
                        alt="model_performance"
                      />
                    </div>
                  </div>
                </div>
              )}
              {active === 2 && (
                <div>
                  <h1 className={classes.heading}>
                    Track Data Distribution Shifts as they happen
                  </h1>
                  <p className={classes.description}>
                    UpTrain compares your production data-points’ distribution
                    against your training dataset and detects
                    out-of-distribution cases
                  </p>
                  <div className={classes.whiteBox}>
                    <div className={classes.blackBox}>
                      <img src={IMAGES.data_drift_img} alt="data_drift_img" />
                    </div>
                  </div>
                </div>
              )}
              {active === 3 && (
                <div>
                  <h1 className={classes.heading}>
                    Define Signals to Collect Edge-cases
                  </h1>
                  <p className={classes.description}>
                    UpTrain allows you to define “Signals” as a way to
                    incorporate your domain-specific knowledge which are used to
                    filter out specific subsets of data which can be used to
                    retrain the model
                  </p>
                  <div className={classes.whiteBox}>
                    <div className={classes.blackBox}>
                      <img
                        src={IMAGES.edge_case_signals_img}
                        alt="edge_case_signals_img"
                      />
                    </div>
                  </div>
                </div>
              )}
              {active === 4 && (
                <div>
                  <h1 className={classes.heading}>
                    Smart and Automated Model Retraining
                  </h1>
                  <p className={classes.description}>
                    With UpTrain, you can attach your existing data annotation,
                    model training, and deployment pipelines to activate a
                    completely automated continuous model improvement cycle
                  </p>
                  <div className={classes.whiteBox}>
                    <div className={classes.blackBox}>
                      <img
                        src={IMAGES.automated_refinement_img}
                        alt="automated_refinement_img"
                      />
                    </div>
                  </div>
                </div>
              )}
              {active === 5 && (
                <div>
                  <h1 className={classes.heading}>
                    Seamless Integration into your existing pipelines
                  </h1>
                  <p className={classes.description}>
                    UpTrain offers seamless integration with all the major ML
                    libraries and MLOps tools, allowing you to get started in{" "}
                    less than 5 minutes
                  </p>
                  <div className={classes.whiteBox}>
                    <div className={classes.blackBox}>
                      <img
                        src={IMAGES.seamless_integration_img}
                        alt="seamless_integration_img"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <FeatureSectionMobile />
      )}
    </div>
  );
};

export default FeatureSection;

import { useState, useEffect } from "react";
import Eclipse from "../../../../components/eclipse/Eclipse";
import ShadowEclipse from "../../../../components/eclipse/ShadowEclipse";
import classes from "./FeatureSection.module.scss";
import CircleImg from "./CircleImg";
import FeatureSectionMobile from "./FeatureSectionMobile";

const FeatureSection = () => {
  const [active, setActive] = useState("secondPosition");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className={classes.root}>
      <ShadowEclipse size={237} bottom={-70} right={-50} />
      <ShadowEclipse size={237} bottom={-100} left={-50} />
      <ShadowEclipse size={192} top={-100} left={160} />
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
                  opacity={active === "firstPosition" ? false : true}
                  onClick={() => setActive("firstPosition")}
                  textPosition={true}
                  topPositionHeadingSection={"-48%"}
                  rightPositionHeadingSection={"-138%"}
                  topText="Model"
                  bottomText={"Performance"}
                />
                <CircleImg
                  size={50}
                  top={"-21%"}
                  right={"-50%"}
                  lightShadow={true}
                  opacity={active === "secondPosition" ? false : true}
                  onClick={() => setActive("secondPosition")}
                  topText={"Data "}
                  bottomText={"Drift"}
                />
                <CircleImg
                  size={50}
                  top={"34%"}
                  right={"-96%"}
                  lightShadow={true}
                  opacity={active === "thirdPosition" ? false : true}
                  onClick={() => setActive("thirdPosition")}
                  topText={"Edge-case"}
                  bottomText={"Signals"}
                />
                <CircleImg
                  size={50}
                  bottom={"-14%"}
                  right={"-86%"}
                  lightShadow={true}
                  opacity={active === "fourthPosition" ? false : true}
                  onClick={() => setActive("fourthPosition")}
                  topText={"Automated"}
                  bottomText={"Refinement"}
                />
                <CircleImg
                  size={50}
                  bottom={"-49%"}
                  right={"30%"}
                  lightShadow={true}
                  opacity={active === "fifthPosition" ? false : true}
                  onClick={() => setActive("fifthPosition")}
                  textPosition={true}
                  rightPositionHeadingSection={"-118%"}
                  bottomPositionHeadingSection={"-26%"}
                  topText={"Seamless"}
                  bottomText={"Integration"}
                />

                <Eclipse
                  size={"8.5558%"}
                  top={"-5%"}
                  right={"-45%"}
                  lightShadow={true}
                  opacity={active === "firstPosition" ? false : true}
                  backgroundImageDark={
                    active === "firstPosition" ? true : false
                  }
                />

                <Eclipse
                  size={"8.5558%"}
                  top={"11%"}
                  right={"-83%"}
                  lightShadow={true}
                  opacity={active === "secondPosition" ? false : true}
                  backgroundImageDark={
                    active === "secondPosition" ? true : false
                  }
                />
                <Eclipse
                  size={"8.5558%"}
                  bottom={"-45%"}
                  right={"-96%"}
                  lightShadow={true}
                  opacity={active === "thirdPosition" ? false : true}
                  backgroundImageDark={
                    active === "thirdPosition" ? true : false
                  }
                />
                <Eclipse
                  size={"8.5558%"}
                  top={0}
                  right={"-86%"}
                  bottom={"-77%"}
                  lightShadow={true}
                  opacity={active === "fourthPosition" ? false : true}
                  backgroundImageDark={
                    active === "fourthPosition" ? true : false
                  }
                />
                <Eclipse
                  size={"8.5558%"}
                  bottom={"-96.5%"}
                  right={"-45%"}
                  lightShadow={true}
                  opacity={active === "fifthPosition" ? false : true}
                  backgroundImageDark={
                    active === "fifthPosition" ? true : false
                  }
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
              {active === "firstPosition" && (
                <div>
                  <h1 className={classes.heading}>
                    Track Model Performance in Real-time
                  </h1>
                  <p className={classes.description}>
                    UpTrain observes the performance of your model and
                    pin-points (any) dip in model’s accuracy to a specific
                    feature combination
                  </p>
                </div>
              )}
              {active === "secondPosition" && (
                <div>
                  <h1 className={classes.heading}>
                    Track Data Distribution Shifts as they happen
                  </h1>
                  <p className={classes.description}>
                    UpTrain compares your production data-points’ distribution
                    against your training dataset and detects
                    out-of-distribution cases
                  </p>
                </div>
              )}
              {active === "thirdPosition" && (
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
                </div>
              )}
              {active === "fourthPosition" && (
                <div>
                  <h1 className={classes.heading}>
                    Smart and Automated Model Retraining
                  </h1>
                  <p className={classes.description}>
                    With UpTrain, you can attach your existing data annotation,
                    model training, and deployment pipelines to activate a
                    completely automated continuous model improvement cycle
                  </p>
                </div>
              )}
              {active === "fifthPosition" && (
                <div>
                  <h1 className={classes.heading}>
                    Seamless Integration into your existing pipelines
                  </h1>
                  <p className={classes.description}>
                    UpTrain offers seamless integration with all the major ML
                    libraries and MLOps tools, allowing you to get started in{" "}
                    less than 5 minutes
                  </p>
                </div>
              )}
              <div className={classes.whiteBox}>
                <div className={classes.blackBox}></div>
              </div>
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

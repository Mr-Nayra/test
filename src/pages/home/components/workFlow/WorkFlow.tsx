import React from "react";
import ShadowEclipse from "../../../../components/eclipse/ShadowEclipse";
import { IMAGES } from "../../../../images";
import classes from "./workFlow.module.scss";

const WorkFlow = () => {
  return (
    <div className={classes.root}>
      <ShadowEclipse size={278} bottom={-180} left={50} />
      <ShadowEclipse size={198} top={-120} left={"30%"} />
      <ShadowEclipse size={237} bottom={120} right={-40} />
      <div>
        <h1 className={classes.heading}>
          How upTrain works and helps you grow
        </h1>
        <div className={classes.row}>
          <div className={classes.col}>
            <div className={classes.card}>
              <div
                className={`${classes.innerCard} ${classes.left_first_card}`}
              >
                <div className={classes.cardImg}>
                  <img src={IMAGES.singleImg} alt="single" />
                </div>
                <p className={classes.darkText}>
                  Custom signals specific to your use-case
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <div
                className={`${classes.innerCard} ${classes.left_second_card}`}
              >
                <div className={classes.cardImg}>
                  <img src={IMAGES.detectImg} alt="single" />
                </div>
                <p className={classes.darkText}>
                  Statistical tools to detect anomalies
                </p>
              </div>
            </div>
            <div className={`${classes.card} ${classes.left_third_card}`}>
              <div className={classes.innerCard}>
                <div className={classes.cardImg}>
                  <img src={IMAGES.dataLogImg} alt="single" />
                </div>
                <h3>Log your data</h3>
              </div>
              <div className={classes.modelRow}>
                <div>
                  <h2 className={classes.lightText}>Any Model</h2>
                  <div className={classes.modelsImgSection}>
                    <div className={classes.modelsImg}>
                      <img src={IMAGES.pyTorch_logo_icon} alt="" />
                    </div>

                    <div
                      className={`${classes.modelsImg} ${classes.marginCenterImg}`}
                    >
                      <img src={IMAGES.scikit_learn_logo} alt="" />
                    </div>
                    <div className={classes.modelsImg}>
                      <img src={IMAGES.tensorflow_logo} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className={classes.lightText}>Any Cloud</h2>
                  <div className={classes.modelsImgSection}>
                    <div className={classes.modelsImg}>
                      <img src={IMAGES.azureLogo} alt="" />
                    </div>
                    <div
                      className={`${classes.modelsImg} ${classes.marginCenterImg}`}
                    >
                      <img src={IMAGES.awsLogo} alt="" />
                    </div>
                    <div className={classes.modelsImg}>
                      <img src={IMAGES.google_cloud} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={classes.feedbackSection}>
                <h2 className={classes.lightText}>Any Type</h2>
                <div className={classes.feedbackImgRow}>
                  <div className={classes.feedbackCol}>
                    <img src={IMAGES.inputLogo} alt="" />
                    <p>Inputs</p>
                  </div>
                  <div className={classes.feedbackCol}>
                    <img src={IMAGES.outputLogo} alt="" />
                    <p>Outputs</p>
                  </div>
                  <div className={classes.feedbackCol}>
                    <img src={IMAGES.feedbackLogo} alt="" />
                    <p>Feedback</p>
                  </div>
                  <div className={classes.feedbackCol}>
                    <img src={IMAGES.checkedLogo} alt="" />
                    <p>Truth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.center_col}>
            <div className={classes.borderGradient}>
              <div className={classes.content}>
                <div className={classes.logoSection}>
                  <img src={IMAGES.logo} alt="logo" className={classes.logo} />
                </div>
                <div>
                  <h1 className={classes.count}>01</h1>
                  <p className={classes.description}>
                    Track degradation in model performance in real-time before
                    it impacts your business
                  </p>
                </div>
                <div>
                  <h1 className={classes.count}>02</h1>
                  <p className={classes.description}>
                    Track degradation in model performance in real-time before
                    it impacts your business
                  </p>
                </div>
                <div>
                  <h1 className={classes.count}>03</h1>
                  <p className={classes.description}>
                    Track degradation in model performance in real-time before
                    it impacts your business
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.right_col}>
            <div className={`${classes.card} ${classes.right_first_card}`}>
              <div className={classes.innerCardRight}>
                <div className={classes.innerCardRightImg}>
                  <img src={IMAGES.dashboardLogo} alt="single" />
                </div>
                <div className={classes.right_content}>
                  <h4 className={classes.darkText}>Dashboards and Alerts</h4>
                  <p className={classes.description_smallCard}>
                    Retraining data to capture edge cases and problematic data
                    points
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${classes.card} ${classes.right_second_card}`}
              style={{ marginTop: "78px" }}
            >
              <div className={classes.innerCardRight}>
                <div className={classes.innerCardRightImg}>
                  <img src={IMAGES.smartLogo} alt="single" />
                </div>
                <div className={classes.right_content}>
                  <h4 className={classes.darkText}>Dashboards and Alerts</h4>
                  <p className={classes.description_smallCard}>
                    Retraining data to capture edge cases and problematic data
                    points
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${classes.improve_model} ${classes.right_third_card}`}
            >
              <div className={classes.card}>
                <p className={classes.darkText} style={{ textAlign: "center" }}>
                  Improved Model
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;

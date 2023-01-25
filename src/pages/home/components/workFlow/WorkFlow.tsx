import React from "react";
import { IMAGES } from "../../../../images";
import classes from "./workFlow.module.scss";

const WorkFlow = () => {
  return (
    <>
      <div className={classes.root}>
        {/* <ShadowEclipse size={278} bottom={-180} left={50} />
      <ShadowEclipse size={198} top={-120} left={"30%"} />
      <ShadowEclipse size={237} bottom={120} right={-40} /> */}
        <div className={classes.transform_work}>
          <h1 className={classes.heading}>
            How UpTrain helps improve your models in production
          </h1>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={`${classes.card} ${classes.left_first_card}`}>
                <div className={classes.innerCardLeft}>
                  <div className={classes.cardImg}>
                    <img src={IMAGES.dataLogImg} alt="single" />
                  </div>
                  <h3>ML model in Production - Running on real-world data</h3>
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
                  <h2 className={classes.lightText}>Log any Data Type</h2>
                  <div className={classes.feedbackImgRow}>
                    <div className={classes.feedbackCol}>
                      <img src={IMAGES.inputLogo} alt="" />
                      <p>Model Inputs</p>
                    </div>
                    <div className={classes.feedbackCol}>
                      <img src={IMAGES.outputLogo} alt="" />
                      <p>Model Outputs</p>
                    </div>
                    <div className={classes.feedbackCol}>
                      <img src={IMAGES.feedbackLogo} alt="" />
                      <p>User Feedback</p>
                    </div>
                    <div className={classes.feedbackCol}>
                      <img src={IMAGES.checkedLogo} alt="" />
                      <p>Ground Truth</p>
                    </div>
                  </div>
                </div>
                {/*  */}
                {/* <div className={classes.arrow_right}>
                  <div className={classes.arrow_mask}></div>
                </div> */}
                {/*  */}
              </div>
            </div>

            <div className={classes.center_col}>
              <div className={classes.borderGradient}>
                <div className={classes.center_content}>
                  <div className={classes.logoSection}>
                    <img
                      src={IMAGES.logo}
                      alt="logo"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.shadowBoxCenterRow}>
                    <div className={`${classes.shadowBoxCenterCol}`}>
                      <div className={classes.shadowBoxCenterImgBox}>
                        <div className={classes.shadowBoxCenterImg}>
                          <img src={IMAGES.singleImg} alt="single" />
                        </div>
                      </div>
                      <p className={classes.centerCardText}>
                        Custom signals specific to your use-case
                      </p>
                    </div>
                    <div className={classes.shadowBoxCenterColBorder}></div>
                    <div className={classes.shadowBoxCenterCol}>
                      <div className={classes.shadowBoxCenterImgBox}>
                        <div className={classes.shadowBoxCenterImg}>
                          <img src={IMAGES.detectImg} alt="single" />
                        </div>
                      </div>
                      <p className={classes.centerCardText}>
                        Statistical tools to detect anomalies
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2
                      className={`${classes.darkText} ${classes.darkTextCenter}`}
                    >
                      to help you
                    </h2>
                  </div>
                  <div className={classes.centerCard}>
                    <div className={classes.shadowBoxCenterImgBox}>
                      <div className={classes.shadowBoxCenterImg}>
                        <img src={IMAGES.down_graph} alt="single" />
                      </div>
                    </div>
                    <p className={classes.centerCardText}>
                      Track degradation in model performance in real-time before
                      it impacts your business
                    </p>
                  </div>
                  <div className={classes.centerCard}>
                    <div className={classes.shadowBoxCenterImgBox}>
                      <div className={classes.shadowBoxCenterImg}>
                        <img src={IMAGES.trade_graph} alt="single" />
                      </div>
                    </div>
                    <p className={classes.centerCardText}>
                      Track data distribution changes due to ever-evolving
                      userbase and prevent model drifts
                    </p>
                  </div>
                  <div className={classes.centerCard}>
                    <div className={classes.shadowBoxCenterImgBox}>
                      <div className={classes.shadowBoxCenterImg}>
                        <img src={IMAGES.search_graph} alt="single" />
                      </div>
                    </div>
                    <p className={classes.centerCardText}>
                      Find outliers with custom rules and retrain on them to
                      boost model accuracy
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
                      Real-time dashboards to monitor your models in production
                      and pro-actively catch model issues
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
                    <h4 className={classes.darkText}>
                      {" "}
                      Smart and Automated Retraining
                    </h4>
                    <p className={classes.description_smallCard}>
                      Balanced retraining dataset comprising of edge cases and
                      problematic data points
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${classes.improve_model} ${classes.right_third_card}`}
              >
                <div className={classes.card}>
                  <p
                    className={classes.darkText}
                    style={{ textAlign: "center" }}
                  >
                    Improved Model
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkFlow;

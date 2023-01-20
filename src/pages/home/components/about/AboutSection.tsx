import { useState } from "react";
import Eclipse from "../../../../components/eclipse/Eclipse";
import ShadowEclipse from "../../../../components/eclipse/ShadowEclipse";
import classes from "./AboutSection.module.scss";
import CircleImg from "./CircleImg";

const AboutSection = () => {
  const [active, setActive] = useState("secondPosition");

  return (
    <div className={classes.root}>
      <ShadowEclipse size={237} bottom={-70} right={-50} />
      <ShadowEclipse size={237} bottom={-100} left={-50} />
      <ShadowEclipse size={192} top={-100} left={160} />
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
                rightPositionHeadingSection={"-73%"}
              />
              <CircleImg
                size={50}
                top={"-21%"}
                right={"-59%"}
                lightShadow={true}
                opacity={active === "secondPosition" ? false : true}
                onClick={() => setActive("secondPosition")}
              />
              <CircleImg
                size={50}
                top={"34%"}
                right={"-82%"}
                lightShadow={true}
                opacity={active === "thirdPosition" ? false : true}
                onClick={() => setActive("thirdPosition")}
              />
              <CircleImg
                size={50}
                bottom={"-19%"}
                right={"-63%"}
                lightShadow={true}
                opacity={active === "fourthPosition" ? false : true}
                onClick={() => setActive("fourthPosition")}
              />
              <CircleImg
                size={50}
                bottom={"-49%"}
                right={"30%"}
                lightShadow={true}
                opacity={active === "fifthPosition" ? false : true}
                onClick={() => setActive("fifthPosition")}
                textPosition={true}
                rightPositionHeadingSection={"-82%"}
                bottomPositionHeadingSection={"-35%"}
              />

              <Eclipse
                size={"8.5558%"}
                top={"-5%"}
                right={"-45%"}
                lightShadow={true}
                opacity={active === "firstPosition" ? false : true}
                backgroundImageDark={active === "firstPosition" ? true : false}
              />

              <Eclipse
                size={"8.5558%"}
                top={"11%"}
                right={"-83%"}
                lightShadow={true}
                opacity={active === "secondPosition" ? false : true}
                backgroundImageDark={active === "secondPosition" ? true : false}
              />
              <Eclipse
                size={"8.5558%"}
                bottom={"-45%"}
                right={"-96%"}
                lightShadow={true}
                opacity={active === "thirdPosition" ? false : true}
                backgroundImageDark={active === "thirdPosition" ? true : false}
              />
              <Eclipse
                size={"8.5558%"}
                top={0}
                right={"-86%"}
                bottom={"-77%"}
                lightShadow={true}
                opacity={active === "fourthPosition" ? false : true}
                backgroundImageDark={active === "fourthPosition" ? true : false}
              />
              <Eclipse
                size={"8.5558%"}
                bottom={"-96.5%"}
                right={"-45%"}
                lightShadow={true}
                opacity={active === "fifthPosition" ? false : true}
                backgroundImageDark={active === "fifthPosition" ? true : false}
              />
              <div className={classes.outerCircle}>
                <div className={classes.innerCircle}>
                  <h2 className={classes.circleText}>
                    Sample <br /> Text
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* <img src={IMAGES.aboutBlockImg} alt="img" width={"100%"} /> */}
        </div>
        <div className={` ${classes.rightSideCol}`}>
          {active === "firstPosition" && (
            <div className={classes.content}>
              <h1 className={classes.heading}>
                The Changed(1) platform designed for ML
              </h1>
              <p className={classes.description}>
                Arize provides production ML analytics and workflows to quickly
                catch model and data issues, diagnose the root cause, and
                continuously improve performance.
              </p>
              <div className={classes.whiteBox}>
                <div className={classes.blackBox}></div>
              </div>
            </div>
          )}
          {active === "secondPosition" && (
            <div className={classes.content}>
              <h1 className={classes.heading}>
                The observability platform designed for ML
              </h1>
              <p className={classes.description}>
                Arize provides production ML analytics and workflows to quickly
                catch model and data issues, diagnose the root cause, and
                continuously improve performance.
              </p>
              <div className={classes.whiteBox}>
                <div className={classes.blackBox}></div>
              </div>
            </div>
          )}
          {active === "thirdPosition" && (
            <div className={classes.content}>
              <h1 className={classes.heading}>
                The observability platform designed for ML
              </h1>
              <p className={classes.description}>
                Arize provides production ML analytics and workflows to quickly
                catch model and data issues, diagnose the root cause, and
                continuously improve performance.
              </p>
              <div className={classes.whiteBox}>
                <div className={classes.blackBox}></div>
              </div>
            </div>
          )}
          {active === "fourthPosition" && (
            <div className={classes.content}>
              <h1 className={classes.heading}>
                The observability platform designed for ML
              </h1>
              <p className={classes.description}>
                Arize provides production ML analytics and workflows to quickly
                catch model and data issues, diagnose the root cause, and
                continuously improve performance.
              </p>
              <div className={classes.whiteBox}>
                <div className={classes.blackBox}></div>
              </div>
            </div>
          )}
          {active === "fifthPosition" && (
            <div className={classes.content}>
              <h1 className={classes.heading}>
                The observability platform designed for ML
              </h1>
              <p className={classes.description}>
                Arize provides production ML analytics and workflows to quickly
                catch model and data issues, diagnose the root cause, and
                continuously improve performance.
              </p>
              <div className={classes.whiteBox}>
                <div className={classes.blackBox}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

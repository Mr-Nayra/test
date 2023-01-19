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
                top={"-45%"}
                right={"-1%"}
                opacity={active === "firstPosition" ? false : true}
                lightShadow={active === "firstPosition" ? true : false}
                onClick={() => setActive("firstPosition")}
              />
              <CircleImg
                size={50}
                top={"-13%"}
                right={"-66%"}
                opacity={active === "secondPosition" ? false : true}
                lightShadow={active === "secondPosition" ? true : false}
                onClick={() => setActive("secondPosition")}
              />
              <CircleImg
                size={50}
                top={"34%"}
                right={"-82%"}
                opacity={true}
                lightShadow={true}
              />
              <CircleImg
                size={50}
                bottom={"-16%"}
                right={"-63%"}
                opacity={true}
                lightShadow={true}
              />
              <CircleImg
                size={50}
                bottom={"-45%"}
                right={"-4%"}
                opacity={true}
                lightShadow={true}
              />

              <Eclipse
                size={17}
                top={-9}
                opacity={active === "firstPosition" ? false : true}
                lightShadow={active === "firstPosition" ? true : false}
                backgroundImageDark={active === "firstPosition" ? true : false}
              />

              <Eclipse
                size={17}
                top={"11%"}
                right={"8%"}
                opacity={active === "secondPosition" ? false : true}
                lightShadow={active === "secondPosition" ? true : false}
                backgroundImageDark={active === "secondPosition" ? true : false}
              />
              <Eclipse
                size={17}
                bottom={0}
                right={"-5%"}
                opacity={true}
                lightShadow={true}
              />
              <Eclipse
                size={17}
                top={0}
                right={"9%"}
                bottom={"11%"}
                opacity={true}
                lightShadow={true}
              />
              <Eclipse
                size={17}
                bottom={-9}
                opacity={true}
                lightShadow={true}
              />
              <div className={classes.outerCircle}>
                <div className={classes.innerCircle}>
                  <h2 className={classes.circleText}>Sample Text</h2>
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
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

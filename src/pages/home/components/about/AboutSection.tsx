import React from "react";
import Eclipse from "../../../../components/eclipse/Eclipse";
import classes from "./AboutSection.module.scss";
import CircleImg from "./CircleImg";

const AboutSection = () => {
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={`${classes.col} ${classes.leftImg}`}>
          <div className={classes.circle}>
            <CircleImg
              size={90}
              top={-115}
              right={1}
              opacity={true}
              lightShadow={true}
            />
            <CircleImg
              size={90}
              bottom={-127}
              right={45}
              opacity={true}
              lightShadow={true}
            />
            <CircleImg size={90} top={-20} right={-150} lightShadow={true} />
            <CircleImg
              size={90}
              top={130}
              right={-195}
              opacity={true}
              lightShadow={true}
            />
            <CircleImg
              size={90}
              bottom={-40}
              right={-135}
              opacity={true}
              lightShadow={true}
            />
            {/*  */}
            <Eclipse size={17} top={-9} opacity={true} lightShadow={true} />
            <Eclipse size={17} bottom={-9} opacity={true} lightShadow={true} />
            <Eclipse
              size={17}
              bottom={33}
              right={46}
              opacity={true}
              lightShadow={true}
            />
            <Eclipse size={17} top={33} right={46} lightShadow={true} />
            <Eclipse
              size={17}
              top={166}
              right={-8}
              opacity={true}
              lightShadow={true}
            />
            <div className={classes.outerCircle}>
              <div className={classes.innerCircle}></div>
            </div>
          </div>
        </div>
        <div className={classes.col}>
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
      </div>
    </div>
  );
};

export default AboutSection;

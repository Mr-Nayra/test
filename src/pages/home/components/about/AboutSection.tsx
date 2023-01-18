import ShadowEclipse from "../../../../components/eclipse/ShadowEclipse";
import { IMAGES } from "../../../../images";
import classes from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <div className={classes.root}>
      <ShadowEclipse size={237} bottom={-70} right={-50} />
      <ShadowEclipse size={237} bottom={-100} left={-50} />
      <ShadowEclipse size={192} top={-100} left={160} />
      <div className={classes.row}>
        <div className={` ${classes.leftImg}`}>
          {/* <div className={classes.circle}>
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
          </div> */}
          <img src={IMAGES.aboutBlockImg} alt="img" width={"100%"} />
        </div>
        <div className={` ${classes.rightSideCol}`}>
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
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import { FeatureSectionMobileData } from "../../../../data/home/FeatureSectionMobileData";
import classes from "./FeatureSectionMobile.module.scss";

const FeatureSectionMobile = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>UpTrain Features</h1>

      {FeatureSectionMobileData.map((item, index) => {
        return (
          <div className={classes.content} key={`${"_" + index}`}>
            <h1 className={classes.heading}>{item.heading}</h1>
            <p className={classes.description}>{item.description}</p>
            <div className={classes.whiteBox}>
              <div className={classes.blackBox}>
                <img src={item.featureImg} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureSectionMobile;

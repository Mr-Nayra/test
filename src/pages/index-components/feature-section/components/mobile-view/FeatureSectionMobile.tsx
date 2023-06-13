import { featureData } from "@/utils/featuresData";
import Image from "next/image";
import classes from "./FeatureSectionMobile.module.scss";

const FeatureSectionMobile = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>UpTrain Features</h1>

      {featureData.map((item, index) => {
        return (
          <div className={classes.content} key={`${"_" + index}`}>
            <h1 className={classes.heading}>{item.heading}</h1>
            <p className={classes.description}>{item.description}</p>
            <div className={classes.whiteBox}>
              <div className={classes.blackBox}>
                <Image
                  src={item.featureImg}
                  alt={item.altText}
                  title={item.titleText}
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureSectionMobile;

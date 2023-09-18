import React from "react";
import { keyFeaturesData } from "@/utils/keyFeaturesData";
import classes from "./keyFeatures.module.scss";
import KeyFeaturesCard from "./keyFeatureCard";

const KeyFeatures = () => {
    return(
        <>
          <div className={classes.root}>
            <h1 className={classes.heading}>Built for developers, by developers</h1>
            <p className={classes.description}>
              Experience the UpTrain, Uncover a World, Accelerate and Elevate Your journey
            </p>

            <div className={classes.row}>
              {keyFeaturesData.map((feature, index) => (
                <div className={classes.col} key={`${"_" + index}`}>
                  <KeyFeaturesCard
                    heading={feature.heading}
                    description={feature.description}
                    keyFeatureImg={feature.featureImg}
                    backgroundImg={feature.backgroundImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
    )
}

export default KeyFeatures;

import React from "react";
import { keyFeaturesData } from "@/utils/keyFeaturesData";
import classes from "./keyFeatures.module.scss";
import KeyFeaturesCard from "./keyFeatureCard";
import Line from "../line/line";

const KeyFeatures = () => {
    return(
        <>
          <div className={classes.root}>
            <h1 className={classes.heading}>Built for developers, by developers</h1>
            <p className={classes.description}>
              Unleash unparalleled power with a single line of code and tailor every detail as per as your use-case
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
          <Line />
        </>
    )
}

export default KeyFeatures;

import React from "react";
import classes from "./keyFeatures.module.scss";
import Image, { StaticImageData } from "next/image";

interface IKeyFeaturesCard {
  heading: string;
  description: string;
  alt: string;
  keyFeatureImg: StaticImageData;
  index: number;
}

const KeyFeaturesCard = (props: IKeyFeaturesCard) => {
  const { heading, description, alt, keyFeatureImg, index } =
    props;

  return (
    <>
      <div
        className={`${classes.card} ${
          index == 0
            ? classes.first
            : index == 1
            ? classes.second
            : classes.third
        }`}
      >
        {/* <Image
          src={backgroundImg}
          alt="background_img"
          className={classes.backgroundImage}
        /> */}
        <div className={classes.text}>
          <div className={classes.keyFeatureImg}>
            <Image
              src={keyFeatureImg}
              alt={alt}
              className={classes.imageKeyFeature}
            />
          </div>
          <div className={classes.cardText}>
            <h2 className={classes.cardHeading}>{heading}</h2>
            <p className={classes.cardDescription}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeaturesCard;

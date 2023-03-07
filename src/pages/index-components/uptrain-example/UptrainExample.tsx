import React from "react";
import UptrainExampleCarousel from "./components/UptrainExampleCarousel";
import classes from "./uptrainExample.module.scss";

const UptrainExample = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Try UpTrain with example</h1>

      <UptrainExampleCarousel />
    </div>
  );
};

export default UptrainExample;

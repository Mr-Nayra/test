import { Button } from "@mantine/core";
import React from "react";
import classes from "./index.module.scss";

const HeroBanner = () => {
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={classes.col}>
          <h1 className={classes.heading}>
            Your <b>Open-source</b> toolkit to <br /> observe and refine{" "}
            <b>ML models</b>
          </h1>
          <p className={classes.description}>
            Continuously observe, understand and improve your ML models with
            upTrain that can be customized to your needs
          </p>
          <div className={classes.btnSection}>
            <Button radius="xl" classNames={{}}>
              Get Started - GitHub{" "}
            </Button>
            <Button radius="xl">Book a Demo </Button>
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes.whiteBox}>
            <div className={classes.blackBox}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

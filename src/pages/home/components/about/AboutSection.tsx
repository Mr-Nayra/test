import { Grid } from "@mantine/core";
import React from "react";
import classes from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <div className={classes.root}>
      <Grid>
        <Grid.Col span={6}>2</Grid.Col>
        <Grid.Col span={6}>
          <div>
            <h2 className={classes.heading}>
              The observability platform designed for ML
            </h2>
            <p className={classes.description}>
              Arize provides production ML analytics and workflows to quickly
              catch model and data issues, diagnose the root cause, and
              continuously improve performance.
            </p>
            <div>
              <div className={classes.whiteBox}>
                <div className={classes.blackBox}></div>
              </div>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default AboutSection;

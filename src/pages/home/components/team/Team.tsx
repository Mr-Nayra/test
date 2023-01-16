import { Grid } from "@mantine/core";
import React from "react";
import classes from "./team.module.scss";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Team</h1>
      <p className={classes.description}>
        Arize provides production ML analytics and workflows to quickly catch
        model and data issues, diagnose the root cause, and continuously improve
        performance.
      </p>
      <div className={classes.bgContainer}></div>

      <Grid className={classes.gridContainer} justify="center" align="center">
        <TeamCard name="Mr. Raghav" designer="UI/UX Designer" />
        <TeamCard name="Mr. Raghav" designer="UI/UX Designer" />
        <TeamCard
          name="Mr. Raghav"
          designer="UI/UX Designer"
          para="Arize provides production ML analytics and workflows to quickly catch model and data issues, diagnose the root cause, and continuously improve performance. Arize provides production ML analytics and workflows to quickly catch model and data issues, diagnose the root cause"
          padding="40px 28px"
        />
      </Grid>
    </div>
  );
};

export default Team;

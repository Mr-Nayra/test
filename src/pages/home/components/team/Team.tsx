import React from "react";
import WhiteCircle from "../../../../components/eclipse/WhiteCircle";
import classes from "./team.module.scss";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className={classes.root}>
      <WhiteCircle size={134} />
      <WhiteCircle size={150} left={-100} bottom={20} />
      <WhiteCircle size={134} right={-80} bottom={80} />
      <WhiteCircle size={134} right={-60} top={10} />
      <h1 className={classes.heading}>Team</h1>
      <p className={classes.description}>
        Arize provides production ML analytics and workflows to quickly catch
        model and data issues, diagnose the root cause, and continuously improve
        performance.
      </p>
      <div className={classes.bgContainer}></div>

      <div className={classes.row}>
        <div className={classes.col}>
          <TeamCard name="Mr. Raghav" memberPost="UI/UX Designer" />
        </div>
        <div className={classes.col}>
          <TeamCard name="Mr. Raghav" memberPost="UI/UX Designer" />
        </div>
        <div className={classes.col}>
          <TeamCard
            name="Mr. Raghav"
            memberPost="UI/UX Designer"
            description="Arize provides production ML analytics and workflows to quickly catch model and data issues, diagnose the root cause, and continuously improve performance. Arize provides production ML analytics and workflows to quickly catch model and data issues, diagnose the root cause"
            padding="40px 28px"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;

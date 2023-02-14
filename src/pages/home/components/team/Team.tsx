import React from "react";
import WhiteCircle from "../../../../components/eclipse/WhiteCircle";
import { TeamMemberData } from "../../../../data/home/TeamMemberData";
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
        UpTrain is built by passionate ML engineers who aim to leverage their
        past experience and democratize the best-in-class ML observability and
        Refinement tooling for the open-source community
      </p>

      <div className={classes.row}>
        {TeamMemberData.map((item, index) => (
          <div className={classes.col} key={`${"_" + index}`}>
            <TeamCard
              name={item.name}
              memberPost={item.memberPost}
              description={item.description}
              memberImg={item.memberImg}
              linkedinLink={item.linkedinLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

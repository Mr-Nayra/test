import { Center, Grid } from "@mantine/core";
import React from "react";
import classes from "./teamCard.module.scss";
import TeamFirstImg from "../../../../images/teamImg/team1.png";
import LinkedinImg from "../../../../images/teamImg/linkedin.png";

interface ITeamCard {
  name: string;
  designer?: string;
  para?: string;
  padding?: string;
  href?: string;
}

const TeamCard = (props: ITeamCard) => {
  const { name, designer, para, padding, href } = props;
  return (
    <Grid.Col span={12} sm={12} md={12} lg={4} xl={4}>
      <div className={classes.root}>
        <Grid justify="center" align="center">
          <Grid.Col span={5}>
            <img src={TeamFirstImg} alt="" className={classes.image} />
          </Grid.Col>
          <Grid.Col span={5}>
            <div className={classes.container}>
              <h2 className={classes.heading}>{name}</h2>
              <p className={classes.designer}>{designer}</p>
              <div>
                <a href={href}>
                  <img src={LinkedinImg} alt="" className={classes.link} />
                </a>
              </div>
            </div>
          </Grid.Col>
        </Grid>
        <p className={classes.para} style={{ padding: padding }}>
          {para}
        </p>
      </div>
    </Grid.Col>
  );
};

export default TeamCard;

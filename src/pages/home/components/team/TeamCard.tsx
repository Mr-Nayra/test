import React from "react";
import classes from "./team.module.scss";
import TeamFirstImg from "../../../../images/teamImg/team1.png";
import LinkedinImg from "../../../../images/teamImg/linkedin.png";

interface ITeamCard {
  name: string;
  memberPost?: string;
  description?: string;
  padding?: string;
  href?: string;
}

const TeamCard = (props: ITeamCard) => {
  const { name, memberPost, description } = props;
  return (
    <>
      <div className={classes.card}>
        <div className={classes.topSection}>
          <div className={classes.cardImg}>
            <img src={TeamFirstImg} alt="" />
          </div>
          <div className={classes.cardHeader}>
            <h2 className={classes.cardHeading}>{name}</h2>
            <p className={classes.memberPost}>{memberPost}</p>
            <a className={classes.socialLink} href="/">
              <img src={LinkedinImg} alt="linden" />
            </a>
          </div>
        </div>
        {description && (
          <p className={classes.cardDescription}>{description}</p>
        )}
      </div>
    </>
  );
};

export default TeamCard;

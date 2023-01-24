import React from "react";
import classes from "./team.module.scss";
import LinkedinImg from "../../../../images/teamImg/linkedin.png";

interface ITeamCard {
  name: string;
  memberPost?: string;
  description?: string;
  linkedinLink: string;
  memberImg: string;
}

const TeamCard = (props: ITeamCard) => {
  const { name, memberPost, description, linkedinLink, memberImg } = props;
  return (
    <>
      <div className={classes.card}>
        <div className={classes.topSection}>
          <div className={classes.cardImg}>
            <img src={memberImg} alt="" className={classes.imageTeam} />
          </div>
          <div className={classes.cardHeader}>
            <h2 className={classes.cardHeading}>{name}</h2>
            <p className={classes.memberPost}>{memberPost}</p>
            <a
              className={classes.socialLink}
              href={linkedinLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinImg} alt="Linkedin-logo" />
            </a>
          </div>
        </div>
        <div className={classes.animationText}>
          <p className={classes.cardDescription}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;

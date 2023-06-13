import React from "react";
import classes from "./team.module.scss";
import LinkedinImg from "./image/linkedin.png";
import Image, { StaticImageData } from "next/image";
import { buttonEvent } from "@/helpers/buttonEvent";

interface ITeamCard {
  name: string;
  memberPost?: string;
  description?: string;
  linkedinLink: string;
  memberImg: StaticImageData;
}

const TeamCard = (props: ITeamCard) => {
  const { name, memberPost, description, linkedinLink, memberImg } = props;
  return (
    <>
      <div
        className={classes.card}
        onClick={() => {
          buttonEvent("Team");
        }}
      >
        <div className={classes.topSection}>
          <div className={classes.cardImg}>
            <Image src={memberImg} alt="" className={classes.imageTeam} />
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
              <Image src={LinkedinImg} alt="Linkedin-logo" />
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

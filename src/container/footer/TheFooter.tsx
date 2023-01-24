import React from "react";
import { IMAGES } from "../../images";
import classes from "./TheFooter.module.scss";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { GrGithub } from "react-icons/gr";

const TheFooter = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>
          <a href="/" className={classes.logo}>
            <img src={IMAGES.footerCompanyLogo} alt="logo" />
          </a>
          <p className={classes.tagLine}>Tag line ML analytics and workflows</p>
        </div>
        <div>
          <ul className={classes.menu}>
            <li>
              <a
                className={classes.item}
                href="https://docs.google.com/forms/d/e/1FAIpQLScGDf-1a8VmwhD63O_Sp9b1MryTh01oZTvC1CkbHIieuaWJ4g/viewform"
                target={"_blank"}
                rel="noreferrer"
              >
                Give Feedback
              </a>
            </li>
            <li>
              <a
                className={classes.item}
                href="https://github.com/uptrain-ai/uptrain/blob/main/LICENSE"
                target={"_blank"}
                rel="noreferrer"
              >
                Open-source License
              </a>
            </li>
            <li>
              <span className={classes.item}>Social Media</span>
              <div className={classes.SocialMedia}>
                <a
                  href=" https://discord.gg/zYXDMktp9P"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src={IMAGES.discordLogo}
                    className={classes.socialIcon}
                    alt=""
                    width={20}
                  />
                </a>
                <a
                  href="https://github.com/uptrain-ai/uptrain"
                  target={"_blank"}
                  rel="noreferrer"
                  className={classes.iconMargin}
                >
                  <GrGithub className={classes.socialIcon} size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/uptrain-ai/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <TiSocialLinkedinCircular
                    className={classes.socialIcon}
                    size={26}
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TheFooter;

import React from "react";
import { IMAGES } from "../../images";
import classes from "./TheFooter.module.scss";
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { GrGithub } from "react-icons/gr";

const TheFooter = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>
          <div className={classes.logo}>
            <img src={IMAGES.logo} alt="logo" />
          </div>
          <p className={classes.tagLine}>Tag line ML analytics and workflows</p>
        </div>
        <div>
          <ul className={classes.menu}>
            <li>
              <a className={classes.item} href="/">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className={classes.item} href="/">
                Terms and Conditions
              </a>
            </li>
            <li>
              <span className={classes.item}>Social Media</span>
              <div className={classes.SocialMedia}>
                <a href="/">
                  <TiSocialTwitterCircular
                    className={classes.socialIcon}
                    size={26}
                  />
                </a>
                <a href="/" className={classes.iconMargin}>
                  <GrGithub className={classes.socialIcon} size={20} />
                </a>
                <a href="/">
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

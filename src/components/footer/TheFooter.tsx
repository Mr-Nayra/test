import React from "react";
import Image from "next/image";
import footerCompanyLogo from "./image/footerLogo.svg";
import discordLogo from "./image/discordLogo.svg";
import isoCertification from "./image/isoCertification.png";
import gdprCertification from "./image/gdprCertification.png";
import classes from "./TheFooter.module.scss";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import Link from "next/link";
import { buttonEvent } from "@/helpers/buttonEvent";

const TheFooter = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.root}>
        <div className={classes.container}>
          <div>
            <Link href="/" className={classes.logo}>
              <Image src={footerCompanyLogo} alt="logo" />
            </Link>
            <p className={classes.tagLine}>
              Your Open-source toolkit to refine ML models
            </p>
            <br />
            <br />
            <br />
            <p className={classes.tagLine}>
              Security & privacy is at the core of what we do
            </p>
            <br />
            <div className={classes.certificationsContainer}>
              <Link href="/" className={classes.certificationLogo}>
                <Image src={isoCertification} alt="ISO Certification" />
              </Link>
              <Link href="/" className={classes.certificationLogo}>
                <Image src={gdprCertification} alt="GDPR Certification" />
              </Link>
            </div>
          </div>
          <div>
            <ul className={classes.menu}>
              <li>
                <a
                  onClick={() => {
                    buttonEvent("Give Feedback");
                  }}
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
                  onClick={() => {
                    buttonEvent("Open-Source License");
                  }}
                  className={classes.item}
                  href="https://github.com/uptrain-ai/uptrain/blob/main/LICENSE"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Open-source License
                </a>
              </li>
              <li>
                <Link
                  onClick={() => {
                    buttonEvent("Terms-and-Conditions");
                  }}
                  className={classes.item}
                  href="/terms-and-conditions"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    buttonEvent("Privacy-Policy");
                  }}
                  className={classes.item}
                  href="/privacy-policy"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    buttonEvent("cookies-policy");
                  }}
                  className={classes.item}
                  href="/cookies-policy"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <span className={classes.item}>Social Media</span>
                <div className={classes.SocialMedia}>
                  <a
                    onClick={() => {
                      buttonEvent("Discord");
                    }}
                    href=" https://discord.gg/zYXDMktp9P"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Image
                      src={discordLogo}
                      className={classes.socialIcon}
                      alt="discord-Logo"
                      width={20}
                      title="discord"
                    />
                  </a>
                  <a
                    onClick={() => {
                      buttonEvent("Twitter");
                    }}
                    href="https://twitter.com/UpTrainAI"
                    target={"_blank"}
                    rel="noreferrer"
                    className={classes.iconMargin}
                  >
                    <TiSocialTwitterCircular
                      className={classes.socialIcon}
                      size={27}
                    />
                  </a>
                  <a
                    onClick={() => {
                      buttonEvent("Linkedin");
                    }}
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
    </div>
  );
};

export default TheFooter;

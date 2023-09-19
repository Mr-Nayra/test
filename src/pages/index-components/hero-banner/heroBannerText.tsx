import React from "react";
import CustomButton from "@/components/button/CustomButton";
import { buttonEvent } from "@/helpers/buttonEvent";
import Image from "next/image";
import classes from "./heroBanner.module.scss";
import combinatorLogo from "./images/combinatorLogo.webp";
import GithubShield from "@/components/github-shield/GithubShield";
import GithubSheildMobile from "@/components/github-shield/GithubShieldMobile";
import Link from "next/link";
import UseDevicesResize from "@/helpers/UseDevicesResize";

const HeroBannerText = () => {
  const { width } = UseDevicesResize();

  return (
    <>
      <div className={classes.heading}>
        Understand quality of
        <br />
        <span className={classes.bgText}>LLM applications</span>
      </div>
      <p className={classes.description}>
        Get scores for factual accuracy, context retrieval quality, tonality,
        and many more
      </p>
      <div className={classes.btnSection}>
        <Link
          onClick={() => {
            buttonEvent("Get Started - Free");
          }}
          href="/dashboard"
          target={"_self"}
          rel="noreferrer"
        >
          <CustomButton
            label="Get Started - Free"
            fontSize={17}
            fontWeight={700}
            responsiveFont={12}
            responsivePx={17}
            responsivePy={12}
            onClick={() => {
              buttonEvent("Get Started - Free");
            }}
          />
        </Link>

        <a
          onClick={() => {
            buttonEvent("Book a demo");
          }}
          href="https://calendly.com/uptrain-sourabh/uptrain-demo"
          target={"_blank"}
          rel="noreferrer"
        >
          <CustomButton
            label="Book Demo | 15 min"
            type="secondary"
            fontSize={17}
            fontWeight={700}
            px={31}
            ml={17}
            responsiveFont={12}
            responsivePx={17}
            responsivePy={12}
            onClick={() => {
              open();
              buttonEvent("Book a demo");
            }}
          />
        </a>
      </div>
    </>
  );
};

export default HeroBannerText;

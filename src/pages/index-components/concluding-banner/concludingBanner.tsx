import React from "react";
import classes from "./concludingBanner.module.scss";
import CustomButton from "@/components/button/CustomButton";

import { buttonEvent } from "@/helpers/buttonEvent";

import Link from "next/link";

const ConcludingBanner = () => {
  return(
    <>
      <div className={classes.root}>
      <div style={{ width: "100%" }}>
        <div className={classes.heading}>
          Are you ready to
          <br />
          <span className={classes.bgText}>accelerate </span>
          <span className={classes.heading}>and </span>
          <span className={classes.bgText}>elevate </span>
          <span className={classes.heading}>your journey?</span>
        </div>
        <p className={classes.description}>
          Demo two line text, demo two line text, demo two line text, Demo two line text, demo two 
        <br />
          line text, demo two line text, Demo two line text.
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
        </div>
      </div>
    </>
  )
}

export default ConcludingBanner;
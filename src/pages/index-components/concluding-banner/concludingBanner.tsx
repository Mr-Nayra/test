import React from "react";
import classes from "./concludingBanner.module.scss";
import CustomButton from "@/components/button/CustomButton";
import { buttonEvent } from "@/helpers/buttonEvent";
import Link from "next/link";
import UseDevicesResize from "@/helpers/UseDevicesResize";

const ConcludingBanner = () => {
  const { width } = UseDevicesResize();

  return (
    <>
      <div className={classes.root}>
        <div style={{ width: "100%" }}>
          <div className={classes.headingContainer}>
            <span className={classes.heading}>Are you ready to</span>
            <br />
            <span className={classes.bgText}>accelerate </span>
            <span className={classes.heading}>and </span>
            <span className={classes.bgText}>elevate </span>
            <span className={classes.heading}>your journey?</span>
          </div>
          <p className={classes.description}>
            You can’t improve what you can’t measure.
            {width > 700 && <br />}
            Use UpTrain to power evaluation of LLM applications and pull ahead
            of competitors.
          </p>
          <div className={classes.btnSection}>
            <Link
              onClick={() => {
                buttonEvent("Get Started - Free");
              }}
              href="https://demo.uptrain.ai/api/login/google/login" // "/dashboard"
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
                  buttonEvent("Book a demo");
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConcludingBanner;

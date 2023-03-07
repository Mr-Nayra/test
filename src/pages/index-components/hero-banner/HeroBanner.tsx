import CustomButton from "@/components/button/CustomButton";
import { buttonEvent } from "@/helpers/buttonEvent";
import Image from "next/image";
import { memo } from "react";
import classes from "./heroBanner.module.scss";
import combinatorLogo from "./images/combinatorLogo.webp";
import Typewriter from "typewriter-effect";

const HeroBanner = () => {
  return (
    <div className={classes.root}>
      <div style={{ width: "100%" }}>
        <div className={classes.row}>
          <div className={`${classes.col} ${classes.textCol}`}>
            <div className={classes.heading}>
              <h1 className={classes.bgText}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.pauseFor(500).deleteAll().start();
                  }}
                  options={{
                    strings: [
                      "Monitor drifts    ",
                      "Analyse embeddings ",
                      "Quantify model bias   ",
                      "Collect edge cases ",
                    ],
                    autoStart: true,
                    loop: true,
                    cursorClassName: classes.cursorClassName,
                  }}
                />
              </h1>
              <br />
              in your{" "}
              <h1 className={classes.bgText}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.pauseFor(500).deleteAll().start();
                  }}
                  options={{
                    strings: [
                      "prediction models ",
                      "language models    ",
                      "recommendation models ",
                      "vision models      ",
                    ],
                    autoStart: true,
                    loop: true,
                    cursorClassName: classes.cursorClassName,
                  }}
                />
              </h1>
            </div>
            <p className={classes.description}>
              Observe and refine AI applications by seamlessly adding custom
              monitors
            </p>
            <div className={classes.btnSection}>
              <a
                onClick={() => {
                  buttonEvent("Get started- GitHub");
                }}
                href="https://github.com/uptrain-ai/uptrain"
                target={"_blank"}
                rel="noreferrer"
              >
                <CustomButton
                  label="Get Started - GitHub"
                  fontSize={17}
                  fontWeight={700}
                  responsiveFont={12}
                  responsivePx={17}
                  responsivePy={12}
                />
              </a>
              <a
                onClick={() => {
                  buttonEvent("Book a demo");
                }}
                href="https://calendly.com/uptrain-sourabh/uptrain-demo"
                target={"_blank"}
                rel="noreferrer"
              >
                <CustomButton
                  label="Book a Demo"
                  type="secondary"
                  fontSize={17}
                  fontWeight={700}
                  px={31}
                  ml={17}
                  responsiveFont={12}
                  responsivePx={17}
                  responsivePy={12}
                />
              </a>
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.whiteBox}>
              <div className={classes.blackBox}>
                <video
                  width="100%"
                  height="100%"
                  autoPlay={true}
                  disablePictureInPicture
                  muted
                  loop
                  playsInline
                  title="How UpTrain works?"
                >
                  <source
                    src="https://uptrain-demo.s3.us-west-1.amazonaws.com/demo_video_small.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.PoweredBySection}>
          <div className={`${classes.BackedBy} ${classes.PoweredByCol}`}>
            <h1 className={classes.PoweredByText}>Backed by</h1>
            <Image className={classes.logo} src={combinatorLogo} alt="logo" />
          </div>
          <div className={` ${classes.PoweredByCol}`}>
            <Image
              className={classes.githubShield}
              src={
                "https://img.shields.io/github/stars/uptrain-ai/uptrain?style=social"
              }
              alt="github"
              style={{ maxHeight: "auto", maxWidth: "100%" }}
              width={20}
              height={20}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroBanner);

import CustomButton from "@/components/button/CustomButton";
import { buttonEvent } from "@/helpers/buttonEvent";
import Image from "next/image";
import { memo } from "react";
import classes from "./heroBanner.module.scss";
import combinatorLogo from "./images/combinatorLogo.webp";
import Typewriter from "typewriter-effect";
import { useDisclosure } from "@mantine/hooks";
import AcceptModal from "@/components/modal/AcceptModal";
import GithubShield from "@/components/github-shield/GithubShield";
import GithubSheildMobile from "@/components/github-shield/GithubShieldMobile";
import UseDevicesResize from "@/helpers/UseDevicesResize";
import Link from "next/link";

const HeroBanner = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { width } = UseDevicesResize();
  return (
    <>
      <div className={classes.root}>
        <div style={{ width: "100%" }}>
          <div className={classes.row}>
            <div className={`${classes.col} ${classes.textCol}`}>
              <div className={classes.heading}>
                Your toolkit to{" "}
                <br />
                <h1 className={classes.bgText}>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.pauseFor(500).deleteAll().start();
                    }}
                    options={{
                      strings: [
                        "prompt-test LLM changes",
                        "validate against incorrect outputs",
                        "monitor hallucinations",
                        "analyse retrieval quality",
                        "run model grading evaluations",
                      ],
                      autoStart: true,
                      loop: true,
                      cursorClassName: classes.cursorClassName,
                    }}
                  />
                </h1>
              </div>
              <p className={classes.description}>
              Ensures your LLM applications are performing reliably by checking on aspects such as correctness, structural integrity, bias, hallucination, etc.
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
                {/* <a
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
                    onClick={() => {
                      buttonEvent("Book a demo");
                    }}
                  />
                </a> */}
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
                    controls
                  >
                    <source
                      src="https://uptrain-assets.s3.ap-south-1.amazonaws.com/videos/llm_experimentation_demo.mp4"
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
            <div className={`${classes.PoweredByCol} ${classes.githubShield}`}>
              {/* If on mobile, show class GithubShieldMobile else GithubShield */}
              { width > 800 ? <GithubShield/> : <GithubSheildMobile/>}
            </div>
          </div>
        </div>
      </div>
      {/* <AcceptModal opened={opened} close={close} /> */}
    </>
  );
};

export default memo(HeroBanner);

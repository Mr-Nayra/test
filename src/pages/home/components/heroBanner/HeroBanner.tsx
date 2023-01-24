import { memo } from "react";
import classes from "./heroBanner.module.scss";
import CustomButton from "../../../../components/button/CustomButton";
import { IMAGES } from "../../../../images";

const HeroBanner = () => {
  return (
    <div className={classes.root}>
      <div style={{ width: "100%" }}>
        <div className={classes.row}>
          <div className={`${classes.col} ${classes.textCol}`}>
            <h1 className={classes.heading}>
              Your <b>Open-source</b> toolkit to <br /> observe and refine{" "}
              <b>ML models</b>
            </h1>
            <p className={classes.description}>
              Define customized dashboards to observe and uncover model issues
              in production
            </p>
            <div className={classes.btnSection}>
              <CustomButton
                label="Get Started - GitHub"
                fontSize={17}
                fontWeight={700}
                responsiveFont={12}
              />
              <CustomButton
                label="Book a Demo"
                type="secondary"
                fontSize={17}
                fontWeight={700}
                px={31}
                ml={17}
                responsiveFont={12}
              />
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.whiteBox}>
              <div className={classes.blackBox}></div>
            </div>
          </div>
        </div>
        <div className={classes.PoweredBySection}>
          <h1 className={classes.PoweredByText}>Backed by</h1>
          <img
            className={classes.logo}
            src={IMAGES.combinatorLogo}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(HeroBanner);

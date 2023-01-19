import { memo } from "react";
import classes from "./heroBanner.module.scss";
import CustomButton from "../../../../components/button/CustomButton";

const HeroBanner = () => {
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={`${classes.col} ${classes.textCol}`}>
          <h1 className={classes.heading}>
            Your <b>Open-source</b> toolkit to <br /> observe and refine{" "}
            <b>ML models</b>
          </h1>
          <p className={classes.description}>
            Continuously observe, understand and improve your ML models with
            upTrain that can be customized to your needs
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
    </div>
  );
};

export default memo(HeroBanner);
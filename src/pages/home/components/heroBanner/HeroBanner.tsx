import { memo } from "react";
import classes from "./heroBanner.module.scss";
import CustomButton from "../../../../components/button/CustomButton";
import Eclipse from "../../../../components/eclipse/Eclipse";

const HeroBanner = () => {
  return (
    <div className={classes.root}>
      <Eclipse size={26} top={30} left={100} />
      <div className={classes.row}>
        <div className={classes.col}>
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
            />
            <CustomButton
              label="Book a Demo"
              type="secondary"
              fontSize={17}
              fontWeight={700}
              px={31}
              ml={17}
            />
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes.whiteBox}>
            <Eclipse size={60} bottom={-80} left={-33} />
            <Eclipse size={30} top={-40} right={0} left={0} />
            <div className={classes.blackBox}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroBanner);

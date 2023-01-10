import { memo } from "react";
import { Button } from "@mantine/core";
import classes from "./heroBanner.module.scss";
import CustomButton from "../../../../components/button/CustomButton";
import Circle from "./Circle";

interface IEclipse {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size: number;
}

const Eclipse = (props: IEclipse) => {
  const { bottom, left, right, top, size } = props;
  console.log("bottom", bottom);

  return (
    <div
      style={{
        position: "absolute",
        top: top ? top : "auto",
        bottom: bottom ? bottom : "auto",
        right: right ? right : "auto",
        left: left ? left : "auto",
      }}
    >
      <Circle size={size} />
    </div>
  );
};

const HeroBanner = () => {
  return (
    <div className={classes.root}>
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
            <div className={classes.blackBox}>
              <Eclipse size={60} bottom={0} />
              <Eclipse size={30} bottom={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroBanner);

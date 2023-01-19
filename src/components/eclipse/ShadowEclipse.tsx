import React from "react";
import { createStyles } from "@mantine/core";
interface Props {
  size: number;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
}
const ShadowEclipse: React.FC<Props> = ({ size, bottom, left, right, top }) => {
  const useStyle = createStyles({
    circleRoot: {
      position: "absolute",
      top: top ? top : "auto",
      bottom: bottom ? bottom : "auto",
      right: right ? right : "auto",
      left: left ? left : "auto",
      zIndex: 99,
    },
    innerCircle: {
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundImage:
        "linear-gradient(135.85deg, #6274E7 11.98%, #8752A3 87.62%)",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      filter: "blur(45px)",
    },
    whiteShadow: {
      width: size - 60,
      height: size - 60,
      borderRadius: "50%",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const { classes } = useStyle();
  return (
    <div className={classes.circleRoot}>
      <div className={classes.innerCircle}>
        <div className={classes.whiteShadow}></div>
      </div>
    </div>
  );
};

export default React.memo(ShadowEclipse);

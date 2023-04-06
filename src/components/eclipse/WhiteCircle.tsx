import React from "react";
import { createStyles } from "@mantine/core";
interface Props {
  size: number;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
}
const WhiteCircle: React.FC<Props> = ({ size, bottom, left, right, top }) => {
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
      backgroundColor: "transparent",
      boxShadow:
        "inset 6px 6px 12px rgba(169, 177, 231, 0.25), inset -6px -6px 12px #0E0E0E",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "@media(max-width:450px)": {
        width: size - 20,
        height: size - 20,
      },
    },
  });
  const { classes } = useStyle();
  return (
    <div className={classes.circleRoot}>
      <div className={classes.innerCircle}></div>
    </div>
  );
};

export default React.memo(WhiteCircle);

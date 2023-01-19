import React from "react";
import { createStyles } from "@mantine/core";
interface Props {
  size: number;
  opacity?: boolean;
  lightShadow?: boolean;
}
const Circle: React.FC<Props> = ({
  size,
  opacity = false,
  lightShadow = false,
}) => {
  const calcSize = `calc(${size} * (100vw - 300px) / 1000)`;
  const useStyle = createStyles({
    root: {
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundImage: true
        ? "linear-gradient(135.85deg, #AEB6F2 11.98%, #BFA7D3 87.62%)"
        : "linear-gradient(135.85deg, #6274E7 11.98%, #8752A3 87.62%)",
      opacity: opacity === true ? 0.4 : 1,
      boxShadow:
        lightShadow === true
          ? "1px 3px 3px rgba(0, 0, 0, 0.25)"
          : "inset 2px 2px 4px rgba(255, 255, 255, 0.88)",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    },
    innerCircle: {
      backgroundColor: "#ebe8f7",
      width: "50%",
      height: "50%",
      borderRadius: "50%",
    },
  });
  const { classes } = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.innerCircle} />
    </div>
  );
};

export default React.memo(Circle);

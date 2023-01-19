import { createStyles } from "@mantine/core";
import React from "react";
import { IMAGES } from "../../../../images";

interface IEclipse {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  size: number;
  opacity?: boolean;
  lightShadow?: boolean;
  onClick?: () => void;
}

const CircleImg = (props: IEclipse) => {
  const { bottom, left, right, top, size, opacity, lightShadow, onClick } =
    props;
  const calcSize = `calc(${size + 15} * (100vw - 300px) / 1000)`;
  const useStyle = createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    heading: {
      fontSize: `calc(3px + 15 * (100vw - 300px) / 1000)`,
      fontWeight: 500,
      margin: "0px",
      paddingLeft: "10px",
      color: "#7C00BD",
      opacity: opacity === true ? 0.4 : 1,
    },
    circle: {
      width: calcSize,
      height: calcSize,
      borderRadius: "100%",
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      border: "1px dashed #FDFDFD",
    },
    outerCircle: {
      width: "80%",
      height: "80%",
      borderRadius: "50%",
      backgroundImage:
        "linear-gradient(135.85deg, #6274E7 11.98%, #8752A3 87.62%)",
      opacity: opacity === true ? 0.4 : 1,
      boxShadow:
        lightShadow === true
          ? "1px 3px 3px rgba(0, 0, 0, 0.25)"
          : "inset 5px 5px 10px rgba(255, 255, 255, 0.8)",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    },
    innerCircle: {
      background: "#fff",
      width: "80%",
      height: "80%",
      borderRadius: "50%",
    },
    graphImg: {
      width: "100%",
      padding: "25%",
    },
  });
  const { classes } = useStyle();
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
      <div className={classes.root} onClick={onClick}>
        <div className={classes.circle}>
          <div className={classes.outerCircle}>
            <div className={classes.innerCircle}>
              <img
                className={classes.graphImg}
                src={IMAGES.graph_growth_about}
                alt=""
                width={"100%"}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className={classes.heading}>
            Sample <br /> Text
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CircleImg;

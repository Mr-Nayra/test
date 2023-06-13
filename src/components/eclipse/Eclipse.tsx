import { memo } from "react";
import Circle from "./Circle";

interface IEclipse {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  size: number | string;
  opacity?: boolean;
  lightShadow?: boolean;
  backgroundImageDark?: boolean;
  darkTheme?: boolean;
}

const Eclipse = (props: IEclipse) => {
  const {
    bottom,
    left,
    right,
    top,
    size,
    opacity,
    lightShadow,
    backgroundImageDark,
    darkTheme = false,
  } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: top ? top : "auto",
        bottom: bottom ? bottom : "auto",
        right: right ? right : "auto",
        left: left ? left : "auto",
        width: "100%",
        height: "100%",
      }}
    >
      <Circle
        size={size}
        opacity={opacity}
        lightShadow={lightShadow}
        backgroundImageDark={backgroundImageDark}
        darkTheme={darkTheme}
      />
    </div>
  );
};

export default memo(Eclipse);

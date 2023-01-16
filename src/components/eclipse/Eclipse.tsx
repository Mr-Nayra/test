import { memo } from "react";
import Circle from "./Circle";

interface IEclipse {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size: number;
  opacity?: boolean;
  lightShadow?: boolean;
}

const Eclipse = (props: IEclipse) => {
  const { bottom, left, right, top, size, opacity, lightShadow } = props;
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
      <Circle size={size} opacity={opacity} lightShadow={lightShadow} />
    </div>
  );
};

export default memo(Eclipse);

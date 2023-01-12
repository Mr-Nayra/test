import { memo } from "react";
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

export default memo(Eclipse);

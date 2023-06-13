import React, { memo } from "react";
import eclipse from "./images/fillEllipse.png";
import Image from "next/image";

interface IProps {
  size: number;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
}

const FillEclipse: React.FC<IProps> = ({
  size,
  bottom = "auto",
  left = "auto",
  right = "auto",
  top = "auto",
}) => {
  const style: React.CSSProperties = {
    position: "absolute",
    top: top,
    bottom: bottom,
    right: right,
    left: left,
  };

  return (
    <div>
      <Image
        src={eclipse}
        width={size}
        height={size}
        alt="Eclipse"
        style={style}
      />
    </div>
  );
};

export default memo(FillEclipse);

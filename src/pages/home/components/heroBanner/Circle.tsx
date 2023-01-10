import React from "react";
import { createStyles } from "@mantine/core";
interface Props {
  size: number;
}
const Circle: React.FC<Props> = ({ size }) => {
  const useStyle = createStyles({
    root: {
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundImage:
        "linear-gradient(135.85deg, #6274E7 11.98%, #8752A3 87.62%)",
      opacity: 0.4,
      boxShadow: "1px 3px 3px rgba(0, 0, 0, 0.25)",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    innerCircle: {
      background: "#fff",
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

import React from "react";
import { createStyles } from "@mantine/core";
import { COLORS } from "../../colors";
import { IMAGES } from "../../images";
import WhiteCircle from "../../components/eclipse/WhiteCircle";
const useStyles = createStyles({
  container: {
    backgroundColor: COLORS.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "64px 0px",
    zIndex: 999,
  },
  logo: {
    width: 156,
    marginLeft: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 600,
    margin: 0,
    color: COLORS.black,
  },
});

const PoweredBy = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <WhiteCircle size={285} top={-180} left={-20} />
      <WhiteCircle size={114} top={-50} right={170} />
      <WhiteCircle size={114} bottom={-70} left={100} />
      <WhiteCircle size={189} bottom={-100} right={-20} />
      <div className={classes.content}>
        <h1 className={classes.heading}>Powered By</h1>
        <img className={classes.logo} src={IMAGES.logo} alt="logo" />
      </div>
    </div>
  );
};

export default PoweredBy;

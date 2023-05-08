import { COLORS } from "@/colors";
import { TextInput, createStyles } from "@mantine/core";
import React, { memo } from "react";

const NewsLetter = () => {
  const { classes } = useStyle();
  return (
    <div className={classes.root}>
      <h3 className={classes.tittle}>Subscribe to our newsletter</h3>
      <p className={classes.description}>
        Don&rsquo;t miss out on read articles from UpTrain directly inside your
        inbox.
        <br /> Subscribe to the newsletter now.
      </p>
      <div className={classes.inputContainer}>
        <div className={classes.inputSection}>
          <TextInput
            classNames={{
              root: classes.inputRoot,
              input: classes.input,
            }}
            placeholder="Enter your email address-Subscribe"
          />
          <button className={classes.btn}>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default memo(NewsLetter);

const useStyle = createStyles({
  root: {
    backgroundColor: "#0f172a",
    padding: "2em 1em",
    borderRadius: 8,
    marginTop: 60,
  },
  tittle: {
    color: COLORS.white,
    textAlign: "center",
    margin: "0px",
  },
  description: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 14,
    opacity: 0.5,
  },
  inputContainer: {
    width: "60%",
    margin: "auto",
    marginTop: 20,
    "@media(max-width:1170px)": {
      width: "90%",
    },
  },
  inputSection: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",

    border: "1px solid #fff",
    borderRadius: 5,
  },
  inputRoot: {
    width: "60%",
    "@media(max-width:1170px)": {
      width: "100%",
    },
  },
  input: {
    background: "transparent",
    color: COLORS.white,
    fontSize: 14,
    opacity: 0.5,
    fontWeight: 400,
    border: "0px",
    borderRadius: 0,
  },
  btn: {
    height: "100%",
    minHeight: "36px",
    fontSize: 14,
    padding: "0px 20px",
    fontWeight: 600,
    cursor: "pointer",
    marginLeft: -10,
    border: "0px",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

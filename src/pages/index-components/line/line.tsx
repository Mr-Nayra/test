import React from "react";
import classes from "./line.module.scss";
import Image from "next/image";
import line from "./images/line.webp";

const Line = () => {
  return(
    <>
      <div className={classes.root}>
        <Image src={line} alt="line" className={classes.line} />
      </div>
    </>
  )
}

export default Line;
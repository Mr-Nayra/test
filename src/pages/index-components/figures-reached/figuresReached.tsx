import React from "react";
import classes from "./figuresReached.module.scss";
import Line from "../line/line";

const FiguresReached = () => {

    return(
        <>
          <div className={classes.root}>
            <div className={classes.message}>
                <span className={classes.heading}>&gt;8,00,659 </span><span className={classes.bgText}>responses evaluated</span>
              </div>
          </div>
          <Line />
        </>
    )
}

export default FiguresReached;
import React from "react";
import classes from "./figuresReached.module.scss";

const FiguresReached = () => {

    return(
        <>
          <div className={classes.root}>
            <div className={classes.message}>
                <span className={classes.heading}>&gt;8,00,569 </span><span className={classes.bgText}>responses evaluated</span>
              </div>
          </div>
        </>
    )
}

export default FiguresReached;
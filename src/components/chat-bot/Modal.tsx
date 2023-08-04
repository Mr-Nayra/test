import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div onClick={props.close} className={classes.backdrop}>
      <div className={classes.card}>
        <h2 className={classes.heading}>
          {props.title}: {props.score}
        </h2>
        <p className={classes.parah}>{props.description}</p>
        <h3 className={classes.heading2}>How it works</h3>
        <p className={classes.parah}>{props.explanation}</p>
        <h3 className={classes.heading2}>Example</h3>
        <p className={classes.parah}>{props.example}</p>
      </div>
    </div>
  );
};

export default Modal;

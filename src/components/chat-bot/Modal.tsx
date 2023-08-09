import React from "react";
import classes from "./Modal.module.css";
import DisplayTextWithNewlines from "./DisplayTextWithNewlines";

interface ModalProps {
  close: () => void;
  title: string;
  score: number;
  description: string;
  explanation: string;
  example: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div onClick={props.close} className={classes.backdrop}>
      <div className={classes.card}>
        <h2 className={classes.heading}>
          {props.title}: {props.score}
        </h2>
        <p className={classes.parah}>
          <DisplayTextWithNewlines textWithNewlines={props.description} />  
        </p>
        <h3 className={classes.heading2}>Explanation for score:</h3>
        <p className={classes.parah}>
          <DisplayTextWithNewlines textWithNewlines={props.explanation} />
        </p>
        <h3 className={classes.heading2}>How it works?</h3>
        <p className={classes.parah}>
          <DisplayTextWithNewlines textWithNewlines={props.example} />
        </p>
      </div>
    </div>
  );
};

export default Modal;


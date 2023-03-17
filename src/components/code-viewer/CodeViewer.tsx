import React from "react";
import classes from "./index.module.scss";
interface IProps {
  children: React.ReactNode;
}

const CodeViewer: React.FC<IProps> = ({ children }) => {
  return (
    <div className={classes.root}>
      <pre className={classes.preTag}>{children}</pre>
    </div>
  );
};

export default React.memo(CodeViewer);

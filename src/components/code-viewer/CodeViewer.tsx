import React, { useEffect } from "react";
import classes from "./index.module.scss";
import Prism from "prismjs";
interface IProps {
  children: string;
}

const CodeViewer: React.FC<IProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  return (
    <div className={classes.root}>
      <code
        className="language-js"
        style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
      >
        {children}
      </code>
    </div>
  );
};

export default React.memo(CodeViewer);

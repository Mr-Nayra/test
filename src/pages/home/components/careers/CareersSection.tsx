import { memo } from "react";
import classes from "./careerSection.module.scss";
import CustomButton from "../../../../components/button/CustomButton";

const CareersSection = () => {
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={classes.blackBox}></div>
        </div>
        <div className={classes.col}>
          <h3 className={classes.heading}>we are hiring</h3>
          <p className={classes.description}>
            Arize provides production ML analytics and workflows to quickly
            catch model and data issues, diagnose the root cause, and
            continuously improve performance.
          </p>
          <div className={classes.btnSection}>
            <CustomButton label="View Careers" fontSize={17} fontWeight={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CareersSection);

import { memo } from "react";
import classes from "./careerSection.module.scss";
import CustomButton from "../../../../components/button/CustomButton";

const CareersSection = () => {
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={`${classes.col} ${classes.boxCol}`}>
          <div className={classes.blackBox}></div>
        </div>
        <div className={`${classes.col} ${classes.TextCol}`}>
          <h3 className={classes.heading}>We Are Hiring</h3>
          <p className={classes.description}>
            Arize provides production ML analytics and workflows to quickly
            catch model and data issues, diagnose the root cause, and
            continuously improve performance.
          </p>
          <div className={classes.btnSection}>
            <CustomButton
              label="View Careers"
              fontSize={17}
              fontWeight={700}
              px={64}
              py={12}
              responsiveFont={14}
              responsivePx={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CareersSection);

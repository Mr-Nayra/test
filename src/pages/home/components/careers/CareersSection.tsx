import { memo } from "react";
import classes from "./careerSection.module.scss";
import CustomButton from "../../../../components/button/CustomButton";

const CareersSection = () => {
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={classes.boxCol}>
          <div className={classes.blackBox}></div>
        </div>
        <div className={classes.TextCol}>
          <h3 className={classes.heading}>We Are Hiring</h3>
          <p className={classes.description}>
            We are looking for highly motivated folks to help us build the next
            generation of ML tooling. We are hiring for ML Engineer, Backend
            Engineer, Statistics Ninja, Community Manager and Technical Content
            Writer
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

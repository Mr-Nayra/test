// import { useState } from "react";
// import CustomButton from "../../../../components/button/CustomButton";
import { FeatureSectionMobileData } from "../data/FeatureSectionMobileData";
import classes from "./FeatureSectionMobile.module.scss";

const FeatureSectionMobile = () => {
  // const [active, setActive] = useState("second");
  return (
    <div className={classes.root}>
      {/* <div className={classes.tabbingSection}>
        <span className={classes.tab}>
          <CustomButton
            label="Sample Text 1"
            type={active === "first" ? "primary" : "secondary"}
            fontSize={12}
            fontWeight={500}
            px={16}
            py={8}
            onClick={() => setActive("first")}
          />
        </span>
        <span className={classes.tab}>
          <CustomButton
            label="Sample Text 2"
            fontSize={12}
            fontWeight={500}
            px={16}
            py={8}
            type={active === "second" ? "primary" : "secondary"}
            onClick={() => setActive("second")}
          />
        </span>
        <span className={classes.tab}>
          <CustomButton
            label="Sample Text 3"
            fontSize={12}
            fontWeight={500}
            px={16}
            py={8}
            type={active === "third" ? "primary" : "secondary"}
            onClick={() => setActive("third")}
          />
        </span>
        <span className={classes.tab}>
          <CustomButton
            label="Sample Text 4"
            fontSize={12}
            fontWeight={500}
            px={16}
            py={8}
            type={active === "forth" ? "primary" : "secondary"}
            onClick={() => setActive("forth")}
          />
        </span>
        <span className={classes.tab}>
          <CustomButton
            label="Sample Text 5"
            fontSize={12}
            fontWeight={500}
            px={16}
            py={8}
            type={active === "fifth" ? "primary" : "secondary"}
            onClick={() => setActive("fifth")}
          />
        </span>
      </div> */}
      {/* {active === "first" && (
        <div className={classes.content}>
          <h1 className={classes.heading}>
            1 The observability platform designed for ML
          </h1>
          <p className={classes.description}>
            Arize provides production ML analytics and workflows to quickly
            catch model and data issues, diagnose the root cause, and
            continuously improve performance.
          </p>
          <div className={classes.whiteBox}>
            <div className={classes.blackBox}></div>
          </div>
        </div>
      )}
      {active === "second" && (
        <div className={classes.content}>
          <h1 className={classes.heading}>
            2 The observability platform designed for ML
          </h1>
          <p className={classes.description}>
            Arize provides production ML analytics and workflows to quickly
            catch model and data issues, diagnose the root cause, and
            continuously improve performance.
          </p>
          <div className={classes.whiteBox}>
            <div className={classes.blackBox}></div>
          </div>
        </div>
      )}
      {active === "third" && (
        <div className={classes.content}>
          <h1 className={classes.heading}>
            3 The observability platform designed for ML
          </h1>
          <p className={classes.description}>
            Arize provides production ML analytics and workflows to quickly
            catch model and data issues, diagnose the root cause, and
            continuously improve performance.
          </p>
          <div className={classes.whiteBox}>
            <div className={classes.blackBox}></div>
          </div>
        </div>
      )}
      {active === "forth" && (
        <div className={classes.content}>
          <h1 className={classes.heading}>
            4 The observability platform designed for ML
          </h1>
          <p className={classes.description}>
            Arize provides production ML analytics and workflows to quickly
            catch model and data issues, diagnose the root cause, and
            continuously improve performance.
          </p>
          <div className={classes.whiteBox}>
            <div className={classes.blackBox}></div>
          </div>
        </div>
      )}
      {active === "fifth" && (
        <div className={classes.content}>
          <h1 className={classes.heading}>
            5 The observability platform designed for ML
          </h1>
          <p className={classes.description}>
            Arize provides production ML analytics and workflows to quickly
            catch model and data issues, diagnose the root cause, and
            continuously improve performance.
          </p>
          <div className={classes.whiteBox}>
            <div className={classes.blackBox}></div>
          </div>
        </div>
      )} */}
      <h1 className={classes.title}>UpTrain Features</h1>

      {FeatureSectionMobileData.map((item, index) => {
        return (
          <div className={classes.content} key={`${"_" + index}`}>
            <h1 className={classes.heading}>{item.heading}</h1>
            <p className={classes.description}>{item.description}</p>
            <div className={classes.whiteBox}>
              <div className={classes.blackBox}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureSectionMobile;

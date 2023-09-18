import React from "react";
import { plansSectionData } from "@/utils/plansSectionData";
import classes from "./plansSection.module.scss"
import PlansSectionCard from "./plansSectionCard";

const PlansSection = () => {
  return(
    <>
      <div className={classes.root}>
        <h1 className={classes.heading}>Start for free. Pay as you grow. Switch at any time.</h1>
        <p className={classes.description}>
        No matter how many team members you have - our pricing is simple, transparent and adapts to the size of your company.
        </p>

        <div className={classes.row}>
          {plansSectionData.map((plan, index) => (
            <div className={classes.col} key={`${"_" + index}`}>
              <PlansSectionCard
                backgroundImage={plan.backgroundImage}
                heading={plan.heading}
                targetUser={plan.targetUser}
                charges={plan.charges}
                description={plan.description}
                buttonText={plan.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PlansSection;
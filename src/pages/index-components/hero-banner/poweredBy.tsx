import React from "react";
import classes from "./heroBanner.module.scss";
import Image from "next/image";
import combinatorLogo from "./images/combinatorLogo.webp";
import GithubShield from "@/components/github-shield/GithubShield";
import GithubSheildMobile from "@/components/github-shield/GithubShieldMobile";
import UseDevicesResize from "@/helpers/UseDevicesResize";


const PoweredBy = () => {
  const { width } = UseDevicesResize();

  return(
    <>
     <div className={classes.PoweredBySection}>
              <div className={`${classes.BackedBy} ${classes.PoweredByCol}`}>
                <h1 className={classes.PoweredByText}>Backed by</h1>
                <Image
                  className={classes.logo}
                  src={combinatorLogo}
                  alt="logo"
                />
              </div>
              <div
                className={`${classes.PoweredByCol} ${classes.githubShield}`}
              >
                {/* If on mobile, show class GithubShieldMobile else GithubShield */}
                {width > 800 ? <GithubShield /> : <GithubSheildMobile />}
              </div>
            </div>
    </>
  )

}

export default PoweredBy;
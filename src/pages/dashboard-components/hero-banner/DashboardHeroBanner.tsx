import CustomButton from "@/components/button/CustomButton";
import { buttonEvent } from "@/helpers/buttonEvent";
import Image from "next/image";
import { memo, useState } from "react";
import classes from "./dashboardHeroBanner.module.scss";
import combinatorLogo from "./images/combinatorLogo.webp";
import Typewriter from "typewriter-effect";
import { useDisclosure } from "@mantine/hooks";
import AcceptModal from "@/components/modal/AcceptModal";
import GithubShield from "@/components/github-shield/GithubShield";
import GithubSheildMobile from "@/components/github-shield/GithubShieldMobile";
import UseDevicesResize from "@/helpers/UseDevicesResize";
import { BsAlignBottom } from "react-icons/bs";

const DashboardHeroBanner = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { width } = UseDevicesResize();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [apiKey, setApiKey] = useState("");
  async function checkLogin() {
    const response = await fetch("https://demo.uptrain.ai/api/login/login/status", {
      "credentials" : "include",
    });
    
    if (response.ok) {
      const data = await response.json();
      setLoggedIn(true);
          setUserName(data.user_name);
          if (data.api_key !== null) {
              setApiKey(data.api_key);
          } else {
              setApiKey("None");
          }
      } else {
          console.log('Not logged in');
      }
  }
  checkLogin();

  return (
    <>
      {loggedIn ? (
        <div className={classes.root}>
          <div style={{ width: "100%" }}>
            <div className={classes.row}>
              <div className={`${classes.col} ${classes.textCol}`}>
                <div className={classes.heading}>
                  Welcome, <br />
                  <h1 className={classes.bgText}>{userName}</h1>
                </div>
                <p className={classes.description}>
                  API Key: <strong>{apiKey}</strong> <br />
                  <br />
                  Credits Used: <strong>20</strong> <br />
                  <br />
                  Total Credits: <strong>100</strong> <br />
                  <br />
                </p>
                <div className={classes.btnSection}>
                  <a
                    onClick={() => {
                      buttonEvent("Create API Key");
                      if (apiKey === "None") {
                        fetch("https://demo.uptrain.ai/api/login/api-key/create", {
                          method: "POST",
                          credentials: "include"
                        })
                          .then((response) => {
                            if (response.ok) {
                              return response.json();                                                    ;
                            } else {
                              console.log("Error");
                            }
                          })
                          .then((data) => {
                            setApiKey(data.api_key);
                          })
                          .catch((error) => {
                            console.log("Error:", error);
                          });
                      } else {
                        fetch("https://demo.uptrain.ai/api/login/api-key/revoke", {
                          method: "POST",
                          credentials: "include"
                        })
                          .then((response) => {
                            if (response.ok) {
                              setApiKey("None");
                              return response.json();
                            } else {
                              console.log("Error");
                            }
                          })
                          .then((data) => {
                            console.log(data);
                          })
                          .catch((error) => {
                            console.log("Error:", error);
                          });
                        
                      }
                    }}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <CustomButton
                      label={apiKey=="None" ? "Create API Key" : "Revoke API Key"}
                      fontSize={17}
                      fontWeight={700}
                      responsiveFont={12}
                      responsivePx={17}
                      responsivePy={12}
                    />
                  </a>
                </div>
              </div>
              <div className={classes.col}>
                <div className={classes.whiteBox}>
                  <div className={classes.blackBox}>
                    <video
                      width="100%"
                      height="100%"
                      autoPlay={true}
                      disablePictureInPicture
                      muted
                      loop
                      playsInline
                      title="How UpTrain works?"
                      controls
                    >
                      <source
                        src="https://uptrain-assets.s3.ap-south-1.amazonaws.com/videos/llm_experimentation_demo.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.root}>
          <div style={{ width: "100%" }}>
            <div className={classes.row}>
              <div className={`${classes.col} ${classes.textCol}`}>
                <div className={classes.heading}>
                  <h1 className={classes.bgText}>Monitor Drifts</h1>
                  <br />
                  in your <h1 className={classes.bgText}>prediction models</h1>
                </div>
                <p className={classes.description}>
                  Define customized dashboards to observe and uncover model{" "}
                  <br />
                  issues in production
                </p>
                <div className={classes.PoweredBySection}>
                  <div
                    className={`${classes.BackedBy} ${classes.PoweredByCol}`}
                  >
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
                    {width > 800 ? <GithubShield /> : <GithubSheildMobile />}
                  </div>
                </div>
              </div>
              <div className={classes.col}>
                <div className={classes.whiteBox}>
                  <div className={classes.blackBox}>
                    <a 
                      onClick={() => {
                      buttonEvent("Login with Google");
                    }}
                    href="https://demo.uptrain.ai/api/login/google/login"
                    target={"_self"}
                    rel="noreferrer"
                    >
                    <CustomButton
                      label="Login with Google"
                      fontSize={18}
                      onClick={() => {
                        buttonEvent("Login with Google");
                       }}
                    />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(DashboardHeroBanner);

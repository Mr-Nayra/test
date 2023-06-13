import { Flex } from "@mantine/core";
import React, { Fragment, memo, useEffect, useState } from "react";
import classes from "./index.module.scss";

const CookiesBanner = () => {
  const [cookie, setCookies] = useState<null | string>("true");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCookies(localStorage.getItem("cookies"));
    }
  }, [setCookies]);

  const setItem = (value: string) => {
    localStorage.setItem("cookies", value);
    setCookies(value);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <Fragment>
      {cookie === null ? (
        <div className={classes.root}>
          <p className={classes.heading}>We value your privacy</p>
          <div className={classes.row}>
            <p className={classes.subHeading}>
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              {` "Accept All"`}, you consent to our use of cookies.
            </p>
            <Flex>
              <button
                className={classes.btn}
                onClick={() => {
                  setItem("true");
                }}
              >
                Accept
              </button>
              <button
                className={classes.btn}
                onClick={() => {
                  setItem("false");
                }}
              >
                Reject
              </button>
            </Flex>
          </div>
        </div>
      ) : (
        <div />
      )}
    </Fragment>
  );
};

export default memo(CookiesBanner);

import classes from "./index.module.scss";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import CustomButton from "../button/CustomButton";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import companyLogo from "./images/logo.svg";
import UseDevicesResize from "@/helpers/UseDevicesResize";
import { buttonEvent } from "@/helpers/buttonEvent";

const getNavDisplay = (width: number, show: boolean) => {
  
  if (width > 950) {
    return "block";
  }
  
  if (show) {
    return "block";
  }
  return "none";
};

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(!show);
  const router = useRouter();
  const currentPath = router.pathname;

  const resize = UseDevicesResize();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <div>
            <Link href="/">
              <Image
                className={classes.logo}
                src={companyLogo}
                alt="logo of UpTrain, an open-source LLM evaluation tool, backed by YCombinator"
                style={{ height: "auto" }}
                priority
              />
            </Link>
          </div>
          <div className={classes.menuBar}>
            <button className={classes.menuBtn} onClick={handleClose}>
              <FiMenu className={classes.menuIcon} />
            </button>
          </div>
          <div
            style={{
              display: getNavDisplay(resize.width, show),
            }}
          >
            <ul className={classes.menu}>
              <li>
                <Link
                  className={`${classes.item} ${
                    currentPath === "/" && classes.active
                  } `}
                  href="/"
                  onClick={() => {
                    buttonEvent("Home");
                    handleClose();
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  className={classes.item}
                  href="https://docs.uptrain.ai/"
                  target={"_blank"}
                  rel="noreferrer"
                  onClick={() => {
                    buttonEvent("Docs");
                    handleClose();
                  }}
                >
                  Docs
                </a>
              </li>
              <li>
                <Link
                  className={classes.item}
                  href="#plans-section"
                  rel="noreferrer"
                  scroll={false}
                  onClick={() => {
                    buttonEvent("Pricing");
                    handleClose();
                  }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className={classes.item}
                  href="https://blog.uptrain.ai/"
                  target={"_blank"}
                  rel="noreferrer"
                  onClick={() => {
                    buttonEvent("Blogs");
                    handleClose();
                  }}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className={classes.item}
                  href="https://github.com/uptrain-ai/uptrain"
                  target={"_blank"}
                  rel="noreferrer"
                  onClick={() => {
                    buttonEvent("Github");
                    handleClose();
                  }}
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  className={`${classes.item} ${
                    currentPath === "/dashboard" && classes.active
                  } `}
                  href="https://demo.uptrain.ai/api/login/google/login" // "/dashboard"
                  onClick={() => {
                    buttonEvent("Dashboard");
                    handleClose();
                  }}
                >
                  My Account
                </Link>
              </li>
              <a
                href="https://demo.uptrain.ai/api/login/google/login"
                target={"_blank"}
                rel="noreferrer"
                className={classes.item}
                onClick={() => {
                  buttonEvent("Get Started");
                  handleClose();
                }}
              >
                <CustomButton label="Get Started" type="secondary" px={51} />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

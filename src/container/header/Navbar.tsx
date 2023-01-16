import classes from "./index.module.scss";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IMAGES } from "../../images";
import CustomButton from "../../components/button/CustomButton";
import { COLORS } from "../../colors";

const getNavDisplay = (width: number, show: boolean) => {
  if (width > 950) {
    return "block";
  }

  if (show) {
    return "block";
  }
  return "none";
};

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(!show);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <div>
            <a href="/">
              <img className={classes.logo} src={IMAGES.logo} alt="logo" />
            </a>
          </div>
          <div className={classes.menuBar}>
            <button className={classes.menuBtn} onClick={handleClose}>
              <FiMenu className={classes.menuIcon} />
            </button>
          </div>
          <div
            style={{
              display: getNavDisplay(width, show),
            }}
          >
            <ul className={classes.menu}>
              <li>
                <a
                  className={`${classes.item}`}
                  href="/"
                  style={{ color: COLORS.primary }}
                >
                  Home
                </a>
              </li>
              <li>
                <a className={classes.item} href="/">
                  Docs
                </a>
              </li>

              <li>
                <a className={classes.item} href="/">
                  Career
                </a>
              </li>
              <li>
                <a className={classes.item} href="/">
                  Blogs
                </a>
              </li>
              <li className={classes.item}>
                <CustomButton label="Github" type="primary" px={51} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

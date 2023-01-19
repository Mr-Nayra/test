import classes from "./index.module.scss";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IMAGES } from "../../images";
import CustomButton from "../../components/button/CustomButton";
import { COLORS } from "../../colors";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";

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
        <TopHeader />
        <div className={classes.navbar}>
          <div>
            <Link to="/">
              <img className={classes.logo} src={IMAGES.logo} alt="logo" />
            </Link>
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
                <Link
                  className={`${classes.item}`}
                  to="/"
                  style={{ color: COLORS.primary }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className={classes.item} to="/">
                  Docs
                </Link>
              </li>

              <li>
                <Link className={classes.item} to="/">
                  Career
                </Link>
              </li>
              <li>
                <Link className={classes.item} to="/">
                  Blogs
                </Link>
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

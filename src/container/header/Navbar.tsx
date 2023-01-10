import classes from "./index.module.scss";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IMAGES } from "../../images";

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
          <div className={`${classes.menuBar} `}>
            <button className={classes.menuBtn} onClick={handleClose}>
              <FiMenu className={`${classes.menuIcon} `} />
            </button>
          </div>
          <div
            style={{
              display: width <= 950 ? (show ? "block " : " none") : "block",
            }}
          >
            <ul className={classes.menu}>
              <li>
                <a className={`${classes.item} `} href="/">
                  Home
                </a>
              </li>
              <li>
                <a className={`${classes.item}`} href="/">
                  Docs
                </a>
              </li>

              <li>
                <a className={`${classes.item}`} href="/">
                  Career
                </a>
              </li>
              <li>
                <a className={`${classes.item}`} href="/">
                  Blogs
                </a>
              </li>
              <li>
                <a className={`${classes.item}`} href="/">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

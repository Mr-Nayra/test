import { COLORS } from "@/colors";
import { buttonEvent } from "@/helpers/buttonEvent";
import { createStyles } from "@mantine/core";
const useStyles = createStyles({
  container: {
    backgroundImage: COLORS.primaryGradient,
    textAlign: "center",
    width: "100%",
    position: "sticky",
    zIndex: 99999,
    top: " 0px",
  },
  heading: {
    textAlign: "center",
    margin: "0px",
    color: COLORS.white,
    fontSize: "14px",
    fontWeight: 600,
    padding: 10,
    display: "inline-block",
    textDecoration: "none",
  },
});

const TopHeader = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <a
        href="https://github.com/uptrain-ai/uptrain"
        target={"_blank"}
        rel="noreferrer"
        className={classes.heading}
        onClick={() => {
          console.log("Log -top");

          buttonEvent("star us on Github");
          console.log("Log-botton");
        }}
      >
        ⭐ Star us on Github →
      </a>
    </div>
  );
};

export default TopHeader;

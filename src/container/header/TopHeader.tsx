import { createStyles } from "@mantine/core";
import { COLORS } from "../../colors";
const useStyles = createStyles({
  container: {
    backgroundImage: COLORS.primaryGradient,
    textAlign: "center",
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
      >
        ⭐ Star us on Github →
      </a>
    </div>
  );
};

export default TopHeader;

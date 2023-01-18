import { createStyles } from "@mantine/core";
import { COLORS } from "../../colors";
const useStyles = createStyles({
  container: {
    backgroundImage: COLORS.primaryGradient,
  },
  heading: {
    textAlign: "center",
    margin: "0px",
    color: COLORS.white,
    fontSize: "14px",
    fontWeight: 600,
    padding: 10,
  },
});

const TopHeader = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <p className={classes.heading}>⭐ Star us on Github →</p>
    </div>
  );
};

export default TopHeader;

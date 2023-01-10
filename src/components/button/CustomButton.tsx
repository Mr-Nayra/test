import React from "react";
import { Button } from "@mantine/core";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  root: {},
}));

const CustomButton = () => {
  const { classes } = useStyles();
  return (
    <Button radius="xl" classNames={{ root: classes.root }}>
      Get Started - GitHub
    </Button>
  );
};

export default CustomButton;

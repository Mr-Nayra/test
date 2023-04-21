import React from "react";
import { Modal, createStyles } from "@mantine/core";
import CustomButton from "../button/CustomButton";

interface IAcceptProps {
  opened: boolean;
  close: () => void;
}

const useStyles = createStyles({
  container: {
    background: "#181818",
    border: "1px solid #DFDFDF",
    borderRadius: "26px",
  },
  description: {
    color: " #F3F3F3",
    lineHeight: "24px",
    fontWeight: 400,
    fontSize: "18px",
    marginTop: 0,
  },
});

const AcceptModal = (props: IAcceptProps) => {
  const { classes } = useStyles();
  const { opened, close } = props;
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      classNames={{ modal: classes.container }}
      withCloseButton={false}
    >
      <p className={classes.description}>
        I have read and agree to the Terms and Conditions (put T&C Page link)
      </p>
      <div>
        <a
          href="https://calendly.com/uptrain-sourabh/uptrain-demo"
          target={"_blank"}
          rel="noreferrer"
          onClick={close}
        >
          <CustomButton
            label="Yes, Continue"
            fontSize={16}
            fontWeight={700}
            responsiveFont={12}
            py={6}
            px={24}
          />
        </a>
        <CustomButton
          label="No"
          type="secondary"
          fontSize={17}
          fontWeight={700}
          py={5}
          px={45}
          ml={17}
          responsiveFont={12}
          onClick={close}
        />
      </div>
    </Modal>
  );
};

export default AcceptModal;

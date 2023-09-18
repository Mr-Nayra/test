import React from "react";
import { createStyles } from "@mantine/core";
import { COLORS } from "@/colors";

interface Props {
  label: string;
  onClick?: () => void;
  type?: "primary" | "secondary";
  px?: number;
  py?: number;
  fontSize?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  ml?: number;
  mr?: number;
  responsiveFont?: number;
  responsivePx?: number;
  responsivePy?: number;
  disabled?: boolean;
}

const CustomButton: React.FC<Props> = ({
  label,
  onClick,
  type = "primary",
  fontSize = 16,
  fontWeight = 600,
  px = 19,
  py = 13,
  ml = 0,
  mr = 0,
  responsiveFont,
  responsivePx,
  responsivePy,
  disabled = false,
}) => {
  const useStyles = createStyles({
    container: {
      backgroundImage: COLORS.primaryGradient,
      borderRadius: 24,
      padding: type === "primary" ? 0 : 1,
      display: "inline-block",
      marginRight: mr,
      marginLeft: ml,
    },
    root: {
      backgroundColor:
        type === "primary" ? "transparent" : COLORS.black,
      paddingTop: py,
      paddingBottom: py,
      paddingLeft: px,
      paddingRight: px,
      height: "auto",
      border: type === "primary" ? "1px solid transparent" : COLORS.primaryGradient,
      borderColor: COLORS.primaryGradient,
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: COLORS.white,
      borderRadius: 24,
      cursor: disabled ? "not-allowed" : "pointer",
      "@media(max-width:750px)": {
        fontSize: responsiveFont,
        paddingTop: responsivePy,
        paddingBottom: responsivePy,
        paddingLeft: responsivePx,
        paddingRight: responsivePx,
      },
    },
    label: {
      backgroundImage: type === "primary" ? "none" : COLORS.primaryGradient,
      backgroundClip: type === "primary" ? "none" : "text",
      WebkitTextFillColor: type === "primary" ? "none" : "transparent",
    },
    cardBtn: {
      color: "#7C7C7C",
      padding: "12px 44px",
      cursor: "not-allowed",
      fontSize: "17px",
      fontWeight: 700,
      border: "0px",
      borderRadius: "24px",
    },
  });

  const { classes } = useStyles();
  return (
    <>
      {disabled === true ? (
        <button className={classes.cardBtn}>View More</button>
      ) : (
        <div className={classes.container}>
          <button
            className={classes.root}
            onClick={() => {
              onClick && onClick();
            }}
            disabled={disabled}
          >
            <span className={classes.label}>{label}</span>
          </button>
        </div>
      )}
    </>
  );
};

export default React.memo(CustomButton);

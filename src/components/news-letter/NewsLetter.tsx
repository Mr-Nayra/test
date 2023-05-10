import { COLORS } from "@/colors";
import { CONSTANTS } from "@/constants";
import { Text, TextInput, createStyles } from "@mantine/core";
import { GoogleSpreadsheet } from "google-spreadsheet";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

const NewsLetter = () => {
  const { classes } = useStyle();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: string) => {
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmail(e);
    if (regx.test(e)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const doc = useMemo(
    () => new GoogleSpreadsheet(CONSTANTS.REACT_APP_SHEET_ID),
    []
  );

  const sheetConfig = useCallback(async () => {
    await doc.useServiceAccountAuth({
      client_email: CONSTANTS.REACT_APP_GOOGLE_CLIENT_EMAIL,
      private_key: CONSTANTS.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY,
    });

    await doc.loadInfo();
  }, [doc]);

  useEffect(() => {
    sheetConfig();
  }, [sheetConfig]);

  const onSubmit = async () => {
    setLoading(true);
    try {
      const sheet = doc.sheetsById[0];
      const result = await sheet.addRow({
        email: email,
      });

      if (result) {
        setEmail("");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.tittle}>Subscribe to our newsletter</h3>
      <p className={classes.description}>
        Don&rsquo;t miss out on reading informative articles from UpTrain.
        Subscribe to the newsletter now.
      </p>
      <div className={classes.inputContainer}>
        <div className={classes.inputSection}>
          <TextInput
            classNames={{
              root: classes.inputRoot,
              input: classes.input,
            }}
            value={email}
            placeholder="Enter your email address"
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            disabled={error}
            onClick={() => {
              if (email === "") {
                setError(true);
              } else {
                onSubmit();
              }
            }}
            className={classes.btn}
            style={{ cursor: error ? "no-drop" : "pointer" }}
          >
            {loading ? "Loading..." : "SUBSCRIBE"}
          </button>
        </div>
        {error && (
          <Text color="red" size={12}>
            Enter valid Email
          </Text>
        )}
      </div>
    </div>
  );
};

export default memo(NewsLetter);

const useStyle = createStyles({
  root: {
    backgroundColor: "rgba(15, 23, 42, 1)",
    padding: "4em 1em",
  },
  tittle: {
    color: COLORS.white,
    textAlign: "center",
    margin: "0px",
    fontSize: "1.875rem",
    "@media(max-width:600px)": {
      fontSize: "1.50rem",
    },
  },
  description: {
    color: "rgba(203, 213 ,225,1)",
    textAlign: "center",
    fontSize: "1.25rem",
    opacity: 0.5,
    lineHeight: "1.75rem",
    fontWeight: 500,
    width: "60%",
    margin: "1.25rem auto",
    "@media(max-width:600px)": {
      fontSize: "1rem",
    },
    "@media(max-width:900px)": {
      width: "80%",
    },
    "@media(max-width:450px)": {
      width: "100%",
    },
  },
  inputContainer: {
    width: "60%",
    margin: "auto",
    marginTop: 20,
    "@media(max-width:900px)": {
      width: "80%",
    },
    "@media(max-width:450px)": {
      width: "100%",
    },
  },
  inputSection: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
    border: "1px solid #fff",
    borderRadius: "0.5rem",
  },
  inputRoot: {
    width: "60%",
    "@media(max-width:1170px)": {
      width: "100%",
    },
  },
  input: {
    background: "transparent",
    color: COLORS.white,
    fontSize: "1.125rem",
    opacity: 0.5,
    fontWeight: 400,
    border: "0px",
    borderRadius: 0,
    minHeight: "56px",
    "@media(max-width:600px)": {
      fontSize: "1rem",
    },
  },
  btn: {
    height: "100%",
    minHeight: "56px",
    fontSize: "1rem",
    padding: "0px 20px",
    fontWeight: 700,
    cursor: "pointer",
    marginLeft: -10,
    border: "0px",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    background: "#fff",
    color: "#0c0c0c",
    letterSpacing: "0.025em",
    "@media(max-width:600px)": {
      fontSize: "0.85rem",
      padding: "0px 10px",
    },
    "&:hover": {
      background: "rgb(203 ,213 ,225,1)",
    },
  },
});

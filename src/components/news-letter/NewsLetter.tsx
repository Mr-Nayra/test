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
        Don&rsquo;t miss out on read articles from UpTrain directly inside your
        inbox.
        <br /> Subscribe to the newsletter now.
      </p>
      <div className={classes.inputContainer}>
        <div className={classes.inputSection}>
          <TextInput
            classNames={{
              root: classes.inputRoot,
              input: classes.input,
            }}
            value={email}
            placeholder="Enter your email address-Subscribe"
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
    backgroundColor: "#0f172a",
    padding: "2em 1em",
  },
  tittle: {
    color: COLORS.white,
    textAlign: "center",
    margin: "0px",
  },
  description: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 14,
    opacity: 0.5,
  },
  inputContainer: {
    width: "60%",
    margin: "auto",
    marginTop: 20,
    "@media(max-width:1170px)": {
      width: "90%",
    },
  },
  inputSection: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",

    border: "1px solid #fff",
    borderRadius: 5,
    "@media(max-width:570px)": {
      flexDirection: "column",
    },
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
    fontSize: 14,
    opacity: 0.5,
    fontWeight: 400,
    border: "0px",
    borderRadius: 0,
  },
  btn: {
    height: "100%",
    minHeight: "36px",
    fontSize: 14,
    padding: "0px 20px",
    fontWeight: 600,
    cursor: "pointer",
    marginLeft: -10,
    border: "0px",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    background: "#fff",
    color: "#0c0c0c",
    "@media(max-width:570px)": {
      width: "100%",
      marginLeft: 0,
      borderTopRightRadius: 0,
    },
  },
});

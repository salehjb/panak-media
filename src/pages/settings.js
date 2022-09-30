/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
// packages
import {
  Box,
  Container,
  FormControlLabel,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
// context
import { context } from "../pages/_app";
// functions
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../functions/localStorage";

function settings() {
  const {isDarkTheme, setIsDarkTheme} = useContext(context);

  useEffect(() => {
    setIsDarkTheme(getFromLocalStorage("darkTheme") === "true");
  }, [isDarkTheme]);

  function handleChange(e) {
    setToLocalStorage("darkTheme", e.target.checked);
    setIsDarkTheme(getFromLocalStorage("darkTheme") === "true");
  }

  const theme = useTheme();
  // styles
  const styles = {
    container: {
      backgroundColor: theme.palette.primary.dark,
      borderRadius: theme.shape.borderRadius,
    },
    switchBox: {
      display: "flex",
      alignItems: "center",
    },
    switch: {
      margin: "0 !important",
    },
  };

  return (
    <Container sx={styles.container}>
      <Box sx={styles.switchBox}>
        <Typography>Dark Theme</Typography>
        <FormControlLabel
          sx={styles.switch}
          control={
            <Switch
              onChange={handleChange}
              checked={isDarkTheme}
              color="secondary"
            />
          }
        />
      </Box>
    </Container>
  );
}

export default settings;

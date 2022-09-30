import { createContext, useEffect, useState } from "react";
// styles
import "../styles/globals.scss";
// packages
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../mui/createEmotionCache";
import { createTheme } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";
// components
import Layout from "../components/layouts/Layout";
// functions
import { getFromLocalStorage } from "../functions/localStorage";

const clientSideEmotionCache = createEmotionCache();

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: grey[700],
      main: grey[800],
      dark: grey[900],
      contrastText: "#fff",
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[800],
      contrastText: "#fff",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: grey[100],
      main: grey[200],
      dark: grey[300],
      contrastText: "#000",
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[800],
      contrastText: "#fff",
    },
  },
});

export const context = createContext();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(getFromLocalStorage("darkTheme") === "true");
  }, [])

  const value = {
    isDarkTheme,
    setIsDarkTheme
  }

  return (
    <context.Provider value={value}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </context.Provider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

import "../styles/globals.css";
import React, { useEffect } from "react";

import theme from "../shared/styles/theme";
import mixpanel from "mixpanel-browser";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../config/emotion-cache";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      mixpanel.init("e204686e5d9e588dd5a5144dbeb8ef6b");
      mixpanel.track(`PAGE HIT - ${window.location.pathname}`);
    }
  }, []);
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

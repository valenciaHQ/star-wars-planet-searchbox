/* eslint-disable comma-dangle */
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "#fce915ed",
  secondaryColor: "#000000",
  colors: {
    white: "#FFFFFF",
    green: "#38e821",
  },
  fontSizes: {
    small: "0.8em",
    medium: "1em",
    large: "1.3em",
    xLarge: "2rem",
  },
};

function Theme({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;

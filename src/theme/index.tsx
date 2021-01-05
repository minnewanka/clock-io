import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#0a61f7",
    lightblue: "#EAF3FF",
    green: "#008B58",
    white: "white",
    lightgrey: "#d3d3d3",
    greyblack: "#464555",
    red: "#D03000",
    orange: "#E68616",
  },
  fonts: ["sans-serif", "Roboto"],
};

const Theme: React.FC = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

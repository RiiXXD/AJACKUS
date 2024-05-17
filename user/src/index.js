import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
const colors = {
  backColor: "#1d1a24",
  table: "#121212",
  ctaPurple: "#c4a5fe",
  fontColorGrey: "#e5e4e6",
  headingColorWhite: "#fafafa",
};
const theme = extendTheme({ colors });
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

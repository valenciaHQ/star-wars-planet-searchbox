import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-autocomplete-input/dist/bundle.css";
import AppProvider from "./AppProvider";
import Theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Theme>
        <App />
      </Theme>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

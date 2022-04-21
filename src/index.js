import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ThemeProvider} from "styled-components"
import theme from "./theme";
import {render} from "react-dom"

render (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    ,
    document.querySelector("#root")
  )
ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

import BrowserRouter from "react-router-dom/BrowserRouter";
import Zikr2 from "./passingDataFromChildToParent/Zikr2";
import App from "./App";


ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

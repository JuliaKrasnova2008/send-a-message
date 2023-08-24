import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import Sendsay from "sendsay-api";

// require("isomorphic-fetch"); // Apply the polyfill.

export const sendsay = new Sendsay({
  apiKey:
    "19mL7Mhe4cragE1YGV5wCma8Kz-hfqUKd208lwnKmAsuJ3Nr1nbaP5NLYDK_gp5DA2xhRgO97rw",
});

sendsay
  .request({ action: "sys.settings.get", list: ["about.id"] })
  .then(function (res) {
    console.log(res);
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

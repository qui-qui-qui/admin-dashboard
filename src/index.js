import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvder } from "./contexts/ContextProvider";

ReactDOM.render(
    <ContextProvder>
        <App />
    </ContextProvder>,
    document.getElementById("root")
);

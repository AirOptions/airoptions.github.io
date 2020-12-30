import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import {Router} from 'react-router'
import App from "./src/App";

import ReactGA from 'react-ga';

ReactGA.initialize('G-8PZT7GXKPD');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
<App />, document.getElementById("root")
);

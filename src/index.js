import React from "react";
import ReactDOM from 'react-dom'
import App from "./App";
//px转rem
import "lib-flexible";
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App/></BrowserRouter> ,document.getElementById('root'))
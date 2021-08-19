import "./index.css";

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/index";
import About from "./pages/about";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

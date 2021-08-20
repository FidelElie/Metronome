import "./index.css";

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// ! Pages
import Home from "./pages/index";
import About from "./pages/about";
import Page404 from "./pages/404";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </HelmetProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

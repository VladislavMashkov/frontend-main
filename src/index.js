
import MainPage from "./components/MainPage.jsx";
import AdsPage from "./components/AdsPage.jsx";
import NewsPage from "./components/NewsPage.jsx";
import "./styles/mainPage.css";

import "./styles/App.css";


import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

class App extends Component {
  render() {
    return (

      <Router history={history}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/ads" component={AdsPage} />
          <Route exact path="/news" component={NewsPage} />
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

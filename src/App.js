// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ProductItem from './components/product/ProductItem';
import Home from "./containers/Home";
import Register from "./containers/Register";
import Page_1 from "./containers/Page_1";
import NotFound from "./containers/error/NotFound";
import ProfilePage from "../src/components/monitor/profilepage.js";
import SubjectPage from "../src/components/monitor/subjectpage.js";
localStorage.setItem("loggedIn", "false"); // Set loggedIn to true in localStor
class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/page1" component={Page_1} />
        <Route exact path="/page2" component={ProfilePage} />
        <Route exact path="/page3" component={SubjectPage} />
        <Route component={NotFound} />
      </Switch>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}

export default App;

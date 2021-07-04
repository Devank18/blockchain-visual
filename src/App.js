import "./Styles/main.css";
import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./Views/Home";

export default class App extends React.Component {
  render() {
    return (
      <div className="">
        <HashRouter basename="/">
          <Route path="/" exact component={Home} />
        </HashRouter>
      </div>
    )
  }
}